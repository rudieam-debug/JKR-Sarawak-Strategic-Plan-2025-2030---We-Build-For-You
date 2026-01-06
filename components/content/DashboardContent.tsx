
import React, { useState, useMemo } from 'react';
import type { KPI, Initiative, StrategicThrust } from '../../types';
import { PlusCircle, RotateCcw, BarChartHorizontal, Activity, TrendingUp, AlertTriangle, CheckCircle, ChevronDown, Search } from 'lucide-react';
import { KpiCard } from '../KpiCard';
import { ConfirmActionModal } from '../ConfirmActionModal';

interface DashboardContentProps {
    kpis: KPI[];
    isAdminMode: boolean;
    canDelete?: boolean;
    onEditKpi: (index: number) => void;
    onAddKpi: () => void;
    onDeleteKpi: (index: number) => void;
    initiatives: Initiative[];
    strategicThrusts: StrategicThrust[];
    onResetAllProgress?: () => void;
}

export const DashboardContent: React.FC<DashboardContentProps> = ({ kpis, isAdminMode, canDelete = false, onEditKpi, onAddKpi, onDeleteKpi, initiatives, strategicThrusts, onResetAllProgress }) => {
    
    const [filterThrust, setFilterThrust] = useState('all');
    const [filterStatus, setFilterStatus] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [isResetConfirmOpen, setIsResetConfirmOpen] = useState(false);

    const initiativesMap = useMemo(() => new Map(initiatives.map(init => [init.id, init])), [initiatives]);
    
    const derivedKpis = useMemo(() => {
        return kpis.map(kpi => {
            const match = kpi.name.match(/^(I-\d+\.\d+)/);
            const initiativeId = match ? match[1] : null;
            const linkedInitiative = initiativeId ? initiativesMap.get(initiativeId) : null;

            let derivedData: any;

            if (linkedInitiative) {
                derivedData = {
                    ...kpi,
                    type: 'initiative',
                    currentValue: linkedInitiative.progress,
                    targetValue: 100,
                    current: `${linkedInitiative.progress}% Complete`,
                    target: '100% Complete',
                    isLinked: true,
                    linkedInitiative: linkedInitiative,
                    thrustId: linkedInitiative.thrustId,
                    actual_end: linkedInitiative.actual_end || linkedInitiative.plan_end
                };
            } else {
                 derivedData = { ...kpi, type: 'manual', isLinked: false, linkedInitiative: null, thrustId: null };
            }
            
            let percentage = 0;
            if (derivedData.targetValue > 0) {
                percentage = (derivedData.currentValue / derivedData.targetValue) * 100;
            }
            derivedData.percentage = Math.min(100, Math.max(0, percentage));
            derivedData.original = kpi;

            return derivedData;
        });
    }, [kpis, initiativesMap]);

    const filteredKpis = useMemo(() => {
        return derivedKpis.filter(kpi => {
            const thrustMatch = filterThrust === 'all' || (kpi.thrustId && kpi.thrustId.toString() === filterThrust);
            const statusMatch = (() => {
                if (filterStatus === 'all') return true;
                const p = kpi.percentage;
                if (filterStatus === 'on-track') return p >= 50 && p < 100;
                if (filterStatus === 'at-risk') return p < 50;
                if (filterStatus === 'completed') return p === 100;
                return true;
            })();
            const searchMatch = searchQuery.trim() === '' || kpi.name.toLowerCase().includes(searchQuery.trim().toLowerCase());
            return thrustMatch && statusMatch && searchMatch;
        });
    }, [derivedKpis, filterThrust, filterStatus, searchQuery]);
    
    const summaryStats = useMemo(() => {
        const total = derivedKpis.length;
        if (total === 0) return { total: 0, avgProgress: 0, onTrack: 0, atRisk: 0, completed: 0 };
        const totalProgress = derivedKpis.reduce((sum, kpi) => sum + kpi.percentage, 0);
        const avgProgress = totalProgress / total;
        const onTrack = derivedKpis.filter(kpi => kpi.percentage >= 50 && kpi.percentage < 100).length;
        const atRisk = derivedKpis.filter(kpi => kpi.percentage < 50).length;
        const completed = derivedKpis.filter(kpi => kpi.percentage === 100).length;
        return { total, avgProgress, onTrack, atRisk, completed };
    }, [derivedKpis]);

    const handleResetFilters = () => {
        setFilterThrust('all');
        setFilterStatus('all');
        setSearchQuery('');
    };

    return (
        <div className="space-y-10">
            <div className="text-center">
                <h2 className="text-3xl font-black text-text-primary uppercase tracking-tighter mb-2">KPI Executive Dashboard</h2>
                <p className="text-text-secondary max-w-4xl mx-auto">
                    A streamlined view of Key Performance Indicators. Linked metrics update automatically based on initiative progress.
                </p>
            </div>

            {/* Summary & Filters */}
            <div className="glass-panel p-6 rounded-2xl shadow-xl border border-white/10 space-y-6 bg-surface-light/20">
                 <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                     <div className="p-4 bg-background/50 rounded-xl border border-white/5">
                        <BarChartHorizontal className="w-5 h-5 mx-auto mb-2 text-text-muted"/>
                        <p className="text-2xl font-black text-text-primary leading-tight">{summaryStats.total}</p>
                        <p className="text-[10px] font-black text-text-muted uppercase tracking-widest mt-1">Total Metrics</p>
                    </div>
                    <div className="p-4 bg-background/50 rounded-xl border border-white/5">
                        <Activity className="w-5 h-5 mx-auto mb-2 text-blue-500"/>
                        <p className="text-2xl font-black text-text-primary leading-tight">{Math.round(summaryStats.avgProgress)}%</p>
                        <p className="text-[10px] font-black text-text-muted uppercase tracking-widest mt-1">Avg Efficiency</p>
                    </div>
                    <div className="p-4 bg-background/50 rounded-xl border border-white/5">
                        <TrendingUp className="w-5 h-5 mx-auto mb-2 text-green-500"/>
                        <p className="text-2xl font-black text-text-primary leading-tight">{summaryStats.onTrack}</p>
                        <p className="text-[10px] font-black text-text-muted uppercase tracking-widest mt-1">On Track</p>
                    </div>
                    <div className="p-4 bg-background/50 rounded-xl border border-white/5">
                        <AlertTriangle className="w-5 h-5 mx-auto mb-2 text-yellow-500"/>
                        <p className="text-2xl font-black text-text-primary leading-tight">{summaryStats.atRisk}</p>
                        <p className="text-[10px] font-black text-text-muted uppercase tracking-widest mt-1">At Risk</p>
                    </div>
                     <div className="p-4 bg-background/50 rounded-xl border border-white/5">
                        <CheckCircle className="w-5 h-5 mx-auto mb-2 text-blue-400"/>
                        <p className="text-2xl font-black text-text-primary leading-tight">{summaryStats.completed}</p>
                        <p className="text-[10px] font-black text-text-muted uppercase tracking-widest mt-1">Completed</p>
                    </div>
                 </div>

                 <div className="pt-6 border-t border-white/10 grid grid-cols-1 md:grid-cols-12 gap-4">
                    <div className="md:col-span-3 relative">
                        <select 
                            value={filterThrust} 
                            onChange={e => setFilterThrust(e.target.value)} 
                            className="w-full appearance-none bg-surface border border-white/10 rounded-xl pl-4 pr-10 py-2.5 text-sm text-text-primary focus:ring-1 focus:ring-primary focus:outline-none"
                        >
                            <option value="all">All Pillars</option>
                            {strategicThrusts.map(thrust => <option key={thrust.id} value={thrust.id}>Pillar {thrust.id}</option>)}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
                    </div>
                    <div className="md:col-span-3">
                        <div className="flex bg-surface border border-white/10 p-1 rounded-xl">
                            {(['all', 'on-track', 'at-risk', 'completed'] as const).map(f => (
                                <button key={f} onClick={() => setFilterStatus(f)} className={`flex-1 text-[10px] font-black uppercase tracking-widest py-2 rounded-lg transition-all ${filterStatus === f ? 'bg-primary text-white' : 'text-text-muted hover:text-text-primary'}`}>
                                    {f.replace('-', ' ')}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="md:col-span-5 relative group">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted group-focus-within:text-primary transition-colors" />
                        <input
                            type="text"
                            placeholder="Search metrics..."
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                            className="w-full bg-surface border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-text-primary focus:ring-1 focus:ring-primary focus:outline-none"
                        />
                    </div>
                    <div className="md:col-span-1 flex gap-2">
                        <button onClick={handleResetFilters} className="p-2.5 text-text-muted hover:text-primary transition-colors"><RotateCcw className="w-5 h-5"/></button>
                    </div>
                 </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredKpis.map((derivedKpi, index) => (
                    <KpiCard 
                        key={index}
                        kpi={derivedKpi} 
                        isAdminMode={isAdminMode} 
                        onEdit={() => onEditKpi(kpis.indexOf(derivedKpi.original))}
                        onDelete={canDelete ? () => onDeleteKpi(kpis.indexOf(derivedKpi.original)) : () => {}}
                    />
                ))}
                {isAdminMode && (
                    <button onClick={onAddKpi} className="flex flex-col items-center justify-center bg-surface-light/5 border-2 border-dashed border-white/10 rounded-2xl p-6 hover:border-primary/50 hover:bg-primary/5 transition-all text-text-muted group min-h-[120px]">
                        <PlusCircle className="w-8 h-8 mb-2 group-hover:text-primary transition-colors" />
                        <span className="font-bold text-xs uppercase tracking-widest group-hover:text-text-primary">Add Metric</span>
                    </button>
                )}
            </div>
            
            {onResetAllProgress && canDelete && (
                <ConfirmActionModal 
                    isOpen={isResetConfirmOpen}
                    onClose={() => setIsResetConfirmOpen(false)}
                    onConfirm={() => { onResetAllProgress(); setIsResetConfirmOpen(false); }}
                    title="Reset Global Progress?"
                    confirmText="Reset Now"
                >
                    <p>Are you sure you want to reset the progress of all initiatives and KPIs? This will return the strategy execution state to baseline.</p>
                </ConfirmActionModal>
            )}
        </div>
    );
};
