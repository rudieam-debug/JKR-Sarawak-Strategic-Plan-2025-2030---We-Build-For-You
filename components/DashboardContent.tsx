
import React, { useState, useEffect, useMemo } from 'react';
import type { KPI, Initiative, StrategicThrust, KPIHistory } from '../types';
import { Edit, Save, X, PlusCircle, Trash2, Link, Link2Off, TrendingUp, AlertTriangle, CheckCircle, BarChartHorizontal, Activity, Search, ChevronDown, RotateCcw } from 'lucide-react';
import { RadialProgress } from './RadialProgress';
import { KpiTrendGraph } from './KpiTrendGraph';
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
            
            // original for KpiCard type compatibility if needed
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
    
    // Summary Stats Calculation
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

    const statusFilters = [
        { id: 'all', label: 'All Statuses' },
        { id: 'on-track', label: 'On Track' },
        { id: 'at-risk', label: 'At Risk' },
        { id: 'completed', label: 'Completed' },
    ];
    
    const handleResetFilters = () => {
        setFilterThrust('all');
        setFilterStatus('all');
        setSearchQuery('');
    };

    return (
        <div className="space-y-10">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-text-primary mb-4">Live Progress Dashboard</h2>
                <p className="text-text-secondary max-w-4xl mx-auto">
                    Interactive analysis of our Key Performance Indicators. KPIs linked to initiatives are automatically updated from the timeline.
                </p>
            </div>

            {/* Summary & Filters */}
            <div className="glass-panel p-6 rounded-xl shadow-lg border border-white/10 space-y-6">
                 <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                     <div className="p-4 bg-surface-light rounded-lg">
                        <BarChartHorizontal className="w-6 h-6 mx-auto mb-1 text-text-muted"/>
                        <p className="text-2xl font-bold text-text-primary">{summaryStats.total}</p>
                        <p className="text-sm font-medium text-text-secondary">Total KPIs</p>
                    </div>
                    <div className="p-4 bg-surface-light rounded-lg">
                        <Activity className="w-6 h-6 mx-auto mb-1 text-purple-500"/>
                        <p className="text-2xl font-bold text-text-primary">{Math.round(summaryStats.avgProgress)}%</p>
                        <p className="text-sm font-medium text-text-secondary">Avg. Progress</p>
                    </div>
                    <div className="p-4 bg-surface-light rounded-lg">
                        <TrendingUp className="w-6 h-6 mx-auto mb-1 text-green-500"/>
                        <p className="text-2xl font-bold text-text-primary">{summaryStats.onTrack}</p>
                        <p className="text-sm font-medium text-text-secondary">On Track</p>
                    </div>
                    <div className="p-4 bg-surface-light rounded-lg">
                        <AlertTriangle className="w-6 h-6 mx-auto mb-1 text-yellow-500"/>
                        <p className="text-2xl font-bold text-text-primary">{summaryStats.atRisk}</p>
                        <p className="text-sm font-medium text-text-secondary">At Risk</p>
                    </div>
                     <div className="p-4 bg-surface-light rounded-lg">
                        <CheckCircle className="w-6 h-6 mx-auto mb-1 text-blue-500"/>
                        <p className="text-2xl font-bold text-text-primary">{summaryStats.completed}</p>
                        <p className="text-sm font-medium text-text-secondary">Completed</p>
                    </div>
                 </div>
                 <div className="pt-6 border-t border-white/10 space-y-4">
                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        <div className="flex-1 w-full md:w-auto relative">
                            <label htmlFor="thrust-filter" className="sr-only">Filter by Strategic Thrust</label>
                             <div className="relative">
                                <select 
                                    id="thrust-filter" 
                                    value={filterThrust} 
                                    onChange={e => setFilterThrust(e.target.value)} 
                                    className="w-full appearance-none bg-surface border border-white/20 rounded-xl shadow-sm pl-4 pr-10 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary cursor-pointer transition-all hover:bg-surface-light text-text-primary"
                                >
                                    <option value="all">All Thrusts</option>
                                    {strategicThrusts.map(thrust => <option key={thrust.id} value={thrust.id}>Thrust {thrust.id}: {thrust.title}</option>)}
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
                            </div>
                        </div>
                         <div className="flex-1 w-full md:w-auto">
                            <label className="sr-only">Filter by Status</label>
                            <div className="flex items-center space-x-1 bg-surface-light p-1 rounded-xl">
                                {statusFilters.map(filter => (
                                    <button key={filter.id} onClick={() => setFilterStatus(filter.id)} className={`flex-1 text-center px-2 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all ${filterStatus === filter.id ? 'bg-surface text-primary shadow-sm' : 'text-text-secondary hover:bg-surface/50'}`}>
                                        {filter.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        <div className="flex-1 w-full relative">
                            <label htmlFor="kpi-search" className="sr-only">Search by Name</label>
                            <div className="relative group">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted pointer-events-none group-focus-within:text-primary transition-colors" />
                                <input
                                    id="kpi-search"
                                    type="text"
                                    placeholder="Search KPIs (e.g., 'PEP Compliance', 'Road Quality')..."
                                    value={searchQuery}
                                    onChange={e => setSearchQuery(e.target.value)}
                                    className="w-full bg-surface border border-white/20 rounded-xl shadow-sm pl-10 pr-4 py-2.5 text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                                />
                            </div>
                        </div>
                        <button onClick={handleResetFilters} className="p-2.5 text-text-secondary hover:text-primary hover:bg-white/10 rounded-xl transition-colors flex-shrink-0" title="Reset Filters">
                            <RotateCcw className="w-5 h-5"/>
                        </button>
                         {isAdminMode && canDelete && onResetAllProgress && (
                             <button 
                                onClick={() => setIsResetConfirmOpen(true)}
                                className="p-2.5 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-xl transition-colors flex-shrink-0 border border-red-500/20" 
                                title="Reset All Initiatives Progress"
                             >
                                <RotateCcw className="w-5 h-5"/>
                             </button>
                        )}
                    </div>
                 </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredKpis.map((derivedKpi, index) => (
                    <KpiCard 
                        key={index}
                        kpi={derivedKpi} 
                        index={kpis.indexOf(derivedKpi.original)} 
                        isAdminMode={isAdminMode} 
                        onEdit={() => onEditKpi(kpis.indexOf(derivedKpi.original))}
                        onDelete={canDelete ? () => onDeleteKpi(kpis.indexOf(derivedKpi.original)) : () => {}}
                        initiatives={initiatives}
                    />
                ))}
                {isAdminMode && (
                    <button onClick={onAddKpi} className="flex flex-col items-center justify-center bg-surface rounded-xl shadow-lg p-6 border-t-4 border-dashed border-border hover:border-primary hover:text-primary transition-all text-text-muted min-h-[420px]">
                        <PlusCircle className="w-10 h-10 mb-2" />
                        <span className="font-bold text-lg">Add New KPI</span>
                    </button>
                )}
            </div>
             {filteredKpis.length === 0 && (
                <div className="text-center py-10 text-text-muted md:col-span-2 lg:col-span-3">
                    <p className="font-semibold">No KPIs match the current filters.</p>
                    <p className="text-sm">Try adjusting your filter selection or search query.</p>
                </div>
            )}

            {onResetAllProgress && canDelete && (
                <ConfirmActionModal 
                    isOpen={isResetConfirmOpen}
                    onClose={() => setIsResetConfirmOpen(false)}
                    onConfirm={() => { onResetAllProgress(); setIsResetConfirmOpen(false); }}
                    title="Reset All Progress?"
                    confirmText="Reset Everything"
                    confirmButtonClass="bg-red-600 hover:bg-red-700"
                >
                    <p>Are you sure you want to reset the progress of <strong>ALL</strong> initiatives to 0%? This action cannot be undone.</p>
                </ConfirmActionModal>
            )}
        </div>
    );
};
