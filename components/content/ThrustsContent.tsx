
import React, { useState, useMemo } from 'react';
import type { Initiative, StrategicThrust } from '../../types';
import { ChevronRight, Edit, Trash2, PlusCircle, NotebookText, Building, Target, ClipboardList, Filter, Search, RotateCcw, TrendingUp, AlertTriangle, CheckCircle, Calendar, ChevronDown, ChevronUp, BookOpen, ShieldAlert, Coins, Trophy, Users, Link as LinkIcon, LayoutGrid, List, FileText, User, Briefcase, Layers, CheckCircle2, Flag, History, ArrowUp, ArrowDown, ArrowUpDown } from 'lucide-react';
import { strategicThrusts, foundationThrust } from '../../assets/strategicData';
import { motion, AnimatePresence } from 'framer-motion';
import { InitiativeProgressBar } from '../InitiativeProgressBar';
import { getInitiativeStatus, parseDate, calculateRisk } from '../../utils/analysis';

const MotionDiv = motion.div as any;

interface ThrustsContentProps {
  isAdminMode?: boolean;
  canDelete?: boolean;
  onEditInitiative?: (initiative: Initiative) => void;
  onDeleteInitiative?: (initiativeId: string) => void;
  onAddInitiative?: (thrustId: number) => void;
  initiatives: Initiative[];
  onSummarize: (text: string, title: string) => void;
}

const SECTOR_BRANCH_MAP: Record<string, string[]> = {
  "Infrastructure Sector": ["Roads Branch", "Coastal Roads & Second Trunk Roads Branch", "Bridges & River Structures Branch", "Rural Development Branch", "Highway Development Branch"],
  "Asset Sector": ["Road & Civil Engineering Asset Branch", "Building Asset Branch", "Slope & Forensic Branch"],
  "Technical Services Sector": ["Project Investigation & Implementation Branch", "Special Projects Branch", "Training & Competency Branch", "Divisional Offices"],
  "Building & Specialist Sector": ["Buildings Branch", "Mechanical Engineering Branch", "Electrical Engineering Branch", "Building & Structural Engineering Branch"],
  "Human Resource & Corporate Affairs Sector": ["Human Resource Branch", "Finance Branch", "Corporate Communications Branch"],
  "QAQC Sector": ["Compliance Branch", "Research & Investigation Branch"],
  "Support Sector": ["Integrity Branch", "Corporate Planning Branch", "Quantity Surveying Branch", "Audit Branch"]
};

const normalizeSector = (lead: string | undefined): string => {
  if (!lead) return 'Unassigned';
  const l = lead.trim();
  if (SECTOR_BRANCH_MAP[l]) return l;
  const lower = l.toLowerCase();
  if (lower.includes('infrastructure')) return 'Infrastructure Sector';
  if (lower.includes('asset')) return 'Asset Sector';
  if (lower.includes('building') && lower.includes('specialist')) return 'Building & Specialist Sector';
  if (lower.includes('technical services')) return 'Technical Services Sector';
  if (lower.includes('quality') || lower.includes('qaqc')) return 'QAQC Sector';
  if (lower.includes('(qs)') || lower.includes('quantity surveying')) return 'Support Sector';
  if (lower.includes('(cp)') || lower.includes('corporate planning')) return 'Support Sector';
  if (lower.includes('integrity')) return 'Support Sector';
  if (lower.includes('audit')) return 'Support Sector';
  if (lower.includes('support')) return 'Support Sector'; 
  if (lower.includes('human resource') || lower.includes('corporate affairs')) {
      if (lower.includes('qs')) return 'Support Sector';
      return 'Human Resource & Corporate Affairs Sector';
  }
  return l;
};

export const ThrustsContent: React.FC<ThrustsContentProps> = ({ isAdminMode, canDelete = false, onEditInitiative, onDeleteInitiative, onAddInitiative, initiatives, onSummarize }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedThrustId, setSelectedThrustId] = useState<string>('all');
  const [selectedLead, setSelectedLead] = useState<string>('all');
  const [selectedTier, setSelectedTier] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [sortKey, setSortKey] = useState<string>('none');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  
  const [expandedDetails, setExpandedDetails] = useState<Set<string>>(new Set());
  const [expandedStrategic, setExpandedStrategic] = useState<Set<string>>(new Set());

  const toggleDetails = (initiativeId: string) => {
      setExpandedDetails(prev => {
          const newSet = new Set(prev);
          if (newSet.has(initiativeId)) newSet.delete(initiativeId);
          else newSet.add(initiativeId);
          return newSet;
      });
  };

  const toggleStrategic = (e: React.MouseEvent, initiativeId: string) => {
      e.stopPropagation();
      setExpandedStrategic(prev => {
          const newSet = new Set(prev);
          if (newSet.has(initiativeId)) newSet.delete(initiativeId);
          else newSet.add(initiativeId);
          return newSet;
      });
  };

  const filteredInitiatives = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    let result = initiatives.filter(initiative => {
      const searchMatch = query === '' ||
        initiative.name.toLowerCase().includes(query) ||
        initiative.id.toLowerCase().includes(query) ||
        (initiative.description || '').toLowerCase().includes(query) ||
        (initiative.expectedOutcome || '').toLowerCase().includes(query);
      
      const thrustMatch = selectedThrustId === 'all' || initiative.thrustId.toString() === selectedThrustId;
      const normalizedLead = normalizeSector(initiative.lead);
      const leadMatch = selectedLead === 'all' || normalizedLead === selectedLead;
      const tierMatch = selectedTier === 'all' || initiative.tier === selectedTier;
      const statusMatch = selectedStatus === 'all' || getInitiativeStatus(initiative).status === selectedStatus;
      return searchMatch && thrustMatch && leadMatch && tierMatch && statusMatch;
    });

    if (sortKey !== 'none') {
        result.sort((a, b) => {
            let valA: any, valB: any;
            
            switch(sortKey) {
                case 'plan_start':
                case 'plan_end':
                    valA = parseDate(a[sortKey])?.getTime() || 0;
                    valB = parseDate(b[sortKey])?.getTime() || 0;
                    break;
                case 'progress':
                    valA = a.progress;
                    valB = b.progress;
                    break;
                case 'riskLevel':
                    const riskOrder = { 'High': 3, 'Medium': 2, 'Low': 1 };
                    valA = riskOrder[calculateRisk(a).level] || 0;
                    valB = riskOrder[calculateRisk(b).level] || 0;
                    break;
                default:
                    return 0;
            }

            if (valA < valB) return sortDirection === 'asc' ? -1 : 1;
            if (valA > valB) return sortDirection === 'asc' ? 1 : -1;
            return 0;
        });
    }

    return result;
  }, [searchQuery, selectedThrustId, selectedLead, selectedTier, selectedStatus, initiatives, sortKey, sortDirection]);
  
  const initiativesByThrust = useMemo(() => {
    return filteredInitiatives.reduce((acc: Record<number, Initiative[]>, initiative: Initiative) => {
      if (!acc[initiative.thrustId]) acc[initiative.thrustId] = [];
      acc[initiative.thrustId].push(initiative);
      return acc;
    }, {} as Record<number, Initiative[]>);
  }, [filteredInitiatives]);

  const activeThrusts = useMemo(() => {
    if (selectedThrustId !== 'all' && selectedThrustId !== '7') return strategicThrusts.filter(t => t.id.toString() === selectedThrustId);
    return strategicThrusts.filter(thrust => initiativesByThrust[thrust.id]?.length > 0);
  }, [strategicThrusts, selectedThrustId, initiativesByThrust]);

  const ecosystemInitiatives = useMemo(() => {
      return (selectedThrustId === 'all' || selectedThrustId === '7') ? initiativesByThrust[7] || [] : [];
  }, [initiativesByThrust, selectedThrustId]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedThrustId('all');
    setSelectedLead('all');
    setSelectedTier('all');
    setSelectedStatus('all');
    setSortKey('none');
    setSortDirection('asc');
  };

  const toggleSortDirection = () => {
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
  };

  const renderInitiative = (initiative: Initiative, thrustColor: string) => {
      const { status, icon: StatusIcon, textColor, bg, border } = getInitiativeStatus(initiative);
      const isDetailsOpen = expandedDetails.has(initiative.id);
      const isStrategicOpen = expandedStrategic.has(initiative.id);
      const sortedHistory = initiative.progressHistory ? [...initiative.progressHistory].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) : [];
      const lastUpdateDate = sortedHistory.length > 0 ? sortedHistory[0].date : null;

      // Premium Metallic Tier Badge Styling
      const getTierBadgeStyle = (tier?: string) => {
          if (tier === 'Thrust 1') return 'bg-[#FFD700]/10 border-[#FFD700]/40 text-[#FFD700] shadow-[0_0_12px_rgba(255,215,0,0.15)]';
          if (tier === 'Thrust 2') return 'bg-[#E2E8F0]/10 border-[#E2E8F0]/40 text-[#E2E8F0] shadow-[0_0_12px_rgba(226,232,240,0.1)]';
          if (tier === 'Thrust 3') return 'bg-[#CD7F32]/10 border-[#CD7F32]/40 text-[#CD7F32] shadow-[0_0_12px_rgba(205,127,50,0.15)]';
          if (tier === 'ENABLER') return 'bg-cyan-500/10 border-cyan-500/50 text-cyan-200 shadow-[0_0_12px_rgba(6,182,212,0.3)]';
          return 'bg-surface-light border-border text-text-secondary';
      };

      return (
        <MotionDiv layout key={initiative.id} className={`bg-surface rounded-xl overflow-hidden border shadow-lg transition-all duration-300 ${isDetailsOpen ? 'border-primary/30 ring-1 ring-primary/20' : 'border-border hover:border-white/20 hover:shadow-xl'}`}>
          <div className="p-4 cursor-pointer" onClick={() => toggleDetails(initiative.id)}>
              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                  <div className="flex-grow min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-mono text-text-muted bg-white/5 px-1.5 py-0.5 rounded">{initiative.id}</span>
                          {initiative.tier && <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border uppercase tracking-wider ${getTierBadgeStyle(initiative.tier)}`}>{initiative.tier}</span>}
                      </div>
                      <div className="flex items-center gap-3 mb-1 pr-4">
                          <h4 className="text-lg font-semibold text-text-primary truncate">{initiative.name}</h4>
                          <div className={`flex-shrink-0 flex items-center gap-1.5 px-2.5 py-0.5 rounded-md border ${bg} ${border} ${textColor}`}>
                              <StatusIcon className="w-3.5 h-3.5" />
                              <span className="text-[10px] font-bold uppercase tracking-wider">{status}</span>
                          </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-2 text-sm text-text-secondary">
                          {initiative.responsibleBranch && <span className="flex items-center gap-1.5"><Building className="w-3.5 h-3.5 text-primary"/> <span className="font-semibold text-text-primary">Branch:</span> {initiative.responsibleBranch}</span>}
                          {initiative.lead && <span className="flex items-center gap-1.5" title="Sector"><Briefcase className="w-3.5 h-3.5 text-primary"/> <span className="font-semibold text-text-primary">Sector:</span> {normalizeSector(initiative.lead)}</span>}
                          <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5"/> <span className="font-semibold text-text-primary">Target:</span> {initiative.plan_end}</span>
                          {lastUpdateDate && (
                              <span className="flex items-center gap-1.5" title="Last Progress Update">
                                  <History className="w-3.5 h-3.5 text-blue-400"/> 
                                  <span className="font-semibold text-text-primary">Updated:</span> {lastUpdateDate}
                              </span>
                          )}
                      </div>
                  </div>
                  <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
                       <InitiativeProgressBar initiative={initiative} showText={true} className="min-w-[140px]" />
                       <ChevronDown className={`w-5 h-5 text-text-muted transition-transform ${isDetailsOpen ? 'rotate-180' : ''}`} />
                  </div>
              </div>
          </div>
          <AnimatePresence>
              {isDetailsOpen && (
                  <MotionDiv initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="border-t border-white/5 bg-black/20">
                      <div className="p-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm mb-4">
                              <div className="space-y-4">
                                  <div><h5 className="text-xs font-bold uppercase text-text-muted mb-1 flex items-center gap-2"><BookOpen className="w-3 h-3"/> Description</h5><p className="text-text-secondary leading-relaxed">{initiative.description || "No description available."}</p></div>
                                  <div><h5 className="text-xs font-bold uppercase text-text-muted mb-1 flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-primary"/> Expected Strategic Outcome</h5><p className="text-text-primary font-bold bg-primary/5 p-3 rounded-lg border border-primary/20">{initiative.expectedOutcome || "Strategic transformation of infrastructure services."}</p></div>
                                  <div><h5 className="text-xs font-bold uppercase text-text-muted mb-1 flex items-center gap-2"><Target className="w-3 h-3"/> Related KPI</h5><p className="text-text-primary font-medium">{initiative.kpiText || "N/A"}</p></div>
                              </div>
                              <div className="space-y-4">
                                  <div><div className="flex items-center justify-between mb-2"><h5 className="text-xs font-bold uppercase text-text-muted flex items-center gap-2"><NotebookText className="w-3 h-3"/> Recent Progress Updates</h5></div>
                                      {sortedHistory.length > 0 ? (
                                          <div className="bg-surface-light/30 border border-white/10 rounded-lg max-h-48 overflow-y-auto custom-scrollbar">
                                              {sortedHistory.map((update, idx) => (
                                                  <div key={idx} className="p-3 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                                                      <div className="flex items-center justify-between mb-1"><span className="text-[10px] text-text-secondary font-mono bg-white/5 px-1.5 py-0.5 rounded">{update.date}</span><span className={`text-xs font-bold ${update.progress >= 100 ? 'text-green-400' : 'text-primary'}`}>{update.progress}%</span></div>
                                                      <p className="text-sm text-text-primary/90 leading-relaxed">{update.note}</p>
                                                  </div>))}
                                          </div>
                                      ) : <div className="text-xs text-text-muted italic p-3 border border-dashed border-white/10 rounded-lg text-center">No progress updates recorded.</div>}
                                  </div>
                              </div>
                          </div>
                          <div className="flex justify-start"><button onClick={(e) => toggleStrategic(e, initiative.id)} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-bold text-primary transition-all">{isStrategicOpen ? <ChevronUp className="w-4 h-4"/> : <ChevronDown className="w-4 h-4"/>}{isStrategicOpen ? 'Hide Detail View' : 'View Strategic Context'}</button></div>
                          <AnimatePresence>
                              {isStrategicOpen && (
                                  <MotionDiv initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm pt-4 mt-2 border-t border-dashed border-white/10">
                                          <div className="space-y-4">
                                              <div className="grid grid-cols-2 gap-4">
                                                  <div><h5 className="text-xs font-bold uppercase text-text-muted mb-1 flex items-center gap-2"><Calendar className="w-3 h-3"/> Plan Start</h5><p className="text-text-primary font-mono">{initiative.plan_start}</p></div>
                                                  <div><h5 className="text-xs font-bold uppercase text-text-muted mb-1 flex items-center gap-2"><Flag className="w-3 h-3"/> Plan End</h5><p className="text-text-primary font-mono">{initiative.plan_end}</p></div>
                                              </div>
                                              <div><h5 className="text-xs font-bold uppercase text-text-muted mb-1 flex items-center gap-2"><ShieldAlert className="w-3 h-3"/> Strategic Risks & Mitigation</h5><div className="bg-white/5 p-3 rounded-lg border border-white/5 text-text-secondary space-y-2"><p className="whitespace-pre-wrap font-medium text-white/80">{initiative.risks || "None identified."}</p>{initiative.mitigation && <div className="mt-2 pt-2 border-t border-white/10"><strong className="block text-xs text-green-400 uppercase mb-1">Mitigation Strategy</strong><p className="whitespace-pre-wrap">{initiative.mitigation}</p></div>}</div></div>
                                          </div>
                                          <div className="space-y-4">
                                              <div className="grid grid-cols-2 gap-4">
                                                  <div><h5 className="text-xs font-bold uppercase text-text-muted mb-1 flex items-center gap-2"><Coins className="w-3 h-3"/> Budget Estimate</h5><p className="text-text-primary font-semibold">{initiative.budgetEstimate || "N/A"}</p></div>
                                                  <div><h5 className="text-xs font-bold uppercase text-text-muted mb-1 flex items-center gap-2"><Trophy className="w-3 h-3"/> Primary Success Indicator</h5><p className="text-text-primary">{initiative.successIndicators || "N/A"}</p></div>
                                              </div>
                                              {initiative.notes && <div><h5 className="text-xs font-bold uppercase text-text-muted mb-1 flex items-center gap-2"><FileText className="w-3 h-3"/> Managerial Notes</h5><p className="text-text-secondary whitespace-pre-wrap bg-amber-500/5 p-3 rounded-lg border border-amber-500/20">{initiative.notes}</p></div>}
                                          </div>
                                      </div>
                                  </MotionDiv>
                              )}
                          </AnimatePresence>
                          {isAdminMode && (<div className="flex gap-3 pt-6 border-t border-white/5 mt-4"><button onClick={(e) => { e.stopPropagation(); onEditInitiative?.(initiative); }} className="flex-1 py-2 bg-surface border border-white/10 hover:bg-white/5 rounded-lg text-text-secondary hover:text-white transition-colors flex items-center justify-center gap-2"><Edit className="w-4 h-4"/> Edit / Update</button>{canDelete && (<button onClick={(e) => { e.stopPropagation(); onDeleteInitiative?.(initiative.id); }} className="flex-1 py-2 bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 rounded-lg text-red-400 transition-colors flex items-center justify-center gap-2"><Trash2 className="w-4 h-4"/> Delete</button>)}</div>)}
                      </div>
                  </MotionDiv>
              )}
          </AnimatePresence>
        </MotionDiv>
      );
  };

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-text-primary mb-4 uppercase tracking-tight">Strategic Initiative Portfolio</h2>
        <p className="text-text-secondary max-w-3xl mx-auto">
          Tracking the execution of 145 strategic transformation initiatives. Explore by responsible branch or strategic outcome to see our commitment in action.
        </p>
      </div>

      <div className="sticky top-40 z-40 glass-panel rounded-2xl p-4 shadow-2xl border border-white/10">
        <div className="flex flex-col lg:flex-row gap-4 items-center">
             <div className="w-full lg:w-auto flex-grow relative group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted group-focus-within:text-primary transition-colors" />
                <input type="text" placeholder="Search by ID, Name, Description or Outcome..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full bg-surface border border-white/20 rounded-xl pl-10 pr-4 py-2.5 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all shadow-inner" />
            </div>
            
            <div className="w-full lg:w-auto flex flex-wrap gap-2 items-center">
                <div className="relative min-w-[140px]">
                    <select value={selectedThrustId} onChange={e => setSelectedThrustId(e.target.value)} className="w-full appearance-none bg-surface border border-white/20 rounded-xl pl-4 pr-10 py-2.5 text-sm text-text-primary focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none cursor-pointer hover:bg-surface-light transition-colors shadow-sm">
                      <option value="all">All Pillars</option>
                      {strategicThrusts.map(thrust => <option key={thrust.id} value={thrust.id}>Pillar {thrust.id}</option>)}
                      <option value="7">Foundation Enabler</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
                </div>
                <div className="relative min-w-[160px]">
                    <select value={selectedLead} onChange={e => setSelectedLead(e.target.value)} className="w-full appearance-none bg-surface border border-white/20 rounded-xl pl-4 pr-10 py-2.5 text-sm text-text-primary focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none cursor-pointer hover:bg-surface-light transition-colors shadow-sm">
                      <option value="all">All Sectors</option>
                      {Object.keys(SECTOR_BRANCH_MAP).map(sector => <option key={sector} value={sector}>{sector}</option>)}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
                </div>
                <div className="relative min-w-[140px]">
                    <select value={selectedStatus} onChange={e => setSelectedStatus(e.target.value)} className="w-full appearance-none bg-surface border border-white/20 rounded-xl pl-4 pr-10 py-2.5 text-sm text-text-primary focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none cursor-pointer hover:bg-surface-light transition-colors shadow-sm">
                        <option value="all">All Statuses</option>
                        <option value="On Track">On Track</option>
                        <option value="Ahead of Schedule">Ahead</option>
                        <option value="At Risk">At Risk</option>
                        <option value="Overdue">Overdue</option>
                        <option value="Completed">Completed</option>
                        <option value="Not Started">Not Started</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
                </div>
                <div className="flex gap-2">
                    <div className="relative min-w-[120px]">
                        <select value={sortKey} onChange={e => setSortKey(e.target.value)} className="w-full appearance-none bg-surface border border-white/20 rounded-xl pl-4 pr-10 py-2.5 text-sm text-text-primary focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none cursor-pointer hover:bg-surface-light transition-colors shadow-sm">
                            <option value="none">Sort By</option>
                            <option value="plan_start">Plan Start</option>
                            <option value="plan_end">Plan End</option>
                            <option value="progress">Progress</option>
                            <option value="riskLevel">Risk Level</option>
                        </select>
                        <ArrowUpDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-text-muted pointer-events-none" />
                    </div>
                    {sortKey !== 'none' && (
                        <button onClick={toggleSortDirection} className="p-2.5 bg-surface border border-white/20 rounded-xl text-text-secondary hover:text-primary hover:bg-surface-light transition-colors">
                            {sortDirection === 'asc' ? <ArrowUp className="w-5 h-5"/> : <ArrowDown className="w-5 h-5"/>}
                        </button>
                    )}
                </div>
                <button onClick={handleResetFilters} className="p-2.5 text-text-secondary hover:text-primary hover:bg-white/10 rounded-xl transition-colors flex-shrink-0" title="Reset Filters"><RotateCcw className="w-5 h-5"/></button>
            </div>
        </div>
      </div>

      <div className="space-y-16">
        <div className="space-y-8">
            {activeThrusts.map(thrust => (
            <div key={thrust.id} className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-surface to-transparent border-l-4 border-primary">
                    <div className={`w-12 h-12 rounded-xl ${thrust.color} flex items-center justify-center shadow-lg text-white`}><thrust.icon className="w-6 h-6" /></div>
                    <div><h3 className="text-xl font-bold text-text-primary">Pillar {thrust.id}: {thrust.title}</h3><p className="text-sm text-text-secondary hidden sm:block">{thrust.description}</p></div>
                    {isAdminMode && <button onClick={() => onAddInitiative && onAddInitiative(thrust.id)} className="ml-auto flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all text-sm font-semibold"><PlusCircle className="w-4 h-4" /> <span className="hidden sm:inline">Add</span></button>}
                </div>
                <div className="grid grid-cols-1 gap-4">
                    {(initiativesByThrust[thrust.id] || []).map(initiative => renderInitiative(initiative, thrust.color))}
                </div>
            </div>
            ))}
        </div>

        {ecosystemInitiatives.length > 0 && (
            <div className="space-y-6 pt-12 border-t border-white/5 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-1 bg-background border border-white/10 rounded-full text-xs font-bold text-emerald-400 uppercase tracking-widest">Enabling Foundation</div>
                <div className="flex flex-col items-center text-center mb-8">
                    <div className="w-20 h-20 rounded-3xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.2)] mb-4">
                        <Layers className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-black text-text-primary uppercase tracking-tighter">{foundationThrust.title}</h3>
                    <p className="text-text-secondary max-w-2xl mt-2 italic">Essential enablers ensuring the machinery of delivery is well-oiled.</p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    {ecosystemInitiatives.map(initiative => renderInitiative(initiative, 'bg-emerald-600'))}
                </div>
            </div>
        )}
      </div>
    </div>
  );
};
