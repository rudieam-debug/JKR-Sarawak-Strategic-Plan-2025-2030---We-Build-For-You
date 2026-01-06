
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { Target, Globe, BarChart3, Shield, Zap, CheckCircle, AlertTriangle, Calendar, TrendingUp, Activity } from 'lucide-react';

// Import data
import { 
    initiativesData, 
    tierMilestones,
    strategicDirection,
    strategicObjectives,
    strategicThrusts,
    kpis as initialKpis
} from '../assets/strategicData';
import {
  financialSummaryData,
  thrustFinancialsData,
} from '../assets/financialData';
import { getChecklistForInitiative } from '../data/checklistData';
import { calculateRisk } from '../utils/analysis';
import type { Initiative, StrategicThrust, StrategicDirection, StrategicObjective, TierMilestone, KPI, FinancialSummary, ThrustFinancials, RiskProfile, ChecklistPhase } from '../types';

// Register ChartJS components for the print view
Chart.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

const formatCurrency = (value: number) => new Intl.NumberFormat('en-MY', { style: 'currency', currency: 'MYR' }).format(value);

// --- SHARED UI HELPERS FOR PRINT ---
// Mimics the 'Card' and 'GlassPanel' look
const PrintCard: React.FC<{ title?: string; children: React.ReactNode; className?: string }> = ({ title, children, className = '' }) => (
    <div className={`bg-[#1E293B] border border-slate-700 rounded-xl p-6 shadow-sm mb-6 ${className}`}>
        {title && <h3 className="text-xl font-bold text-slate-100 mb-4 border-b border-slate-700 pb-2">{title}</h3>}
        {children}
    </div>
);

// --- STRATEGY COMPONENTS ---

export const PrintOverviewContent: React.FC<{ direction: StrategicDirection, objectives: StrategicObjective[], strategicThrusts: StrategicThrust[] }> = ({ direction, objectives, strategicThrusts }) => (
    <div>
        <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Strategic Direction</h1>
            <p className="text-slate-400">Vision, Mission, and Core Objectives</p>
        </div>

        <PrintCard>
            <div className="grid gap-6">
                <div className="p-4 bg-slate-800/50 rounded-lg border-l-4 border-red-500">
                    <h3 className="text-lg font-bold text-red-400 mb-1">Vision</h3>
                    <p className="text-xl text-slate-200">{direction.vision}</p>
                </div>
                <div className="p-4 bg-slate-800/50 rounded-lg border-l-4 border-blue-500">
                    <h3 className="text-lg font-bold text-blue-400 mb-1">Mission</h3>
                    <p className="text-lg text-slate-300">{direction.mission}</p>
                </div>
                <div className="p-4 bg-slate-800/50 rounded-lg border-l-4 border-green-500">
                    <h3 className="text-lg font-bold text-green-400 mb-1">Goal</h3>
                    <p className="text-lg text-slate-300">{direction.goal}</p>
                </div>
            </div>
        </PrintCard>

        <h2 className="text-2xl font-bold text-white mb-4 mt-8">Strategic Objectives</h2>
        <div className="grid grid-cols-2 gap-4 mb-8">
            {objectives.map(obj => (
                <div key={obj.id} className="bg-[#1E293B] p-5 rounded-xl border border-slate-700">
                    <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                        <span className={`w-8 h-8 rounded flex items-center justify-center bg-${obj.color}-900 text-${obj.color}-400`}>
                            {obj.id}
                        </span>
                        {obj.title}
                    </h4>
                    <p className="text-sm text-slate-400 mb-3">{obj.description}</p>
                    <div className="flex flex-wrap gap-2">
                        {obj.thrusts.map(tid => (
                            <span key={tid} className="text-xs bg-slate-700 px-2 py-1 rounded text-slate-300">Thrust {tid}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export const PrintThrustsContent: React.FC<{ initiatives: Initiative[], strategicThrusts: StrategicThrust[] }> = ({ initiatives, strategicThrusts }) => {
    const initiativesByThrust = initiatives.reduce((acc, initiative) => { (acc[initiative.thrustId] = acc[initiative.thrustId] || []).push(initiative); return acc; }, {} as Record<number, any[]>);
    
    return (
        <div>
            <h1 className="text-3xl font-bold text-white mb-6 text-center">Strategic Thrusts & Initiatives</h1>
            <div className="space-y-8">
                {strategicThrusts.map(thrust => (
                    <div key={thrust.id} className="bg-[#1E293B] border border-slate-700 rounded-xl overflow-hidden break-inside-avoid">
                        <div className="bg-slate-800/50 p-4 border-b border-slate-700 flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-lg ${thrust.color} flex items-center justify-center text-white font-bold text-lg`}>T{thrust.id}</div>
                            <div>
                                <h3 className="text-xl font-bold text-white">{thrust.title}</h3>
                                <p className="text-sm text-slate-400">{thrust.description}</p>
                            </div>
                        </div>
                        <div className="p-4 grid gap-3">
                            {(initiativesByThrust[thrust.id] || []).map(initiative => (
                                <div key={initiative.id} className="bg-slate-900/50 p-3 rounded-lg border border-slate-700/50 flex justify-between items-center">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xs font-mono text-slate-500 bg-slate-800 px-1.5 rounded">{initiative.id}</span>
                                            <span className="text-sm font-semibold text-slate-200">{initiative.name}</span>
                                        </div>
                                        <div className="text-xs text-slate-500 flex gap-4">
                                            <span>Branch: {initiative.responsibleBranch}</span>
                                            <span>{initiative.plan_start} - {initiative.plan_end}</span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-lg font-bold text-blue-400">{initiative.progress}%</div>
                                        <div className="w-24 h-1.5 bg-slate-700 rounded-full mt-1">
                                            <div className="h-full bg-blue-500 rounded-full" style={{ width: `${initiative.progress}%` }}></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const PrintRoadmapContent: React.FC<{ milestones: TierMilestone[] }> = ({ milestones }) => (
    <div>
        <h1 className="text-3xl font-bold text-white mb-8 text-center">Implementation Roadmap</h1>
        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
            {milestones.map((tier, index) => (
                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#0F172A] ${tier.color.replace('text-', 'bg-').split(' ')[0]} shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2`}></div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#1E293B] p-6 rounded-xl border border-slate-700 shadow-lg">
                        <h3 className="font-bold text-lg text-white mb-3">{tier.tier}</h3>
                        <ul className="space-y-2">
                            {tier.milestones.map((m, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5"/>
                                    {m}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

// --- OPERATIONS COMPONENTS ---

export const PrintTimelineContent: React.FC<{ initiatives: Initiative[] }> = ({ initiatives }) => {
    // Render a simplified list for print as Gantt is interactive
    return (
        <div>
            <h1 className="text-3xl font-bold text-white mb-6 text-center">Initiative Timeline & Status</h1>
            <div className="grid grid-cols-1 gap-3">
                {initiatives.map(i => {
                    let statusColor = 'text-slate-400';
                    let statusText = 'Pending';
                    if(i.progress === 100) { statusColor = 'text-blue-400'; statusText = 'Completed'; }
                    else if(i.progress > 0) { statusColor = 'text-green-400'; statusText = 'In Progress'; }
                    
                    return (
                        <div key={i.id} className="bg-[#1E293B] p-4 rounded-lg border border-slate-700 flex justify-between items-center">
                            <div className="w-2/3">
                                <div className="flex items-center gap-2">
                                    <span className="text-xs font-mono bg-slate-800 text-slate-400 px-1.5 rounded">{i.id}</span>
                                    <span className="font-semibold text-slate-200">{i.name}</span>
                                </div>
                                <div className="text-xs text-slate-500 mt-1 flex gap-4">
                                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3"/> {i.plan_start} - {i.plan_end}</span>
                                    <span>{i.tier}</span>
                                </div>
                            </div>
                            <div className="w-1/3 text-right">
                                <div className={`text-sm font-bold ${statusColor} mb-1`}>{statusText} ({i.progress}%)</div>
                                <div className="w-full bg-slate-700 h-2 rounded-full">
                                    <div className={`h-2 rounded-full ${statusColor.replace('text-','bg-')}`} style={{width: `${i.progress}%`}}></div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export const PrintKpiDashboardContent: React.FC<{ kpis: KPI[], initiatives: Initiative[] }> = ({ kpis, initiatives }) => {
    const initiativesMap = new Map<string, Initiative>(initiatives.map((init) => [init.id, init]));
    
    const derivedKpis = kpis.map((kpi: KPI) => {
        const match = kpi.name.match(/^(I-\d+\.\d+)/);
        const initiativeId = match ? match[1] : null;
        if (initiativeId && initiativesMap.has(initiativeId)) {
            const linked = initiativesMap.get(initiativeId)!;
            return { ...kpi, currentValue: linked.progress, targetValue: 100, isLinked: true };
        }
        return { ...kpi, isLinked: false };
    });

    return (
        <div>
            <h1 className="text-3xl font-bold text-white mb-6 text-center">KPI Dashboard</h1>
            <div className="grid grid-cols-3 gap-6">
                {derivedKpis.map((kpi, idx) => {
                    const progress = kpi.targetValue > 0 ? (kpi.currentValue / kpi.targetValue) * 100 : 0;
                    const isCompleted = progress >= 100;
                    return (
                        <div key={idx} className={`bg-[#1E293B] p-5 rounded-xl border-t-4 shadow-lg ${isCompleted ? 'border-blue-500' : progress < 50 ? 'border-yellow-500' : 'border-green-500'}`}>
                            <h3 className="font-bold text-slate-100 text-sm mb-3 h-10 line-clamp-2">{kpi.name}</h3>
                            <div className="flex justify-between items-end">
                                <div>
                                    <p className="text-xs text-slate-500 uppercase">Current</p>
                                    <p className="text-xl font-bold text-white">{kpi.currentValue}%</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-slate-500 uppercase">Target</p>
                                    <p className="text-xl font-bold text-slate-300">{kpi.targetValue}%</p>
                                </div>
                            </div>
                            <div className="mt-4 w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                                <div className={`h-full ${isCompleted ? 'bg-blue-500' : progress < 50 ? 'bg-yellow-500' : 'bg-green-500'}`} style={{width: `${Math.min(100, progress)}%`}}></div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export const PrintChecklistContent: React.FC<{ initiatives: Initiative[], getChecklist: any }> = ({ initiatives, getChecklist }) => (
    <div>
        <h1 className="text-3xl font-bold text-white mb-6 text-center">Operational Checklists</h1>
        <div className="space-y-6">
            {initiatives.slice(0, 10).map(i => ( // Limit to 10 for print to avoid massive PDF
                <div key={i.id} className="bg-[#1E293B] p-6 rounded-xl border border-slate-700 break-inside-avoid">
                    <h3 className="text-xl font-bold text-white mb-4 border-b border-slate-700 pb-2">{i.id}: {i.name}</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {getChecklist(i.id).map((phase: ChecklistPhase) => (
                            <div key={phase.name} className="bg-slate-800/50 p-3 rounded-lg">
                                <h4 className="font-semibold text-blue-300 text-sm mb-2">{phase.name}</h4>
                                <ul className="space-y-1">
                                    {phase.items.map((item: any) => (
                                        <li key={item.id} className="text-xs text-slate-400 flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-1.5 shrink-0"></div>
                                            {item.label}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export const PrintRiskAnalysisContent: React.FC<{ initiatives: Initiative[], calculateRisk: (i: Initiative) => RiskProfile }> = ({ initiatives, calculateRisk }) => {
    const riskProfiles = initiatives.map(i => ({ initiative: i, risk: calculateRisk(i) }))
        .sort((a,b) => {
            const riskOrder = { 'High': 3, 'Medium': 2, 'Low': 1 };
            return riskOrder[b.risk.level] - riskOrder[a.risk.level];
        });

    const riskColors = {
        High: 'bg-red-900/30 text-red-300 border-red-500',
        Medium: 'bg-yellow-900/30 text-yellow-300 border-yellow-500',
        Low: 'bg-green-900/30 text-green-300 border-green-500'
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-white mb-6 text-center">Risk Analysis Report</h1>
            <div className="space-y-3">
                {riskProfiles.map(({ initiative, risk }) => (
                    <div key={initiative.id} className={`p-4 rounded-lg border-l-4 flex justify-between items-center ${riskColors[risk.level]} bg-opacity-10`}>
                        <div className="w-3/4">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="font-bold text-sm">{initiative.id}</span>
                                <span className="text-sm font-semibold">{initiative.name}</span>
                            </div>
                            <p className="text-xs opacity-80">{risk.justification}</p>
                        </div>
                        <div className="text-right">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase border ${riskColors[risk.level].replace('border-l-4', 'border')}`}>
                                {risk.level} Risk
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const PrintFinancialsContent: React.FC<{ summary: FinancialSummary, thrustData: ThrustFinancials[] }> = ({ summary, thrustData }) => {
    const barChartData = {
        labels: thrustData.map(t => `T${t.thrustId}`),
        datasets: [
          {
            label: 'Spending',
            data: thrustData.map(t => t.spending),
            backgroundColor: '#E31837', // Primary Red
            borderRadius: 4,
          },
          {
            label: 'Remaining',
            data: thrustData.map(t => Math.max(0, t.budget - t.spending)),
            backgroundColor: '#334155', // Slate 700
            borderRadius: 4,
          },
        ],
    };

    const chartOptions = {
        indexAxis: 'y' as const,
        scales: {
            x: { ticks: { color: '#94A3B8' }, grid: { color: '#334155' } },
            y: { ticks: { color: '#94A3B8' }, grid: { display: false } }
        },
        plugins: { legend: { labels: { color: '#CBD5E1' } } }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-white mb-6 text-center">Financial Performance</h1>
            
            <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="bg-[#1E293B] p-6 rounded-xl border border-slate-700 text-center">
                    <p className="text-sm text-slate-400 uppercase tracking-wider">Total Budget</p>
                    <p className="text-2xl font-bold text-white mt-2">{formatCurrency(summary.budget)}</p>
                </div>
                <div className="bg-[#1E293B] p-6 rounded-xl border border-slate-700 text-center">
                    <p className="text-sm text-slate-400 uppercase tracking-wider">Total Spending</p>
                    <p className="text-2xl font-bold text-red-400 mt-2">{formatCurrency(summary.spending)}</p>
                </div>
                <div className="bg-[#1E293B] p-6 rounded-xl border border-slate-700 text-center">
                    <p className="text-sm text-slate-400 uppercase tracking-wider">Utilization</p>
                    <p className="text-2xl font-bold text-blue-400 mt-2">{(summary.spending / summary.budget * 100).toFixed(1)}%</p>
                </div>
            </div>

            <PrintCard title="Budget vs Spending by Thrust" className="h-[400px]">
                <Bar data={barChartData} options={chartOptions} />
            </PrintCard>

            <div className="bg-[#1E293B] rounded-xl overflow-hidden border border-slate-700 mt-6">
                <table className="w-full text-sm text-left text-slate-300">
                    <thead className="text-xs text-slate-400 uppercase bg-slate-800">
                        <tr>
                            <th className="px-6 py-3">Thrust</th>
                            <th className="px-6 py-3 text-right">Budget</th>
                            <th className="px-6 py-3 text-right">Spending</th>
                            <th className="px-6 py-3 text-right">Utilization</th>
                        </tr>
                    </thead>
                    <tbody>
                        {thrustData.map(t => (
                            <tr key={t.id} className="border-b border-slate-700">
                                <td className="px-6 py-4 font-medium text-white">T{t.thrustId}</td>
                                <td className="px-6 py-4 text-right font-mono">{formatCurrency(t.budget)}</td>
                                <td className="px-6 py-4 text-right font-mono">{formatCurrency(t.spending)}</td>
                                <td className="px-6 py-4 text-right font-bold text-blue-400">{(t.budget > 0 ? t.spending/t.budget*100 : 0).toFixed(1)}%</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};


// --- MAPPINGS ---

export const sectionPrintComponentMap: Record<string, React.ComponentType<any>> = {
  'overview': PrintOverviewContent,
  'thrusts': PrintThrustsContent,
  'roadmap': PrintRoadmapContent,
  'timeline': PrintTimelineContent,
  'kpi-dashboard': PrintKpiDashboardContent,
  'checklist': PrintChecklistContent,
  'risk-analysis': PrintRiskAnalysisContent,
  'financials': PrintFinancialsContent,
};

export const getComponentProps = (sectionId: string) => {
    switch (sectionId) {
        case 'overview': return { direction: strategicDirection, objectives: strategicObjectives, strategicThrusts: strategicThrusts };
        case 'thrusts': return { initiatives: initiativesData, strategicThrusts: strategicThrusts };
        case 'roadmap': return { milestones: tierMilestones };
        case 'timeline': return { initiatives: initiativesData };
        case 'kpi-dashboard': return { kpis: initialKpis, initiatives: initiativesData };
        case 'checklist': return { initiatives: initiativesData, getChecklist: getChecklistForInitiative };
        case 'risk-analysis': return { initiatives: initiativesData, calculateRisk: calculateRisk };
        case 'financials': return { summary: financialSummaryData, thrustData: thrustFinancialsData };
        default: return {};
    }
};
