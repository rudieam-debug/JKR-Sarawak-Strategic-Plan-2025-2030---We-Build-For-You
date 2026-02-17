
import React, { useState, useMemo, useRef, useEffect, Fragment, useCallback } from 'react';
import { strategicThrusts, foundationThrust, kpis as allKpis } from '../../assets/strategicData';
import type { Initiative, ChecklistPhase } from '../../types';
import { 
    Info, 
    Filter, 
    RotateCcw, 
    ChevronDown, 
    CheckSquare, 
    Square, 
    Move, 
    ZoomIn, 
    ZoomOut, 
    GripVertical, 
    TrendingUp, 
    AlertTriangle, 
    CheckCircle, 
    Calendar, 
    GripHorizontal, 
    History, 
    Zap, 
    Link as LinkIcon, 
    GitCommit,
    X,
    Target,
    ShieldAlert,
    ListChecks,
    Building,
    Briefcase,
    Clock,
    CheckCircle2,
    BarChart3,
    Edit
} from 'lucide-react';
import { getChecklistForInitiative } from '../../data/checklistData';
import { motion, AnimatePresence } from 'framer-motion';

const MotionDiv = motion.div as any;

interface TimelineContentProps {
    initiatives: Initiative[];
    isAdminMode?: boolean;
    onEditInitiative?: (initiative: Initiative) => void;
    onUpdateDates?: (id: string, newPlanStart: string, newPlanEnd: string) => void;
}

interface DependencyPath {
    id: string;
    d: string;
    strokeColor: string;
    strokeWidth: number;
    opacity: number;
    markerEnd: string;
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

const parseDate = (dateString: string): Date | null => {
  if (!dateString) return null;
  const parts = dateString.split('/');
  if (parts.length !== 3) return null;
  const [day, month, year] = parts.map(Number);
  if (isNaN(day) || isNaN(month) || isNaN(year)) return null;
  return new Date(year, month - 1, day);
};

const formatDate = (date: Date): string => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};

const getInitiativeStatus = (initiative: Initiative) => {
    const today = new Date('2026-07-01');
    today.setHours(0, 0, 0, 0);
    const planEnd = parseDate(initiative.plan_end);
    const planStart = parseDate(initiative.plan_start);
    if (initiative.progress >= 100) {
        return { status: 'Completed', icon: CheckCircle, textColor: 'text-blue-400', barColor: 'bg-blue-500', bg: 'bg-blue-500/20', border: 'border-blue-500/30', progressColor: 'bg-blue-500' };
    }
    if (planEnd && planEnd < today) {
        return { status: 'Overdue', icon: AlertTriangle, textColor: 'text-primary', barColor: 'bg-primary', bg: 'bg-primary/20', border: 'border-primary/30', progressColor: 'bg-primary' };
    }
    if (planStart && today < planStart) {
       return { status: 'Not Started', icon: Calendar, textColor: 'text-gray-400', barColor: 'bg-slate-500', bg: 'bg-surface-light', border: 'border-white/10', progressColor: 'bg-slate-500' };
    }
    if (planStart && planEnd) {
        const totalDuration = planEnd.getTime() - planStart.getTime();
        const elapsedDuration = today.getTime() - planStart.getTime();
        if (totalDuration > 0) {
            const expectedProgress = (elapsedDuration / totalDuration) * 100;
            if (initiative.progress > expectedProgress + 5) {
                 return { status: 'Ahead of Schedule', icon: Zap, textColor: 'text-emerald-400', barColor: 'bg-emerald-500', bg: 'bg-emerald-500/20', border: 'border-emerald-500/30', progressColor: 'bg-emerald-500' };
            }
            if (initiative.progress < expectedProgress - 15) {
                return { status: 'At Risk', icon: AlertTriangle, textColor: 'text-amber-400', barColor: 'bg-amber-500', bg: 'bg-amber-500/20', border: 'border-amber-500/30', progressColor: 'bg-amber-500' };
            }
        }
    }
    return { status: 'On Track', icon: TrendingUp, textColor: 'text-green-400', barColor: 'bg-green-500', bg: 'bg-green-500/20', border: 'border-green-500/30', progressColor: 'bg-green-500' };
};

const PLAN_START_DATE = new Date('2025-01-01');
const PLAN_END_DATE = new Date('2030-12-31');
const TOTAL_DAYS = (PLAN_END_DATE.getTime() - PLAN_START_DATE.getTime()) / (1000 * 60 * 60 * 24);
const SIMULATED_TODAY = new Date('2026-07-01');

const Tooltip: React.FC<{ tooltipData: { x: number; y: number; initiative: Initiative } }> = ({ tooltipData }) => {
    const { x, y, initiative } = tooltipData;
    const { status, textColor } = getInitiativeStatus(initiative);
    return (
        <div 
          className="fixed z-[110] bg-surface border border-white/10 text-text-primary p-3 rounded-xl shadow-xl text-sm max-w-sm pointer-events-none transition-opacity backdrop-blur-md"
          style={{ top: y + 15, left: x + 15 }}
        >
          <p className="font-bold text-base mb-1">{initiative.id}: {initiative.name}</p>
          <p><strong>Status:</strong> <span className={`font-bold ${textColor}`}>{status}</span></p>
          <p><strong>Progress:</strong> {initiative.progress}%</p>
          <p className="text-xs text-text-muted mt-1 italic">Click to view details</p>
        </div>
    );
};

interface InitiativeDetailModalProps {
    initiative: Initiative;
    onClose: () => void;
    isAdminMode?: boolean;
    onEdit?: (init: Initiative) => void;
}

const InitiativeDetailModal: React.FC<InitiativeDetailModalProps> = ({ initiative, onClose, isAdminMode, onEdit }) => {
    const { status, icon: StatusIcon, textColor, progressColor } = getInitiativeStatus(initiative);
    const workflow = useMemo(() => getChecklistForInitiative(initiative.id, initiative.responsibleBranch, initiative.name), [initiative]);
    
    const linkedKpis = useMemo(() => {
        if (!initiative.linkedKpiIds) return [];
        return allKpis.filter(kpi => initiative.linkedKpiIds?.includes(kpi.id));
    }, [initiative]);

    return (
        <MotionDiv initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-background/80 backdrop-blur-md" onClick={onClose}>
            <MotionDiv initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="bg-surface w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl border border-white/10 overflow-hidden flex flex-col" onClick={(e: React.MouseEvent) => e.stopPropagation()}>
                <div className="p-6 border-b border-white/10 flex justify-between items-start bg-surface-light/30">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="px-2 py-0.5 rounded bg-primary/10 border border-primary/20 text-xs font-mono text-primary font-bold">{initiative.id}</span>
                            {initiative.tier && <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-text-secondary">Thrust: {initiative.thrustId}</span>}
                        </div>
                        <h2 className="text-2xl font-black text-text-primary uppercase tracking-tight leading-tight">{initiative.name}</h2>
                    </div>
                    <div className="flex items-center gap-2">
                        {isAdminMode && onEdit && (
                            <button onClick={() => onEdit(initiative)} className="p-2.5 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-xl transition-all shadow-sm flex items-center gap-2 text-xs font-black uppercase tracking-widest">
                                <Edit className="w-4 h-4" /> Edit Details
                            </button>
                        )}
                        <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full text-text-muted transition-colors"><X className="w-6 h-6" /></button>
                    </div>
                </div>

                <div className="flex-grow overflow-y-auto p-6 space-y-8 custom-scrollbar">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-background/50 p-4 rounded-xl border border-white/5">
                            <p className="text-[10px] font-black text-text-muted uppercase tracking-widest mb-2">Current Status</p>
                            <div className={`flex items-center gap-2 ${textColor} font-bold text-lg`}><StatusIcon className="w-5 h-5" />{status}</div>
                        </div>
                        <div className="bg-background/50 p-4 rounded-xl border border-white/5">
                            <p className="text-[10px] font-black text-text-muted uppercase tracking-widest mb-2">Completion Progress</p>
                            <div className="flex items-center gap-3">
                                <span className="text-2xl font-black text-text-primary">{initiative.progress}%</span>
                                <div className="flex-grow h-2 bg-surface-light rounded-full overflow-hidden"><div className={`h-full ${progressColor}`} style={{ width: `${initiative.progress}%` }}></div></div>
                            </div>
                        </div>
                        <div className="bg-background/50 p-4 rounded-xl border border-white/5">
                            <p className="text-[10px] font-black text-text-muted uppercase tracking-widest mb-2">Responsible Body</p>
                            <div className="flex items-center gap-2 text-text-primary font-bold"><Building className="w-4 h-4 text-primary" /><span className="truncate">{initiative.responsibleBranch}</span></div>
                            <p className="text-[10px] text-text-secondary mt-1">{normalizeSector(initiative.lead)}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <section>
                                <h3 className="text-sm font-black text-text-primary uppercase tracking-widest flex items-center gap-2 mb-3"><Info className="w-4 h-4 text-primary" /> Detailed Description</h3>
                                <p className="text-text-secondary text-sm leading-relaxed whitespace-pre-wrap">{initiative.description || "Implementation of high-impact strategic activity as defined in the Moving Forward Strategy 2025-2030 framework."}</p>
                            </section>
                            <section>
                                <h3 className="text-sm font-black text-text-primary uppercase tracking-widest flex items-center gap-2 mb-3"><Target className="w-4 h-4 text-primary" /> Strategic Intent & Outcome</h3>
                                <p className="text-text-secondary text-sm leading-relaxed">{initiative.expectedOutcome || "Target outcome centered on infrastructure excellence and rural inclusivity."}</p>
                                {initiative.kpiText && <div className="mt-3 p-3 bg-primary/5 border border-primary/10 rounded-lg"><p className="text-[10px] font-black text-primary uppercase mb-1">Key Performance Indicator</p><p className="text-sm text-text-primary font-medium">{initiative.kpiText}</p></div>}
                            </section>
                            {linkedKpis.length > 0 && (
                                <section>
                                    <h3 className="text-sm font-black text-text-primary uppercase tracking-widest flex items-center gap-2 mb-3"><BarChart3 className="w-4 h-4 text-primary" /> Linked Performance Metrics</h3>
                                    <div className="grid gap-2">{linkedKpis.map(kpi => (<div key={kpi.id} className="p-3 bg-blue-500/5 border border-blue-500/10 rounded-lg flex justify-between items-center group hover:bg-blue-500/10 transition-colors"><div className="min-w-0"><p className="text-[10px] font-black text-blue-400 uppercase tracking-widest">{kpi.id}</p><p className="text-sm text-text-primary font-bold truncate">{kpi.name}</p></div><div className="text-right ml-4"><p className="text-lg font-black text-text-primary">{kpi.current}</p><p className="text-[10px] text-text-muted uppercase font-bold">Target: {kpi.target}</p></div></div>))}</div>
                                </section>
                            )}
                        </div>
                        <div>
                            <h3 className="text-sm font-black text-text-primary uppercase tracking-widest flex items-center gap-2 mb-3"><ListChecks className="w-4 h-4 text-primary" /> Implementation Timeline Details</h3>
                            <div className="space-y-4">
                                {workflow.map((phase, idx) => (
                                    <div key={idx} className="relative pl-6 pb-4 border-l border-white/10 last:border-0 last:pb-0">
                                        <div className="absolute top-0 left-[-5px] w-2 h-2 rounded-full bg-primary ring-4 ring-primary/20"></div>
                                        <h4 className="text-xs font-bold text-text-primary uppercase mb-2">{phase.name}</h4>
                                        <ul className="space-y-2">{phase.items.map(item => (<li key={item.id} className="flex items-start gap-2 group"><div className="w-1 h-1 rounded-full bg-primary mt-1.5 opacity-50"></div><span className="text-xs text-text-secondary group-hover:text-text-primary transition-colors">{item.label}</span></li>))}</ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4 bg-background/50 border-t border-white/5 flex flex-wrap justify-between items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-text-muted">
                    <div className="flex gap-4"><span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Start: {initiative.plan_start}</span><span className="flex items-center gap-1"><Target className="w-3 h-3" /> Target: {initiative.plan_end}</span></div>
                    <span>JKR Sarawak Moving Forward Strategy</span>
                </div>
            </MotionDiv>
        </MotionDiv>
    );
};

export const TimelineContent: React.FC<TimelineContentProps> = ({ initiatives, isAdminMode, onEditInitiative, onUpdateDates }) => {
    const [selectedThrusts, setSelectedThrusts] = useState<Set<number>>(new Set());
    const [selectedThrustLevel, setSelectedThrustLevel] = useState('all');
    const [selectedYear, setSelectedYear] = useState('all');
    const [selectedStatus, setSelectedStatus] = useState('all');
    const [isThrustDropdownOpen, setIsThrustDropdownOpen] = useState(false);
    const [tooltip, setTooltip] = useState<{ visible: boolean; x: number; y: number; initiative: Initiative | null }>({ visible: false, x: 0, y: 0, initiative: null });
    const [isPanning, setIsPanning] = useState(false);
    const [zoomLevel, setZoomLevel] = useState(1);
    const [labelWidth, setLabelWidth] = useState(30);
    const [showDependencies, setShowDependencies] = useState(false);
    const [showCriticalPath, setShowCriticalPath] = useState(false);
    const [dependencyPaths, setDependencyPaths] = useState<DependencyPath[]>([]);
    const [modalInitiative, setModalInitiative] = useState<Initiative | null>(null);
    const [isDraggingBar, setIsDraggingBar] = useState(false);
    const [dragMode, setDragMode] = useState<'move' | 'resize-start' | 'resize-end'>('move');
    const [draggedInitiativeId, setDraggedInitiativeId] = useState<string | null>(null);
    const dragStartRef = useRef<{ x: number, startDate: Date, endDate: Date } | null>(null);
    const [optimisticDates, setOptimisticDates] = useState<Record<string, { start: Date, end: Date }>>({});
    const thrustFilterRef = useRef<HTMLDivElement>(null);
    const timelineContainerRef = useRef<HTMLDivElement>(null);
    const timelineGridRef = useRef<HTMLDivElement>(null);
    const panState = useRef({ startX: 0, scrollLeft: 0 });
    const isResizing = useRef(false);
    const rowRefs = useRef<Map<string, HTMLDivElement>>(new Map());

    const handleResetFilters = () => { setSelectedThrusts(new Set()); setSelectedThrustLevel('all'); setSelectedStatus('all'); setSelectedYear('all'); };
    const handleThrustToggle = (thrustId: number) => setSelectedThrusts(prev => { const newSet = new Set(prev); if (newSet.has(thrustId)) newSet.delete(thrustId); else newSet.add(thrustId); return newSet; });
    
    const filteredInitiatives = useMemo(() => {
        return initiatives.filter(initiative => {
            const thrustMatch = selectedThrusts.size === 0 || selectedThrusts.has(initiative.thrustId);
            const thrustLevelMatch = selectedThrustLevel === 'all' || initiative.tier === selectedThrustLevel;
            const yearMatch = (() => { if (selectedYear === 'all') return true; const yearToFilter = Number(selectedYear); const start = parseDate(initiative.plan_start); const end = parseDate(initiative.plan_end); if (!start || !end) return false; return yearToFilter >= start.getFullYear() && yearToFilter <= end.getFullYear(); })();
            const statusMatch = (() => { if (selectedStatus === 'all') return true; const { status } = getInitiativeStatus(initiative); return status.toLowerCase().replace(' ', '-') === selectedStatus; })();
            return thrustMatch && thrustLevelMatch && statusMatch && yearMatch;
        });
    }, [selectedThrusts, selectedThrustLevel, selectedStatus, selectedYear, initiatives]);
    
    const activeThrusts = useMemo(() => {
        const allPossibleThrusts = [...strategicThrusts, foundationThrust];
        return allPossibleThrusts.filter(thrust => filteredInitiatives.some(i => i.thrustId === thrust.id));
    }, [filteredInitiatives]);

    const handleResizeMouseDown = (e: React.MouseEvent) => { e.preventDefault(); isResizing.current = true; document.addEventListener('mousemove', handleResizeMouseMove); document.addEventListener('mouseup', handleResizeMouseUp); };
    const handleResizeMouseMove = useCallback((e: MouseEvent) => { if (!isResizing.current || !timelineGridRef.current) return; const gridRect = timelineGridRef.current.getBoundingClientRect(); const newWidthPercent = ((e.clientX - gridRect.left) / gridRect.width) * 100; setLabelWidth(Math.max(15, Math.min(60, newWidthPercent))); }, []);
    const handleResizeMouseUp = useCallback(() => { isResizing.current = false; document.removeEventListener('mousemove', handleResizeMouseMove); document.removeEventListener('mouseup', handleResizeMouseUp); }, []);

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => { if (e.button !== 0 || isResizing.current || isDraggingBar) return; setIsPanning(true); panState.current = { startX: e.clientX, scrollLeft: timelineContainerRef.current!.scrollLeft }; e.preventDefault(); };
    const handleGlobalMouseMove = useCallback((e: MouseEvent) => { if (!isPanning || !timelineContainerRef.current) return; timelineContainerRef.current.scrollLeft = panState.current.scrollLeft - ((e.clientX - panState.current.startX) * 1.5); }, [isPanning]);
    const handleGlobalMouseUp = useCallback(() => setIsPanning(false), []);

    useEffect(() => {
        if (isPanning) { window.addEventListener('mousemove', handleGlobalMouseMove); window.addEventListener('mouseup', handleGlobalMouseUp); }
        else { window.removeEventListener('mousemove', handleGlobalMouseMove); window.removeEventListener('mouseup', handleGlobalMouseUp); }
        return () => { window.removeEventListener('mousemove', handleGlobalMouseMove); window.removeEventListener('mouseup', handleGlobalMouseUp); };
    }, [isPanning, handleGlobalMouseMove, handleGlobalMouseUp]);

    const handleDragStart = (e: React.MouseEvent, initiative: Initiative, mode: 'move' | 'resize-start' | 'resize-end') => {
        if (!isAdminMode || !onUpdateDates) return;
        e.preventDefault(); e.stopPropagation();
        const pStart = parseDate(initiative.plan_start);
        const pEnd = parseDate(initiative.plan_end);
        if (!pStart || !pEnd) return;
        setIsDraggingBar(true); setDragMode(mode); setDraggedInitiativeId(initiative.id);
        dragStartRef.current = { x: e.clientX, startDate: pStart, endDate: pEnd };
        document.addEventListener('mousemove', handleGlobalBarMove);
        document.addEventListener('mouseup', handleGlobalBarUp);
    };

    const handleGlobalBarMove = useCallback((e: MouseEvent) => {
        if (!dragStartRef.current || !timelineGridRef.current || !draggedInitiativeId) return;
        const gridRect = timelineGridRef.current.getBoundingClientRect();
        const pixelsPerDay = (gridRect.width * ((100 - labelWidth) / 100)) / TOTAL_DAYS;
        const deltaDays = Math.round((e.clientX - dragStartRef.current.x) / pixelsPerDay);
        let newStart = new Date(dragStartRef.current.startDate);
        let newEnd = new Date(dragStartRef.current.endDate);
        if (dragMode === 'move') { newStart.setDate(newStart.getDate() + deltaDays); newEnd.setDate(newEnd.getDate() + deltaDays); }
        else if (dragMode === 'resize-start') newStart.setDate(newStart.getDate() + deltaDays);
        else if (dragMode === 'resize-end') newEnd.setDate(newEnd.getDate() + deltaDays);
        if (newStart.getTime() < PLAN_START_DATE.getTime()) newStart = new Date(PLAN_START_DATE);
        if (newEnd.getTime() > PLAN_END_DATE.getTime()) newEnd = new Date(PLAN_END_DATE);
        if (newStart >= newEnd) { if (dragMode === 'resize-start') newStart = new Date(newEnd.getTime() - 86400000); else newEnd = new Date(newStart.getTime() + 86400000); }
        setOptimisticDates(prev => ({ ...prev, [draggedInitiativeId]: { start: newStart, end: newEnd } }));
    }, [labelWidth, draggedInitiativeId, dragMode]);

    const handleGlobalBarUp = useCallback(() => {
        setIsDraggingBar(false);
        document.removeEventListener('mousemove', handleGlobalBarMove);
        document.removeEventListener('mouseup', handleGlobalBarUp);
        if (draggedInitiativeId && optimisticDates[draggedInitiativeId] && onUpdateDates) {
            const opt = optimisticDates[draggedInitiativeId];
            onUpdateDates(draggedInitiativeId, formatDate(opt.start), formatDate(opt.end));
        }
        setDraggedInitiativeId(null); setOptimisticDates({}); dragStartRef.current = null;
    }, [draggedInitiativeId, optimisticDates, onUpdateDates]);

    const handleBarMouseEnter = (e: React.MouseEvent, initiative: Initiative) => { if (!isDraggingBar) setTooltip({ visible: true, x: e.clientX, y: e.clientY, initiative }); };
    
    const criticalPathIds = useMemo(() => {
        if (!showCriticalPath) return new Set<string>();
        const graph = new Map<string, { duration: number, preds: string[], es: number, ef: number }>();
        initiatives.forEach(i => {
            const start = parseDate(i.plan_start); const end = parseDate(i.plan_end);
            if(start && end) graph.set(i.id, { duration: (end.getTime() - start.getTime()) / 86400000, preds: i.predecessors || [], es: 0, ef: 0 });
        });
        let changed = true; while (changed) { changed = false; graph.forEach((node) => { let maxPrevEF = 0; node.preds.forEach(pid => { const p = graph.get(pid); if (p && p.ef > maxPrevEF) maxPrevEF = p.ef; }); if (node.es !== maxPrevEF) { node.es = maxPrevEF; node.ef = node.es + node.duration; changed = true; } }); }
        const maxEF = Math.max(...Array.from(graph.values()).map(n => n.ef));
        const critical = new Set<string>();
        const addCrit = (id: string) => { critical.add(id); const n = graph.get(id); if(n) n.preds.forEach(p => { const pn = graph.get(p); if(pn && Math.abs(pn.ef - n.es) < 1) addCrit(p); }); };
        graph.forEach((n, id) => { if (Math.abs(n.ef - maxEF) < 1) addCrit(id); });
        return critical;
    }, [initiatives, showCriticalPath]);

    useEffect(() => {
        if (!showDependencies) { setDependencyPaths([]); return; }
        const timer = setTimeout(() => {
            if (!timelineGridRef.current) return;
            const containerRect = timelineGridRef.current.getBoundingClientRect();
            const newPaths: DependencyPath[] = [];
            filteredInitiatives.forEach(initiative => {
                initiative.predecessors?.forEach(predId => {
                    const startEl = rowRefs.current.get(predId); const endEl = rowRefs.current.get(initiative.id);
                    if (!startEl || !endEl) return;
                    const sR = startEl.getBoundingClientRect(); const eR = endEl.getBoundingClientRect();
                    const x1 = sR.right - containerRect.left; const y1 = sR.top - containerRect.top + (sR.height / 2);
                    const x2 = eR.left - containerRect.left; const y2 = eR.top - containerRect.top + (eR.height / 2);
                    const isCrit = showCriticalPath && criticalPathIds.has(initiative.id) && criticalPathIds.has(predId);
                    newPaths.push({ id: `${predId}-${initiative.id}`, d: `M ${x1} ${y1} C ${x1 + Math.max(20, Math.abs(x2-x1)/2)} ${y1}, ${x2 - Math.max(20, Math.abs(x2-x1)/2)} ${y2}, ${x2} ${y2}`, strokeColor: isCrit ? 'stroke-red-500' : 'stroke-gray-400', strokeWidth: isCrit ? 2 : 1, opacity: isCrit ? 1 : 0.4, markerEnd: isCrit ? 'url(#arrowhead-critical)' : 'url(#arrowhead)' });
                });
            });
            setDependencyPaths(newPaths);
        }, 10);
        return () => clearTimeout(timer);
    }, [showDependencies, showCriticalPath, filteredInitiatives, zoomLevel, labelWidth, criticalPathIds]);

    const calcBarPosition = (s: Date | null, e: Date | null) => {
        if (!s || !e || s >= e) return { left: '0%', width: '0%' };
        return { left: `${((s.getTime() - PLAN_START_DATE.getTime()) / (PLAN_END_DATE.getTime() - PLAN_START_DATE.getTime())) * 100}%`, width: `${((e.getTime() - s.getTime()) / (PLAN_END_DATE.getTime() - PLAN_START_DATE.getTime())) * 100}%` };
    };

    const handleEditFromModal = (init: Initiative) => {
        setModalInitiative(null);
        if (onEditInitiative) onEditInitiative(init);
    };

    // Mini Metallic Tier Badge Styles
    const getMiniTierStyle = (tier?: string) => {
        if (tier === 'Thrust 1') return 'bg-[#FFD700]/10 border-[#FFD700]/40 text-[#FFD700]';
        if (tier === 'Thrust 2') return 'bg-[#E2E8F0]/10 border-[#E2E8F0]/40 text-[#E2E8F0]';
        if (tier === 'Thrust 3') return 'bg-[#CD7F32]/10 border-[#CD7F32]/40 text-[#CD7F32]';
        if (tier === 'ENABLER') return 'bg-cyan-500/10 border-cyan-500/50 text-cyan-200';
        return 'bg-white/5 border-white/10 text-text-muted';
    };

    return (
        <div className="space-y-10">
            <div className="text-center mb-8"><h2 className="text-3xl font-bold text-text-primary mb-4">Master Timeline & Gantt Chart</h2><p className="text-text-secondary max-w-4xl mx-auto">Reschedule initiatives by dragging bars. View dependencies and critical paths to manage implementation risks effectively.</p></div>
            <div className="glass-panel p-4 rounded-2xl shadow-2xl border border-white/10 space-y-4">
                <div className="flex flex-col lg:flex-row gap-4 items-end justify-between">
                    <div className="flex gap-4 w-full lg:w-auto">
                        <div className="relative min-w-[180px]"><label className="block text-sm font-medium text-text-secondary mb-1">Strategic Pillar</label><button onClick={() => setIsThrustDropdownOpen(!isThrustDropdownOpen)} className="w-full appearance-none bg-surface border border-white/20 rounded-xl px-4 py-2.5 text-sm text-text-primary flex justify-between items-center shadow-sm"><span>{selectedThrusts.size > 0 ? `${selectedThrusts.size} Selected` : 'All Pillars'}</span><ChevronDown className="w-4 h-4"/></button>
                        {isThrustDropdownOpen && <div className="absolute z-30 mt-1 w-full bg-surface border border-white/20 shadow-xl rounded-xl overflow-hidden max-h-52 overflow-y-auto custom-scrollbar">{[...strategicThrusts, foundationThrust].map(t => (<label key={t.id} className="flex items-center space-x-3 p-3 text-sm hover:bg-white/5 cursor-pointer border-b border-white/5"><input type="checkbox" className="hidden" checked={selectedThrusts.has(t.id)} onChange={() => handleThrustToggle(t.id)}/>{selectedThrusts.has(t.id) ? <CheckSquare className="w-5 h-5 text-primary" /> : <Square className="w-5 h-5 text-text-muted" />}<span className="text-text-primary">Pillar {t.id}</span></label>))}</div>}</div>
                        <div className="relative min-w-[140px]"><label className="block text-sm font-medium text-text-secondary mb-1">Thrust Tier</label><select value={selectedThrustLevel} onChange={e => setSelectedThrustLevel(e.target.value)} className="w-full appearance-none bg-surface border border-white/20 rounded-xl px-4 py-2.5 text-sm text-text-primary shadow-sm"><option value="all">All Tiers</option><option value="Thrust 1">Thrust 1</option><option value="Thrust 2">Thrust 2</option><option value="Thrust 3">Thrust 3</option><option value="ENABLER">Enabler</option></select></div>
                    </div>
                    <div className="flex items-center gap-3 bg-surface-light/30 p-2 rounded-xl border border-white/10"><button onClick={() => setShowDependencies(!showDependencies)} className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition-all ${showDependencies ? 'bg-primary text-white shadow-lg' : 'text-text-secondary hover:bg-white/10'}`}><LinkIcon className="w-4 h-4" /> <span>Dependencies</span></button><button onClick={() => setShowCriticalPath(!showCriticalPath)} className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition-all ${showCriticalPath ? 'bg-red-600 text-white shadow-lg' : 'text-text-secondary hover:bg-white/10'}`}><GitCommit className="w-4 h-4" /> <span>Critical Path</span></button></div>
                    <button onClick={handleResetFilters} className="flex items-center justify-center space-x-2 px-4 py-2.5 text-sm font-semibold text-text-secondary bg-surface-light rounded-xl hover:bg-white/10 transition-colors border border-white/10"><RotateCcw className="w-4 h-4"/><span>Reset</span></button>
                </div>
            </div>

            <div className="bg-surface p-0 sm:p-2 rounded-xl shadow-2xl relative border border-border">
                <div ref={timelineContainerRef} onMouseDown={handleMouseDown} className={`overflow-x-auto select-none ${isPanning ? 'cursor-grabbing' : 'cursor-grab'}`}>
                    <div ref={timelineGridRef} style={{ minWidth: `${1200 * zoomLevel * 1.5}px` }} className="relative">
                        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
                            <defs>
                                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" className="fill-gray-500 opacity-50" /></marker>
                                <marker id="arrowhead-critical" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" className="fill-red-500" /></marker>
                            </defs>
                            {dependencyPaths.map(path => <path key={path.id} d={path.d} fill="none" className={path.strokeColor} strokeWidth={path.strokeWidth} opacity={path.opacity} markerEnd={path.markerEnd} />)}
                        </svg>
                        <div className="flex sticky top-0 bg-surface z-20 border-b border-border">
                            <div style={{ width: `${labelWidth}%` }} className="flex-shrink-0 border-r border-border font-bold text-text-primary p-3">Initiative Portfolio</div>
                            <div className="flex-grow flex h-14">{[2025, 2026, 2027, 2028, 2029, 2030].map(y => (<div key={y} className="flex-1 border-r border-border/30 last:border-r-0 flex flex-col text-center"><span className="font-black text-xs text-text-primary py-1">{y}</span><div className="flex-grow flex">{[1,2,3,4].map(q => <div key={q} className="flex-1 border-r border-white/5 last:border-r-0 text-[10px] text-text-muted flex items-center justify-center">Q{q}</div>)}</div></div>))}</div>
                        </div>
                        <div className="flex relative min-h-[500px]">
                            <div onMouseDown={handleResizeMouseDown} className="absolute top-0 bottom-0 z-30 w-2 -ml-1 cursor-col-resize hover:bg-primary/10" style={{ left: `${labelWidth}%` }}><GripVertical className="absolute top-1/2 -translate-y-1/2 -ml-1.5 w-4 h-4 text-text-muted bg-surface rounded shadow-md" /></div>
                            <div className="absolute top-0 bottom-0 z-10 w-0.5 bg-red-500/80 pointer-events-none" style={{ left: `calc(${labelWidth}% + (100% - ${labelWidth}%) * ${Math.max(0, Math.min(100, ((SIMULATED_TODAY.getTime() - PLAN_START_DATE.getTime()) / (PLAN_END_DATE.getTime() - PLAN_START_DATE.getTime())) * 100)) / 100})`}}><div className="absolute top-0 -translate-x-1/2 -translate-y-full mb-1 text-[10px] font-bold text-white bg-red-500 px-1.5 py-0.5 rounded-full shadow-md uppercase tracking-tighter">NOW</div></div>
                            <div className="w-full z-10">
                               {activeThrusts.map(thrust => (
                                  <Fragment key={thrust.id}>
                                    <div className="flex bg-surface-light/80 sticky top-14 z-20 font-semibold text-text-primary border-y border-border backdrop-blur-sm"><div style={{ width: `${labelWidth}%` }} className="flex-shrink-0 p-2 border-r border-border flex items-center gap-2"><div className={`w-3 h-3 rounded-full ${thrust.shortColor}`}></div>{thrust.id === 7 ? '' : 'Strategic Pillar'} {thrust.id}: {thrust.title}</div><div className="flex-grow"></div></div>
                                    {filteredInitiatives.filter(i => i.thrustId === thrust.id).map(initiative => {
                                        const { barColor } = getInitiativeStatus(initiative); const isBeingDragged = draggedInitiativeId === initiative.id; const isCrit = showCriticalPath && criticalPathIds.has(initiative.id);
                                        const cS = isBeingDragged && optimisticDates[initiative.id] ? optimisticDates[initiative.id].start : parseDate(initiative.plan_start);
                                        const cE = isBeingDragged && optimisticDates[initiative.id] ? optimisticDates[initiative.id].end : parseDate(initiative.plan_end);
                                        const planPos = calcBarPosition(cS, cE);
                                        const aS = parseDate(initiative.actual_start) || cS;
                                        const aE = parseDate(initiative.actual_end) || (initiative.progress < 100 ? SIMULATED_TODAY : cE);
                                        const progPos = calcBarPosition(aS, new Date(aS!.getTime() + ((cE!.getTime() - cS!.getTime()) * (initiative.progress / 100))));
                                        return (
                                            <div key={initiative.id} className={`flex border-b border-white/5 group min-h-[56px] hover:bg-white/5 transition-colors cursor-pointer ${isCrit ? 'bg-red-900/10' : ''}`} onClick={() => !isDraggingBar && !isPanning && setModalInitiative(initiative)}>
                                                <div style={{ width: `${labelWidth}%` }} className="flex-shrink-0 p-3 border-r border-border flex flex-col justify-center min-w-0"><div className="flex items-center gap-2 mb-0.5"><p className={`font-semibold truncate text-xs ${isCrit ? 'text-red-400' : 'text-text-primary'}`}>{initiative.id}</p>{initiative.tier && <span className={`text-[8px] font-black px-1.5 py-0.5 rounded border uppercase tracking-tighter ${getMiniTierStyle(initiative.tier)}`}>{initiative.tier}</span>}</div><p className="text-[10px] text-text-secondary leading-tight break-words" title={initiative.name}>{initiative.name}</p></div>
                                                <div style={{ width: `${100 - labelWidth}%` }} className="relative flex flex-col justify-center px-2 gap-1 py-1"><div className="relative w-full h-3 group/bar" onMouseEnter={(e) => handleBarMouseEnter(e, initiative)} onMouseLeave={() => setTooltip(p => ({...p, visible: false}))}>
                                                    <div ref={el => { if (el) rowRefs.current.set(initiative.id, el); }} className={`absolute h-full rounded-sm border transition-colors ${isBeingDragged ? 'bg-blue-600/80 z-10' : 'bg-surface-light'} ${isCrit ? 'border-red-500' : 'border-white/10'}`} style={planPos} onMouseDown={(e) => { if (isAdminMode && onUpdateDates) { e.stopPropagation(); handleDragStart(e, initiative, 'move'); } }}>
                                                        {isAdminMode && <><div className="absolute left-0 top-0 bottom-0 w-2 cursor-w-resize z-20" onMouseDown={(e) => { e.stopPropagation(); handleDragStart(e, initiative, 'resize-start'); }} /><GripHorizontal className="w-3 h-3 text-white/30 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover/bar:opacity-100" /><div className="absolute right-0 top-0 bottom-0 w-2 cursor-e-resize z-20" onMouseDown={(e) => { e.stopPropagation(); handleDragStart(e, initiative, 'resize-end'); }} /></>}
                                                    </div></div><div className="relative w-full h-1.5 mt-0.5" onMouseEnter={(e) => handleBarMouseEnter(e, initiative)} onMouseLeave={() => setTooltip(p => ({...p, visible: false}))}><div className={`absolute h-full rounded-sm opacity-20 ${barColor}`} style={calcBarPosition(aS, aE)} /><div className={`absolute h-full rounded-sm ${barColor} shadow-sm`} style={progPos} /></div></div>
                                            </div>
                                        );
                                })}</Fragment>))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-4 right-4 z-30 flex items-center bg-surface-light/90 backdrop-blur border border-border rounded-xl shadow-xl overflow-hidden"><button onClick={() => setZoomLevel(p => Math.max(1, p-1))} disabled={zoomLevel === 1} className="p-2.5 text-text-secondary hover:text-white disabled:opacity-30 border-r border-white/10"><ZoomOut className="w-5 h-5" /></button><div className="px-4 py-2 text-sm font-bold text-text-primary min-w-[60px] text-center">{zoomLevel * 100}%</div><button onClick={() => setZoomLevel(p => Math.min(6, p+1))} disabled={zoomLevel === 6} className="p-2.5 text-text-secondary hover:text-white disabled:opacity-30 border-l border-white/10"><ZoomIn className="w-5 h-5" /></button></div>
            </div>
            
            {tooltip.visible && tooltip.initiative && <Tooltip tooltipData={{...tooltip, initiative: tooltip.initiative}} />}
            <AnimatePresence>{modalInitiative && <InitiativeDetailModal initiative={modalInitiative} onClose={() => setModalInitiative(null)} isAdminMode={isAdminMode} onEdit={handleEditFromModal} />}</AnimatePresence>
        </div>
    );
};
