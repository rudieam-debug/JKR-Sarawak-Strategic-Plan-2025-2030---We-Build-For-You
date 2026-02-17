
import React, { useMemo } from 'react';
import { Edit, Trash2, Link, TrendingUp, AlertTriangle, CheckCircle, Calendar, ArrowUp, ArrowDown, Minus, Unlock, Info } from 'lucide-react';

type DerivedKpi = {
    type: 'initiative' | 'manual';
    name: string;
    description?: string;
    target: string;
    current: string;
    targetValue: number;
    currentValue: number;
    percentage: number;
    history: any[];
    actual_end?: string;
    plan_end?: string;
    plan_start?: string;
    isLinked: boolean;
};

interface KpiCardProps {
    kpi: DerivedKpi;
    isAdminMode: boolean;
    onEdit: () => void;
    onDelete: () => void;
}

export const KpiCard: React.FC<KpiCardProps> = ({ kpi, isAdminMode, onEdit, onDelete }) => {
    const { percentage } = kpi;

    const isOverdue = useMemo(() => {
        if (!kpi.actual_end || kpi.percentage >= 100) return false;
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const parts = kpi.actual_end.split('/');
        if (parts.length === 3) {
            const [day, month, year] = parts.map(Number);
            return new Date(year, month - 1, day) < today;
        }
        return false;
    }, [kpi.actual_end, kpi.percentage]);

    const status = useMemo(() => {
        if (isOverdue) return { label: 'Overdue', icon: AlertTriangle, color: 'text-primary', bar: 'bg-primary', bg: 'bg-primary/10', border: 'border-primary/30' };
        if (percentage >= 100) return { label: 'Completed', icon: CheckCircle, color: 'text-blue-400', bar: 'bg-blue-500', bg: 'bg-blue-500/10', border: 'border-blue-500/30' };
        if (percentage >= 50) return { label: 'On Track', icon: TrendingUp, color: 'text-green-400', bar: 'bg-green-500', bg: 'bg-green-500/10', border: 'border-green-500/30' };
        return { label: 'At Risk', icon: AlertTriangle, color: 'text-amber-400', bar: 'bg-amber-500', bg: 'bg-amber-500/10', border: 'border-amber-500/30' };
    }, [percentage, isOverdue]);

    return (
        <div className={`group relative bg-surface border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all duration-300 shadow-lg flex flex-col gap-4`}>
            {/* Admin Controls */}
            {isAdminMode && (
                <div className="absolute top-4 right-4 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <button onClick={onEdit} className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-text-secondary hover:text-white transition-colors"><Edit className="w-4 h-4" /></button>
                    <button onClick={onDelete} className="p-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-colors"><Trash2 className="w-4 h-4" /></button>
                </div>
            )}

            {/* Header: Status & Name */}
            <div className="space-y-3">
                <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest border ${status.bg} ${status.border} ${status.color}`}>
                    <status.icon className="w-3 h-3" />
                    {status.label}
                </div>
                <div>
                    <h3 className="text-lg font-bold text-text-primary leading-tight line-clamp-2" title={kpi.name}>
                        {kpi.name}
                    </h3>
                    {kpi.description && (
                        <p className="text-xs text-text-secondary mt-1 line-clamp-2" title={kpi.description}>
                            {kpi.description}
                        </p>
                    )}
                </div>
            </div>

            {/* Progress Section */}
            <div className="space-y-2">
                <div className="flex justify-between items-end">
                    <span className="text-2xl font-black text-text-primary">{Math.round(percentage)}%</span>
                    <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider mb-1">Target: {kpi.target}</span>
                </div>
                <div className="w-full h-2 bg-background rounded-full overflow-hidden">
                    <div className={`h-full ${status.bar} transition-all duration-1000`} style={{ width: `${percentage}%` }} />
                </div>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4 py-3 border-y border-white/5">
                <div>
                    <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-0.5">Current Value</p>
                    <p className="text-sm font-bold text-text-primary">{kpi.current}</p>
                </div>
                <div className="text-right">
                    <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-0.5">Target Deadline</p>
                    <p className={`text-sm font-bold flex items-center justify-end gap-1 ${isOverdue ? 'text-primary' : 'text-text-secondary'}`}>
                        <Calendar className="w-3.5 h-3.5" />
                        {kpi.plan_end || kpi.actual_end || 'N/A'}
                    </p>
                </div>
            </div>

            {/* Footer Metadata */}
            <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-widest text-text-muted">
                {kpi.isLinked ? (
                    <div className="flex items-center gap-1 text-blue-400/70">
                        <Link className="w-3 h-3" /> Auto-Synced
                    </div>
                ) : (
                    <div className="flex items-center gap-1">
                        <Unlock className="w-3 h-3" /> Manual Entry
                    </div>
                )}
                <span>KPI Portfolio</span>
            </div>
        </div>
    );
};
