
import React, { useState, useMemo, useEffect } from 'react';
import type { Initiative, InitiativeChecklistState, ChecklistPhase, ChecklistItem } from '../../types';
import { strategicThrusts, foundationThrust } from '../../assets/strategicData';
import { Filter, Search, RotateCcw, CheckCircle2, Circle, CircleDotDashed, Bot, Loader2, ListChecks, Edit, Save, X, PlusCircle, Trash2, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ConfirmActionModal } from '../ConfirmActionModal';

const MotionDiv = motion.div as any;

interface ChecklistContentProps {
  isAdminMode: boolean;
  initiatives: Initiative[];
  checklists: InitiativeChecklistState;
  workflows: Record<string, ChecklistPhase[]>;
  onUpdateChecklist: (initiativeId: string, itemId: string, isChecked: boolean) => void;
  onUpdateWorkflow: (initiativeId: string, newWorkflow: ChecklistPhase[]) => void;
  onResetWorkflow: (initiativeId: string) => void;
  onAiAnalysis: (initiative: Initiative, checklistState: Record<string, boolean>, phase: ChecklistPhase) => Promise<string>;
}

export const ChecklistContent: React.FC<ChecklistContentProps> = ({
  isAdminMode,
  initiatives,
  checklists,
  workflows,
  onUpdateChecklist,
  onUpdateWorkflow,
  onResetWorkflow,
  onAiAnalysis,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedThrustId, setSelectedThrustId] = useState<string>('all');
  const [selectedInitiativeId, setSelectedInitiativeId] = useState<string | null>(null);
  const [aiAnalyses, setAiAnalyses] = useState<Record<string, { analysis: string; isLoading: boolean }>>({});
  const [isEditing, setIsEditing] = useState(false);
  const [localWorkflow, setLocalWorkflow] = useState<ChecklistPhase[] | null>(null);
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);


  const handleGetAiAnalysis = async (initiative: Initiative, phase: ChecklistPhase) => {
    const analysisKey = `${initiative.id}-${phase.name}`;
    setAiAnalyses(prev => ({ ...prev, [analysisKey]: { analysis: '', isLoading: true } }));
    const result = await onAiAnalysis(initiative, checklists[initiative.id] || {}, phase);
    setAiAnalyses(prev => ({ ...prev, [analysisKey]: { analysis: result, isLoading: false } }));
  };

  const filteredInitiatives = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return initiatives.filter(initiative => {
      const searchMatch =
        query === '' ||
        initiative.name.toLowerCase().includes(query) ||
        initiative.id.toLowerCase().includes(query) ||
        (initiative.description || '').toLowerCase().includes(query) ||
        (initiative.expectedOutcome || '').toLowerCase().includes(query);
      
      const thrustMatch = selectedThrustId === 'all' || initiative.thrustId.toString() === selectedThrustId;
      
      return searchMatch && thrustMatch;
    });
  }, [searchQuery, selectedThrustId, initiatives]);

  useEffect(() => {
    if (!selectedInitiativeId && filteredInitiatives.length > 0) {
      setSelectedInitiativeId(filteredInitiatives[0].id);
    }
    if (selectedInitiativeId && !filteredInitiatives.some(i => i.id === selectedInitiativeId)) {
        setSelectedInitiativeId(filteredInitiatives.length > 0 ? filteredInitiatives[0].id : null);
    }
  }, [filteredInitiatives, selectedInitiativeId]);

  useEffect(() => {
    if (selectedInitiativeId && workflows[selectedInitiativeId]) {
      setLocalWorkflow(JSON.parse(JSON.stringify(workflows[selectedInitiativeId])));
    } else {
      setLocalWorkflow(null);
    }
    setIsEditing(false); 
  }, [selectedInitiativeId, workflows]);

  const initiativesByThrust = useMemo(() => {
    return filteredInitiatives.reduce((acc, initiative) => {
      if (!acc[initiative.thrustId]) acc[initiative.thrustId] = [];
      acc[initiative.thrustId].push(initiative);
      return acc;
    }, {} as Record<number, Initiative[]>);
  }, [filteredInitiatives]);

  // Combine standard and foundation thrusts for the filter list
  const activeThrusts = useMemo(() => {
      const allThrusts = [...strategicThrusts, foundationThrust];
      return allThrusts.filter(thrust => initiativesByThrust[thrust.id]?.length > 0);
  }, [initiativesByThrust]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedThrustId('all');
  };

  const selectedInitiative = useMemo(() => {
      return initiatives.find(i => i.id === selectedInitiativeId);
  }, [selectedInitiativeId, initiatives]);

  // --- Editing Handlers ---
  const handleSave = () => {
    if (selectedInitiativeId && localWorkflow) {
      onUpdateWorkflow(selectedInitiativeId, localWorkflow);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    if (selectedInitiativeId) {
      setLocalWorkflow(JSON.parse(JSON.stringify(workflows[selectedInitiativeId])));
    }
    setIsEditing(false);
  };
  
  const handlePhaseNameChange = (phaseIndex: number, newName: string) => {
    setLocalWorkflow(prev => {
        if (!prev) return null;
        const newWorkflow = [...prev];
        newWorkflow[phaseIndex] = { ...newWorkflow[phaseIndex], name: newName };
        return newWorkflow;
    });
  };

  const handleItemLabelChange = (phaseIndex: number, itemIndex: number, newLabel: string) => {
      setLocalWorkflow(prev => {
          if (!prev) return null;
          const newWorkflow = [...prev];
          const newItems = [...newWorkflow[phaseIndex].items];
          newItems[itemIndex] = { ...newItems[itemIndex], label: newLabel };
          newWorkflow[phaseIndex] = { ...newWorkflow[phaseIndex], items: newItems };
          return newWorkflow;
      });
  };
  
  const handleAddItem = (phaseIndex: number) => {
      setLocalWorkflow(prev => {
          if (!prev) return null;
          const newWorkflow = [...prev];
          const newItems = [...newWorkflow[phaseIndex].items];
          const newItemId = `custom-${Date.now()}`;
          newItems.push({ id: newItemId, label: 'New Checklist Item' });
          newWorkflow[phaseIndex] = { ...newWorkflow[phaseIndex], items: newItems };
          return newWorkflow;
      });
  };

  const handleDeleteItem = (phaseIndex: number, itemIndex: number) => {
      setLocalWorkflow(prev => {
          if (!prev) return null;
          const newWorkflow = [...prev];
          const newItems = [...newWorkflow[phaseIndex].items];
          newItems.splice(itemIndex, 1);
          newWorkflow[phaseIndex] = { ...newWorkflow[phaseIndex], items: newItems };
          return newWorkflow;
      });
  };

  const handleAddPhase = () => {
      setLocalWorkflow(prev => {
          if (!prev) return [...prev || []];
          const newPhase: ChecklistPhase = { name: 'New Phase', items: [] };
          return [...prev, newPhase];
      });
  };

  const handleDeletePhase = (phaseIndex: number) => {
    if (window.confirm("Are you sure you want to delete this entire phase and all its items?")) {
      setLocalWorkflow(prev => {
          if (!prev) return null;
          const newWorkflow = [...prev];
          newWorkflow.splice(phaseIndex, 1);
          return newWorkflow;
      });
    }
  };

  const handleConfirmReset = () => {
    if (selectedInitiativeId) {
      onResetWorkflow(selectedInitiativeId);
    }
    setIsEditing(false);
    setIsResetModalOpen(false);
  };

  const dropdownBaseClass = "w-full appearance-none bg-surface border border-white/20 rounded-xl px-4 py-2.5 text-sm text-text-primary focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none cursor-pointer hover:bg-surface-light transition-colors shadow-sm";


  return (
    <div className="space-y-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-text-primary mb-4">Implementation Checklist</h2>
        <p className="text-text-secondary max-w-4xl mx-auto">
          Track the detailed progress of each initiative through its entire lifecycle. Use the AI assistant to analyze progress and identify potential risks.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Panel: Initiative List */}
        <aside className="lg:w-1/3 xl:w-1/4 flex-shrink-0">
          <div className="bg-surface p-4 rounded-xl shadow-lg border border-white/10 sticky top-32">
            <div className="space-y-4">
              <div className="flex items-center text-lg font-semibold text-text-primary">
                <Filter className="w-5 h-5 mr-2 text-primary"/>
                Filter Initiatives
              </div>
              <div>
                <label htmlFor="initiative-search" className="sr-only">Search by Name/ID</label>
                <div className="relative group">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted group-focus-within:text-primary transition-colors" />
                  <input
                    id="initiative-search"
                    type="text"
                    placeholder="Search by Name/ID/Desc..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className="w-full bg-surface border border-white/20 rounded-xl pl-10 pr-4 py-2.5 text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all shadow-inner"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="thrust-filter" className="sr-only">Strategic Thrust</label>
                <div className="relative">
                    <select
                    id="thrust-filter"
                    value={selectedThrustId}
                    onChange={e => setSelectedThrustId(e.target.value)}
                    className={dropdownBaseClass}
                    >
                    <option value="all">All Thrusts</option>
                    {strategicThrusts.map(thrust => <option key={thrust.id} value={thrust.id}>T{thrust.id}: {thrust.title}</option>)}
                    <option value="7">T7: {foundationThrust.title}</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
                </div>
              </div>
              <button onClick={handleResetFilters} className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 text-sm font-semibold text-text-secondary bg-surface-light rounded-xl hover:bg-white/10 hover:text-text-primary transition-colors border border-white/10">
                <RotateCcw className="w-4 h-4" />
                <span>Reset Filters</span>
              </button>
            </div>

            <div className="text-sm text-text-secondary pt-3 border-t border-white/10 mt-4">
              Showing <span className="font-bold text-primary">{filteredInitiatives.length}</span> of {initiatives.length} initiatives.
            </div>

            <div className="mt-4 space-y-2 max-h-[calc(100vh-22rem)] overflow-y-auto pr-2 custom-scrollbar">
              {activeThrusts.length > 0 ? activeThrusts.map(thrust => (
                <div key={thrust.id}>
                  <h4 className={`text-sm font-bold mt-4 mb-2 sticky top-0 bg-surface py-1 z-10 ${thrust.id === 7 ? 'text-emerald-400' : 'text-text-primary'}`}>
                      {thrust.id === 7 ? '' : 'T'}{thrust.id}: {thrust.title}
                  </h4>
                  {(initiativesByThrust[thrust.id] || []).map(initiative => {
                      const checklistWorkflow = workflows[initiative.id] || [];
                      const initiativeChecklistState = checklists[initiative.id] || {};
                      const totalItems = checklistWorkflow.reduce((sum, phase) => sum + phase.items.length, 0);
                      const completedItems = checklistWorkflow.flatMap(p => p.items).filter(item => initiativeChecklistState[item.id]).length;
                      const overallProgress = totalItems > 0 ? (completedItems / totalItems) * 100 : 0;
                      
                      const isActive = selectedInitiativeId === initiative.id;

                      return (
                          <button
                              key={initiative.id}
                              onClick={() => setSelectedInitiativeId(initiative.id)}
                              className={`w-full text-left p-3 rounded-lg transition-colors border-l-4 ${isActive ? 'bg-primary/20 border-primary' : 'hover:bg-surface-light border-transparent'}`}
                          >
                              <p className={`font-semibold text-sm ${isActive ? 'text-primary' : 'text-text-primary'}`}>{initiative.id}: {initiative.name}</p>
                              <div className="flex items-center gap-2 mt-1.5">
                                  <div className="w-full bg-surface-light border border-white/5 rounded-full h-1.5">
                                      <div className={`h-1.5 rounded-full ${thrust.id === 7 ? 'bg-emerald-500' : 'bg-primary'}`} style={{ width: `${overallProgress}%` }}></div>
                                  </div>
                                  <span className="text-xs font-semibold text-text-secondary whitespace-nowrap">{Math.round(overallProgress)}%</span>
                              </div>
                          </button>
                      );
                  })}
                </div>
              )) : (
                <div className="text-center py-10 text-text-muted">
                    <p>No initiatives match your filters.</p>
                </div>
              )}
            </div>
          </div>
        </aside>

        {/* Right Panel: Checklist Details */}
        <main className="lg:w-2/3 xl:w-3/4">
          <AnimatePresence mode="wait">
            <MotionDiv
              key={selectedInitiativeId || 'empty'}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {selectedInitiative && localWorkflow ? (() => {
                  const initiativeChecklistState = checklists[selectedInitiative.id] || {};
                  
                  return (
                      <div className="bg-surface rounded-xl shadow-lg p-6 border border-white/10">
                          <div className="flex justify-between items-start gap-4 mb-6">
                            <div>
                              <h3 className="text-xl font-bold text-text-primary mb-1">{selectedInitiative.id}: {selectedInitiative.name}</h3>
                              <p className="text-sm text-text-secondary">{selectedInitiative.responsibleBranch}</p>
                            </div>
                            {isAdminMode && (
                              isEditing ? (
                                <div className="flex gap-2 flex-shrink-0">
                                  <button onClick={handleSave} className="px-3 py-1.5 text-sm font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 flex items-center gap-1.5"><Save className="w-4 h-4"/>Save</button>
                                  <button onClick={handleCancel} className="px-3 py-1.5 text-sm font-semibold text-text-primary bg-surface-light rounded-lg hover:bg-white/10 flex items-center gap-1.5"><X className="w-4 h-4"/>Cancel</button>
                                  <button onClick={() => setIsResetModalOpen(true)} className="px-3 py-1.5 text-sm font-semibold text-text-primary bg-surface-light rounded-lg hover:bg-white/10 flex items-center gap-1.5"><RotateCcw className="w-4 h-4"/>Reset</button>
                                </div>
                              ) : (
                                <button onClick={() => setIsEditing(true)} className="px-3 py-1.5 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primary-hover flex items-center gap-1.5"><Edit className="w-4 h-4"/>Edit Checklist</button>
                              )
                            )}
                          </div>
                          
                          <div className="grid md:grid-cols-2 gap-x-6 gap-y-6">
                            {localWorkflow.map((phase, phaseIndex) => {
                              const totalItemsInPhase = phase.items.length;
                              const completedItemsInPhase = phase.items.filter(item => initiativeChecklistState[item.id]).length;
                              
                              const analysisKey = `${selectedInitiative.id}-${phase.name}`;
                              const aiAnalysis = aiAnalyses[analysisKey];

                              return (
                                <div key={phaseIndex} className="bg-surface-light p-4 rounded-lg flex flex-col border border-white/5">
                                  <div className="flex justify-between items-center mb-2 pb-2 border-b border-white/10">
                                      {isEditing ? (
                                          <div className="flex-grow flex items-center gap-2">
                                              <input type="text" value={phase.name} onChange={(e) => handlePhaseNameChange(phaseIndex, e.target.value)} className="font-semibold text-sm text-text-primary bg-surface border border-primary rounded px-2 py-1 w-full"/>
                                              <button onClick={() => handleDeletePhase(phaseIndex)} className="p-1.5 text-primary hover:bg-primary/20 rounded-full" title="Delete Phase"><Trash2 className="w-4 h-4"/></button>
                                          </div>
                                      ) : (
                                          <h5 className="font-semibold text-sm text-text-primary flex items-center">
                                              {phase.name}
                                          </h5>
                                      )}
                                      <span className="text-xs font-bold text-text-secondary ml-2">{completedItemsInPhase}/{totalItemsInPhase}</span>
                                  </div>
                                  
                                  <div className="space-y-2 mb-4 flex-grow">
                                    {phase.items.map((item, itemIndex) => {
                                      const isChecked = initiativeChecklistState[item.id] || false;
                                      return (
                                        <div key={item.id} className="flex items-start space-x-3 group">
                                          {!isEditing && <input type="checkbox" checked={isChecked} disabled={!isAdminMode} onChange={(e) => onUpdateChecklist(selectedInitiative.id, item.id, e.target.checked)} className="mt-1 w-4 h-4 text-primary bg-surface border-white/20 rounded focus:ring-primary focus:ring-2 disabled:cursor-not-allowed"/> }
                                          {isEditing ? (
                                              <input type="text" value={item.label} onChange={(e) => handleItemLabelChange(phaseIndex, itemIndex, e.target.value)} className="text-sm text-text-primary bg-surface border border-primary rounded px-2 py-1 w-full"/>
                                          ) : (
                                              <label className={`text-sm ${isChecked ? 'text-text-muted line-through' : 'text-text-primary'} ${isAdminMode ? 'cursor-pointer' : ''}`}>{item.label}</label>
                                          )}
                                          {isEditing && <button onClick={() => handleDeleteItem(phaseIndex, itemIndex)} className="p-1.5 hover:bg-primary/20 rounded-full opacity-50 group-hover:opacity-100" title="Delete Item"><Trash2 className="w-4 h-4"/></button>}
                                        </div>
                                      );
                                    })}
                                    {isEditing && <button onClick={() => handleAddItem(phaseIndex)} className="w-full text-xs font-semibold text-primary/80 hover:text-primary p-2 mt-2 rounded-md bg-primary/10 hover:bg-primary/20 flex items-center justify-center gap-2"><PlusCircle className="w-4 h-4"/>Add Item</button>}
                                  </div>
                                  
                                  <div className="mt-auto">
                                      {!isEditing && (aiAnalysis?.isLoading ? (
                                          <div className="flex items-center justify-center p-2 bg-surface rounded-md text-xs"><Loader2 className="w-4 h-4 animate-spin text-primary mr-2" /><span className="text-text-secondary">AI is analyzing phase...</span></div>
                                      ) : aiAnalysis?.analysis ? (
                                          <div className="p-3 bg-surface rounded-md prose dark:prose-invert prose-sm max-w-none"><ReactMarkdown remarkPlugins={[remarkGfm]}>{aiAnalysis.analysis}</ReactMarkdown></div>
                                      ) : (
                                          <button onClick={() => handleGetAiAnalysis(selectedInitiative, phase)} className="w-full text-left flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-primary bg-primary/10 rounded-md hover:bg-primary/20 transition-colors"><Bot className="w-4 h-4" /><span>Analyze Phase with AI</span></button>
                                      ))}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                          {isEditing && <button onClick={handleAddPhase} className="w-full text-sm font-semibold text-primary/80 hover:text-primary p-3 mt-6 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center gap-2 border-2 border-dashed border-primary/30 hover:border-primary/50"><PlusCircle className="w-5 h-5"/>Add New Phase</button>}
                      </div>
                  )
              })() : (
                <div className="text-center py-16 bg-surface rounded-2xl shadow-xl flex flex-col items-center justify-center h-full border border-white/10">
                    <ListChecks className="w-12 h-12 mx-auto text-text-muted mb-4" />
                    <h3 className="text-xl font-semibold text-text-primary">No Initiative Selected</h3>
                    <p className="text-text-secondary mt-2">
                        {filteredInitiatives.length > 0 ? 'Select an initiative from the list to view its checklist.' : 'No initiatives match the current filters.'}
                    </p>
                </div>
              )}
            </MotionDiv>
          </AnimatePresence>
        </main>
      </div>
      <ConfirmActionModal 
        isOpen={isResetModalOpen}
        onClose={() => setIsResetModalOpen(false)}
        onConfirm={handleConfirmReset}
        title="Confirm Reset Checklist"
        confirmText="Yes, Reset"
        confirmButtonClass="bg-yellow-600 hover:bg-yellow-700"
      >
        <p>Are you sure you want to reset the checklist for <strong className="font-bold">{selectedInitiative?.id}</strong> to its original template?</p>
        <p className="mt-2 text-sm text-text-muted">All your custom changes for this initiative's checklist will be lost.</p>
      </ConfirmActionModal>
    </div>
  );
};
