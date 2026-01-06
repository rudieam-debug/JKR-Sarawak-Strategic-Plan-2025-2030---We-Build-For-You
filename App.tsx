
import React, { useState, useEffect, useCallback } from 'react';
import { GoogleGenAI } from "@google/genai";
import { AuthProvider, useAuth } from './context/AuthContext';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { WelcomeContent } from './components/content/WelcomeContent';
import { OverviewContent } from './components/content/OverviewContent';
import { ThrustsContent } from './components/content/ThrustsContent';
import { EcosystemContent } from './components/content/EcosystemContent';
import { RoadmapContent } from './components/content/RoadmapContent';
import { TimelineContent } from './components/content/TimelineContent';
import { DashboardContent } from './components/content/DashboardContent';
import { ChecklistContent } from './components/content/ChecklistContent';
import { RiskAnalysisContent } from './components/content/RiskAnalysisContent';
import { FinancialsContent } from './components/content/FinancialsContent';
import { StoriesContent } from './components/content/StoriesContent';
import { AchievementsContent } from './components/content/AchievementsContent';
import { PartnersContent } from './components/content/PartnersContent';
import { EngageContent } from './components/content/EngageContent';
import { AdminContent } from './components/content/AdminContent';
import { LiveDashboardContent } from './components/content/LiveDashboardContent';
import { TaskListContent } from './components/content/TaskListContent';

import { AIChatBot } from './components/AIChatBot';
import { AISearchModal } from './components/AISearchModal';
import { MediaLibraryModal } from './components/MediaLibraryModal';
import { AuthModal } from './components/AuthModal';
import { SummaryModal } from './components/SummaryModal';
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
  initialAchievements,
  initialPartners,
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
  Achievement,
  Partner,
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll for synchronized header/nav layout
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Data State
  const [initiatives, setInitiatives] = useState<Initiative[]>(initialInitiatives);
  const [direction, setDirection] = useState<StrategicDirection>(initialDirection);
  const [objectives, setObjectives] = useState<StrategicObjective[]>(initialObjectives);
  const [milestones, setMilestones] = useState<TierMilestone[]>(initialMilestones);
  const [kpis, setKpis] = useState<KPI[]>(initialKpis);
  const [stories, setStories] = useState<SuccessStory[]>(initialSuccessStories);
  const [achievements, setAchievements] = useState<Achievement[]>(initialAchievements);
  const [partners, setPartners] = useState<Partner[]>(initialPartners);
  const [storiesPageContent, setStoriesPageContent] = useState<StoriesPageContent>(initialStoriesPageContent);
  const [engagementChannels, setEngagementChannels] = useState<EngagementChannel[]>(initialEngagementChannels);
  const [engagePageContent, setEngagePageContent] = useState<EngagePageContent>(initialEngagePageContent);
  const [financialSummary, setFinancialSummary] = useState<FinancialSummary>(initialFinancialSummary);
  const [thrustFinancials, setThrustFinancials] = useState<ThrustFinancials[]>(initialThrustFinancials);
  const [welcomePageContent, setWelcomePageContent] = useState<WelcomePageContent>(initialWelcomePageContent);
  
  // UI State
  const [headerData, setHeaderData] = useState<HeaderData>({
    mainTitle: "THE JKR SARAWAK MOVING FORWARD STRATEGY 2025-2030",
    tagline: "WE BUILD FOR YOU",
    headerLink: "#"
  });
  const [footerData, setFooterData] = useState<FooterData>({
    tagline: "Bersatu Berusaha Berbakti\nAn Honour To Serve",
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
  const canEditOperational = isSuperAdmin || isEditor;
  const canEditGlobal = isSuperAdmin;
  const canDelete = isSuperAdmin;

  useEffect(() => {
    const initialWorkflows: Record<string, ChecklistPhase[]> = {};
    initiatives.forEach(i => {
        initialWorkflows[i.id] = getChecklistForInitiative(i.id);
    });
    setWorkflows(initialWorkflows);
  }, []);

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

  const handleOpenAuth = () => setIsAuthModalOpen(true);
  const handleLogout = () => { logout(); setIsColorEditMode(false); };

  const handleOpenMediaLibrary = (callback?: (url: string) => void) => {
    if (callback) setMediaCallback(() => callback);
    setIsMediaLibraryOpen(true);
  };

  const handleMediaSelect = (url: string) => {
    if (mediaCallback) mediaCallback(url);
    setIsMediaLibraryOpen(false);
    setMediaCallback(null);
  };

  const handleAiSearch = async (query: string, useThinkingMode: boolean) => {
      setIsSearchLoading(true);
      try {
          const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
          const model = useThinkingMode ? 'gemini-3-pro-preview' : 'gemini-3-flash-preview';
          const config = useThinkingMode ? { thinkingConfig: { thinkingBudget: 10000 } } : {};
          const context = `Context: JKR Sarawak Strategic Plan 2025-2030. Vision: ${direction.vision}. Query: ${query}`;
          const response = await ai.models.generateContent({ model, contents: context, config });
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
          const response = await ai.models.generateContent({ model: 'gemini-3-flash-preview', contents: `Summarize for executive briefing:\n\n${text}` });
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
          const chat = ai.chats.create({ model: 'gemini-3-flash-preview', history: [] });
          const result = await chat.sendMessage({ message });
          setChatHistory(prev => [...prev, { role: 'model', parts: [{ text: result.text || "Error" }], timestamp: new Date().toLocaleTimeString() }]);
      } catch (error) {
           setChatHistory(prev => [...prev, { role: 'model', parts: [{ text: "Error" }], timestamp: new Date().toLocaleTimeString() }]);
      } finally {
          setIsChatLoading(false);
      }
  };

  const handleUpdateInitiative = (id: string, updates: Partial<Initiative>) => 
    setInitiatives(prev => prev.map(init => init.id === id ? { ...init, ...updates } : init));

  const handleUpdateDates = (id: string, newPlanStart: string, newPlanEnd: string) => {
      handleUpdateInitiative(id, { plan_start: newPlanStart, plan_end: newPlanEnd });
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'welcome': return <WelcomeContent isAdminMode={canEditGlobal} pageContent={welcomePageContent} onUpdatePageContent={(f, v) => setWelcomePageContent(p => ({...p, [f]: v}))} logoSrc={logoSrc} onSummarize={handleAiSummarize} />;
      case 'overview': return <OverviewContent isAdminMode={canEditGlobal} direction={direction} objectives={objectives} onUpdateDirection={(f, v) => setDirection(p => ({...p, [f]: v}))} onUpdateObjective={(id, f, v) => setObjectives(p => p.map(o => o.id === id ? { ...o, [f]: v } : o))} onOpenMediaLibrary={handleOpenMediaLibrary} onSummarize={handleAiSummarize} onNavigateToEcosystem={() => setActiveSection('ecosystem')} />;
      case 'thrusts': return <ThrustsContent isAdminMode={canEditOperational} canDelete={canDelete} initiatives={initiatives} onEditInitiative={(init) => { setInitiativeToUpdate(init); setIsUpdateModalOpen(true); }} onDeleteInitiative={(id) => { const init = initiatives.find(i => i.id === id); if(init) { setInitiativeToDelete(init); setIsDeleteModalOpen(true); } }} onAddInitiative={(tid) => { setAddInitiativeThrustId(tid); setIsAddModalOpen(true); }} onSummarize={handleAiSummarize} />;
      case 'ecosystem': return <EcosystemContent initiatives={initiatives} isAdminMode={canEditOperational} onEditInitiative={(init) => { setInitiativeToUpdate(init); setIsUpdateModalOpen(true); }} />;
      case 'roadmap': return <RoadmapContent isAdminMode={canEditGlobal} milestones={milestones} initiatives={initiatives} onUpdateMilestone={(ti, mi, t) => setMilestones(prev => { const n = [...prev]; n[ti].milestones[mi] = t; return n; })} onDeleteMilestone={(ti, mi) => setMilestones(prev => { const n = [...prev]; n[ti].milestones.splice(mi, 1); return n; })} onAddMilestone={(ti, t) => setMilestones(prev => { const n = [...prev]; n[ti].milestones.push(t); return n; })} />;
      case 'timeline': return <TimelineContent initiatives={initiatives} isAdminMode={canEditOperational} onEditInitiative={(init) => { setInitiativeToUpdate(init); setIsUpdateModalOpen(true); }} onUpdateDates={handleUpdateDates} />;
      case 'kpi-dashboard': return <DashboardContent kpis={kpis} isAdminMode={canEditOperational} canDelete={canDelete} onDeleteKpi={(idx) => setKpis(p => p.filter((_, i) => i !== idx))} onAddKpi={() => setKpiModalInfo({ index: null, kpi: null, isNew: true })} initiatives={initiatives} strategicThrusts={strategicThrusts} onEditKpi={(index) => setKpiModalInfo({ index, kpi: kpis[index], isNew: false })} />;
      case 'checklist': return <ChecklistContent isAdminMode={canEditOperational} initiatives={initiatives} checklists={checklists} workflows={workflows} onUpdateChecklist={(iid, cid, val) => setChecklists(prev => ({ ...prev, [iid]: { ...prev[iid], [cid]: val } }))} onUpdateWorkflow={(iid, wf) => setWorkflows(prev => ({ ...prev, [iid]: wf }))} onResetWorkflow={(iid) => setWorkflows(prev => ({ ...prev, [iid]: getChecklistForInitiative(iid) }))} onAiAnalysis={async (init, state, phase) => {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const res = await ai.models.generateContent({ model: 'gemini-3-flash-preview', contents: `Analyze checklist progress for ${init.name}. State: ${JSON.stringify(state)}` });
        return res.text || "Analysis failed.";
      }} />;
      case 'tasks': return <TaskListContent />;
      case 'risk-analysis': return <RiskAnalysisContent initiatives={initiatives} onGetAiSummary={async (risky, useThink) => {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const res = await ai.models.generateContent({ model: useThink ? 'gemini-3-pro-preview' : 'gemini-3-flash-preview', contents: `Risk summary for: ${JSON.stringify(risky)}` });
        return res.text || "Summary failed.";
      }} />;
      case 'financials': return <FinancialsContent isAdminMode={isSuperAdmin} summary={financialSummary} thrustData={thrustFinancials} objectives={objectives} onUpdateSummary={(f, v) => setFinancialSummary(p => ({...p, [f]: v}))} onUpdateThrust={(id, f, v) => setThrustFinancials(p => p.map(t => t.id === id ? { ...t, [f]: v } : t))} onSummarize={handleAiSummarize} onGetAiBriefing={async () => {}} aiBriefing="" isAiBriefingLoading={false} onGetAiBudgetEstimation={async () => {}} aiBudgetEstimation="" isAiBudgetEstimationLoading={false} />;
      case 'stories': return <StoriesContent isAdminMode={canEditGlobal} canDelete={canDelete} stories={stories} pageContent={storiesPageContent} onUpdateStory={(id, f, v) => setStories(p => p.map(s => s.id === id ? { ...s, [f]: v } : s))} onUpdatePageContent={(f, v) => setStoriesPageContent(p => ({...p, [f]: v}))} onAddStory={() => {}} onDeleteStory={(id) => setStories(p => p.filter(s => s.id !== id))} onSummarize={handleAiSummarize} />;
      case 'achievements': return <AchievementsContent isAdminMode={canEditGlobal} achievements={achievements} onUpdateAchievement={(id, f, v) => setAchievements(p => p.map(a => a.id === id ? { ...a, [f]: v } : a))} onDeleteAchievement={(id) => setAchievements(p => p.filter(a => a.id !== id))} onAddAchievement={() => {}} onSummarize={handleAiSummarize} />;
      case 'partners': return <PartnersContent isAdminMode={canEditGlobal} partners={partners} onUpdatePartner={(id, f, v) => setPartners(p => p.map(part => part.id === id ? { ...part, [f]: v } : part))} onDeletePartner={(id) => setPartners(p => p.filter(part => part.id !== id))} onAddPartner={() => {}} />;
      case 'engage': return <EngageContent isAdminMode={canEditGlobal} channels={engagementChannels} pageContent={engagePageContent} onUpdateChannel={(id, f, v) => setEngagementChannels(p => p.map(c => c.id === id ? { ...c, [f]: v } : c))} onUpdatePageContent={(f, v) => setEngagePageContent(p => ({...p, [f]: v}))} onUpdateInitiativeText={(sec, id, val, f) => {}} onOpenMediaLibrary={handleOpenMediaLibrary} onSummarize={handleAiSummarize} />;
      case 'admin': return isSuperAdmin ? <AdminContent onResetAllColors={() => {}} /> : <div className="text-center p-10 text-red-500">Access Restricted: Super Admin Only</div>;
      case 'live-dashboard': return <LiveDashboardContent metrics={liveMetrics} locations={projectLocations} allUpdates={allLiveProjectUpdates} allFeedback={allLiveFeedbacks} performanceHotspots={performanceHotspots} resourceUtilization={resourceUtilization} />;
      default: return <WelcomeContent isAdminMode={canEditGlobal} pageContent={welcomePageContent} logoSrc={logoSrc} onSummarize={handleAiSummarize} />;
    }
  };

  return (
    <div className={`min-h-screen bg-background text-text-primary transition-colors duration-300 dark`}>
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
      <MediaLibraryModal isOpen={isMediaLibraryOpen} onClose={() => setIsMediaLibraryOpen(false)} onSelectImage={handleMediaSelect} />
      <AISearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} onSearch={handleAiSearch} searchResult={searchResult} isLoading={isSearchLoading} clearResult={() => setSearchResult('')} />
      <SummaryModal isOpen={summaryModal.isOpen} onClose={() => setSummaryModal(prev => ({ ...prev, isOpen: false }))} title={summaryModal.title} summaryText={summaryModal.text} isLoading={summaryModal.isLoading} />
      
      <UpdateInitiativeModal isOpen={isUpdateModalOpen} onClose={() => setIsUpdateModalOpen(false)} onSave={handleUpdateInitiative} initiative={initiativeToUpdate} initiatives={initiatives} />
      <AddInitiativeModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} onSave={(ni) => setInitiatives(p => [...p, ni])} thrustId={addInitiativeThrustId} initiatives={initiatives} />
      <ConfirmDeleteModal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} onConfirm={() => initiativeToDelete && setInitiatives(p => p.filter(i => i.id !== initiativeToDelete.id))} initiative={initiativeToDelete} />
      <KpiModal isOpen={!!kpiModalInfo} onClose={() => setKpiModalInfo(null)} onSave={(k) => {}} kpiInfo={kpiModalInfo} initiatives={initiatives} />
      
      <Header 
        isAdminMode={isAuthenticated} 
        toggleAdminMode={isAuthenticated ? handleLogout : handleOpenAuth} 
        data={headerData} 
        onUpdate={(f, v) => setHeaderData(p => ({...p, [f]: v}))} 
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
        scrolled={scrolled}
      />
      
      <Navigation 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        isAdminMode={canEditOperational || isSuperAdmin} 
        logoSrc={logoSrc}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        scrolled={scrolled}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-44 md:pt-52">
         {renderContent()}
      </main>

      <Footer isAdminMode={canEditGlobal} data={footerData} onUpdate={(f, v, i) => {}} />
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
