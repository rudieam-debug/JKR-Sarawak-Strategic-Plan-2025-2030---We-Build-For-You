
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { AuthProvider, useAuth } from './context/AuthContext';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { WelcomeContent } from './components/content/WelcomeContent';
import { OverviewContent } from './components/content/OverviewContent';
import { ThrustsContent } from './components/content/ThrustsContent';
import { RoadmapContent } from './components/content/RoadmapContent';
import { TimelineContent } from './components/content/TimelineContent';
import { DashboardContent } from './components/content/DashboardContent';
import { ChecklistContent } from './components/content/ChecklistContent';
import { RiskAnalysisContent } from './components/content/RiskAnalysisContent';
import { FinancialsContent } from './components/content/FinancialsContent';
import { StoriesContent } from './components/content/StoriesContent';
import { EngageContent } from './components/content/EngageContent';
import { AdminContent } from './components/content/AdminContent';
import { LiveDashboardContent } from './components/content/LiveDashboardContent';

import { AIChatBot } from './components/AIChatBot';
import { AISearchModal } from './components/AISearchModal';
import { MediaLibraryModal } from './components/MediaLibraryModal';
import { AuthModal } from './components/AuthModal';
import { SummaryModal } from './components/SummaryModal';
import { ReportGenerationOverlay } from './components/ReportGenerationOverlay';
import { UpdateInitiativeModal } from './components/UpdateInitiativeModal';
import { AddInitiativeModal } from './components/AddInitiativeModal';
import { ConfirmDeleteModal } from './components/ConfirmDeleteModal';
import { KpiModal } from './components/KpiModal';

import { 
  initiativesData as initialInitiatives, 
  strategicThrusts, 
  strategicDirection as initialDirection, 
  strategicObjectives as initialObjectives, 
  tierMilestones as initialMilestones, 
  kpis as initialKpis,
  initialSuccessStories,
  initialStoriesPageContent,
  initialEngagementChannels,
  initialEngagePageContent,
  initialWelcomePageContent
} from './assets/strategicData';

import { financialSummaryData as initialFinancialSummary, thrustFinancialsData as initialThrustFinancials } from './assets/financialData';
import { liveMetrics, projectLocations, allLiveProjectUpdates, allLiveFeedbacks, performanceHotspots, resourceUtilization } from './assets/liveData';
import { getChecklistForInitiative } from './data/checklistData';

import type { 
  Initiative, 
  RiskProfile, 
  KPI, 
  HeaderData, 
  FooterData, 
  WelcomePageContent, 
  StrategicDirection, 
  StrategicObjective, 
  SuccessStory, 
  StoriesPageContent, 
  EngagementChannel, 
  EngagePageContent, 
  FinancialSummary, 
  ThrustFinancials, 
  ChecklistPhase, 
  ChatMessage, 
  InitiativeChecklistState, 
  TierMilestone
} from './types';

const DashboardApp: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('welcome');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Data State
  const [initiatives, setInitiatives] = useState<Initiative[]>(initialInitiatives);
  const [direction, setDirection] = useState<StrategicDirection>(initialDirection);
  const [objectives, setObjectives] = useState<StrategicObjective[]>(initialObjectives);
  const [milestones, setMilestones] = useState<TierMilestone[]>(initialMilestones);
  const [kpis, setKpis] = useState<KPI[]>(initialKpis);
  const [stories, setStories] = useState<SuccessStory[]>(initialSuccessStories);
  const [storiesPageContent, setStoriesPageContent] = useState<StoriesPageContent>(initialStoriesPageContent);
  const [engagementChannels, setEngagementChannels] = useState<EngagementChannel[]>(initialEngagementChannels);
  const [engagePageContent, setEngagePageContent] = useState<EngagePageContent>(initialEngagePageContent);
  const [financialSummary, setFinancialSummary] = useState<FinancialSummary>(initialFinancialSummary);
  const [thrustFinancials, setThrustFinancials] = useState<ThrustFinancials[]>(initialThrustFinancials);
  const [welcomePageContent, setWelcomePageContent] = useState<WelcomePageContent>(initialWelcomePageContent);
  
  // UI State
  const [headerData, setHeaderData] = useState<HeaderData>({
    mainTitle: "JKR Sarawak Strategic Plan 2025-2030",
    tagline: "We Build For You",
    headerLink: "#"
  });
  const [footerData, setFooterData] = useState<FooterData>({
    tagline: "Bersatu Berusaha Berbakti",
    links: [
      { text: "JKR Sarawak Website", href: "https://jkr.sarawak.gov.my/" },
      { text: "Service Sarawak", href: "https://service.sarawak.gov.my/" },
      { text: "Sarawak Gov", href: "https://www.sarawak.gov.my/" }
    ],
    copyright: "© 2025 Public Works Department Sarawak. All Rights Reserved."
  });
  
  const [logoSrc, setLogoSrc] = useState('https://ik.imagekit.io/z7yhsbzej/7227f37e-0954-4095-88b0-0c8b05995132%20(1).png');
  const [isColorEditMode, setIsColorEditMode] = useState(false);
  
  // Checklist State
  const [checklists, setChecklists] = useState<InitiativeChecklistState>({});
  const [workflows, setWorkflows] = useState<Record<string, ChecklistPhase[]>>({});

  // Role-Based Permission Flags
  const isSuperAdmin = user?.role === 'super_admin';
  const isEditor = user?.role === 'editor';
  const canEditOperational = isSuperAdmin || isEditor; // Thrusts, KPIs, Timeline, Checklist
  const canEditGlobal = isSuperAdmin; // Vision, Mission, Header, Footer, Stories
  const canDelete = isSuperAdmin; // Only Super Admin can delete initiatives/KPIs

  // Initial Checklist Population
  useEffect(() => {
    const initialWorkflows: Record<string, ChecklistPhase[]> = {};
    initiatives.forEach(i => {
        initialWorkflows[i.id] = getChecklistForInitiative(i.id);
    });
    setWorkflows(initialWorkflows);
  }, []);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(theme);
  }, [theme]);

  // Modals
  const [isMediaLibraryOpen, setIsMediaLibraryOpen] = useState(false);
  const [mediaCallback, setMediaCallback] = useState<((url: string) => void) | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [isChatLoading, setIsChatLoading] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchResult, setSearchResult] = useState('');
  const [isSearchLoading, setIsSearchLoading] = useState(false);
  const [summaryModal, setSummaryModal] = useState<{ isOpen: boolean; title: string; text: string; isLoading: boolean }>({ isOpen: false, title: '', text: '', isLoading: false });
  
  // Financial AI
  const [aiBriefing, setAiBriefing] = useState('');
  const [isAiBriefingLoading, setIsAiBriefingLoading] = useState(false);
  const [aiBudgetEstimation, setAiBudgetEstimation] = useState('');
  const [isAiBudgetEstimationLoading, setIsAiBudgetEstimationLoading] = useState(false);

  // Initiative Management
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [initiativeToUpdate, setInitiativeToUpdate] = useState<Initiative | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [addInitiativeThrustId, setAddInitiativeThrustId] = useState<number | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [initiativeToDelete, setInitiativeToDelete] = useState<Initiative | null>(null);

  // KPI Management
  const [kpiModalInfo, setKpiModalInfo] = useState<{ index: number | null, kpi: KPI | null, isNew: boolean } | null>(null);

  // --- Handlers ---

  const handleOpenAuth = () => {
      setIsAuthModalOpen(true);
  };

  const handleLogout = () => {
    logout();
    setIsColorEditMode(false);
  };

  const handleOpenMediaLibrary = (callback?: (url: string) => void) => {
    if (callback) setMediaCallback(() => callback);
    setIsMediaLibraryOpen(true);
  };

  const handleMediaSelect = (url: string) => {
    if (mediaCallback) mediaCallback(url);
    setIsMediaLibraryOpen(false);
    setMediaCallback(null);
  };

  // AI Features (Thinking/Search/Summary - logic remains same)
  const handleGetRiskSummary = async (riskyInitiatives: { initiative: Initiative, risk: RiskProfile }[], useThinkingMode: boolean): Promise<string> => {
    // ... existing logic
     try {
      const context = riskyInitiatives.map(({ initiative, risk }) => ({
        id: initiative.id,
        name: initiative.name,
        progress: initiative.progress,
        plan_end: initiative.plan_end,
        risk_level: risk.level,
        risk_justification: risk.justification,
        mitigation_plan: initiative.mitigation,
        budget_estimate: initiative.budgetEstimate,
        notes: initiative.notes
      }));

      const prompt = `
        You are an expert project management analyst for JKR Sarawak.
        Based on the following list of high and medium-risk initiatives, provide a concise executive briefing for senior management.
        
        Tasks: Overview, Critical Issues, Common Themes, Mitigation Evaluation, Recommendations.
        JSON Data: ${JSON.stringify(context, null, 2)}
      `;
      
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const modelConfig = useThinkingMode ? { model: 'gemini-3-pro-preview', config: { thinkingConfig: { thinkingBudget: 16384 } } } : { model: 'gemini-2.5-flash' };

      const response = await ai.models.generateContent({ ...modelConfig, contents: prompt });
      return response.text || "No response generated.";
    } catch (e) {
      return "Error: Could not generate the AI executive briefing.";
    }
  };

  const handleAiSearch = async (query: string, useThinkingMode: boolean) => {
      setIsSearchLoading(true);
      try {
          const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
          const model = useThinkingMode ? 'gemini-3-pro-preview' : 'gemini-2.5-flash';
          const config = useThinkingMode ? { thinkingConfig: { thinkingBudget: 10000 } } : {};
          const context = `Context: JKR Sarawak Strategic Plan 2025-2030. Vision: ${direction.vision}. Query: ${query}`;
          const response = await ai.models.generateContent({ model: model, contents: context, config: config });
          setSearchResult(response.text || "No answer found.");
      } catch (error) {
          setSearchResult("An error occurred while searching.");
      } finally {
          setIsSearchLoading(false);
      }
  };

  const handleAiSummarize = async (text: string, title: string) => {
      setSummaryModal({ isOpen: true, title, text: '', isLoading: true });
      try {
          const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
          const response = await ai.models.generateContent({ model: 'gemini-2.5-flash', contents: `Summarize for executive briefing:\n\n${text}` });
          setSummaryModal(prev => ({ ...prev, text: response.text || "No summary generated.", isLoading: false }));
      } catch (error) {
          setSummaryModal(prev => ({ ...prev, text: "Error generating summary.", isLoading: false }));
      }
  };
  
  const handleChatSendMessage = async (message: string) => {
      const newUserMessage: ChatMessage = { role: 'user', parts: [{ text: message }], timestamp: new Date().toLocaleTimeString() };
      setChatHistory(prev => [...prev, newUserMessage]);
      setIsChatLoading(true);
      try {
          const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
          const chat = ai.chats.create({ model: 'gemini-2.5-flash', history: [] });
          const result = await chat.sendMessage({ message: message });
          setChatHistory(prev => [...prev, { role: 'model', parts: [{ text: result.text || "Error" }], timestamp: new Date().toLocaleTimeString() }]);
      } catch (error) {
           setChatHistory(prev => [...prev, { role: 'model', parts: [{ text: "Error" }], timestamp: new Date().toLocaleTimeString() }]);
      } finally {
          setIsChatLoading(false);
      }
  };

  const handleAiChecklistAnalysis = async (initiative: Initiative, checklistState: Record<string, boolean>, phase: ChecklistPhase) => {
      try {
          const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
          const prompt = `Analyze progress for ${initiative.name}, Phase: ${phase.name}. Items: ${JSON.stringify(checklistState)}`;
          const response = await ai.models.generateContent({ model: 'gemini-2.5-flash', contents: prompt });
          return response.text || "Analysis failed.";
      } catch (e) { return "Error analyzing checklist."; }
  };

  const handleGetAiFinancialBriefing = async () => {
      setIsAiBriefingLoading(true);
      try {
          const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
          const response = await ai.models.generateContent({ model: 'gemini-2.5-flash', contents: `Analyze financial data: Budget ${financialSummary.budget}, Spending ${financialSummary.spending}` });
          setAiBriefing(response.text || "No briefing.");
      } catch (e) { setAiBriefing("Error."); } finally { setIsAiBriefingLoading(false); }
  };

  const handleGetAiBudgetEstimation = async () => {
      setIsAiBudgetEstimationLoading(true);
      try {
          const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
           const response = await ai.models.generateContent({ model: "gemini-2.5-flash", contents: "Estimate budget allocations for infrastructure projects in Malaysia 2025", config: { tools: [{googleSearch: {}}] } });
          setAiBudgetEstimation(response.text || "No estimation.");
      } catch (e) { setAiBudgetEstimation("Error."); } finally { setIsAiBudgetEstimationLoading(false); }
  };

  // CRUD Handlers
  const updateHeader = (field: keyof HeaderData, value: string) => setHeaderData(prev => ({ ...prev, [field]: value }));
  const updateFooter = (field: 'tagline' | 'copyright' | 'linkText' | 'linkHref', value: string, linkIndex?: number) => {
      if (field === 'tagline' || field === 'copyright') {
          setFooterData(prev => ({ ...prev, [field]: value }));
      } else if (linkIndex !== undefined) {
          setFooterData(prev => {
              const newLinks = [...prev.links];
              if (field === 'linkText') newLinks[linkIndex].text = value;
              if (field === 'linkHref') newLinks[linkIndex].href = value;
              return { ...prev, links: newLinks };
          });
      }
  };
  
  const updateInitiative = (id: string, updates: Partial<Initiative>) => setInitiatives(prev => prev.map(init => init.id === id ? { ...init, ...updates } : init));
  const deleteInitiative = (id: string) => setInitiatives(prev => prev.filter(init => init.id !== id));
  const addInitiative = (newInit: Initiative) => { setInitiatives(prev => [...prev, newInit]); setWorkflows(prev => ({ ...prev, [newInit.id]: getChecklistForInitiative(newInit.id) })); };
  const updateKpi = (index: number, updated: KPI) => setKpis(prev => prev.map((k, i) => i === index ? updated : k));
  const deleteKpi = (index: number) => setKpis(prev => prev.filter((_, i) => i !== index));
  const addKpi = (kpi: KPI) => setKpis(prev => [...prev, kpi]);
  const updateStory = (id: number, field: any, value: string) => setStories(prev => prev.map(s => s.id === id ? { ...s, [field]: value } : s));
  const updateEngagementChannel = (id: number, field: any, value: string) => setEngagementChannels(prev => prev.map(c => c.id === id ? { ...c, [field]: value } : c));
  const resetAllColors = () => alert("Colors reset to default.");

  // Permission-based rendering helper
  // We pass 'isAdminMode' as a generic "can edit" flag to components that support it.
  // For components that support granular "canDelete", we pass that explicitly.

  const renderContent = () => {
    switch (activeSection) {
      case 'welcome': return <WelcomeContent isAdminMode={canEditGlobal} pageContent={welcomePageContent} onUpdatePageContent={(f, v) => setWelcomePageContent(p => ({...p, [f]: v}))} logoSrc={logoSrc} onSummarize={handleAiSummarize} />;
      case 'overview': return <OverviewContent isAdminMode={canEditGlobal} direction={direction} objectives={objectives} onUpdateDirection={(f, v) => setDirection(p => ({...p, [f]: v}))} onUpdateObjective={(id, f, v) => setObjectives(p => p.map(o => o.id === id ? { ...o, [f]: v } : o))} onOpenMediaLibrary={handleOpenMediaLibrary} onSummarize={handleAiSummarize} />;
      case 'thrusts': return <ThrustsContent isAdminMode={canEditOperational} canDelete={canDelete} initiatives={initiatives} onEditInitiative={(init) => { setInitiativeToUpdate(init); setIsUpdateModalOpen(true); }} onDeleteInitiative={(id) => { const init = initiatives.find(i => i.id === id); if(init) { setInitiativeToDelete(init); setIsDeleteModalOpen(true); } }} onAddInitiative={(tid) => { setAddInitiativeThrustId(tid); setIsAddModalOpen(true); }} onSummarize={handleAiSummarize} />;
      case 'roadmap': return <RoadmapContent isAdminMode={canEditGlobal} milestones={milestones} initiatives={initiatives} onUpdateMilestone={(ti, mi, t) => setMilestones(prev => { const n = [...prev]; n[ti].milestones[mi] = t; return n; })} onDeleteMilestone={(ti, mi) => setMilestones(prev => { const n = [...prev]; n[ti].milestones.splice(mi, 1); return n; })} onAddMilestone={(ti, t) => setMilestones(prev => { const n = [...prev]; n[ti].milestones.push(t); return n; })} />;
      case 'timeline': return <TimelineContent initiatives={initiatives} isAdminMode={canEditOperational} onEditInitiative={(init) => { setInitiativeToUpdate(init); setIsUpdateModalOpen(true); }} />;
      case 'kpi-dashboard': return <DashboardContent kpis={kpis} isAdminMode={canEditOperational} canDelete={canDelete} onDeleteKpi={deleteKpi} onAddKpi={() => setKpiModalInfo({ index: null, kpi: null, isNew: true })} initiatives={initiatives} strategicThrusts={strategicThrusts} onResetAllProgress={() => setInitiatives(prev => prev.map(i => ({...i, progress: 0, progressHistory: []})))} onEditKpi={(index) => setKpiModalInfo({ index, kpi: kpis[index], isNew: false })} />;
      case 'checklist': return <ChecklistContent isAdminMode={canEditOperational} initiatives={initiatives} checklists={checklists} workflows={workflows} onUpdateChecklist={(iid, cid, val) => setChecklists(prev => ({ ...prev, [iid]: { ...prev[iid], [cid]: val } }))} onUpdateWorkflow={(iid, wf) => setWorkflows(prev => ({ ...prev, [iid]: wf }))} onResetWorkflow={(iid) => setWorkflows(prev => ({ ...prev, [iid]: getChecklistForInitiative(iid) }))} onAiAnalysis={handleAiChecklistAnalysis} />;
      case 'risk-analysis': return <RiskAnalysisContent initiatives={initiatives} onGetAiSummary={handleGetRiskSummary} />;
      case 'financials': return <FinancialsContent isAdminMode={isSuperAdmin} summary={financialSummary} thrustData={thrustFinancials} objectives={objectives} onUpdateSummary={(f, v) => setFinancialSummary(p => ({...p, [f]: v}))} onUpdateThrust={(id, f, v) => setThrustFinancials(p => p.map(t => t.id === id ? { ...t, [f]: v } : t))} onSummarize={handleAiSummarize} onGetAiBriefing={handleGetAiFinancialBriefing} aiBriefing={aiBriefing} isAiBriefingLoading={isAiBriefingLoading} onGetAiBudgetEstimation={handleGetAiBudgetEstimation} aiBudgetEstimation={aiBudgetEstimation} isAiBudgetEstimationLoading={isAiBudgetEstimationLoading} />;
      case 'stories': return <StoriesContent isAdminMode={canEditGlobal} canDelete={canDelete} stories={stories} pageContent={storiesPageContent} onUpdateStory={updateStory} onUpdatePageContent={(f, v) => setStoriesPageContent(p => ({...p, [f]: v}))} onAddStory={() => setStories(p => [...p, { id: Date.now(), title: "New Story", subtitle: "Subtitle", description: "Description", gradient: "from-gray-500 to-gray-700", href: "#", buttonText: "Read More" }])} onDeleteStory={(id) => setStories(p => p.filter(s => s.id !== id))} onSummarize={handleAiSummarize} />;
      case 'engage': return <EngageContent isAdminMode={canEditGlobal} channels={engagementChannels} pageContent={engagePageContent} onUpdateChannel={updateEngagementChannel} onUpdatePageContent={(f, v) => setEngagePageContent(p => ({...p, [f]: v}))} onUpdateInitiativeText={(sec, id, val, f) => setEngagePageContent(p => { const list = sec === 'governance' ? 'governanceInitiatives' : 'mediaInitiatives'; const items = [...p[list]]; const idx = items.findIndex(i => i.id === id); if(idx>=0) items[idx] = { ...items[idx], [f]: val }; return { ...p, [list]: items }; })} onOpenMediaLibrary={handleOpenMediaLibrary} onSummarize={handleAiSummarize} />;
      case 'admin': return isSuperAdmin ? <AdminContent onResetAllColors={resetAllColors} /> : <div className="text-center p-10 text-red-500">Access Restricted: Super Admin Only</div>;
      case 'live-dashboard': return <LiveDashboardContent metrics={liveMetrics} locations={projectLocations} allUpdates={allLiveProjectUpdates} allFeedback={allLiveFeedbacks} performanceHotspots={performanceHotspots} resourceUtilization={resourceUtilization} />;
      default: return <WelcomeContent isAdminMode={canEditGlobal} pageContent={welcomePageContent} logoSrc={logoSrc} onSummarize={handleAiSummarize} />;
    }
  };

  return (
    <div className={`min-h-screen bg-background text-text-primary transition-colors duration-300 ${theme}`}>
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
      <MediaLibraryModal isOpen={isMediaLibraryOpen} onClose={() => setIsMediaLibraryOpen(false)} onSelectImage={handleMediaSelect} />
      <AISearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} onSearch={handleAiSearch} searchResult={searchResult} isLoading={isSearchLoading} clearResult={() => setSearchResult('')} />
      <SummaryModal isOpen={summaryModal.isOpen} onClose={() => setSummaryModal(prev => ({ ...prev, isOpen: false }))} title={summaryModal.title} summaryText={summaryModal.text} isLoading={summaryModal.isLoading} />
      <UpdateInitiativeModal isOpen={isUpdateModalOpen} onClose={() => setIsUpdateModalOpen(false)} onSave={updateInitiative} initiative={initiativeToUpdate} initiatives={initiatives} />
      <AddInitiativeModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} onSave={addInitiative} thrustId={addInitiativeThrustId} initiatives={initiatives} />
      <ConfirmDeleteModal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} onConfirm={() => initiativeToDelete && deleteInitiative(initiativeToDelete.id)} initiative={initiativeToDelete} />
      <KpiModal isOpen={!!kpiModalInfo} onClose={() => setKpiModalInfo(null)} onSave={(kpi) => { if(kpiModalInfo?.isNew) addKpi(kpi); else if(kpiModalInfo?.index !== null) updateKpi(kpiModalInfo.index, kpi); }} kpiInfo={kpiModalInfo} initiatives={initiatives} />
      
      <Header 
        isAdminMode={canEditGlobal || canEditOperational} // Just for UI toggle state visual
        toggleAdminMode={isAuthenticated ? handleLogout : handleOpenAuth} 
        data={headerData} 
        onUpdate={updateHeader} 
        logoSrc={logoSrc} 
        onOpenMediaLibrary={handleOpenMediaLibrary} 
        onUpdateLogo={setLogoSrc} 
        onResetLogo={() => setLogoSrc('https://ik.imagekit.io/z7yhsbzej/7227f37e-0954-4095-88b0-0c8b05995132%20(1).png')} 
        onOpenAiSearch={() => setIsSearchOpen(true)} 
        onOpenChatBot={() => setIsChatOpen(true)} 
        isColorEditMode={isColorEditMode} 
        toggleColorEditMode={() => setIsColorEditMode(!isColorEditMode)}
        isMobileMenuOpen={isMobileMenuOpen}
        onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        onLogout={handleLogout}
      />
      
      <Navigation 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        isAdminMode={canEditOperational || isSuperAdmin} // Show Admin/Ops tabs
        logoSrc={logoSrc}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
         {renderContent()}
      </main>

      <Footer isAdminMode={canEditGlobal} data={footerData} onUpdate={updateFooter} />
      
      <AIChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} onSendMessage={handleChatSendMessage} history={chatHistory} isLoading={isChatLoading} />

    </div>
  );
};

const App: React.FC = () => (
  <AuthProvider>
    <DashboardApp />
  </AuthProvider>
);

export default App;
