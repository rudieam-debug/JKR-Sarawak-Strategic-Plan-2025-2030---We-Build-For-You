import React, { useState, useEffect, useMemo } from 'react';
import { 
  X, 
  Save, 
  AlertCircle, 
  PlusCircle, 
  Edit, 
  Trash2, 
  User, 
  Calendar, 
  ClipboardList, 
  Link, 
  CheckSquare, 
  Square,
  FileText,
  Target,
  ShieldAlert,
  Coins,
  Layers,
  Info,
  Users,
  // Add missing 'Building' icon import
  Building
} from 'lucide-react';
import type { Initiative, ProgressUpdate, KPI } from '../types';
import { kpis as allKpis, strategicThrusts } from '../assets/strategicData';

interface UpdateInitiativeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (initiativeId: string, updates: Partial<Initiative>) => void;
  initiative: Initiative | null;
  initiatives: Initiative[];
}

// Helper: DD/MM/YYYY -> YYYY-MM-DD (for input value)
const parseDisplayDate = (dateString: string): string => {
  if (!dateString) return '';
  const [day, month, year] = dateString.split('/');
  if (!day || !month || !year) return '';
  return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
};

// Helper: YYYY-MM-DD -> DD/MM/YYYY (for display)
const formatDateForDisplay = (isoDate: string): string => {
  if (!isoDate) return '';
  const [year, month, day] = isoDate.split('-');
  if (!day || !month || !year) return '';
  return `${day}/${month}/${year}`;
};

export const UpdateInitiativeModal: React.FC<UpdateInitiativeModalProps> = ({ isOpen, onClose, onSave, initiative, initiatives }) => {
  const [editableInitiative, setEditableInitiative] = useState<Initiative | null>(null);
  const [editingHistoryIndex, setEditingHistoryIndex] = useState<number | null>(null);
  const [tempHistoryItem, setTempHistoryItem] = useState<ProgressUpdate | null>(null);
  const [activeTab, setActiveTab] = useState<'details' | 'strategy' | 'execution'>('details');

  const [error, setError] = useState('');
  const [dateError, setDateError] = useState('');

  const uniqueBranches = useMemo(() => {
    const branches = new Set(initiatives.map(i => i.responsibleBranch).filter(Boolean) as string[]);
    return Array.from(branches).sort();
  }, [initiatives]);

  useEffect(() => {
    if (initiative && isOpen) {
      const newInitiative = JSON.parse(JSON.stringify(initiative));
      if (newInitiative.progressHistory) {
        newInitiative.progressHistory.sort((a: ProgressUpdate, b: ProgressUpdate) => new Date(b.date).getTime() - new Date(a.date).getTime());
      }
      if (!newInitiative.linkedKpiIds) newInitiative.linkedKpiIds = [];
      
      setEditableInitiative(newInitiative);
      setError('');
      setDateError('');
      setEditingHistoryIndex(null);
    }
  }, [initiative, isOpen]);

  if (!isOpen || !editableInitiative) return null;
  
  const syncMainProgress = (history: ProgressUpdate[] | undefined): number => {
    if (history && history.length > 0) {
        const sortedHistory = [...history].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        return sortedHistory[0].progress;
    }
    return editableInitiative.progress || 0;
  };
  
  const handleFieldChange = (field: keyof Initiative, value: any) => {
    setEditableInitiative(prev => (prev ? { ...prev, [field]: value } : null));
    if (dateError) setDateError('');
  };
  
  const handleHistoryFieldChange = (index: number, field: keyof ProgressUpdate, value: string | number) => {
    setEditableInitiative(prev => {
        if (!prev || !prev.progressHistory) return prev;
        const newHistory = [...prev.progressHistory];
        newHistory[index] = { ...newHistory[index], [field]: value };
        return { ...prev, progressHistory: newHistory };
    });
  };

  const handleToggleKpi = (kpiId: string) => {
      setEditableInitiative(prev => {
          if (!prev) return null;
          const currentIds = prev.linkedKpiIds || [];
          const newIds = currentIds.includes(kpiId) 
            ? currentIds.filter(id => id !== kpiId)
            : [...currentIds, kpiId];
          return { ...prev, linkedKpiIds: newIds };
      });
  };

  const handleAddHistory = () => {
    const today = new Date().toISOString().split('T')[0];
    const newUpdate: ProgressUpdate = {
        date: today,
        progress: editableInitiative.progress || 0,
        note: ''
    };
    setEditableInitiative(prev => {
      if (!prev) return null;
      const newHistory = [newUpdate, ...(prev.progressHistory || [])];
      return { ...prev, progressHistory: newHistory };
    });
    setEditingHistoryIndex(0);
  };
  
  const handleDeleteHistory = (index: number) => {
    if (window.confirm("Are you sure you want to delete this progress update?")) {
        setEditableInitiative(prev => {
            if (!prev || !prev.progressHistory) return prev;
            const newHistory = prev.progressHistory.filter((_, i) => i !== index);
            const newProgress = syncMainProgress(newHistory);
            return { ...prev, progressHistory: newHistory, progress: newProgress };
        });
    }
  };

  const handleStartEditHistory = (index: number) => {
    if (editableInitiative?.progressHistory) {
      setTempHistoryItem({ ...editableInitiative.progressHistory[index] });
      setEditingHistoryIndex(index);
    }
  };

  const handleCancelHistoryEdit = (index: number) => {
    if (index === 0 && !tempHistoryItem && editableInitiative.progressHistory?.length && !editableInitiative.progressHistory[0].note) {
        handleDeleteHistory(index);
    } else {
        setEditableInitiative(prev => {
            if (!prev || !prev.progressHistory || !tempHistoryItem) return prev;
            const newHistory = [...prev.progressHistory];
            newHistory[index] = tempHistoryItem;
            return { ...prev, progressHistory: newHistory };
        });
    }
    setEditingHistoryIndex(null);
    setTempHistoryItem(null);
  };
  
  const handleSaveHistoryItem = () => {
    setEditableInitiative(prev => {
      if (!prev || !prev.progressHistory) return prev;
      const sortedHistory = [...prev.progressHistory].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      const newProgress = syncMainProgress(sortedHistory);
      return { ...prev, progressHistory: sortedHistory, progress: newProgress };
    });
    setEditingHistoryIndex(null);
    setTempHistoryItem(null);
  };

  const handleSave = () => {
    const { plan_start, plan_end, actual_start, actual_end, progressHistory } = editableInitiative;
    if ((plan_start && plan_end && new Date(parseDisplayDate(plan_start)) >= new Date(parseDisplayDate(plan_end))) || 
        (actual_start && actual_end && new Date(parseDisplayDate(actual_start)) >= new Date(parseDisplayDate(actual_end)))) {
        setDateError('End dates must be after their corresponding start dates.');
        return;
    }
    if (progressHistory?.some(h => !h.note.trim())) {
        setError("All progress update notes must be filled in before saving.");
        return;
    }
    const sortedHistory = [...(progressHistory || [])].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const finalProgress = syncMainProgress(sortedHistory);
    onSave(initiative!.id, { ...editableInitiative, progress: finalProgress, progressHistory: sortedHistory });
    onClose();
  };

  const inputClass = "mt-1 block w-full bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-lg shadow-sm py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all";
  const labelClass = "block text-[10px] font-black uppercase tracking-widest text-text-muted mb-1";

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-md flex items-center justify-center z-[200]" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="bg-surface rounded-2xl shadow-2xl w-full max-w-4xl max-h-[92vh] m-4 flex flex-col border border-white/10" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center p-6 border-b border-white/5 bg-surface-light/30">
          <div>
            <h3 className="text-xl font-black text-text-primary uppercase tracking-tight flex items-center gap-2">
                <Edit className="w-5 h-5 text-primary" /> Update Initiative Details
            </h3>
            <p className="text-xs text-text-muted font-mono mt-1">{editableInitiative.id}: {editableInitiative.name}</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10 text-text-muted">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex px-6 border-b border-white/5 bg-background/50">
            {(['details', 'strategy', 'execution'] as const).map(tab => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-4 text-xs font-black uppercase tracking-widest border-b-2 transition-all ${
                        activeTab === tab ? 'border-primary text-primary' : 'border-transparent text-text-muted hover:text-text-primary'
                    }`}
                >
                    {tab}
                </button>
            ))}
        </div>

        <div className="p-8 space-y-8 flex-grow overflow-y-auto custom-scrollbar bg-background/20">
          
          {activeTab === 'details' && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="md:col-span-2">
                          <label className={labelClass}><FileText className="w-3 h-3 inline mr-1" /> Initiative Title</label>
                          <input type="text" value={editableInitiative.name} onChange={e => handleFieldChange('name', e.target.value)} className={inputClass} placeholder="Full name of the initiative" />
                      </div>
                      <div>
                        <label className={labelClass}><Layers className="w-3 h-3 inline mr-1" /> Strategic Pillar</label>
                        <select value={editableInitiative.thrustId} onChange={e => handleFieldChange('thrustId', Number(e.target.value))} className={inputClass}>
                            {strategicThrusts.map(t => <option key={t.id} value={t.id}>Pillar {t.id}: {t.title}</option>)}
                            <option value={7}>Foundation Enabler</option>
                        </select>
                      </div>
                      <div>
                        <label className={labelClass}><Target className="w-3 h-3 inline mr-1" /> Tier Level</label>
                        <select value={editableInitiative.tier} onChange={e => handleFieldChange('tier', e.target.value)} className={inputClass}>
                            <option value="Thrust 1">Thrust 1 (Foundation)</option>
                            <option value="Thrust 2">Thrust 2 (Accelerator)</option>
                            <option value="Thrust 3">Thrust 3 (Future Leap)</option>
                            <option value="ENABLER">Enabler</option>
                        </select>
                      </div>
                      <div>
                          <label className={labelClass}><Building className="w-3 h-3 inline mr-1" /> Responsible Branch</label>
                          <select value={editableInitiative.responsibleBranch} onChange={e => handleFieldChange('responsibleBranch', e.target.value)} className={inputClass}>
                              <option value="">-- Select Branch --</option>
                              {uniqueBranches.map(b => <option key={b} value={b}>{b}</option>)}
                          </select>
                      </div>
                      <div>
                          <label className={labelClass}><User className="w-3 h-3 inline mr-1" /> Lead Owner (Sector)</label>
                          <input type="text" value={editableInitiative.lead || ''} onChange={e => handleFieldChange('lead', e.target.value)} className={inputClass} placeholder="e.g. Infrastructure Sector" />
                      </div>
                  </div>
                  <div>
                      <label className={labelClass}><Info className="w-3 h-3 inline mr-1" /> Detailed Description</label>
                      <textarea rows={3} value={editableInitiative.description || ''} onChange={e => handleFieldChange('description', e.target.value)} className={inputClass} placeholder="Describe the technical and operational scope of this initiative." />
                  </div>
              </div>
          )}

          {activeTab === 'strategy' && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="md:col-span-2">
                          <label className={labelClass}><CheckSquare className="w-3 h-3 inline mr-1" /> Expected Outcome</label>
                          <textarea rows={2} value={editableInitiative.expectedOutcome} onChange={e => handleFieldChange('expectedOutcome', e.target.value)} className={inputClass} placeholder="What is the definitive result of this initiative?" />
                      </div>
                      <div>
                          <label className={labelClass}><Coins className="w-3 h-3 inline mr-1" /> Budget Estimate</label>
                          <input type="text" value={editableInitiative.budgetEstimate || ''} onChange={e => handleFieldChange('budgetEstimate', e.target.value)} className={inputClass} placeholder="e.g. RM 2.5 Million" />
                      </div>
                      <div>
                          <label className={labelClass}><Users className="w-3 h-3 inline mr-1" /> Supporting Units</label>
                          <input type="text" value={editableInitiative.supportingUnits || ''} onChange={e => handleFieldChange('supportingUnits', e.target.value)} className={inputClass} placeholder="e.g. DTC, Finance, QS" />
                      </div>
                      <div className="md:col-span-2">
                        <label className={labelClass}><ShieldAlert className="w-3 h-3 inline mr-1" /> Strategic Risks</label>
                        <textarea rows={2} value={editableInitiative.risks || ''} onChange={e => handleFieldChange('risks', e.target.value)} className={`${inputClass} border-red-500/20`} placeholder="What could prevent this from succeeding?" />
                      </div>
                      <div className="md:col-span-2">
                        <label className={labelClass}><CheckSquare className="w-3 h-3 inline mr-1" /> Mitigation Strategy</label>
                        <textarea rows={2} value={editableInitiative.mitigation || ''} onChange={e => handleFieldChange('mitigation', e.target.value)} className={`${inputClass} border-emerald-500/20`} placeholder="Steps to minimize identified risks." />
                      </div>
                  </div>
                  
                  <div className="border-t border-white/5 pt-6">
                      <label className={labelClass}><Link className="w-3 h-3 inline mr-1" /> Linked KPI Performance</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-background/50 p-4 rounded-xl border border-white/5 max-h-40 overflow-y-auto custom-scrollbar">
                          {allKpis.map(kpi => {
                              const isChecked = editableInitiative.linkedKpiIds?.includes(kpi.id);
                              return (
                                  <button key={kpi.id} onClick={() => handleToggleKpi(kpi.id)} className={`flex items-start gap-3 p-2 rounded-lg text-left transition-all ${isChecked ? 'bg-primary/10 border border-primary/20' : 'hover:bg-white/5 border border-transparent'}`}>
                                      {isChecked ? <CheckSquare className="w-4 h-4 text-primary shrink-0" /> : <Square className="w-4 h-4 text-text-muted shrink-0" />}
                                      <div className="min-w-0">
                                          <p className={`text-[10px] font-bold ${isChecked ? 'text-primary' : 'text-text-primary'}`}>{kpi.id}</p>
                                          <p className="text-[9px] text-text-secondary leading-tight truncate">{kpi.name}</p>
                                      </div>
                                  </button>
                              );
                          })}
                      </div>
                  </div>
              </div>
          )}

          {activeTab === 'execution' && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <div className="grid grid-cols-2 gap-6">
                      <div>
                          <label className={labelClass}>Plan Start Date</label>
                          <input type="date" value={parseDisplayDate(editableInitiative.plan_start)} onChange={e => handleFieldChange('plan_start', formatDateForDisplay(e.target.value))} className={inputClass} />
                      </div>
                      <div>
                          <label className={labelClass}>Plan End Date</label>
                          <input type="date" value={parseDisplayDate(editableInitiative.plan_end)} onChange={e => handleFieldChange('plan_end', formatDateForDisplay(e.target.value))} className={inputClass} />
                      </div>
                      <div>
                          <label className={labelClass}>Actual Start Date</label>
                          <input type="date" value={parseDisplayDate(editableInitiative.actual_start)} onChange={e => handleFieldChange('actual_start', formatDateForDisplay(e.target.value))} className={inputClass} />
                      </div>
                      <div>
                          <label className={labelClass}>Actual End Date</label>
                          <input type="date" value={parseDisplayDate(editableInitiative.actual_end)} onChange={e => handleFieldChange('actual_end', formatDateForDisplay(e.target.value))} className={inputClass} />
                      </div>
                  </div>
                  {dateError && <p className="text-xs text-red-400 flex items-center mt-2"><AlertCircle className="w-3 h-3 mr-1" />{dateError}</p>}
                  
                  <div className="border-t border-white/5 pt-6">
                      <div className="flex justify-between items-center mb-4">
                          <label className={labelClass}><ClipboardList className="w-3 h-3 inline mr-1" /> Execution Progress History</label>
                          <button onClick={handleAddHistory} disabled={editingHistoryIndex !== null} className="flex items-center gap-2 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50">
                              <PlusCircle className="w-3.5 h-3.5" /> Add Log
                          </button>
                      </div>
                      <div className="space-y-3">
                          {editableInitiative.progressHistory?.map((update, index) => (
                              <div key={index} className={`p-4 rounded-xl transition-all border ${editingHistoryIndex === index ? 'bg-surface-light ring-1 ring-blue-500 border-transparent' : 'bg-background/40 border-white/5 hover:border-white/10'}`}>
                                  {editingHistoryIndex === index ? (
                                      <div className="space-y-4">
                                          <div className="grid grid-cols-2 gap-4">
                                              <input type="date" value={update.date} onChange={e => handleHistoryFieldChange(index, 'date', e.target.value)} className={inputClass} />
                                              <div className="flex items-center gap-2">
                                                  <input type="range" min="0" max="100" value={update.progress} onChange={e => handleHistoryFieldChange(index, 'progress', Number(e.target.value))} className="flex-grow h-1.5 bg-background rounded-full appearance-none cursor-pointer accent-blue-500" />
                                                  <span className="text-xs font-black text-blue-400 w-10">{update.progress}%</span>
                                              </div>
                                          </div>
                                          <textarea value={update.note} onChange={e => handleHistoryFieldChange(index, 'note', e.target.value)} rows={2} className={inputClass} placeholder="Execution summary..." />
                                          <div className="flex justify-end gap-2 pt-2 border-t border-white/5">
                                              <button onClick={() => handleCancelHistoryEdit(index)} className="px-3 py-1.5 text-[10px] font-black uppercase tracking-widest rounded bg-white/5 text-text-muted hover:bg-white/10">Cancel</button>
                                              <button onClick={handleSaveHistoryItem} className="px-3 py-1.5 text-[10px] font-black uppercase tracking-widest rounded bg-green-600 text-white">Commit Log</button>
                                          </div>
                                      </div>
                                  ) : (
                                      <div className="group flex justify-between items-start">
                                          <div className="flex-grow">
                                              <div className="flex items-center gap-3 mb-1">
                                                  <span className="text-[10px] font-mono text-text-muted bg-white/5 px-2 py-0.5 rounded">{update.date}</span>
                                                  <span className={`text-[10px] font-black uppercase tracking-widest ${update.progress >= 100 ? 'text-blue-400' : 'text-emerald-400'}`}>{update.progress}% Complete</span>
                                              </div>
                                              <p className="text-sm text-text-secondary leading-relaxed">{update.note}</p>
                                          </div>
                                          <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                              <button onClick={() => handleStartEditHistory(index)} className="p-1.5 rounded hover:bg-blue-500/20 text-blue-400"><Edit className="w-4 h-4" /></button>
                                              <button onClick={() => handleDeleteHistory(index)} className="p-1.5 rounded hover:bg-red-500/20 text-red-400"><Trash2 className="w-4 h-4" /></button>
                                          </div>
                                      </div>
                                  )}
                              </div>
                          ))}
                          {!editableInitiative.progressHistory?.length && <p className="text-center py-10 text-xs text-text-muted italic border border-dashed border-white/10 rounded-xl">No execution history recorded.</p>}
                      </div>
                  </div>
              </div>
          )}
        </div>

        <div className="p-6 bg-surface-light/30 border-t border-white/5 flex justify-between items-center">
            {error && <p className="text-xs text-red-400 flex items-center"><AlertCircle className="w-3.5 h-3.5 mr-1.5" />{error}</p>}
            <div className="flex gap-3 ml-auto">
                <button onClick={onClose} className="px-6 py-2.5 text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-text-primary transition-colors">Cancel</button>
                <button onClick={handleSave} className="flex items-center gap-2 px-8 py-2.5 text-xs font-black uppercase tracking-[0.2em] bg-primary text-white rounded-xl shadow-glow-primary hover:bg-primary-hover active:scale-95 transition-all">
                    <Save className="w-4 h-4" /> Commit Changes
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};
