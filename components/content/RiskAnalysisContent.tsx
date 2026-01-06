
import React, { useState, useMemo, Fragment } from 'react';
import { motion } from 'framer-motion';
import { calculateRisk } from '../../utils/analysis';
import type { Initiative, RiskProfile } from '../../types';
import { strategicThrusts } from '../../assets/strategicData';
import { Filter, Search, RotateCcw, AlertTriangle, CheckCircle, Clock, ChevronDown, ChevronUp, Bot, Loader2, BrainCircuit, ShieldCheck } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type SortConfig = {
    key: keyof Initiative | 'riskLevel';
    direction: 'ascending' | 'descending';
} | null;

interface RiskAnalysisContentProps {
  initiatives: Initiative[];
  onGetAiSummary: (riskyInitiatives: { initiative: Initiative, risk: RiskProfile }[], useThinkingMode: boolean) => Promise<string>;
}

export const RiskAnalysisContent: React.FC<RiskAnalysisContentProps> = ({ initiatives, onGetAiSummary }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedThrust, setSelectedThrust] = useState('all');
  const [selectedRisk, setSelectedRisk] = useState('all');
  const [selectedTier, setSelectedTier] = useState('all');
  const [selectedLead, setSelectedLead] = useState('all');
  const [sortConfig, setSortConfig] = useState<SortConfig>(null);
  const [aiSummary, setAiSummary] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [useThinkingMode, setUseThinkingMode] = useState(false);

  const thrustTitleMap = useMemo(() => {
    return new Map(strategicThrusts.map(t => [t.id, t.title]));
  }, []);

  const initiativeRiskProfiles = useMemo(() => {
    return new Map(initiatives.map(i => [i.id, calculateRisk(i)]));
  }, [initiatives]);
  
  const uniqueLeads = useMemo(() => {
    const leads = new Set(initiatives.map(i => i.lead).filter(Boolean) as string[]);
    return Array.from(leads).sort();
  }, [initiatives]);
  
  const summaryStats = useMemo(() => {
    const stats = { High: 0, Medium: 0, Low: 0 };
    for (const risk of initiativeRiskProfiles.values()) {
        stats[risk.level]++;
    }
    return stats;
  }, [initiativeRiskProfiles]);

  const hasRisks = summaryStats.High > 0 || summaryStats.Medium > 0;
  
  const handleGetAiSummary = async () => {
      if (!hasRisks) return;
      
      setIsAiLoading(true);
      setAiSummary('');
      const riskyInitiatives = initiatives
          .map(initiative => ({ initiative, risk: initiativeRiskProfiles.get(initiative.id)! }))
          .filter(({ risk }) => risk.level === 'High' || risk.level === 'Medium');
      
      // Pass initiatives and user preference for thinking mode to the parent handler
      const summary = await onGetAiSummary(riskyInitiatives.map(item => ({
          ...item,
          risk: {
              ...item.risk,
              // Include Playbook risks in justification for context if available
              justification: item.initiative.risks ? `${item.risk.justification} \n\n**Strategic Risks (Playbook):** ${item.initiative.risks}` : item.risk.justification
          }
      })), useThinkingMode);
      
      setAiSummary(summary);
      setIsAiLoading(false);
  };

  const filteredInitiatives = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return initiatives.filter(i => {
      const riskProfile = initiativeRiskProfiles.get(i.id);
      const searchMatch = query === '' || 
        i.name.toLowerCase().includes(query) || 
        i.id.toLowerCase().includes(query) ||
        (i.description || '').toLowerCase().includes(query) ||
        (i.expectedOutcome || '').toLowerCase().includes(query);
      
      const thrustMatch = selectedThrust === 'all' || i.thrustId.toString() === selectedThrust;
      const riskMatch = selectedRisk === 'all' || riskProfile?.level.toLowerCase() === selectedRisk;
      const tierMatch = selectedTier === 'all' || i.tier === selectedTier;
      const leadMatch = selectedLead === 'all' || i.lead === selectedLead;
      return searchMatch && thrustMatch && riskMatch && tierMatch && leadMatch;
    });
  }, [searchQuery, selectedThrust, selectedRisk, selectedTier, selectedLead, initiatives, initiativeRiskProfiles]);
  
  const sortedInitiatives = useMemo(() => {
    let sortableItems = [...filteredInitiatives];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        let aValue: any, bValue: any;
        if (sortConfig.key === 'riskLevel') {
            const riskOrder = { 'High': 3, 'Medium': 2, 'Low': 1 };
            aValue = riskOrder[initiativeRiskProfiles.get(a.id)!.level];
            bValue = riskOrder[initiativeRiskProfiles.get(b.id)!.level];
        } else {
            aValue = a[sortConfig.key as keyof Initiative];
            bValue = b[sortConfig.key as keyof Initiative];
        }

        if (aValue < bValue) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [filteredInitiatives, sortConfig, initiativeRiskProfiles]);

  const initiativesByThrust = useMemo(() => {
    return sortedInitiatives.reduce((acc, initiative) => {
      const thrustId = initiative.thrustId;
      if (!acc[thrustId]) {
        acc[thrustId] = [];
      }
      acc[thrustId] = [];
      acc[thrustId].push(initiative);
      return acc;
    }, {} as Record<number, Initiative[]>);
  }, [sortedInitiatives]);
  
  const activeThrustsInOrder = useMemo(() => {
    return strategicThrusts.filter(thrust => initiativesByThrust[thrust.id]);
  }, [initiativesByThrust]);

  const requestSort = (key: keyof Initiative | 'riskLevel') => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };
  
  const getSortIcon = (key: keyof Initiative | 'riskLevel') => {
    if (!sortConfig || sortConfig.key !== key) {
        return <ChevronDown className="w-4 h-4 opacity-0 group-hover:opacity-50" />;
    }
    return sortConfig.direction === 'ascending' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />;
  };

  const riskLevelClasses = {
      High: { text: 'text-red-400', bg: 'bg-red-900/50', border: 'border-red-500' },
      Medium: { text: 'text-amber-400', bg: 'bg-amber-900/50', border: 'border-amber-500' },
      Low: { text: 'text-green-400', bg: 'bg-green-900/50', border: 'border-green-500' }
  };
  
  const riskRowClasses = {
      High: 'bg-red-900/10',
      Medium: 'bg-amber-900/10',
      Low: ''
  };

  const handleReset = () => {
    setSearchQuery('');
    setSelectedThrust('all');
    setSelectedRisk('all');
    setSelectedTier('all');
    setSelectedLead('all');
    setSortConfig(null);
  };

  const dropdownBaseClass = "w-full appearance-none bg-surface border border-white/20 rounded-xl px-4 py-2.5 text-sm text-text-primary focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none cursor-pointer hover:bg-surface-light transition-colors shadow-sm";

  return (
    <div className="space-y-8">
        <div className="text-center">
            <h2 className="text-3xl font-bold text-text-primary mb-2">Comprehensive Risk Analysis</h2>
            <p className="text-text-secondary max-w-4xl mx-auto">
                Strategic assessment of potential threats and defined mitigation strategies for every initiative.
            </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className={`p-6 rounded-xl shadow-lg backdrop-blur-md ${riskLevelClasses.High.bg} border-l-4 ${riskLevelClasses.High.border}`}>
                <p className="text-sm font-medium text-text-secondary">High Risk</p>
                <p className={`text-4xl font-bold ${riskLevelClasses.High.text}`}>{summaryStats.High}</p>
            </div>
            <div className={`p-6 rounded-xl shadow-lg backdrop-blur-md ${riskLevelClasses.Medium.bg} border-l-4 ${riskLevelClasses.Medium.border}`}>
                <p className="text-sm font-medium text-text-secondary">Medium Risk</p>
                <p className={`text-4xl font-bold ${riskLevelClasses.Medium.text}`}>{summaryStats.Medium}</p>
            </div>
            <div className={`p-6 rounded-xl shadow-lg backdrop-blur-md ${riskLevelClasses.Low.bg} border-l-4 ${riskLevelClasses.Low.border}`}>
                <p className="text-sm font-medium text-text-secondary">Low Risk</p>
                <p className={`text-4xl font-bold ${riskLevelClasses.Low.text}`}>{summaryStats.Low}</p>
            </div>
            <div className="bg-surface p-6 rounded-xl shadow-lg border-l-4 border-border backdrop-blur-md">
                <p className="text-sm font-medium text-text-secondary">Total Initiatives</p>
                <p className="text-4xl font-bold text-text-primary">{initiatives.length}</p>
            </div>
        </div>
        
        {/* AI Summary Section */}
        <div className="glass-panel p-6 rounded-xl shadow-lg border border-white/10">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
                <h3 className="text-xl font-bold text-text-primary flex items-center gap-2">
                    <Bot className="w-6 h-6 text-primary"/> AI Executive Briefing
                </h3>
                <label 
                    className="flex items-center space-x-2 cursor-pointer text-sm text-text-secondary group select-none"
                    title="Enable specific reasoning capabilities for deeper strategic analysis. May take longer."
                >
                    <input
                        type="checkbox"
                        checked={useThinkingMode}
                        onChange={(e) => setUseThinkingMode(e.target.checked)}
                        className="appearance-none h-4 w-4 border-2 border-white/20 rounded-sm bg-surface checked:bg-purple-600 checked:border-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-200 cursor-pointer"
                    />
                    <div className="flex items-center gap-1.5 group-hover:text-text-primary transition-colors">
                        <BrainCircuit className={`w-4 h-4 transition-colors ${useThinkingMode ? 'text-purple-500' : ''}`} />
                        <span>Enable Deep Strategic Analysis</span>
                    </div>
                </label>
            </div>

            {isAiLoading ? (
                 <div className="flex flex-col items-center justify-center p-8 bg-surface-light/50 rounded-lg border border-white/10 text-center">
                    {useThinkingMode ? (
                        <>
                             <BrainCircuit className="w-10 h-10 animate-pulse text-purple-500 mb-3" />
                             <span className="text-text-primary font-semibold">Performing deep strategic analysis...</span>
                             <span className="text-text-muted text-xs mt-1">This may take a few moments as the AI evaluates risk factors and strategic implications.</span>
                        </>
                    ) : (
                        <>
                             <Loader2 className="w-8 h-8 animate-spin text-primary mb-3" />
                             <span className="text-text-primary">Generating briefing on high and medium-risk initiatives...</span>
                        </>
                    )}
                </div>
            ) : aiSummary ? (
                <div className="p-4 bg-surface-light/30 rounded-md prose dark:prose-invert prose-sm max-w-none border border-white/10">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{aiSummary}</ReactMarkdown>
                </div>
            ) : (
                <div className="text-center p-6 bg-surface-light/20 rounded-lg border border-dashed border-white/20">
                    <p className="text-text-secondary mb-4">Generate an intelligent summary highlighting critical risks, common patterns, and strategic recommendations based on the current initiative data.</p>
                    <button 
                        onClick={handleGetAiSummary} 
                        disabled={!hasRisks}
                        className={`px-5 py-2.5 text-sm font-semibold text-white rounded-lg transition-colors shadow-lg ${!hasRisks ? 'bg-surface-light opacity-50 cursor-not-allowed' : useThinkingMode ? 'bg-purple-600 hover:bg-purple-700 shadow-purple-900/20' : 'bg-primary hover:bg-primary-hover shadow-primary/20'}`}
                    >
                        {!hasRisks ? 'No High/Medium Risks Detected' : useThinkingMode ? 'Generate Deep Strategic Briefing' : 'Generate Executive Briefing'}
                    </button>
                </div>
            )}
        </div>

        {/* Filter & Table Section */}
        <div className="glass-panel p-6 rounded-xl shadow-lg border border-white/10">
            <div className="flex items-center text-lg font-semibold text-text-primary mb-4"><Filter className="w-5 h-5 mr-2 text-primary"/> Filter Initiatives</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end mb-6">
                <div className="lg:col-span-2">
                    <label className="block text-sm font-medium text-text-secondary mb-1">Search</label>
                    <div className="relative group">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted group-focus-within:text-primary transition-colors"/>
                        <input type="text" placeholder="Search by Name, ID, Desc or Outcome..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full bg-surface border border-white/20 rounded-xl pl-10 pr-4 py-2.5 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary shadow-inner transition-all"/>
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-text-secondary mb-1">Thrust</label>
                    <div className="relative">
                        <select value={selectedThrust} onChange={e => setSelectedThrust(e.target.value)} className={dropdownBaseClass}>
                            <option value="all">All Thrusts</option>
                            {strategicThrusts.map(t=><option key={t.id} value={t.id}>T{t.id}: {t.title}</option>)}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-text-secondary mb-1">Owner (Lead)</label>
                    <div className="relative">
                        <select value={selectedLead} onChange={e => setSelectedLead(e.target.value)} className={dropdownBaseClass}>
                            <option value="all">All Owners</option>
                            {uniqueLeads.map(lead => <option key={lead} value={lead}>{lead}</option>)}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-text-secondary mb-1">Tier</label>
                    <div className="relative">
                        <select value={selectedTier} onChange={e => setSelectedTier(e.target.value)} className={dropdownBaseClass}>
                            <option value="all">All Tiers</option>
                            <option value="Tier 1">Tier 1</option>
                            <option value="Tier 2">Tier 2</option>
                            <option value="Tier 3">Tier 3</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
                    </div>
                </div>
                <div>
                    <button onClick={handleReset} className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 text-sm font-semibold text-text-secondary bg-surface-light rounded-xl hover:bg-white/10 hover:text-text-primary transition-colors border border-white/10">
                        <RotateCcw className="w-4 h-4"/><span>Reset</span>
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap items-center gap-2 bg-surface-light/50 p-2 rounded-xl mb-4 border border-white/5">
                <button onClick={() => setSelectedRisk('all')} className={`flex-1 text-center px-3 py-1.5 text-sm font-semibold rounded-lg transition-colors ${selectedRisk === 'all' ? 'bg-surface text-primary shadow' : 'text-text-secondary hover:bg-surface'}`}>All Risks ({filteredInitiatives.length})</button>
                <button onClick={() => setSelectedRisk('high')} className={`flex-1 text-center px-3 py-1.5 text-sm font-semibold rounded-lg transition-colors ${selectedRisk === 'high' ? 'bg-surface text-red-400 shadow' : 'text-text-secondary hover:bg-surface'}`}>High ({summaryStats.High})</button>
                <button onClick={() => setSelectedRisk('medium')} className={`flex-1 text-center px-3 py-1.5 text-sm font-semibold rounded-lg transition-colors ${selectedRisk === 'medium' ? 'bg-surface text-amber-400 shadow' : 'text-text-secondary hover:bg-surface'}`}>Medium ({summaryStats.Medium})</button>
                <button onClick={() => setSelectedRisk('low')} className={`flex-1 text-center px-3 py-1.5 text-sm font-semibold rounded-lg transition-colors ${selectedRisk === 'low' ? 'bg-surface text-green-400 shadow' : 'text-text-secondary hover:bg-surface'}`}>Low ({summaryStats.Low})</button>
            </div>
            
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-text-secondary">
                    <thead className="text-xs uppercase bg-surface-light text-text-primary">
                        <tr>
                            <th scope="col" className="px-4 py-3 rounded-tl-lg"><button onClick={() => requestSort('id')} className="group flex items-center">Initiative {getSortIcon('id')}</button></th>
                            <th scope="col" className="px-4 py-3"><button onClick={() => requestSort('progress')} className="group flex items-center">Progress {getSortIcon('progress')}</button></th>
                            <th scope="col" className="px-4 py-3"><button onClick={() => requestSort('riskLevel')} className="group flex items-center">Risk Level {getSortIcon('riskLevel')}</button></th>
                            <th scope="col" className="px-4 py-3 w-1/3">Risk Scenario</th>
                            <th scope="col" className="px-4 py-3 w-1/3 rounded-tr-lg">Risk Management Process (Mitigation)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {activeThrustsInOrder.length > 0 ? activeThrustsInOrder.map(thrust => (
                             <Fragment key={thrust.id}>
                                <tr>
                                    <td colSpan={5} className="px-4 py-2 font-bold text-base text-text-primary bg-surface-light/50 border-y border-border">
                                        T{thrust.id}: {thrust.title}
                                    </td>
                                </tr>
                                {initiativesByThrust[thrust.id].map(i => {
                                    const risk = initiativeRiskProfiles.get(i.id)!;
                                    const riskClasses = riskLevelClasses[risk.level];
                                    const rowRiskClass = riskRowClasses[risk.level];
                                    return (
                                        <tr key={i.id} className={`border-b border-border hover:bg-surface-light/30 transition-colors ${rowRiskClass}`}>
                                            <td className="px-4 py-3 font-medium text-text-primary">
                                                <div className="font-bold">{i.id}</div>
                                                <div className="text-xs text-text-muted">{i.name}</div>
                                                {i.lead && <div className="text-[10px] text-text-muted mt-1">Owner: {i.lead}</div>}
                                            </td>
                                            <td className="px-4 py-3">{i.progress}%</td>
                                            <td className="px-4 py-3">
                                                <span className={`px-2 py-1 font-semibold rounded-full text-xs ${riskClasses.bg} ${riskClasses.text}`}>
                                                    {risk.level}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3 text-text-secondary">
                                                {i.risks ? (
                                                    <div className="flex items-start gap-2">
                                                        <AlertTriangle className="w-3 h-3 mt-0.5 text-text-muted flex-shrink-0" />
                                                        <span>{i.risks}</span>
                                                    </div>
                                                ) : (
                                                    <span className="text-text-muted italic">{risk.justification}</span>
                                                )}
                                            </td>
                                            <td className="px-4 py-3 text-text-secondary">
                                                {i.mitigation ? (
                                                    <div className="flex items-start gap-2">
                                                        <ShieldCheck className="w-3 h-3 mt-0.5 text-green-500 flex-shrink-0" />
                                                        <span>{i.mitigation}</span>
                                                    </div>
                                                ) : (
                                                    <span className="text-text-muted italic">No specific mitigation strategy defined.</span>
                                                )}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </Fragment>
                        )) : (
                            <tr>
                                <td colSpan={5} className="text-center py-8 text-text-muted">No initiatives match the current filters.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
};
