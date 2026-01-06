
import React, { useState, useMemo } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { EditableText } from '../EditableText';
import type { FinancialSummary, ThrustFinancials, StrategicObjective } from '../../types';
import { Banknote, Landmark, TrendingDown, TrendingUp, Bot, Loader2, Coins, Sliders, RefreshCw } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

Chart.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

interface FinancialsContentProps {
  isAdminMode?: boolean;
  summary?: FinancialSummary;
  thrustData?: ThrustFinancials[];
  objectives?: StrategicObjective[];
  onUpdateSummary?: (field: keyof FinancialSummary, value: string | number) => void;
  onUpdateThrust?: (id: number, field: 'budget' | 'spending', value: number) => void;
  onSummarize: (text: string, title: string) => void;
  onGetAiBriefing: () => Promise<void>;
  aiBriefing: string;
  isAiBriefingLoading: boolean;
  onGetAiBudgetEstimation: () => Promise<void>;
  aiBudgetEstimation: string;
  isAiBudgetEstimationLoading: boolean;
}

const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'MYR',
        notation: 'compact',
        maximumFractionDigits: 2
    }).format(value);
};

export const FinancialsContent: React.FC<FinancialsContentProps> = ({
  isAdminMode = false,
  summary,
  thrustData = [],
  objectives = [],
  onUpdateSummary,
  onUpdateThrust,
  onSummarize,
  onGetAiBriefing,
  aiBriefing,
  isAiBriefingLoading,
  onGetAiBudgetEstimation,
  aiBudgetEstimation,
  isAiBudgetEstimationLoading,
}) => {
  const [activeAiTab, setActiveAiTab] = useState<'briefing' | 'estimation'>('briefing');
  
  // Scenario Planning State
  const [showScenario, setShowScenario] = useState(false);
  const [variancePercent, setVariancePercent] = useState(0); // -20% to +20%

  if (!summary) return <div>Loading...</div>;

  // Calculate Scenario Data
  const scenarioBudget = summary.budget * (1 + (variancePercent / 100));
  const utilization = scenarioBudget > 0 ? (summary.spending / scenarioBudget) * 100 : 0;
  const utilizationColor = utilization > 100 ? 'bg-red-600' : utilization > 80 ? 'bg-primary' : utilization > 50 ? 'bg-yellow-500' : 'bg-green-500';

  // Calculate Scenario Data for Charts
  const scenarioThrustData = useMemo(() => {
      if (variancePercent === 0) return thrustData;
      return thrustData.map(t => ({
          ...t,
          budget: t.budget * (1 + (variancePercent / 100))
      }));
  }, [thrustData, variancePercent]);

  const barChartData = {
    labels: scenarioThrustData.map(t => `T${t.thrustId}`), // Short labels for the axis
    datasets: [
      {
        label: 'Spending (Actual)',
        data: scenarioThrustData.map(t => t.spending),
        backgroundColor: 'hsl(0, 75%, 58%)', // primary color
        borderColor: 'hsl(0, 75%, 68%)',
        borderWidth: 1,
        borderRadius: { topRight: 4, bottomRight: 4, topLeft: 0, bottomLeft: 0 },
      },
      {
        label: `Remaining Budget (${variancePercent > 0 ? '+' : ''}${variancePercent}%)`,
        data: scenarioThrustData.map(t => Math.max(0, t.budget - t.spending)),
        backgroundColor: variancePercent < 0 ? 'hsl(0, 50%, 30%)' : 'hsl(220, 20%, 30%)', // Red tint if budget cut
        borderColor: 'hsl(220, 20%, 40%)',
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  };

  const barChartOptions = {
    indexAxis: 'y' as const, // Makes it a horizontal bar chart
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top' as const, labels: { color: 'hsl(210, 20%, 75%)' } },
      title: { display: false },
      tooltip: {
        callbacks: {
          title: (context: any) => {
            const thrustIndex = context[0].dataIndex;
            const thrust = scenarioThrustData[thrustIndex];
            return thrust ? `T${thrust.thrustId}: ${thrust.thrustTitle}` : '';
          },
          label: (context: any) => {
            const label = context.dataset.label || '';
            const value = context.parsed.x;
            return ` ${label}: ${formatCurrency(value)}`;
          },
          footer: (context: any) => {
            const thrustIndex = context[0].dataIndex;
            const thrust = scenarioThrustData[thrustIndex];
            if (!thrust) return '';

            const budget = thrust.budget;
            const spending = thrust.spending;
            const utilization = budget > 0 ? (spending / budget) * 100 : 0;
            
            return [
                `Projected Budget: ${formatCurrency(budget)}`,
                `Projected Utilization: ${utilization.toFixed(1)}%`
            ];
          }
        }
      }
    },
    scales: {
        x: { 
            stacked: true,
            ticks: { color: 'hsl(210, 15%, 55%)', callback: (value: any) => formatCurrency(value) }, 
            grid: { color: 'hsl(220, 20%, 22%)' } 
        },
        y: { 
            stacked: true,
            ticks: { color: 'hsl(210, 15%, 55%)' }, 
            grid: { display: false } // Cleaner look
        }
    }
  };


  return (
    <div className="space-y-8">
      <div className="text-center">
        <EditableText isAdminMode={isAdminMode} initialValue={summary.title} onSave={(newValue) => onUpdateSummary && onUpdateSummary('title', newValue)} label="Financials Page Title" textClassName="text-3xl font-bold text-text-primary mb-4" inputClassName="text-3xl font-bold text-center" />
        <EditableText isAdminMode={isAdminMode} initialValue={summary.subtitle} onSave={(newValue) => onUpdateSummary && onUpdateSummary('subtitle', newValue)} label="Financials Page Subtitle" textClassName="text-text-secondary max-w-4xl mx-auto" isTextarea onSummarize={() => onSummarize(summary.subtitle, 'Financial Overview')} />
      </div>

      {/* Scenario Planning Toggle */}
      <div className="glass-panel p-4 rounded-xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
          <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400"><Sliders className="w-6 h-6"/></div>
              <div>
                  <h4 className="font-bold text-text-primary">Financial Scenario Planner</h4>
                  <p className="text-xs text-text-secondary">Simulate budget adjustments to test financial resilience.</p>
              </div>
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="flex items-center gap-2 flex-grow">
                  <span className="text-xs font-bold text-red-400">-30%</span>
                  <input 
                    type="range" 
                    min="-30" 
                    max="30" 
                    step="5"
                    value={variancePercent}
                    onChange={(e) => { setVariancePercent(Number(e.target.value)); setShowScenario(true); }}
                    className="flex-grow h-2 bg-surface-light rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                  <span className="text-xs font-bold text-green-400">+30%</span>
              </div>
              <div className={`px-3 py-1 rounded-md text-sm font-bold min-w-[80px] text-center ${variancePercent === 0 ? 'bg-surface-light text-text-secondary' : variancePercent > 0 ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                  {variancePercent > 0 ? '+' : ''}{variancePercent}%
              </div>
              <button onClick={() => { setVariancePercent(0); setShowScenario(false); }} className="p-2 hover:bg-white/10 rounded-full transition-colors" title="Reset">
                  <RefreshCw className="w-4 h-4 text-text-muted" />
              </button>
          </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Overall Financial Health */}
        <div className={`bg-surface rounded-xl shadow-lg p-6 border ${showScenario ? 'border-blue-500/50 ring-1 ring-blue-500/20' : 'border-border'} flex flex-col justify-between transition-all duration-300`}>
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-text-primary">
                    {showScenario ? 'Projected Financial Health (Scenario)' : 'Overall Financial Health'}
                </h3>
                {showScenario && <span className="text-xs bg-blue-500 text-white px-2 py-0.5 rounded-full font-bold">SIMULATION MODE</span>}
            </div>
            
            <div className="space-y-4">
                <div className="flex justify-between items-baseline">
                    <p className="text-sm font-medium text-text-secondary">Total Budget</p>
                    <div className="text-right">
                        <p className="text-2xl font-bold text-text-primary">{formatCurrency(scenarioBudget)}</p>
                        {showScenario && <p className="text-xs text-text-muted line-through">{formatCurrency(summary.budget)}</p>}
                    </div>
                </div>
                <div className="flex justify-between items-baseline">
                    <p className="text-sm font-medium text-text-secondary">Total Spending (Actual)</p>
                    <p className="text-2xl font-bold text-primary">{formatCurrency(summary.spending)}</p>
                </div>
                 <div className="flex justify-between items-baseline">
                    <p className="text-sm font-medium text-text-secondary">Remaining (Variance)</p>
                    <p className={`text-2xl font-bold ${scenarioBudget - summary.spending < 0 ? 'text-red-500' : 'text-green-400'}`}>
                        {formatCurrency(scenarioBudget - summary.spending)}
                    </p>
                </div>
            </div>
            <div className="mt-6">
                <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-text-primary">Budget Utilization</span>
                    <span className={`text-lg font-bold ${utilization > 100 ? 'text-red-500' : utilization > 80 ? 'text-primary' : 'text-text-primary'}`}>{utilization.toFixed(2)}%</span>
                </div>
                <div className="w-full bg-border rounded-full h-4 overflow-hidden">
                    <div className={`${utilizationColor} h-4 rounded-full transition-all duration-500`} style={{ width: `${Math.min(100, utilization)}%` }}></div>
                </div>
                {utilization > 100 && (
                    <p className="text-xs text-red-500 mt-1 font-bold flex items-center gap-1"><TrendingDown className="w-3 h-3"/> Budget exceeded by {(utilization - 100).toFixed(1)}%</p>
                )}
            </div>
        </div>

        {/* Bar Chart */}
        <div className="bg-surface rounded-xl shadow-lg p-6 border border-border">
            <h3 className="text-xl font-bold text-text-primary mb-4">
                {showScenario ? 'Projected ' : ''}Budget vs. Spending by Strategic Thrust
            </h3>
            <div className="h-[450px]">
                <Bar options={barChartOptions} data={barChartData} />
            </div>
        </div>

        {/* AI Insights */}
        <div className="lg:col-span-2 bg-surface rounded-xl shadow-lg p-6 border border-border">
             <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-text-primary flex items-center gap-2"><Bot className="w-6 h-6 text-primary"/> AI Financial Insights</h3>
                <div className="flex items-center gap-1 bg-surface-light p-1 rounded-lg">
                    <button onClick={() => setActiveAiTab('briefing')} className={`px-3 py-1 text-sm font-semibold rounded-md transition-colors ${activeAiTab === 'briefing' ? 'bg-surface shadow text-primary' : 'text-text-secondary hover:bg-border'}`}>Executive Briefing</button>
                    <button onClick={() => setActiveAiTab('estimation')} className={`px-3 py-1 text-sm font-semibold rounded-md transition-colors ${activeAiTab === 'estimation' ? 'bg-surface shadow text-primary' : 'text-text-secondary hover:bg-border'}`}>Budget Estimator</button>
                </div>
             </div>
             <div className="min-h-[200px] flex flex-col justify-center">
                 {activeAiTab === 'briefing' && (
                     isAiBriefingLoading ? (
                         <div className="flex items-center justify-center p-4 rounded-md">
                            <Loader2 className="w-6 h-6 animate-spin text-primary mr-3" />
                            <span className="text-text-secondary">Generating financial briefing... This may take a moment.</span>
                        </div>
                    ) : aiBriefing ? (
                        <div className="p-4 bg-background rounded-md prose dark:prose-invert prose-sm max-w-none">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>{aiBriefing}</ReactMarkdown>
                        </div>
                    ) : (
                        <div className="text-center">
                             <p className="text-text-secondary mb-3">Get an AI-powered summary of financial health, key spending areas, and potential risks.</p>
                             <button onClick={onGetAiBriefing} className="text-center px-4 py-2 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primary-hover transition-colors">Generate Briefing</button>
                        </div>
                    )
                 )}
                 {activeAiTab === 'estimation' && (
                     isAiBudgetEstimationLoading ? (
                         <div className="flex items-center justify-center p-4 rounded-md">
                            <Loader2 className="w-6 h-6 animate-spin text-primary mr-3" />
                            <span className="text-text-secondary">Searching the web and preparing budget estimates...</span>
                        </div>
                    ) : aiBudgetEstimation ? (
                        <div className="p-4 bg-background rounded-md prose dark:prose-invert prose-sm max-w-none">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>{aiBudgetEstimation}</ReactMarkdown>
                        </div>
                    ) : (
                        <div className="text-center">
                            <p className="text-text-secondary mb-3">Use AI to get a suggested budget allocation based on real-world data, aligned with your total budget.</p>
                            <button onClick={onGetAiBudgetEstimation} className="text-center px-4 py-2 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primary-hover transition-colors">Get AI Budget Estimates</button>
                        </div>
                    )
                 )}
             </div>
        </div>
      </div>

      {/* Detailed Table */}
      <div className="bg-surface rounded-xl shadow-lg overflow-hidden border border-border">
        <h3 className="text-xl font-bold text-text-primary p-6 border-b border-border">Detailed Financials by Thrust</h3>
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-text-secondary">
                <thead className="text-xs text-text-primary uppercase bg-surface-light">
                    <tr>
                        <th scope="col" className="px-6 py-3">Thrust</th>
                        <th scope="col" className="px-6 py-3 text-right">Budget {showScenario && <span className="text-blue-400 ml-1">(Scenario)</span>}</th>
                        <th scope="col" className="px-6 py-3 text-right">Spending</th>
                        <th scope="col" className="px-6 py-3 min-w-[200px]">Utilization</th>
                    </tr>
                </thead>
                <tbody>
                    {scenarioThrustData.map(thrust => {
                        const utilization = thrust.budget > 0 ? (thrust.spending / thrust.budget) * 100 : 0;
                        const barColor = utilization > 100 ? 'bg-red-500' : utilization > 80 ? 'bg-primary' : utilization > 50 ? 'bg-yellow-500' : 'bg-green-500';
                        return (
                            <tr key={thrust.id} className="border-b border-border hover:bg-surface-light">
                                <th scope="row" className="px-6 py-4 font-medium text-text-primary whitespace-nowrap">
                                    T{thrust.thrustId}: {thrust.thrustTitle}
                                </th>
                                <td className={`px-6 py-4 text-right ${showScenario ? 'text-blue-300 font-bold' : ''}`}>
                                    {showScenario ? formatCurrency(thrust.budget) : (
                                        <EditableText isAdminMode={isAdminMode} initialValue={formatCurrency(thrust.budget)} onSave={(newValue) => onUpdateThrust?.(thrust.id, 'budget', Number(newValue.replace(/[^0-9.-]+/g,"")))} label={`Budget for T${thrust.id}`} textClassName='font-mono' />
                                    )}
                                </td>
                                <td className="px-6 py-4 text-right">
                                     <EditableText isAdminMode={isAdminMode} initialValue={formatCurrency(thrust.spending)} onSave={(newValue) => onUpdateThrust?.(thrust.id, 'spending', Number(newValue.replace(/[^0-9.-]+/g,"")))} label={`Spending for T${thrust.id}`} textClassName='font-mono' />
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-full bg-border rounded-full h-2.5 overflow-hidden">
                                            <div className={`${barColor} h-2.5 rounded-full`} style={{ width: `${Math.min(100, utilization)}%` }}></div>
                                        </div>
                                        <span className={`font-mono text-xs font-semibold w-16 text-right ${utilization > 100 ? 'text-red-500' : ''}`}>{utilization.toFixed(1)}%</span>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};
