
import React, { useState, useEffect, useMemo } from 'react';
import { X, Save, PlusCircle, Trash2, Edit, AlertCircle, Link, Unlock, Lock, FileText } from 'lucide-react';
import type { KPI, KPIHistory, Initiative } from '../types';

interface KpiModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (kpi: KPI) => void;
  kpiInfo: { index: number | null, kpi: KPI | null, isNew: boolean } | null;
  initiatives: Initiative[];
}

// Helper: DD/MM/YYYY -> YYYY-MM-DD (for input[type="date"])
const parseDisplayDate = (dateString: string): string => {
  if (!dateString) return '';
  const [day, month, year] = dateString.split('/');
  return `${year}-${month}-${day}`;
};

// Helper: YYYY-MM-DD -> DD/MM/YYYY (for saving)
const formatDateForSave = (isoDate: string): string => {
  if (!isoDate) return '';
  const [year, month, day] = isoDate.split('-');
  return `${day}/${month}/${year}`;
};

// Added missing 'id' property to emptyKpi to satisfy KPI interface requirements
const emptyKpi: KPI = {
  id: '',
  name: '',
  description: '',
  target: '',
  current: '',
  targetValue: 100,
  currentValue: 0,
  history: [],
  plan_start: '',
  plan_end: '',
  actual_start: '',
  actual_end: '',
};

export const KpiModal: React.FC<KpiModalProps> = ({ isOpen, onClose, onSave, kpiInfo, initiatives }) => {
  const [kpiData, setKpiData] = useState<KPI>(emptyKpi);
  const [linkedInitiativeId, setLinkedInitiativeId] = useState<string>('');
  const [editingHistoryIndex, setEditingHistoryIndex] = useState<number | null>(null);
  const [currentHistoryEdit, setCurrentHistoryEdit] = useState<KPIHistory | null>(null);
  const [error, setError] = useState('');
  
  const initiativesMap = useMemo(() => new Map(initiatives.map(init => [init.id, init])), [initiatives]);

  useEffect(() => {
    if (isOpen) {
      if (kpiInfo?.isNew) {
        setKpiData({ ...emptyKpi });
        setLinkedInitiativeId('');
      } else if (kpiInfo?.kpi) {
        setKpiData(kpiInfo.kpi);
        // Detect if currently linked based on naming convention
        const match = kpiInfo.kpi.name.match(/^(I-\d+\.\d+)/);
        if (match && initiativesMap.has(match[1])) {
            setLinkedInitiativeId(match[1]);
        } else {
            setLinkedInitiativeId('');
        }
      }
      setError('');
    }
  }, [isOpen, kpiInfo, initiativesMap]);

  // Handle linking logic
  const handleInitiativeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const initId = e.target.value;
      setLinkedInitiativeId(initId);

      if (initId && initiativesMap.has(initId)) {
          const init = initiativesMap.get(initId)!;
          // Auto-populate and lock fields
          setKpiData(prev => ({
              ...prev,
              name: `${init.id}: ${init.name}`,
              description: init.expectedOutcome || prev.description,
              current: `${init.progress}% Complete`,
              target: '100% Complete',
              currentValue: init.progress,
              targetValue: 100,
              plan_start: init.plan_start,
              plan_end: init.plan_end,
              actual_start: init.actual_start,
              actual_end: init.actual_end || init.plan_end, // Default to plan end if no actual end for projection
              // Clear manual history as it should rely on initiative progress
              history: [], 
          }));
      } else {
          // Reset to manual mode (keep values but unlock)
          setLinkedInitiativeId('');
      }
  };

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name.includes('Date') || name === 'plan_start' || name === 'plan_end' || name === 'actual_start' || name === 'actual_end') {
        setKpiData(prev => ({...prev, [name]: formatDateForSave(value)}));
    } else {
        setKpiData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleHistoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (currentHistoryEdit) {
      const { name, value } = e.target;
      setCurrentHistoryEdit(prev => prev ? { ...prev, [name]: name === 'value' ? Number(value) : value } : null);
    }
  };

  const handleSaveHistory = (idx: number) => {
    if (!currentHistoryEdit) return;
    const newHistory = [...(kpiData.history || [])];
    newHistory[idx] = { ...currentHistoryEdit, value: Number(currentHistoryEdit.value) };
    setKpiData(prev => ({ ...prev, history: newHistory }));
    setEditingHistoryIndex(null);
    setCurrentHistoryEdit(null);
  };
  
  const handleAddHistory = () => {
    const newEntry: KPIHistory = { date: new Date().toISOString().split('T')[0], value: 0 };
    const newHistory = [...(kpiData.history || []), newEntry];
    setKpiData(prev => ({ ...prev, history: newHistory }));
    setEditingHistoryIndex(newHistory.length - 1);
    setCurrentHistoryEdit(newEntry);
  };

  const handleDeleteHistory = (idx: number) => {
    const newHistory = (kpiData.history || []).filter((_, i) => i !== idx);
    setKpiData(prev => ({ ...prev, history: newHistory }));
  };

  const handleSave = () => {
    if (!kpiData.name.trim()) {
        setError('KPI Name is a required field.');
        return;
    }
    const sortedHistory = (kpiData.history || [])
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    
    // Ensure an ID is generated for newly created KPIs
    const finalKpiData = { ...kpiData };
    if (kpiInfo?.isNew && !finalKpiData.id) {
        finalKpiData.id = `KPI-CUSTOM-${Date.now()}`;
    }

    onSave({ 
        ...finalKpiData,
        targetValue: Number(kpiData.targetValue),
        currentValue: Number(kpiData.currentValue),
        history: sortedHistory 
    });
    onClose();
  };

  const isLinked = !!linkedInitiativeId;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[100]" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl w-full max-w-2xl m-4 transform transition-all" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-slate-700">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">{kpiInfo?.isNew ? 'Add New KPI' : 'Edit KPI'}</h3>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700">
            <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        <div className="p-6 space-y-5 max-h-[70vh] overflow-y-auto custom-scrollbar">
          
          {/* Link Strategy Section */}
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
              <label className="block text-sm font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                  <Link className="w-4 h-4" /> Link to Initiative (Auto-Sync)
              </label>
              <select 
                value={linkedInitiativeId} 
                onChange={handleInitiativeSelect}
                className="w-full bg-white dark:bg-slate-700 border border-blue-200 dark:border-blue-800 rounded-md shadow-sm py-2 px-3 text-sm text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                  <option value="">-- Manual Entry (No Link) --</option>
                  {initiatives.map(init => (
                      <option key={init.id} value={init.id}>{init.id}: {init.name}</option>
                  ))}
              </select>
              {isLinked ? (
                  <p className="text-xs text-blue-600 dark:text-blue-400 mt-2 flex items-center">
                      <Lock className="w-3 h-3 mr-1" /> Fields are synced with initiative progress.
                  </p>
              ) : (
                  <p className="text-xs text-gray-500 dark:text-slate-400 mt-2 flex items-center">
                      <Unlock className="w-3 h-3 mr-1" /> Manual mode: You control all fields.
                  </p>
              )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">KPI Name</label>
            <input 
                name="name" 
                value={kpiData.name} 
                onChange={handleInputChange} 
                disabled={isLinked}
                className="mt-1 w-full bg-white dark:bg-slate-700 p-2 rounded border border-gray-300 dark:border-slate-600 focus:outline-none focus:ring-1 focus:ring-red-500 disabled:bg-gray-100 dark:disabled:bg-slate-800 disabled:text-gray-500 disabled:cursor-not-allowed" 
                placeholder="e.g., Public Satisfaction Score" 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1 flex items-center gap-2">
                <FileText className="w-3.5 h-3.5"/> Description
            </label>
            <textarea 
                name="description" 
                value={kpiData.description || ''} 
                onChange={handleInputChange} 
                rows={2}
                className="mt-1 w-full bg-white dark:bg-slate-700 p-2 rounded border border-gray-300 dark:border-slate-600 focus:outline-none focus:ring-1 focus:ring-red-500" 
                placeholder="Briefly describe the metric and its strategic relevance..." 
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-500 dark:text-slate-400">Current Status (Text)</label>
              <input name="current" value={kpiData.current} onChange={handleInputChange} disabled={isLinked} className="mt-1 w-full bg-white dark:bg-slate-700 p-2 rounded border border-gray-300 dark:border-slate-600 disabled:bg-gray-100 dark:disabled:bg-slate-800 disabled:text-gray-500 disabled:cursor-not-allowed" placeholder="e.g., 82% Positive"/>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 dark:text-slate-400">Target (Text)</label>
              <input name="target" value={kpiData.target} onChange={handleInputChange} disabled={isLinked} className="mt-1 w-full bg-white dark:bg-slate-700 p-2 rounded border border-gray-300 dark:border-slate-600 disabled:bg-gray-100 dark:disabled:bg-slate-800 disabled:text-gray-500 disabled:cursor-not-allowed" placeholder="e.g., 85% Positive"/>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div>
              <label className="block text-sm font-medium text-gray-500 dark:text-slate-400">Current Value (Number)</label>
              <input type="number" name="currentValue" value={kpiData.currentValue} onChange={handleInputChange} disabled={isLinked} className="mt-1 w-full bg-white dark:bg-slate-700 p-2 rounded border border-gray-300 dark:border-slate-600 disabled:bg-gray-100 dark:disabled:bg-slate-800 disabled:text-gray-500 disabled:cursor-not-allowed" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 dark:text-slate-400">Target Value (Number)</label>
              <input type="number" name="targetValue" value={kpiData.targetValue} onChange={handleInputChange} disabled={isLinked} className="mt-1 w-full bg-white dark:bg-slate-700 p-2 rounded border border-gray-300 dark:border-slate-600 disabled:bg-gray-100 dark:disabled:bg-slate-800 disabled:text-gray-500 disabled:cursor-not-allowed" />
            </div>
          </div>
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              <div>
                <label className="block text-xs font-medium text-gray-500 dark:text-slate-400">Plan Start</label>
                <input type="date" name="plan_start" value={parseDisplayDate(kpiData.plan_start || '')} onChange={handleInputChange} disabled={isLinked} className="mt-1 w-full bg-white dark:bg-slate-700 p-2 rounded border border-gray-300 dark:border-slate-600 disabled:opacity-50" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 dark:text-slate-400">Plan End</label>
                <input type="date" name="plan_end" value={parseDisplayDate(kpiData.plan_end || '')} onChange={handleInputChange} disabled={isLinked} className="mt-1 w-full bg-white dark:bg-slate-700 p-2 rounded border border-gray-300 dark:border-slate-600 disabled:opacity-50" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 dark:text-slate-400">Actual Start</label>
                <input type="date" name="actual_start" value={parseDisplayDate(kpiData.actual_start || '')} onChange={handleInputChange} disabled={isLinked} className="mt-1 w-full bg-white dark:bg-slate-700 p-2 rounded border border-gray-300 dark:border-slate-600 disabled:opacity-50" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 dark:text-slate-400">Actual End</label>
                <input type="date" name="actual_end" value={parseDisplayDate(kpiData.actual_end || '')} onChange={handleInputChange} disabled={isLinked} className="mt-1 w-full bg-white dark:bg-slate-700 p-2 rounded border border-gray-300 dark:border-slate-600 disabled:opacity-50" />
              </div>
            </div>

          <fieldset disabled={isLinked} className="pt-4 mt-4 border-t border-gray-200 dark:border-slate-700 group">
            <legend className="text-sm font-bold text-gray-700 dark:text-slate-300 mb-2 px-1 flex justify-between w-full">
                <span>Performance History</span>
                {isLinked && <span className="text-xs font-normal text-blue-500 flex items-center"><Link className="w-3 h-3 mr-1"/>Managed by Initiative</span>}
            </legend>
            
            {isLinked ? (
                <div className="p-4 bg-gray-50 dark:bg-slate-700/30 rounded-lg text-center text-sm text-gray-500 dark:text-slate-400 italic border border-dashed border-gray-200 dark:border-slate-600">
                    Historical data is automatically tracked via the Initiative's Progress Updates.
                </div>
            ) : (
                <>
                    <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
                        {(kpiData.history || []).map((entry, idx) => (
                            editingHistoryIndex === idx && currentHistoryEdit ? (
                                <div key={idx} className="flex items-center space-x-2 bg-gray-50 dark:bg-slate-700/50 p-2 rounded-lg">
                                    <input name="date" type="date" value={currentHistoryEdit.date} onChange={handleHistoryChange} className="w-full text-sm bg-white dark:bg-slate-600 p-1 rounded border border-gray-300 dark:border-slate-500" />
                                    <input name="value" type="number" value={currentHistoryEdit.value} onChange={handleHistoryChange} className="w-24 text-sm bg-white dark:bg-slate-600 p-1 rounded border border-gray-300 dark:border-slate-500" />
                                    <button onClick={() => handleSaveHistory(idx)} className="p-1.5 rounded-full hover:bg-green-100 dark:hover:bg-green-900 text-green-500" title="Save Entry"><Save className="w-4 h-4" /></button>
                                    <button onClick={() => setEditingHistoryIndex(null)} className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500" title="Cancel"><X className="w-4 h-4" /></button>
                                </div>
                            ) : (
                                <div key={idx} className="flex items-center justify-between group-hover:bg-gray-50 dark:group-hover:bg-slate-700/50 p-2 rounded-lg transition-colors">
                                    <p className="text-sm text-gray-700 dark:text-slate-300"><span className="font-mono text-gray-500 dark:text-slate-500">{entry.date}</span> — Value: <span className="font-bold">{entry.value}</span></p>
                                    <div className="flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button onClick={() => { setEditingHistoryIndex(idx); setCurrentHistoryEdit(entry); }} className="p-1.5 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 text-blue-500" title="Edit"><Edit className="w-4 h-4" /></button>
                                        <button onClick={() => handleDeleteHistory(idx)} className="p-1.5 rounded-full hover:bg-red-100 dark:hover:bg-red-900 text-red-500" title="Delete"><Trash2 className="w-4 h-4" /></button>
                                    </div>
                                </div>
                            )
                        ))}
                        {(kpiData.history || []).length === 0 && <p className="text-xs text-center text-gray-400 dark:text-slate-500 py-2">No history data recorded.</p>}
                    </div>
                    <button type="button" onClick={handleAddHistory} disabled={editingHistoryIndex !== null} className="w-full mt-2 flex items-center justify-center space-x-2 px-3 py-1.5 text-xs font-semibold rounded-lg text-gray-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors border border-gray-300 dark:border-slate-600 disabled:opacity-50 disabled:cursor-not-allowed">
                        <PlusCircle className="w-4 h-4" />
                        <span>Add History Entry</span>
                    </button>
                </>
            )}
          </fieldset>
            {error && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {error}
              </p>
            )}
        </div>

        <div className="flex justify-end p-4 bg-gray-50 dark:bg-slate-800/50 border-t border-gray-200 dark:border-slate-700 rounded-b-xl">
          <button onClick={onClose} className="px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-200 bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-600 mr-2">
            Cancel
          </button>
          <button onClick={handleSave} className="flex items-center justify-center space-x-2 px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors shadow-md">
            <Save className="w-4 h-4" />
            <span>Save KPI</span>
          </button>
        </div>
      </div>
    </div>
  );
};
