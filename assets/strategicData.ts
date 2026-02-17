
import { 
  Target, 
  Users, 
  Globe, 
  BarChart3, 
  Calendar, 
  BookOpen, 
  Video, 
  MessageSquare, 
  Shield, 
  TrendingUp, 
  MapPin, 
  Smartphone,
  ShieldCheck,
  Cpu,
  Library,
  LayoutDashboard,
  Settings,
  CheckSquare,
  BarChartHorizontal,
  Briefcase,
  Activity,
  Home,
  FileText,
  Zap,
  Leaf,
  Award,
  Construction,
  Layers,
  Trophy,
  Medal,
  Star,
  Handshake,
  ListTodo,
  Banknote,
  ListChecks,
  AlertTriangle
} from 'lucide-react';
import type { 
  StrategicThrust, 
  TierMilestone, 
  KPI, 
  Initiative, 
  NavItem, 
  StrategicDirection, 
  StrategicObjective, 
  SuccessStory, 
  StoriesPageContent, 
  EngagementChannel, 
  EngagePageContent, 
  WelcomePageContent, 
  Achievement, 
  Partner
} from '../types';

export const strategicThrusts: StrategicThrust[] = [
  { id: 1, title: "Infrastructure Delivery Excellence", icon: Zap, color: "bg-yellow-600", shortColor: 'bg-yellow-700', description: "Zero Delays, Zero Defects, Zero Excuses. Focusing on standardizing project planning and performance-based contractor management." },
  { id: 2, title: "Digital Transformation & AI Engineering", icon: Cpu, color: "bg-slate-400", shortColor: 'bg-slate-500', description: "From Drawings to Data. Transforming JKR into a Digital Infrastructure Authority through BIM and AI-enabled monitoring." },
  { id: 3, title: "Rural Transformation & Connectivity", icon: MapPin, color: "bg-orange-800", shortColor: 'bg-orange-900', description: "Connecting the Last Mile. Achieving 100% rural road connectivity by 2028 and upgrading interior accessibility." },
  { id: 4, title: "ESG & Green Infrastructure", icon: Leaf, color: "bg-green-600", shortColor: 'bg-green-700', description: "Building for a Changing World. Integrating sustainable design, carbon reduction, and climate-ready standards." },
  { id: 5, title: "Talent & Organizational Excellence", icon: Award, color: "bg-red-600", shortColor: 'bg-red-700', description: "Engineers of the Future. Developing a future-ready workforce with strong engineering values and 'JKR in Unity' culture." },
  { id: 6, title: "Global Positioning & Partnerships", icon: Globe, color: "bg-amber-600", shortColor: 'bg-amber-700', description: "Sarawak to the World. Positioning JKR as a global leader through benchmarking, awards, and strategic industry collaborations." }
];

export const foundationThrust: StrategicThrust = { 
  id: 7, 
  title: "The Enabling Ecosystem", 
  icon: Layers, 
  color: "bg-emerald-600", 
  shortColor: 'bg-emerald-700', 
  description: "Lubricating the Machine. Cultural and external market enablers including change management and supply chain development." 
};

export const strategicDirection: StrategicDirection = {
  vision: "To be a world-class public works organisation that delivers sustainable, safe, digital, and inclusive infrastructure for every community in Sarawak.",
  mission: "To plan, deliver, and manage infrastructure through engineering excellence, innovation, integrity, and strong stakeholder collaboration.",
  goal: `"We Build for You" – Driven by the philosophy of Digital-First, Sustainability-Led, and Rural-Inclusive development in alignment with PCDS 2030.`
};

export const strategicObjectives: StrategicObjective[] = [
    {
      id: 1,
      title: "Sustainable & Resilient Infrastructure",
      description: "Prioritizing green technology, climate resilience, and strategic regional connectivity.",
      icon: ShieldCheck,
      color: "blue",
      thrusts: [3, 4],
    },
    {
      id: 2,
      title: "Digital Transformation & Innovation",
      description: "Leveraging BIM, AI, and IoT for smarter delivery and proactive asset management.",
      icon: Cpu,
      color: "purple",
      thrusts: [2],
    },
    {
      id: 3,
      title: "Inclusive & High-Quality Service",
      description: "Fostering skilled workforce and public trust through social inclusion and engagement.",
      icon: Users,
      color: "green",
      thrusts: [1, 5],
    },
    {
      id: 4,
      title: "Governance & Global Benchmarking",
      description: "Upholding integrity and optimizing resources to meet international engineering standards.",
      icon: Library,
      color: "red",
      thrusts: [6],
    },
];

export const tierMilestones: TierMilestone[] = [
  {
    tier: "Thrust 1: Core Foundation",
    milestones: [
      "Mandatory Policies & Gold Standards",
      "Basic Compliance Verification",
      "Operationalization of the Project Court and Safety Tribunal",
      "Stabilizers for JKR Infrastructure Base"
    ],
    color: "bg-yellow-900/40 border-[#FFD700] text-[#FFD700] shadow-[0_0_20px_rgba(255,215,0,0.15)]"
  },
  {
    tier: "Thrust 2: Performance Accelerator",
    milestones: [
      "The Engine Room: Systems & Tools",
      "Optimization of Daily Engineering Tasks",
      "Cost Data Bank Operational",
      "Integrated Digital Workflows"
    ],
    color: "bg-slate-800/60 border-[#E2E8F0] text-[#E2E8F0] shadow-[0_0_20px_rgba(226,232,240,0.1)]"
  },
  {
    tier: "Thrust 3: Future-Ready Leap",
    milestones: [
      "The Transformers: High-Stakes Innovation",
      "AI & Digital Twin Integration",
      "Global Benchmarking & Strategic Awards",
      "Sovereignty via Domestic Regional Links"
    ],
    color: "bg-orange-950/50 border-[#CD7F32] text-[#CD7F32] shadow-[0_0_20px_rgba(205,127,50,0.15)]"
  },
  {
    tier: "ENABLER: Enabling Ecosystem",
    milestones: [
      "JKR Change Champions Network",
      "Kill-Stupid-Rules Campaign",
      "Vendor Development Programme (VDP)",
      "Annual Strategy Refresh Cycle"
    ],
    color: "bg-cyan-900/50 border-cyan-500 text-cyan-200 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
  }
];

export const LEADERSHIP_PROFILE = {
    name: "Datu Adj. Prof. Ir. Ts. Gs. Br. PMr. Dr. Cassidy Anak Morris",
    title: "Director of Public Works Sarawak",
    image: "https://ik.imagekit.io/z7yhsbzej/Screenshot%202025-02-14%20at%2022.06.49.png?updatedAt=1739542037901",
    honorifics: "YBHG. DATU ADJ. PROF. IR. TS. GS. BR. PMR. DR."
};

export const navItems: NavItem[] = [
  { id: 'welcome', label: 'Welcome', icon: Home },
  { id: 'overview', label: 'Overview', icon: Target },
  { id: 'strategy', label: 'Strategy', icon: Layers, children: [
      { id: 'thrusts', label: 'Thrusts & Initiatives', icon: Layers },
      { id: 'ecosystem', label: 'Ecosystem Enablers', icon: Users },
      { id: 'roadmap', label: 'Implementation Roadmap', icon: Calendar },
  ]},
  { id: 'operations', label: 'Operations', icon: Activity, children: [
      { id: 'timeline', label: 'Timeline & Gantt', icon: Calendar },
      { id: 'kpi-dashboard', label: 'KPI Dashboard', icon: BarChart3 },
      { id: 'checklist', label: 'Operational Checklist', icon: ListChecks },
      { id: 'tasks', label: 'Task Manager', icon: ListTodo },
      { id: 'risk-analysis', label: 'Risk Analysis', icon: AlertTriangle },
      { id: 'live-dashboard', label: 'Live Operations', icon: Activity, badge: 'LIVE', badgeColor: 'bg-red-500' },
  ]},
  { id: 'financials', label: 'Financials', icon: Banknote, adminOnly: true },
  { id: 'engagement', label: 'Engagement', icon: Globe, children: [
      { id: 'stories', label: 'Success Stories', icon: Video },
      { id: 'achievements', label: 'Achievements', icon: Trophy },
      { id: 'partners', label: 'Partners', icon: Handshake },
      { id: 'engage', label: 'Public Engagement', icon: MessageSquare },
  ]},
  { id: 'admin', label: 'Admin', icon: Settings, adminOnly: true },
];

export const initiativesData: Initiative[] = [
  // --- PILLAR 1: INFRASTRUCTURE DELIVERY EXCELLENCE ---
  { id: '1.1.1', thrustId: 1, tier: 'Thrust 1', name: 'Head of Project Team (HOPT)', lead: 'Director\'s Office', responsibleBranch: 'Director\'s Office', expectedOutcome: 'Create unified command and single-point accountability for high-impact statewide or special projects that cut across divisional boundaries.', plan_start: '15/08/2026', plan_end: '15/12/2027', actual_start: '', actual_end: '', progress: 0, linkedKpiIds: ['KPI-1', 'KPI-2'] },
  { id: '1.1.2', thrustId: 1, tier: 'Thrust 1', name: 'Project Take-Off Responsibility (PTOR)', lead: 'Technical Services Sector', responsibleBranch: 'Project Implementation & Monitoring Branch', expectedOutcome: 'Implement a mandatory readiness gate to prevent premature project commencement by confirming land, approvals, funding, and design completeness.', plan_start: '15/08/2026', plan_end: '15/12/2027', actual_start: '', actual_end: '', progress: 0 },
  { id: '1.1.3', thrustId: 1, tier: 'Thrust 1', name: 'Monthly Project Completion Initiative (MPCI)', lead: 'Technical Services Sector', responsibleBranch: 'Project Implementation & Monitoring Branch', expectedOutcome: 'Establish disciplined, time-bound project delivery through structured monthly executive oversight and recovery planning.', plan_start: '15/08/2026', plan_end: '15/12/2027', actual_start: '', actual_end: '', progress: 0 },
  { id: '1.1.4', thrustId: 1, tier: 'Thrust 1', name: 'Online Site Diary', lead: 'Technical Services Sector', responsibleBranch: 'Project Implementation & Monitoring Branch', expectedOutcome: 'Replace manual records with a single, auditable digital source for daily site information, reducing documentation disputes.', plan_start: '15/08/2026', plan_end: '15/12/2027', actual_start: '', actual_end: '', progress: 0 },
  { id: '1.1.5', thrustId: 1, tier: 'Thrust 1', name: 'Develop JKR Project Delivery Playbook', lead: 'Technical Services Sector', responsibleBranch: 'Project Implementation & Monitoring Branch', expectedOutcome: 'Standardize project management across all divisions through a comprehensive manual with templates, eliminating inconsistent practices.', plan_start: '15/08/2026', plan_end: '15/12/2027', actual_start: '', actual_end: '', progress: 0 },
  { id: '1.1.6', thrustId: 1, tier: 'Thrust 1', name: 'Standardised Guidelines for Detailed Project Briefs', lead: 'Technical Services Sector', responsibleBranch: 'Technical Services Sector', expectedOutcome: 'Eliminate scope-related Variation Orders (VOs) by mandating a Pre-Design Checklist for client agencies before design begins.', plan_start: '15/08/2026', plan_end: '15/12/2027', actual_start: '', actual_end: '', progress: 0 },
  { id: '1.1.7', thrustId: 1, tier: 'Thrust 1', name: 'Mandate Project Execution Plans (PEPs)', lead: 'Technical Services Sector', responsibleBranch: 'Project Implementation & Monitoring Branch', expectedOutcome: 'Require thorough pre-commencement planning for all projects over RM500k, including baseline schedules, risk management, and stakeholder plans.', plan_start: '15/08/2026', plan_end: '15/12/2027', actual_start: '', actual_end: '', progress: 0 },
  { id: '1.1.8', thrustId: 1, tier: 'Thrust 2', name: 'Waive MTRA for Non-Critical Projects', lead: 'QAQC Sector', responsibleBranch: 'Research and Investigation Branch', expectedOutcome: 'Devolve testing authority to Divisional Engineers for low-risk/small projects to reduce bureaucracy and accelerate start times by 3 weeks on average.', plan_start: '15/08/2026', plan_end: '15/12/2027', actual_start: '', actual_end: '', progress: 0 },
  { id: '1.1.9', thrustId: 1, tier: 'Thrust 2', name: 'Expert Value Management (VM) Team (>RM 70 Million)', lead: 'Support Sector', responsibleBranch: 'Quantity Surveying Branch', expectedOutcome: 'Establish a permanent VM Unit to review major projects at schematic design, optimizing cost-benefit and preventing over/under-design.', plan_start: '15/08/2026', plan_end: '15/12/2027', actual_start: '', actual_end: '', progress: 0 },
  { id: '1.1.10', thrustId: 1, tier: 'Thrust 2', name: 'VM Synergy with EPU', lead: 'Support Sector', responsibleBranch: 'Quantity Surveying Branch', expectedOutcome: 'Align value management decisions with state funding priorities through structured collaboration with the Economic Planning Unit (EPU).', plan_start: '15/08/2026', plan_end: '15/12/2027', actual_start: '', actual_end: '', progress: 0 },
  { id: '1.1.11', thrustId: 1, tier: 'Thrust 2', name: 'Project Delay Mitigation Framework', lead: 'Technical Services Sector', responsibleBranch: 'Project Implementation & Monitoring Branch', expectedOutcome: 'Implement a proactive, standardized protocol for escalating intervention when projects slip 5%, 10%, and 15%, culminating in Project Court referral.', plan_start: '15/08/2026', plan_end: '15/12/2027', actual_start: '', actual_end: '', progress: 0 },
  { id: '1.2.1', thrustId: 1, tier: 'Thrust 1', name: 'Establish the Project Court', lead: 'Technical Services Sector', responsibleBranch: 'Project Implementation & Monitoring Branch', expectedOutcome: 'Create a high-level tribunal to decisively address critically delayed projects (>15% delay) with authority to terminate contracts or replace supervision.', plan_start: '15/08/2026', plan_end: '15/12/2027', actual_start: '01/01/2025', actual_end: '', progress: 0 },
  { id: '1.2.2', thrustId: 1, tier: 'Thrust 1', name: 'Digital Submission (Online) for PTIVO/EOT', lead: 'Technical Services Sector', responsibleBranch: 'Project Implementation & Monitoring Branch', expectedOutcome: 'Eliminate paperwork delays and lost files by implementing a digital workflow portal for Variation Orders and Extension of Time submissions.', plan_start: '15/08/2026', plan_end: '15/12/2027', actual_start: '', actual_end: '', progress: 0 },
  { id: '1.2.3', thrustId: 1, tier: 'Thrust 1', name: 'Consultant Performance Management (CPM)', lead: 'Support Sector', responsibleBranch: 'Quantity Surveying Branch', expectedOutcome: 'Link consultant performance scores directly to future appointment decisions to improve delivery, quality, safety, and responsiveness.', plan_start: '15/08/2026', plan_end: '15/12/2027', actual_start: '', actual_end: '', progress: 0 },
  { id: '1.2.4', thrustId: 1, tier: 'Thrust 1', name: 'Unified Consultant & Contractor Database', lead: 'Support Sector', responsibleBranch: 'Quantity Surveying Branch', expectedOutcome: 'Prevent poorly performing contractors from winning tenders in different divisions by creating a centralized, cross-divisional performance ledger.', plan_start: '15/08/2026', plan_end: '15/12/2027', actual_start: '', actual_end: '', progress: 0 },
  { id: '1.2.5', thrustId: 1, tier: 'Thrust 1', name: 'Contractor Performance Rating System (Scorecard)', lead: 'Support Sector', responsibleBranch: 'Quantity Surveying Branch', expectedOutcome: 'Link contractor star ratings (1-5) directly to tangible rewards (fast-track payments) or penalties (tender barring) based on performance.', plan_start: '15/08/2026', plan_end: '15/12/2027', actual_start: '', actual_end: '', progress: 0 },
  { id: '1.2.6', thrustId: 1, tier: 'Thrust 2', name: 'Centralize Tender Preparation', lead: 'Support Sector', responsibleBranch: 'Quantity Surveying Branch', expectedOutcome: 'Standardize and enhance legal robustness of tender documents through a "Center of Excellence" within the QS Branch, reducing loopholes.', plan_start: '15/08/2026', plan_end: '15/12/2027', actual_start: '', actual_end: '', progress: 0 },
  { id: '1.2.7', thrustId: 1, tier: 'Thrust 2', name: 'Consultant Fees under SO', lead: 'Technical Services Sector', responsibleBranch: 'Project Implementation & Monitoring Branch', expectedOutcome: 'Improve consultant supervision quality and accountability by linking payments to verified performance milestones under a standardized SO-administered framework.', plan_start: '15/08/2026', plan_end: '15/12/2027', actual_start: '', actual_end: '', progress: 0 },
  { id: '1.3.1', thrustId: 1, tier: 'Thrust 1', name: 'Establish the Safety Tribunal', lead: 'QAQC Sector', responsibleBranch: 'QAQC Sector', expectedOutcome: 'Enforce zero-tolerance safety through a tribunal focused on contractual penalties and blacklisting for serious accidents, beyond standard OSHA investigations.', plan_start: '15/08/2026', plan_end: '15/12/2027', actual_start: '01/01/2025', actual_end: '', progress: 0 },
  { id: '1.3.2', thrustId: 1, tier: 'Thrust 1', name: 'Full QAQC & QLASSIC Compliance', lead: 'QAQC Sector', responsibleBranch: 'QAQC Sector', expectedOutcome: 'Objectively measure and mandate high workmanship quality by requiring QLASSIC scoring (>75%) for all building projects over RM5m.', plan_start: '15/08/2026', plan_end: '15/12/2027', actual_start: '', actual_end: '', progress: 0 },
  { id: '1.3.3', thrustId: 1, tier: 'Thrust 1', name: 'Annual Ethics Training', lead: 'Support Sector', responsibleBranch: 'Integrity Branch', expectedOutcome: 'Reinforce integrity and zero tolerance for corruption through compulsory annual training covering governance, conflict of interest, and procurement ethics.', plan_start: '15/08/2026', plan_end: '15/12/2027', actual_start: '', actual_end: '', progress: 0 },
  { id: '1.3.4', thrustId: 1, tier: 'Thrust 1', name: 'Whistleblower Policy', lead: 'Support Sector', responsibleBranch: 'Integrity Branch', expectedOutcome: 'Enable secure, anonymous reporting of unsafe practices or corruption by staff and subcontractors without fear of retaliation.', plan_start: '15/08/2026', plan_end: '15/12/2027', actual_start: '', actual_end: '', progress: 0 },
  { id: '1.3.5', thrustId: 1, tier: 'Thrust 1', name: 'Resilience Task Force', lead: 'Director\'s Office', responsibleBranch: 'Director\'s Office', expectedOutcome: 'Coordinate cross-functional organizational risk management, resilience planning, and systemic risk mitigation across all infrastructure programs.', plan_start: '15/08/2026', plan_end: '15/12/2027', actual_start: '', actual_end: '', progress: 0 },
  { id: '1.3.6', thrustId: 1, tier: 'Thrust 1', name: 'Annual Resilience Audits', lead: 'Support Sector', responsibleBranch: 'Audit Branch', expectedOutcome: 'Proactively ensure critical infrastructure (bridges, dams, slopes) can withstand extreme climate events through annual "stress test" audits.', plan_start: '15/08/2026', plan_end: '15/12/2027', actual_start: '', actual_end: '', progress: 0 },
  { id: '1.3.7', thrustId: 1, tier: 'Thrust 2', name: 'Risk Training (FMEA/HAZOP)', lead: 'Technical Services Sector', responsibleBranch: 'Training & Competency Branch', expectedOutcome: 'Enhance staff capability to identify, analyze, and mitigate technical and operational risks through structured FMEA/HAZOP methodology training.', plan_start: '15/08/2026', plan_end: '15/12/2027', actual_start: '', actual_end: '', progress: 0 },
  { id: '1.4.1', thrustId: 1, tier: 'Thrust 1', name: 'Comprehensive Cost Data Bank', lead: 'Support Sector', responsibleBranch: 'Quantity Surveying Branch', expectedOutcome: 'Eliminate cost estimation guesswork by creating a centralized repository of real-time market rates specific to each division.', plan_start: '15/08/2026', plan_end: '15/12/2027', actual_start: '', actual_end: '', progress: 0 },
  { id: '1.4.2', thrustId: 1, tier: 'Thrust 1', name: 'Result-Based Budgeting (RBB)', lead: 'Human Resource & Corporate Affairs Sector', responsibleBranch: 'Finance Branch', expectedOutcome: 'Shift budget justification from funding activities to funding measurable outcomes (e.g., improving Road Quality Index by 5 points).', plan_start: '15/08/2026', plan_end: '15/12/2027', actual_start: '', actual_end: '', progress: 0 },
  { id: '1.4.3', thrustId: 1, tier: 'Thrust 2', name: 'Cash Flow Forecasts', lead: 'Human Resource & Corporate Affairs Sector', responsibleBranch: 'Finance Branch', expectedOutcome: 'Prevent project disruption through proactive financial planning by standardizing project-level cash flow forecasting to align funding releases.', plan_start: '15/08/2026', plan_end: '15/12/2027', actual_start: '', actual_end: '', progress: 0 },
  { id: '1.4.4', thrustId: 1, tier: 'Thrust 2', name: 'Annual Major Project CBA', lead: 'Support Sector', responsibleBranch: 'Corporate Planning Branch', expectedOutcome: 'Ensure major infrastructure investments deliver measurable economic and social value through structured annual cost-benefit analysis.', plan_start: '15/08/2026', plan_end: '15/12/2027', actual_start: '', actual_end: '', progress: 0 },
  { id: '1.4.5', thrustId: 1, tier: 'Thrust 2', name: 'Road Quality Index (RQI) 5.0 Target', lead: 'Asset Sector', responsibleBranch: 'Road & Civil Engineering Asset Branch', expectedOutcome: 'Hold road concessionaires accountable to a tangible smoothness metric (RQI 5.0) through laser-profiling (IRI) on all Protocol Roads.', plan_start: '15/08/2026', plan_end: '15/12/2027', actual_start: '', actual_end: '', progress: 0 },
  { id: '1.5.1', thrustId: 1, tier: 'Thrust 1', name: 'Establish Facility Management (FM) Units', lead: 'Asset Sector', responsibleBranch: 'Building Asset Branch', expectedOutcome: 'Professionalize maintenance of major complexes (e.g., DUN, Wisma Bapa) with dedicated, engineer-led FM teams instead of administrative clerks.', plan_start: '15/08/2026', plan_end: '15/12/2027', actual_start: '', actual_end: '', progress: 0 },
  { id: '1.5.2', thrustId: 1, tier: 'Thrust 2', name: 'State Maintenance Guidelines', lead: 'Asset Sector', responsibleBranch: 'Building Asset Branch', expectedOutcome: 'Standardize and protect public asset value by developing and enforcing state-wide maintenance guidelines for buildings, roads, and infrastructure.', plan_start: '15/08/2026', plan_end: '15/12/2027', actual_start: '', actual_end: '', progress: 0 },
  { id: '1.5.3', thrustId: 1, tier: 'Thrust 2', name: 'Facility Maintenance and Management Contracts (FMMC) Contracts', lead: 'Asset Sector', responsibleBranch: 'Building Asset Branch', expectedOutcome: 'Transition from reactive, ad-hoc repairs to structured, performance-based, lifecycle-oriented facility maintenance through FMMC.', plan_start: '15/08/2026', plan_end: '15/12/2027', actual_start: '', actual_end: '', progress: 0 },
  { id: '1.5.4', thrustId: 1, tier: 'Thrust 2', name: 'Building Planning Guidelines', lead: 'Building & Specialist Sector', responsibleBranch: 'Building Branch', expectedOutcome: 'Ensure public buildings deliver long-term value, inclusivity, and adaptability through comprehensive planning guidelines covering functionality and lifecycle.', plan_start: '15/08/2026', plan_end: '15/12/2027', actual_start: '', actual_end: '', progress: 0 },
  { id: '1.5.5', thrustId: 1, tier: 'Thrust 2', name: 'Enhance Quarters Complaint System', lead: 'Asset Sector', responsibleBranch: 'Building Asset Branch', expectedOutcome: 'Improve quality of life for civil servants in government quarters through an "Uber-style" app for reporting and tracking maintenance issues in real-time.', plan_start: '15/08/2026', plan_end: '15/12/2027', actual_start: '', actual_end: '', progress: 0 },
  { id: '1.5.6', thrustId: 1, tier: 'Thrust 2', name: 'Expand Building Quarters Rental Management System (BQRMS)', lead: 'Asset Sector', responsibleBranch: 'Building Asset Branch', expectedOutcome: 'Improve governance and transparency of government quarters management through a single digital platform for occupancy, rental, and maintenance.', plan_start: '15/08/2026', plan_end: '15/12/2027', actual_start: '', actual_end: '', progress: 0 },

  // --- PILLAR 2: DIGITAL TRANSFORMATION & AI ENGINEERING ---
  { id: '2.1.1', thrustId: 2, tier: 'Thrust 1', name: 'The BIM Mandate', lead: 'Technical Services Sector', responsibleBranch: 'Special Project Branch', expectedOutcome: 'Eliminate design clashes causing site delays by implementing a phased mandate for Building Information Modelling (BIM) on projects of increasing value.', plan_start: '15/08/2026', plan_end: '15/12/2027', actual_start: '01/01/2025', actual_end: '', progress: 0 },
  { id: '2.1.2', thrustId: 2, tier: 'Thrust 1', name: 'Digitalize SPAP in BIM Format', lead: 'Building & Specialist Sector', responsibleBranch: 'Building & Structural Engineering Branch', expectedOutcome: 'Accelerate rural project deployment by converting State Pre-Approved Plans (SPAP) from 2D CAD to 3D BIM objects for instant costing and scheduling.', plan_start: '15/08/2026', plan_end: '15/12/2027', actual_start: '', actual_end: '', progress: 0 },
  // ... (rest of initiatives remain unchanged)
];

export const kpis: KPI[] = [
  { 
    id: 'KPI-1',
    name: "% of projects completed on time", 
    description: "Measures the percentage of projects delivered on or before the approved completion date, ensuring adherence to the project schedule.",
    target: "95%", 
    current: "82%", 
    targetValue: 95, 
    currentValue: 82, 
    plan_start: "01/01/2025",
    plan_end: "31/12/2030",
    actual_end: "31/12/2030",
    history: [
      { date: "2024-12-31", value: 78 },
      { date: "2025-06-30", value: 82 }
    ]
  },
  { 
    id: 'KPI-2',
    name: "% reduction in cost overrun", 
    description: "Tracks the reduction in project cost overruns compared to the original contract sum, aiming for financial discipline and accurate budgeting.",
    target: "30% Reduction", 
    current: "12% Reduction", 
    targetValue: 30, 
    currentValue: 12, 
    plan_start: "01/01/2025",
    plan_end: "31/12/2030",
    actual_end: "31/12/2030",
    history: [
      { date: "2024-12-31", value: 5 },
      { date: "2025-06-30", value: 12 }
    ]
  },
  { 
    id: 'KPI-3',
    name: "% rural connectivity achieved", 
    target: "100%", 
    current: "86%", 
    targetValue: 100, 
    currentValue: 86, 
    plan_start: "01/01/2025",
    plan_end: "31/12/2028",
    actual_end: "31/12/2028",
    history: [
      { date: "2024-12-31", value: 82 },
      { date: "2025-06-30", value: 86 }
    ]
  },
  { 
    id: 'KPI-4',
    name: "BIM maturity index", 
    target: "Level 3", 
    current: "Level 1.8", 
    targetValue: 3.0, 
    currentValue: 1.8, 
    plan_start: "01/01/2025",
    plan_end: "31/12/2030",
    actual_end: "31/12/2030",
    history: [
      { date: "2024-12-31", value: 1.2 },
      { date: "2025-06-30", value: 1.8 }
    ]
  },
  { 
    id: 'KPI-5',
    name: "% AI-monitored projects", 
    target: "50%", 
    current: "5%", 
    targetValue: 50, 
    currentValue: 5, 
    plan_start: "01/01/2026",
    plan_end: "31/12/2030",
    actual_end: "31/12/2030",
    history: [
      { date: "2025-01-01", value: 0 },
      { date: "2025-06-30", value: 5 }
    ]
  },
  { 
    id: 'KPI-6',
    name: "Digital Twin adoption rate", 
    target: "40% Major Assets", 
    current: "8% Major Assets", 
    targetValue: 40, 
    currentValue: 8, 
    plan_start: "01/01/2025",
    plan_end: "31/12/2030",
    actual_end: "31/12/2030",
    history: [
      { date: "2024-12-31", value: 2 },
      { date: "2025-06-30", value: 8 }
    ]
  },
  { 
    id: 'KPI-7',
    name: "CO₂ reduction per project", 
    target: "20% Avg", 
    current: "4% Avg", 
    targetValue: 20, 
    currentValue: 4, 
    plan_start: "01/01/2025",
    plan_end: "31/12/2030",
    actual_end: "31/12/2030",
    history: [
      { date: "2024-12-31", value: 1 },
      { date: "2025-06-30", value: 4 }
    ]
  },
  { 
    id: 'KPI-8',
    name: "Number of green-certified infrastructure assets", 
    target: "50 Assets", 
    current: "12 Assets", 
    targetValue: 50, 
    currentValue: 12, 
    plan_start: "01/01/2025",
    plan_end: "31/12/2030",
    actual_end: "31/12/2030",
    history: [
      { date: "2024-12-31", value: 6 },
      { date: "2025-06-30", value: 12 }
    ]
  },
  { 
    id: 'KPI-9',
    name: "Staff certification levels", 
    target: "80% Certified Professionals", 
    current: "42% Certified Professionals", 
    targetValue: 80, 
    currentValue: 42, 
    plan_start: "01/01/2025",
    plan_end: "31/12/2030",
    actual_end: "31/12/2030",
    history: [
      { date: "2024-12-31", value: 38 },
      { date: "2025-06-30", value: 42 }
    ]
  },
  { 
    id: 'KPI-10',
    name: "Division performance ratings", 
    target: "4.5 / 5.0 Avg", 
    current: "3.8 / 5.0 Avg", 
    targetValue: 4.5, 
    currentValue: 3.8, 
    plan_start: "01/01/2025",
    plan_end: "31/12/2030",
    actual_end: "31/12/2030",
    history: [
      { date: "2024-12-31", value: 3.5 },
      { date: "2025-06-30", value: 3.8 }
    ]
  },
];

export const initialSuccessStories: SuccessStory[] = [
  { id: 1, title: "Pan Borneo Highway", subtitle: "Connecting Sarawak", description: "A game-changer for connectivity.", gradient: "from-blue-600 to-cyan-500", href: "#", buttonText: "Watch Video" },
  { id: 2, title: "Rural Bridges Program", subtitle: "Bridging Communities", description: "Providing safe access for rural folks.", gradient: "from-emerald-600 to-teal-500", href: "#", buttonText: "Read More" },
  { id: 3, title: "Digital JKR", subtitle: "Tech Transformation", description: "Adopting BIM and AI for better delivery.", gradient: "from-purple-600 to-indigo-500", href: "#", buttonText: "Explore" }
];

export const initialAchievements: Achievement[] = [
  { id: 1, title: "ISO 9001:2015 Certified", organization: "SIRIM QAS", date: "2024", description: "Quality Management System Certification.", icon: ShieldCheck, category: "National" },
  { id: 2, title: "5 Star Accountability Index", organization: "National Audit Dept", date: "2023", description: "Excellence in financial management.", icon: Award, category: "National" },
];

export const initialPartners: Partner[] = [
  { id: 1, name: "Public Works Department Malaysia", acronym: "JKR Malaysia", date: "Since 1963" },
  { id: 2, name: "Construction Industry Development Board", acronym: "CIDB", date: "Strategic Partner" },
];

export const initialStoriesPageContent: StoriesPageContent = {
  mainTitle: "Our Success Stories",
  mainSubtitle: "Highlighting the impact of infrastructure development on the people of Sarawak.",
  knowledgeSharingTitle: "Sharing Our Knowledge",
  knowledgeSharingBody: "We believe in sharing best practices and lessons learned to elevate the construction industry standards."
};

export const initialEngagementChannels: EngagementChannel[] = [
  { id: 1, icon: Globe, color: "text-blue-500", title: "Official Website", description: "Comprehensive information on projects and tenders.", buttonText: "Visit Website", buttonColor: "bg-blue-600 hover:bg-blue-700", href: "https://jkr.sarawak.gov.my/" },
  { id: 2, icon: MessageSquare, color: "text-green-500", title: "Talikhidmat", description: "One-stop feedback channel for public services.", buttonText: "Send Feedback", buttonColor: "bg-green-600 hover:bg-green-700", href: "https://talikhidmat.sarawak.gov.my/" },
  { id: 3, icon: BookOpen, color: "text-purple-500", title: "Annual Report", description: "Detailed performance and financial reports.", buttonText: "Download PDF", buttonColor: "bg-purple-600 hover:bg-purple-700", href: "#" },
];

export const initialEngagePageContent: EngagePageContent = {
  mainTitle: "Engage With Us",
  mainSubtitle: "We value transparency and public participation in building a better Sarawak.",
  transparencyTitle: "Commitment to Transparency",
  governanceTitle: "Governance & Ethics",
  governanceInitiatives: [
    { id: 1, strong: "Integrity Pact:", text: "Mandatory for all vendors." },
    { id: 2, strong: "No Gift Policy:", text: "Strict enforcement across all levels." },
  ],
  mediaTitle: "Media & Communication",
  mediaInitiatives: [
    { id: 1, strong: "Press Releases:", text: "Timely updates on project milestones." },
    { id: 2, strong: "Social Media:", text: "Active engagement on Facebook and X." },
  ],
};

export const initialWelcomePageContent: WelcomePageContent = {
  title: "JKR Sarawak Strategic Plan 2025-2030",
  subtitle: "Moving Forward Strategy",
  body: "A roadmap to deliver world-class infrastructure, embracing digital transformation, sustainability, and operational excellence for the people of Sarawak."
};
