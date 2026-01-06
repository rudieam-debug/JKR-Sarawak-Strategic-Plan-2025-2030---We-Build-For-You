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
  Banknote
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

export const initiativesData: Initiative[] = [
  // --- PILLAR 1: INFRASTRUCTURE DELIVERY EXCELLENCE (31 ITEMS) ---
  { id: '1.1.1', thrustId: 1, tier: 'Thrust 1', name: 'Develop JKR Project Delivery Playbook', lead: 'Technical Services Sector', responsibleBranch: 'PIMB', expectedOutcome: 'Digitally and physically published Playbook, 100% of PMIB staff certified.', plan_start: '01/01/2026', plan_end: '31/12/2026', actual_start: '', actual_end: '', progress: 0, linkedKpiIds: ['KPI-9'] },
  { id: '1.1.2', thrustId: 1, tier: 'Thrust 1', name: 'Standardised Guidelines for Detailed Project Briefs', lead: 'Technical Services Sector', responsibleBranch: 'PIMB', expectedOutcome: 'Mandatory Pre-design Checklist and Standardised Brief Guidelines.', plan_start: '01/01/2026', plan_end: '31/12/2026', actual_start: '', actual_end: '', progress: 0, linkedKpiIds: ['KPI-2'] },
  { id: '1.1.3', thrustId: 1, tier: 'Thrust 1', name: 'Mandate Project Execution Plans (PEPs)', lead: 'Technical Services Sector', responsibleBranch: 'PIMB', expectedOutcome: '100% of new projects have signed-off PEPs uploaded to JKR Dash.', plan_start: '01/01/2025', plan_end: '31/12/2027', actual_start: '01/01/2025', actual_end: '', progress: 15, linkedKpiIds: ['KPI-1'] },
  { id: '1.1.4', thrustId: 1, tier: 'Thrust 2', name: 'Waive Material Testing & Review Authority for Non-Critical Projects', lead: 'QAQC Sector', responsibleBranch: 'Compliance Branch', expectedOutcome: 'Amended MTRA Circular issued; Average project start times reduced by 3 weeks.', plan_start: '01/01/2028', plan_end: '31/12/2028', actual_start: '', actual_end: '', progress: 0 },
  { id: '1.1.5', thrustId: 1, tier: 'Thrust 2', name: 'Establish Expert Value Management Team for Major Projects', lead: 'Support Sector', responsibleBranch: 'Quantity Surveying Branch', expectedOutcome: 'Permanent VM Unit established; 10% average cost savings identified.', plan_start: '01/01/2026', plan_end: '31/12/2027', actual_start: '', actual_end: '', progress: 0, linkedKpiIds: ['KPI-2'] },
  { id: '1.1.6', thrustId: 1, tier: 'Thrust 2', name: 'Value Management Synergy with Economic Planning Unit', lead: 'Support Sector', responsibleBranch: 'Quantity Surveying Branch', expectedOutcome: 'Dedicated VM-EPU coordination team; Joint VM workshops conducted.', plan_start: '01/01/2026', plan_end: '31/12/2026', actual_start: '', actual_end: '', progress: 0 },
  { id: '1.1.7', thrustId: 1, tier: 'Thrust 3', name: 'Project Delay Mitigation Framework', lead: 'Technical Services Sector', responsibleBranch: 'PIMB', expectedOutcome: 'Delay mitigation protocol integrated into JKR Dash logic; SOPs for Yellow Notices.', plan_start: '01/01/2026', plan_end: '31/12/2027', actual_start: '', actual_end: '', progress: 0, linkedKpiIds: ['KPI-1'] },
  { id: '1.2.1', thrustId: 1, tier: 'Thrust 1', name: 'Unified Consultant & Contractor Database', lead: 'Support Sector', responsibleBranch: 'Quantity Surveying Branch', expectedOutcome: 'Centralized database live; Full integration with SFS systems.', plan_start: '01/01/2025', plan_end: '31/12/2027', actual_start: '01/01/2025', actual_end: '', progress: 20 },
  { id: '1.2.2', thrustId: 1, tier: 'Thrust 2', name: 'Contractor Performance Rating System (Scorecard)', lead: 'Support Sector', responsibleBranch: 'Quantity Surveying Branch', expectedOutcome: 'First cycle of ratings published; Lowest performers blocked from tenders.', plan_start: '01/01/2028', plan_end: '31/12/2028', actual_start: '', actual_end: '', progress: 0 },
  { id: '1.2.3', thrustId: 1, tier: 'Thrust 1', name: 'Establish the Project Court', lead: 'Technical Services Sector', responsibleBranch: 'PIMB', expectedOutcome: 'TOR endorsed by Ministry; First 5 cases adjudicated.', plan_start: '01/01/2025', plan_end: '31/12/2030', actual_start: '01/01/2025', actual_end: '', progress: 40 },
  { id: '1.2.4', thrustId: 1, tier: 'Thrust 2', name: 'Centralize Tender Preparation', lead: 'Support Sector', responsibleBranch: 'Quantity Surveying Branch', expectedOutcome: 'Central Tender Preparation Unit operational; Tender addendums reduced by 50%.', plan_start: '01/01/2028', plan_end: '31/12/2028', actual_start: '', actual_end: '', progress: 0 },
  { id: '1.2.5', thrustId: 1, tier: 'Thrust 2', name: 'Consultant Fees under Superintending Officer Model', lead: 'Technical Services Sector', responsibleBranch: 'PIMB', expectedOutcome: 'Standard supervision fee payment framework approved; Payment tied to milestones.', plan_start: '01/01/2028', plan_end: '31/12/2028', actual_start: '', actual_end: '', progress: 0 },
  { id: '1.2.6', thrustId: 1, tier: 'Thrust 3', name: 'Digital Submission for Variation Orders (VO) and Extension of Time (EOT)', lead: 'Technical Services Sector', responsibleBranch: 'PIMB', expectedOutcome: 'Digital VO/EOT submission system live and operational.', plan_start: '01/01/2028', plan_end: '31/12/2028', actual_start: '', actual_end: '', progress: 0 },
  { id: '1.3.1', thrustId: 1, tier: 'Thrust 1', name: 'Full QAQC & QLASSIC Compliance', lead: 'QAQC Sector', responsibleBranch: 'QAQC Sector', expectedOutcome: 'QLASSIC assessors certified in every division; scores published in Annual Report.', plan_start: '01/01/2026', plan_end: '31/12/2027', actual_start: '', actual_end: '', progress: 0 },
  { id: '1.3.2', thrustId: 1, tier: 'Thrust 1', name: 'Establish the Safety Tribunal', lead: 'QAQC Sector', responsibleBranch: 'QAQC Sector', expectedOutcome: 'Tribunal constituted; First \"Blacklist\" circular issued.', plan_start: '01/01/2025', plan_end: '31/12/2030', actual_start: '01/01/2025', actual_end: '', progress: 30 },
  { id: '1.3.3', thrustId: 1, tier: 'Thrust 1', name: 'Annual Ethics Training', lead: 'Support Sector', responsibleBranch: 'Integrity Branch', expectedOutcome: 'Ethics training module approved; 100% staff completion annually.', plan_start: '01/01/2026', plan_end: '31/12/2030', actual_start: '', actual_end: '', progress: 0, linkedKpiIds: ['KPI-9'] },
  { id: '1.3.4', thrustId: 1, tier: 'Thrust 3', name: 'Whistleblower Policy', lead: 'Support Sector', responsibleBranch: 'Integrity Branch', expectedOutcome: 'Secure whistleblower portal/app live and operational.', plan_start: '01/01/2028', plan_end: '31/12/2028', actual_start: '', actual_end: '', progress: 0 },
  { id: '1.3.5', thrustId: 1, tier: 'Thrust 3', name: 'Risk Training (Failure Mode and Effects Analysis / Hazard and Operability Study)', lead: 'Technical Services Sector', responsibleBranch: 'Training & Competency Branch', expectedOutcome: 'FMEA/HAZOP training modules delivered; Targeted technical staff certified.', plan_start: '01/01/2028', plan_end: '31/12/2028', actual_start: '', actual_end: '', progress: 0, linkedKpiIds: ['KPI-9'] },
  { id: '1.3.6', thrustId: 1, tier: 'Thrust 3', name: 'Resilience Task Force', lead: 'HQ Sector', responsibleBranch: 'Director Office', expectedOutcome: 'Task Force established; Clear TOR approved; Annual resilience report.', plan_start: '01/01/2028', plan_end: '31/12/2028', actual_start: '', actual_end: '', progress: 0 },
  { id: '1.3.7', thrustId: 1, tier: 'Thrust 3', name: 'Annual Resilience Audits', lead: 'Support Sector', responsibleBranch: 'Audit Branch', expectedOutcome: '100% of identified critical assets audited annually; Remedial program budgeted.', plan_start: '01/01/2026', plan_end: '31/12/2030', actual_start: '', actual_end: '', progress: 0, linkedKpiIds: ['KPI-8'] },
  { id: '1.4.1', thrustId: 1, tier: 'Thrust 2', name: 'Comprehensive Cost Data Bank', lead: 'Support Sector', responsibleBranch: 'Quantity Surveying Branch', expectedOutcome: 'Data Bank accessible to all QS staff; Estimation variance reduced to <10%.', plan_start: '01/01/2025', plan_end: '31/12/2027', actual_start: '01/01/2025', actual_end: '', progress: 15, linkedKpiIds: ['KPI-2'] },
  { id: '1.4.2', thrustId: 1, tier: 'Thrust 2', name: 'Result-Based Budgeting (RBB)', lead: 'Human Resource & Corporate Affairs Sector', responsibleBranch: 'Finance Branch', expectedOutcome: 'Budget submissions follow RBB format; approved by Ministry of Finance.', plan_start: '01/01/2026', plan_end: '31/12/2027', actual_start: '', actual_end: '', progress: 0 },
  { id: '1.4.3', thrustId: 1, tier: 'Thrust 2', name: 'Cash Flow Forecasts', lead: 'Human Resource & Corporate Affairs Sector', responsibleBranch: 'Finance Branch', expectedOutcome: 'Standard template issued; Forecasts for all major projects; Zero project stoppages.', plan_start: '01/01/2028', plan_end: '31/12/2028', actual_start: '', actual_end: '', progress: 0 },
  { id: '1.4.4', thrustId: 1, tier: 'Thrust 2', name: 'Annual Major Project Cost-Benefit Analysis', lead: 'Support Sector', responsibleBranch: 'Corporate Planning Branch', expectedOutcome: 'Standardized CBA methodology; All major projects assessed annually.', plan_start: '01/01/2026', plan_end: '31/12/2030', actual_start: '', actual_end: '', progress: 0 },
  { id: '1.4.5', thrustId: 1, tier: 'Thrust 3', name: 'Road Quality Index (RQI) 5.0 Target', lead: 'Asset Sector', responsibleBranch: 'Road & Civil Engineering Asset Branch', expectedOutcome: 'All Protocol Roads assessed; Penalties deducted for failing the RQI 5.0 index.', plan_start: '01/01/2027', plan_end: '31/12/2030', actual_start: '', actual_end: '', progress: 0 },
  { id: '1.5.1', thrustId: 1, tier: 'Thrust 2', name: 'State Maintenance Guidelines', lead: 'Asset Sector', responsibleBranch: 'Building Asset Branch', expectedOutcome: 'Guidelines approved and issued statewide; Adopted by all Divisional Offices.', plan_start: '01/01/2028', plan_end: '31/12/2028', actual_start: '', actual_end: '', progress: 0 },
  { id: '1.5.2', thrustId: 1, tier: 'Thrust 2', name: 'Establish Facility Management (FM) Units', lead: 'Asset Sector', responsibleBranch: 'Building Asset Branch', expectedOutcome: 'FM Units charted in the Org Structure; Heads of FM appointed.', plan_start: '01/01/2026', plan_end: '31/12/2027', actual_start: '', actual_end: '', progress: 0 },
  { id: '1.5.3', thrustId: 1, tier: 'Thrust 2', name: 'Facility Maintenance and Management Contracts (FMMC)', lead: 'Asset Sector', responsibleBranch: 'Building Asset Branch', expectedOutcome: 'FMMC framework approved; Pilot contracts awarded; Performance metrics established.', plan_start: '01/01/2026', plan_end: '31/12/2027', actual_start: '', actual_end: '', progress: 0 },
  { id: '1.5.4', thrustId: 1, tier: 'Thrust 2', name: 'Building Planning Guidelines', lead: 'Building & Specialist Sector', responsibleBranch: 'Buildings Branch', expectedOutcome: 'Guidelines approved; Applied to all new building designs.', plan_start: '01/01/2026', plan_end: '31/12/2027', actual_start: '', actual_end: '', progress: 0 },
  { id: '1.5.5', thrustId: 1, tier: 'Thrust 3', name: 'Enhance Quarters Complaint System', lead: 'Asset Sector', responsibleBranch: 'Building Asset Branch', expectedOutcome: 'Mobile application launched; Average ticket resolution time <72 hours.', plan_start: '01/01/2028', plan_end: '31/12/2028', actual_start: '', actual_end: '', progress: 0, linkedKpiIds: ['KPI-10'] },
  { id: '1.5.6', thrustId: 1, tier: 'Thrust 3', name: 'Expand Building Quarters Rental Management System (BQRMS)', lead: 'Asset Sector', responsibleBranch: 'Building Asset Branch', expectedOutcome: 'System expanded to cover all quarters; Rental data centralized.', plan_start: '01/01/2028', plan_end: '31/12/2028', actual_start: '', actual_end: '', progress: 0 },

  // --- PILLAR 2: DIGITAL TRANSFORMATION & AI ENGINEERING (19 ITEMS) ---
  { id: '2.1.1', thrustId: 2, tier: 'Thrust 1', name: 'The BIM Mandate', lead: 'Technical Services Sector', responsibleBranch: 'DTC', expectedOutcome: 'BIM Circular issued; 100% of eligible tenders contain BIM clauses.', plan_start: '01/01/2025', plan_end: '31/12/2030', actual_start: '01/01/2025', actual_end: '', progress: 10, linkedKpiIds: ['KPI-4'] },
  { id: '2.1.2', thrustId: 2, tier: 'Thrust 1', name: 'Digitalise State Pre-Approved Plans (SPAP) in BIM Format', lead: 'Building & Specialist Sector', responsibleBranch: 'Building & Structural Engineering Branch', expectedOutcome: 'Full SPAP library available in a BIM cloud; Downloadable by Divisions.', plan_start: '01/01/2025', plan_end: '31/12/2027', actual_start: '01/01/2025', actual_end: '', progress: 15, linkedKpiIds: ['KPI-6'] },
  { id: '2.1.3', thrustId: 2, tier: 'Thrust 2', name: 'Post-Contract BIM (4D & 5D)', lead: 'Technical Services Sector', responsibleBranch: 'PIMB', expectedOutcome: 'Pilot on 3 major hospitals; Standard protocol for BIM progress claims.', plan_start: '01/01/2026', plan_end: '31/12/2028', actual_start: '', actual_end: '', progress: 0, linkedKpiIds: ['KPI-4'] },
  { id: '2.1.4', thrustId: 2, tier: 'Thrust 2', name: 'BIM Specifications in Contracts', lead: 'Support Sector', responsibleBranch: 'Quantity Surveying Branch', expectedOutcome: 'Revised Tender and Contract Documents endorsed by SAG.', plan_start: '01/01/2028', plan_end: '31/12/2028', actual_start: '', actual_end: '', progress: 0 },
  { id: '2.1.5', thrustId: 2, tier: 'Thrust 2', name: 'Cost Data Bank + BIM Integration', lead: 'Support Sector', responsibleBranch: 'Quantity Surveying Branch', expectedOutcome: 'Cost data bank digitally linked to BIM; Reduced cost variance.', plan_start: '01/01/2027', plan_end: '31/12/2028', actual_start: '', actual_end: '', progress: 0, linkedKpiIds: ['KPI-2'] },
  { id: '2.1.6', thrustId: 2, tier: 'Thrust 3', name: 'Annual BIM Training', lead: 'Technical Services Sector', responsibleBranch: 'Training & Competency Branch', expectedOutcome: '300 staff certified annually across three tiers of training.', plan_start: '01/01/2025', plan_end: '31/12/2030', actual_start: '01/01/2025', actual_end: '', progress: 20, linkedKpiIds: ['KPI-9'] },
  { id: '2.1.7', thrustId: 2, tier: 'Thrust 3', name: 'Digital Skills Certification', lead: 'Technical Services Sector', responsibleBranch: 'Training & Competency Branch', expectedOutcome: 'Certification framework approved; Staff assessed and certified.', plan_start: '01/01/2026', plan_end: '31/12/2027', actual_start: '', actual_end: '', progress: 0, linkedKpiIds: ['KPI-9'] },
  { id: '2.2.1', thrustId: 2, tier: 'Thrust 1', name: 'AI & IoT Real-Time Monitoring', lead: 'QAQC Sector', responsibleBranch: 'Research & Investigation Branch', expectedOutcome: 'Pilot system live on 2 major bridges and 5 critical slopes.', plan_start: '01/01/2026', plan_end: '31/12/2028', actual_start: '', actual_end: '', progress: 0, linkedKpiIds: ['KPI-5'] },
  { id: '2.2.2', thrustId: 2, tier: 'Thrust 1', name: 'AI-Enhanced JKR Dashboard', lead: 'Support Sector', responsibleBranch: 'Corporate Planning Branch', expectedOutcome: 'AI prediction module active and integrated into JKR Dash; 80% accuracy.', plan_start: '01/01/2027', plan_end: '31/12/2027', actual_start: '', actual_end: '', progress: 0, linkedKpiIds: ['KPI-5'] },
  { id: '2.2.3', thrustId: 2, tier: 'Thrust 2', name: 'AI Predictive Cost Modeling', lead: 'Support Sector', responsibleBranch: 'Quantity Surveying Branch', expectedOutcome: 'Predictive cost model operational; Used for 2029 Budget submission.', plan_start: '01/01/2027', plan_end: '31/12/2028', actual_start: '', actual_end: '', progress: 0, linkedKpiIds: ['KPI-2'] },
  { id: '2.2.4', thrustId: 2, tier: 'Thrust 2', name: 'AI Scheduling Tools Pilot', lead: 'Technical Services Sector', responsibleBranch: 'PIMB', expectedOutcome: 'AI scheduling tool piloted on selected projects; comparison documented.', plan_start: '01/01/2027', plan_end: '31/12/2027', actual_start: '', actual_end: '', progress: 0, linkedKpiIds: ['KPI-5'] },
  { id: '2.2.5', thrustId: 2, tier: 'Thrust 2', name: 'AI PM Tools Training', lead: 'Technical Services Sector', responsibleBranch: 'Training & Competency Branch', expectedOutcome: 'Training delivered to target PMs; Dashboards actively used.', plan_start: '01/01/2027', plan_end: '31/12/2028', actual_start: '', actual_end: '', progress: 0, linkedKpiIds: ['KPI-9'] },
  { id: '2.2.6', thrustId: 2, tier: 'Thrust 3', name: 'Blockchain Contract Pilot', lead: 'Support Sector', responsibleBranch: 'Corporate Planning Branch', expectedOutcome: 'Pilot contracts executed on a blockchain platform; Audit trail validated.', plan_start: '01/01/2028', plan_end: '31/12/2028', actual_start: '', actual_end: '', progress: 0 },
  { id: '2.2.7', thrustId: 2, tier: 'Thrust 3', name: 'AR for Design Reviews', lead: 'Building & Specialist Sector', responsibleBranch: 'Building & Structural Engineering Branch', expectedOutcome: 'Successful pilot on 1 complete building project from foundation to handover.', plan_start: '01/01/2028', plan_end: '31/12/2029', actual_start: '', actual_end: '', progress: 0 },
  { id: '2.3.1', thrustId: 2, tier: 'Thrust 1', name: 'Centralised Asset Inventory', lead: 'Asset Sector', responsibleBranch: 'Asset Sector', expectedOutcome: '100% asset data captured; Registry live and accessible via mobile field app.', plan_start: '01/01/2026', plan_end: '31/12/2027', actual_start: '', actual_end: '', progress: 0, linkedKpiIds: ['KPI-6'] },
  { id: '2.3.2', thrustId: 2, tier: 'Thrust 1', name: 'Expand Structural Health Monitoring System (SHMS)', lead: 'Asset Sector', responsibleBranch: 'Asset Sector', expectedOutcome: 'SHMS installed on identified critical bridges; Real-time data accessible.', plan_start: '01/01/2026', plan_end: '31/12/2028', actual_start: '', actual_end: '', progress: 0, linkedKpiIds: ['KPI-5'] },
  { id: '2.3.3', thrustId: 2, tier: 'Thrust 2', name: 'Slope Safety Management System', lead: 'Asset Sector', responsibleBranch: 'Slope & Forensic Branch', expectedOutcome: 'Digital Slope Safety Management System live; Remedial budget allocated by Risk Rating.', plan_start: '01/01/2027', plan_end: '31/12/2028', actual_start: '', actual_end: '', progress: 0, linkedKpiIds: ['KPI-6'] },
  { id: '2.3.4', thrustId: 2, tier: 'Thrust 3', name: 'IoT for Road Maintenance', lead: 'Asset Sector', responsibleBranch: 'Road & Civil Engineering Asset Branch', expectedOutcome: 'Sensors deployed on 5 key trunk roads; Maintenance schedule linked to sensor data.', plan_start: '01/01/2028', plan_end: '31/12/2028', actual_start: '', actual_end: '', progress: 0, linkedKpiIds: ['KPI-6'] },
  { id: '2.3.5', thrustId: 2, tier: 'Thrust 3', name: 'Asset Software Training', lead: 'Technical Services Sector', responsibleBranch: 'Training & Competency Branch', expectedOutcome: 'Training delivered to target asset managers; Staff certified; Software used.', plan_start: '01/01/2028', plan_end: '31/12/2028', actual_start: '', actual_end: '', progress: 0, linkedKpiIds: ['KPI-9'] },

  // --- PILLAR 3: RURAL TRANSFORMATION & CONNECTIVITY (18 ITEMS) ---
  { id: '3.1.1', thrustId: 3, tier: 'Thrust 1', name: 'Complete Pan Borneo Highway (PBH)', lead: 'Infrastructure Sector', responsibleBranch: 'Highway Development Branch', expectedOutcome: '100% physical completion; CPC issued for all sections.', plan_start: '01/01/2025', plan_end: '31/12/2030', actual_start: '01/01/2025', actual_end: '', progress: 85, linkedKpiIds: ['KPI-1'] },
  { id: '3.1.2', thrustId: 3, tier: 'Thrust 1', name: 'Sarawak-Sabah Link Road (SSLR) Phase 1', lead: 'Infrastructure Sector', responsibleBranch: 'Highway Development Branch', expectedOutcome: 'Phase 1 (77km) open to traffic.', plan_start: '01/01/2025', plan_end: '31/12/2028', actual_start: '01/01/2025', actual_end: '', progress: 20, linkedKpiIds: ['KPI-3'] },
  { id: '3.1.3', thrustId: 3, tier: 'Thrust 1', name: 'Sarawak-Sabah Link Road (SSLR) Phase 2', lead: 'Infrastructure Sector', responsibleBranch: 'Highway Development Branch', expectedOutcome: 'Phase 2 (approx. 335km) open to traffic.', plan_start: '01/01/2025', plan_end: '31/12/2029', actual_start: '01/01/2025', actual_end: '', progress: 5, linkedKpiIds: ['KPI-3'] },
  { id: '3.1.4', thrustId: 3, tier: 'Thrust 1', name: 'Coastal Road Network (CSTR) - Mega-Bridges & Pavement', lead: 'Infrastructure Sector', responsibleBranch: 'Coastal Roads & Second Trunk Roads Branch', expectedOutcome: 'Major bridges structurally joined; Pavement works completed.', plan_start: '01/01/2025', plan_end: '31/12/2028', actual_start: '01/01/2025', actual_end: '', progress: 50, linkedKpiIds: ['KPI-3'] },
  { id: '3.1.5', thrustId: 3, tier: 'Thrust 1', name: 'Second Trunk Road (CSTR) - Mega-Bridges & Pavement', lead: 'Infrastructure Sector', responsibleBranch: 'Coastal Roads & Second Trunk Roads Branch', expectedOutcome: 'Major bridges joined; Pavement works completed.', plan_start: '01/01/2025', plan_end: '31/12/2028', actual_start: '01/01/2025', actual_end: '', progress: 45, linkedKpiIds: ['KPI-3'] },
  { id: '3.1.6', thrustId: 3, tier: 'Thrust 1', name: 'Lebuhraya Trans Borneo (LTB) - Northern Region Completion', lead: 'Infrastructure Sector', responsibleBranch: 'Highway Development Branch', expectedOutcome: '93 km of highway fully completed and opened to traffic.', plan_start: '01/01/2027', plan_end: '31/12/2028', actual_start: '', actual_end: '', progress: 0 },
  { id: '3.2.1', thrustId: 3, tier: 'Thrust 1', name: 'Connect 1,385 Settlements (The Last Mile)', lead: 'Infrastructure Sector', responsibleBranch: 'Rural Development Branch', expectedOutcome: '80% of identified settlements connected by all-weather roads.', plan_start: '01/01/2025', plan_end: '31/12/2028', actual_start: '01/01/2025', actual_end: '', progress: 15, linkedKpiIds: ['KPI-3'] },
  { id: '3.2.2', thrustId: 3, tier: 'Thrust 1', name: 'PTJLB Rural Bridge Replacement (38 Bridges)', lead: 'Infrastructure Sector', responsibleBranch: 'Bridges & River Structures Branch', expectedOutcome: '38 bridges completed and open to traffic.', plan_start: '01/01/2025', plan_end: '31/12/2029', actual_start: '01/01/2025', actual_end: '', progress: 30, linkedKpiIds: ['KPI-3'] },
  { id: '3.2.3', thrustId: 3, tier: 'Thrust 2', name: 'Retrofit 30% of Vulnerable Bridges', lead: 'Infrastructure Sector', responsibleBranch: 'Bridges & River Structures Branch', expectedOutcome: '30% of identified \"High-Risk\" bridges retrofitted.', plan_start: '01/01/2027', plan_end: '31/12/2029', actual_start: '', actual_end: '', progress: 0, linkedKpiIds: ['KPI-8'] },
  { id: '3.3.1', thrustId: 3, tier: 'Thrust 1', name: 'GIS Mapping for Project Planning', lead: 'Infrastructure Sector', responsibleBranch: 'Rural Development Branch', expectedOutcome: 'GIS analysis report attached to 100% of Project Briefs for rural roads.', plan_start: '01/01/2025', plan_end: '31/12/2027', actual_start: '01/01/2025', actual_end: '', progress: 20 },
  { id: '3.3.2', thrustId: 3, tier: 'Thrust 1', name: 'Upgrade Digital Divisional Development Plan Application', lead: 'Support Sector', responsibleBranch: 'Corporate Planning Branch', expectedOutcome: 'Upgraded application with integrated GIS layers; Used by all Divisions.', plan_start: '01/01/2025', plan_end: '31/12/2026', actual_start: '01/01/2025', actual_end: '', progress: 40, linkedKpiIds: ['KPI-6'] },
  { id: '3.3.3', thrustId: 3, tier: 'Thrust 2', name: 'Develop Rural Connectivity Master Plan', lead: 'Infrastructure Sector', responsibleBranch: 'Rural Development Branch', expectedOutcome: 'Master Plan endorsed by State Cabinet; Projects funded based on ranking.', plan_start: '01/01/2025', plan_end: '31/12/2027', actual_start: '01/01/2025', actual_end: '', progress: 35 },
  { id: '3.3.4', thrustId: 3, tier: 'Thrust 2', name: 'Traffic Management Masterplan for Secondary Towns', lead: 'Asset Sector', responsibleBranch: 'Road & Civil Engineering Asset Branch', expectedOutcome: 'Masterplan study completed; Phase 1 implementation tendered.', plan_start: '01/01/2026', plan_end: '31/12/2027', actual_start: '', actual_end: '', progress: 0 },
  { id: '3.3.5', thrustId: 3, tier: 'Thrust 2', name: 'Develop Public Building Access Standards', lead: 'Building & Specialist Sector', responsibleBranch: 'Buildings Branch', expectedOutcome: 'Accessibility standards approved and applied to new projects.', plan_start: '01/01/2026', plan_end: '31/12/2027', actual_start: '', actual_end: '', progress: 0 },
  { id: '3.4.1', thrustId: 3, tier: 'Thrust 2', name: 'Establish Rural Connectivity Hubs', lead: 'Infrastructure Sector', responsibleBranch: 'Rural Development Branch', expectedOutcome: '5 Pilot Hubs constructed in strategic riverine divisions.', plan_start: '01/01/2027', plan_end: '31/12/2029', actual_start: '', actual_end: '', progress: 0 },
  { id: '3.4.2', thrustId: 3, tier: 'Thrust 2', name: 'Ensure 30% Contracts to Local SMEs', lead: 'Support Sector', responsibleBranch: 'Quantity Surveying Branch', expectedOutcome: 'Tracking mechanism in place; Annual report confirms >30% target met.', plan_start: '01/01/2025', plan_end: '31/12/2030', actual_start: '01/01/2025', actual_end: '', progress: 60 },
  { id: '3.4.3', thrustId: 3, tier: 'Thrust 2', name: 'Local Employment Rules', lead: 'Support Sector', responsibleBranch: 'Quantity Surveying Branch', expectedOutcome: 'Local employment policy issued; Minimum targets defined and verified.', plan_start: '01/01/2025', plan_end: '31/12/2030', actual_start: '01/01/2025', actual_end: '', progress: 55 },
  { id: '3.4.4', thrustId: 3, tier: 'Thrust 3', name: 'Divisional Stakeholder Committees', lead: 'Technical Services Sector', responsibleBranch: 'Divisional Offices', expectedOutcome: 'Quarterly meetings held in all 12 Divisions; minutes uploaded to JKR Cloud.', plan_start: '01/01/2025', plan_end: '31/12/2030', actual_start: '01/01/2025', actual_end: '', progress: 40, linkedKpiIds: ['KPI-10'] },

  // --- PILLAR 4: ESG & GREEN INFRASTRUCTURE (24 ITEMS) ---
  { id: '4.1.1', thrustId: 4, tier: 'Thrust 1', name: 'Advanced Sustainable Materials List', lead: 'QAQC Sector', responsibleBranch: 'Research & Investigation Branch', expectedOutcome: 'List published in JKR Standard Specifications; 20% adoption rate.', plan_start: '01/01/2026', plan_end: '31/12/2028', actual_start: '', actual_end: '', progress: 0, linkedKpiIds: ['KPI-7'] },
  { id: '4.1.2', thrustId: 4, tier: 'Thrust 1', name: 'Sustainable Design Specifications for Buildings', lead: 'Building & Specialist Sector', responsibleBranch: 'Buildings Branch', expectedOutcome: 'Revised Architectural Design Standards endorsed; GBI Certified for projects >RM20m.', plan_start: '01/01/2026', plan_end: '31/12/2027', actual_start: '', actual_end: '', progress: 0, linkedKpiIds: ['KPI-7', 'KPI-8'] },
  { id: '4.1.3', thrustId: 4, tier: 'Thrust 1', name: 'Green Procurement Policy', lead: 'Support Sector', responsibleBranch: 'Quantity Surveying Branch', expectedOutcome: 'Green Procurement Policy circular issued to all QS and Engineers.', plan_start: '01/01/2025', plan_end: '31/12/2027', actual_start: '01/01/2025', actual_end: '', progress: 10, linkedKpiIds: ['KPI-7'] },
  { id: '4.1.4', thrustId: 4, tier: 'Thrust 1', name: 'Sustainable Design Task Force', lead: 'Technical Services Sector', responsibleBranch: 'Technical Services Sector', expectedOutcome: 'Task Force established; Specifications updated; materials adopted.', plan_start: '01/01/2026', plan_end: '31/12/2027', actual_start: '', actual_end: '', progress: 0 },
  { id: '4.1.5', thrustId: 4, tier: 'Thrust 2', name: 'Pilot Carbon-Neutral Construction Techniques', lead: 'QAQC Sector', responsibleBranch: 'Research & Investigation Branch', expectedOutcome: 'Pilot project completed; Technical paper on viability published.', plan_start: '01/01/2027', plan_end: '31/12/2029', actual_start: '', actual_end: '', progress: 0, linkedKpiIds: ['KPI-7'] },
  { id: '4.2.1', thrustId: 4, tier: 'Thrust 1', name: 'Solar Power Integration', lead: 'Building & Specialist Sector', responsibleBranch: 'Electrical Engineering Branch', expectedOutcome: 'Solar integration standard embedded; 80% adoption rate by 2029.', plan_start: '01/01/2025', plan_end: '31/12/2029', actual_start: '01/01/2025', actual_end: '', progress: 15, linkedKpiIds: ['KPI-7', 'KPI-8'] },
  { id: '4.2.2', thrustId: 4, tier: 'Thrust 1', name: 'Retrofit 50% Existing Buildings', lead: 'Building & Specialist Sector', responsibleBranch: 'Mechanical Engineering Branch', expectedOutcome: '50% of identified high-consumption buildings retrofitted; >15% savings.', plan_start: '01/01/2027', plan_end: '31/12/2030', actual_start: '', actual_end: '', progress: 0, linkedKpiIds: ['KPI-8'] },
  { id: '4.2.3', thrustId: 4, tier: 'Thrust 2', name: 'Construction Waste Management Plans', lead: 'QAQC Sector', responsibleBranch: 'Research & Investigation Branch', expectedOutcome: 'SWMPs included in all tender documents; Spot checks conducted.', plan_start: '01/01/2026', plan_end: '31/12/2027', actual_start: '', actual_end: '', progress: 0, linkedKpiIds: ['KPI-7'] },
  { id: '4.3.1', thrustId: 4, tier: 'Thrust 1', name: 'Flood-Resistance Standards (80% Target)', lead: 'Asset Sector', responsibleBranch: 'Slope & Forensic Branch', expectedOutcome: 'Revised MSMA for Sarawak adopted; 80% of new projects compliant.', plan_start: '01/01/2026', plan_end: '31/12/2028', actual_start: '', actual_end: '', progress: 0, linkedKpiIds: ['KPI-8'] },
  { id: '4.3.2', thrustId: 4, tier: 'Thrust 1', name: 'Real-Time Flood Monitoring', lead: 'QAQC Sector', responsibleBranch: 'Research & Investigation Branch', expectedOutcome: '50 telemetry stations installed; Data integrated with disaster response.', plan_start: '01/01/2025', plan_end: '31/12/2028', actual_start: '01/01/2025', actual_end: '', progress: 10, linkedKpiIds: ['KPI-5', 'KPI-8'] },
  { id: '4.3.3', thrustId: 4, tier: 'Thrust 1', name: 'Slope Early Warning Systems', lead: 'Asset Sector', responsibleBranch: 'Slope & Forensic Branch', expectedOutcome: 'Early warning systems operational on 20 high-risk slopes.', plan_start: '01/01/2027', plan_end: '31/12/2029', actual_start: '', actual_end: '', progress: 0, linkedKpiIds: ['KPI-8'] },
  { id: '4.3.4', thrustId: 4, tier: 'Thrust 1', name: 'Climate-Resilient Roads', lead: 'Asset Sector', responsibleBranch: 'Road & Civil Engineering Asset Branch', expectedOutcome: 'Pilot projects completed; Resilient designs incorporated into standards.', plan_start: '01/01/2028', plan_end: '31/12/2030', actual_start: '', actual_end: '', progress: 0, linkedKpiIds: ['KPI-8'] },
  { id: '4.3.5', thrustId: 4, tier: 'Thrust 2', name: 'Disaster Preparedness Plan', lead: 'HQ Sector', responsibleBranch: 'Director Office', expectedOutcome: 'Documented preparedness plan; Annual simulation exercises conducted.', plan_start: '01/01/2026', plan_end: '31/12/2030', actual_start: '01/01/2026', actual_end: '', progress: 20 },
  { id: '4.3.6', thrustId: 4, tier: 'Thrust 2', name: 'Recovery Framework', lead: 'Asset Sector', responsibleBranch: 'Road & Civil Engineering Asset Branch', expectedOutcome: 'Approved recovery framework; Framework activated and tested.', plan_start: '01/01/2028', plan_end: '31/12/2028', actual_start: '', actual_end: '', progress: 0 },
  { id: '4.4.1', thrustId: 4, tier: 'Thrust 2', name: 'Pollution Control Measures', lead: 'QAQC Sector', responsibleBranch: 'Compliance Branch', expectedOutcome: 'Standard Pollution Control Clause in all contracts; Enforcement data tracked.', plan_start: '01/01/2026', plan_end: '31/12/2027', actual_start: '', actual_end: '', progress: 0, linkedKpiIds: ['KPI-7'] },
  { id: '4.4.2', thrustId: 4, tier: 'Thrust 2', name: 'Coastal Tree Plant', lead: 'Infrastructure Sector', responsibleBranch: 'Coastal Roads & Second Trunk Roads Branch', expectedOutcome: 'Target sites identified and planted; Survival rates monitored.', plan_start: '01/01/2027', plan_end: '31/12/2029', actual_start: '', actual_end: '', progress: 0, linkedKpiIds: ['KPI-7'] },
  { id: '4.4.3', thrustId: 4, tier: 'Thrust 2', name: 'Urban Greening', lead: 'Asset Sector', responsibleBranch: 'Building Asset Branch', expectedOutcome: 'Greening plans for priority buildings; Maintenance plans in place.', plan_start: '01/01/2028', plan_end: '31/12/2030', actual_start: '', actual_end: '', progress: 0 },
  { id: '4.4.4', thrustId: 4, tier: 'Thrust 2', name: 'Annual EIA for Major Projects', lead: 'QAQC Sector', responsibleBranch: 'Research & Investigation Branch', expectedOutcome: '100% of projects >RM50 million have a Feasibility-Stage EIA.', plan_start: '01/01/2026', plan_end: '31/12/2030', actual_start: '01/01/2026', actual_end: '', progress: 10, linkedKpiIds: ['KPI-7'] },
  { id: '4.4.5', thrustId: 4, tier: 'Thrust 2', name: 'Sustainable Construction Training', lead: 'Technical Services Sector', responsibleBranch: 'Training & Competency Branch', expectedOutcome: 'Training delivered to site staff; Reduction in violations recorded.', plan_start: '01/01/2026', plan_end: '31/12/2026', actual_start: '', actual_end: '', progress: 0, linkedKpiIds: ['KPI-9'] },
  { id: '4.4.6', thrustId: 4, tier: 'Thrust 2', name: 'Awareness Campaigns', lead: 'Human Resource & Corporate Affairs Sector', responsibleBranch: 'Corporate Communication Branch', expectedOutcome: 'Campaign materials produced; measurable increase in industry adoption.', plan_start: '01/01/2026', plan_end: '31/12/2027', actual_start: '', actual_end: '', progress: 0 },
  { id: '4.4.7', thrustId: 4, tier: 'Thrust 3', name: 'Community Feedback Portal', lead: 'Human Resource & Corporate Affairs Sector', responsibleBranch: 'Corporate Communication Branch', expectedOutcome: 'Environmental Report module live on MyJKR App; reports resolved within 48h.', plan_start: '01/01/2027', plan_end: '31/12/2027', actual_start: '', actual_end: '', progress: 0, linkedKpiIds: ['KPI-10'] },
  { id: '4.5.1', thrustId: 4, tier: 'Thrust 3', name: 'Expand Accredited Labs', lead: 'QAQC Sector', responsibleBranch: 'Research & Investigation Branch', expectedOutcome: 'Divisional Labs (Sibu, Miri, Bintulu) accredited to ISO/IEC 17025.', plan_start: '01/01/2026', plan_end: '31/12/2029', actual_start: '', actual_end: '', progress: 0 },
  { id: '4.5.2', thrustId: 4, tier: 'Thrust 3', name: 'Recruit/Train Lab Testers', lead: 'Technical Services Sector', responsibleBranch: 'Training & Competency Branch', expectedOutcome: '20 certified laboratory technicians hired and/or trained.', plan_start: '01/01/2025', plan_end: '31/12/2028', actual_start: '01/01/2025', actual_end: '', progress: 5, linkedKpiIds: ['KPI-9'] },
  { id: '4.5.3', thrustId: 4, tier: 'Thrust 3', name: 'Promote 3rd Party Labs', lead: 'QAQC Sector', responsibleBranch: 'Research & Investigation Branch', expectedOutcome: 'Recognized pool of accredited private labs available.', plan_start: '01/01/2027', plan_end: '31/12/2030', actual_start: '', actual_end: '', progress: 0 },

  // --- PILLAR 5: TALENT & ORGANISATIONAL EXCELLENCE (20 ITEMS) ---
  { id: '5.1.1', thrustId: 5, tier: 'Thrust 1', name: 'Core Technical Training Mandate', lead: 'Technical Services Sector', responsibleBranch: 'Training & Competency Branch', expectedOutcome: '100% compliance tracked by HR; non-compliant staff ineligible for promotion.', plan_start: '01/01/2025', plan_end: '31/12/2030', actual_start: '01/01/2025', actual_end: '', progress: 30, linkedKpiIds: ['KPI-9'] },
  { id: '5.1.2', thrustId: 5, tier: 'Thrust 1', name: 'Young Engineers Program (YEP)', lead: 'Technical Services Sector', responsibleBranch: 'Training & Competency Branch', expectedOutcome: '100 YEPs recruited and rotated by 2028.', plan_start: '01/01/2025', plan_end: '31/12/2029', actual_start: '01/01/2025', actual_end: '', progress: 10, linkedKpiIds: ['KPI-9'] },
  { id: '5.1.3', thrustId: 5, tier: 'Thrust 1', name: 'CCPM Level 6 Accreditation', lead: 'Technical Services Sector', responsibleBranch: 'Training & Competency Branch', expectedOutcome: '100% of identified post-holders (PIMB, DEs, ADEs) certified.', plan_start: '01/01/2025', plan_end: '31/12/2027', actual_start: '01/01/2025', actual_end: '', progress: 15, linkedKpiIds: ['KPI-9'] },
  { id: '5.1.4', thrustId: 5, tier: 'Thrust 1', name: 'Qualified Safety and Health Officer (SHO) in Every Division', lead: 'Human Resource & Corporate Affairs Sector', responsibleBranch: 'Human Resource Branch', expectedOutcome: '12 SHOs (one per division) appointed and operational.', plan_start: '01/01/2025', plan_end: '31/12/2027', actual_start: '01/01/2025', actual_end: '', progress: 40 },
  { id: '5.1.5', thrustId: 5, tier: 'Thrust 2', name: 'Drone Operations Training', lead: 'Technical Services Sector', responsibleBranch: 'Training & Competency Branch', expectedOutcome: '50 certified drone pilots trained; Drone data integrated into JKR Dash.', plan_start: '01/01/2027', plan_end: '31/12/2028', actual_start: '', actual_end: '', progress: 0, linkedKpiIds: ['KPI-9'] },
  { id: '5.1.6', thrustId: 5, tier: 'Thrust 2', name: 'Recruit 10 Global Experts', lead: 'Human Resource & Corporate Affairs Sector', responsibleBranch: 'Human Resource Branch', expectedOutcome: '10 global experts recruited; Knowledge transfer programs executed.', plan_start: '01/01/2026', plan_end: '31/12/2027', actual_start: '', actual_end: '', progress: 0, linkedKpiIds: ['KPI-9'] },
  { id: '5.2.1', thrustId: 5, tier: 'Thrust 1', name: 'Competency-Based Career Framework', lead: 'Human Resource & Corporate Affairs Sector', responsibleBranch: 'Human Resource Branch', expectedOutcome: 'Framework gazetted by SPA; Rollout commenced.', plan_start: '01/01/2025', plan_end: '31/12/2027', actual_start: '01/01/2025', actual_end: '', progress: 25 },
  { id: '5.2.2', thrustId: 5, tier: 'Thrust 2', name: 'Embed \"JKR In Unity\" Values', lead: 'Human Resource & Corporate Affairs Sector', responsibleBranch: 'Human Resource Branch / Corporate Communication Branch', expectedOutcome: 'Revised LNPT criteria implemented; Values-based assessment operational.', plan_start: '01/01/2026', plan_end: '31/12/2028', actual_start: '', actual_end: '', progress: 0, linkedKpiIds: ['KPI-10'] },
  { id: '5.2.3', thrustId: 5, tier: 'Thrust 2', name: 'HIPO Identification', lead: 'Human Resource & Corporate Affairs Sector', responsibleBranch: 'Human Resource Branch', expectedOutcome: 'HIPO criteria defined; Candidates identified and plans implemented.', plan_start: '01/01/2026', plan_end: '31/12/2028', actual_start: '', actual_end: '', progress: 0 },
  { id: '5.2.4', thrustId: 5, tier: 'Thrust 2', name: 'Job Shadowing/Mentorship', lead: 'Human Resource & Corporate Affairs Sector', responsibleBranch: 'Human Resource Branch', expectedOutcome: 'Structured programmes launched; Mentors assigned.', plan_start: '01/01/2027', plan_end: '31/12/2027', actual_start: '', actual_end: '', progress: 0 },
  { id: '5.2.5', thrustId: 5, tier: 'Thrust 2', name: 'Launch JKR Digital Academy', lead: 'Technical Services Sector', responsibleBranch: 'Training & Competency Branch', expectedOutcome: 'Academy launched; 200 graduates annually.', plan_start: '01/01/2027', plan_end: '31/12/2029', actual_start: '', actual_end: '', progress: 0, linkedKpiIds: ['KPI-9'] },
  { id: '5.3.1', thrustId: 5, tier: 'Thrust 2', name: 'Rightsizing & Restructuring', lead: 'Human Resource & Corporate Affairs Sector', responsibleBranch: 'Human Resource Branch', expectedOutcome: 'New organizational chart approved by JPA.', plan_start: '01/01/2026', plan_end: '31/12/2027', actual_start: '', actual_end: '', progress: 0, linkedKpiIds: ['KPI-10'] },
  { id: '5.3.2', thrustId: 5, tier: 'Thrust 2', name: 'Create New Posts', lead: 'Human Resource & Corporate Affairs Sector', responsibleBranch: 'Human Resource Branch', expectedOutcome: 'New roles approved and staffed; Productivity improvement measured.', plan_start: '01/01/2026', plan_end: '31/12/2027', actual_start: '', actual_end: '', progress: 0 },
  { id: '5.3.3', thrustId: 5, tier: 'Thrust 2', name: 'State Fleet Hub & Tracking', lead: 'Human Resource & Corporate Affairs Sector', responsibleBranch: 'Corporate Communication Branch', expectedOutcome: '100% of fleet GPS-tagged; 15% reduction in fuel/maintenance costs.', plan_start: '01/01/2025', plan_end: '31/12/2027', actual_start: '01/01/2025', actual_end: '', progress: 10 },
  { id: '5.3.4', thrustId: 5, tier: 'Thrust 2', name: 'Phase Out Old Machinery', lead: 'Technical Services Sector', responsibleBranch: 'PIMB', expectedOutcome: 'Machinery inventory assessed; Obsolete units retired; replacement plans executed.', plan_start: '01/01/2027', plan_end: '31/12/2030', actual_start: '', actual_end: '', progress: 0 },
  { id: '5.3.5', thrustId: 5, tier: 'Thrust 3', name: 'Cross-Divisional Resource Sharing', lead: 'Asset Sector', responsibleBranch: 'Asset Sector', expectedOutcome: 'Digital sharing platform active; Asset utilization increased by 20%.', plan_start: '01/01/2027', plan_end: '31/12/2028', actual_start: '', actual_end: '', progress: 0 },
  { id: '5.3.6', thrustId: 5, tier: 'Thrust 3', name: 'Funding Link to PCDS 2030', lead: 'Support Sector', responsibleBranch: 'Corporate Planning Branch', expectedOutcome: 'Funding proposals formally mapped to PCDS goals; Improved approval rates.', plan_start: '01/01/2025', plan_end: '31/12/2027', actual_start: '01/01/2025', actual_end: '', progress: 30 },
  { id: '5.4.1', thrustId: 5, tier: 'Thrust 3', name: 'Innovation & Excellence Awards', lead: 'Human Resource & Corporate Affairs Sector', responsibleBranch: 'Corporate Communication Branch', expectedOutcome: 'Annual awards event established; Clear link between awards and promotion points.', plan_start: '01/01/2026', plan_end: '31/12/2030', actual_start: '', actual_end: '', progress: 0, linkedKpiIds: ['KPI-10'] },
  { id: '5.4.2', thrustId: 5, tier: 'Thrust 3', name: 'Showcase Success', lead: 'Human Resource & Corporate Affairs Sector', responsibleBranch: 'Corporate Communication Branch', expectedOutcome: 'Annual list of showcase projects approved; Success stories documented.', plan_start: '01/01/2025', plan_end: '31/12/2030', actual_start: '01/01/2025', actual_end: '', progress: 50, linkedKpiIds: ['KPI-10'] },
  { id: '5.4.3', thrustId: 5, tier: 'Thrust 3', name: '\"We Build for You\" Mini-Series', lead: 'Human Resource & Corporate Affairs Sector', responsibleBranch: 'Corporate Communication Branch', expectedOutcome: '4 documentary episodes released annually; High engagement recorded.', plan_start: '01/01/2026', plan_end: '31/12/2030', actual_start: '', actual_end: '', progress: 0, linkedKpiIds: ['KPI-10'] },

  // --- PILLAR 6: GLOBAL POSITIONING & PARTNERSHIPS (26 ITEMS) ---
  { id: '6.1.1', thrustId: 6, tier: 'Thrust 1', name: 'Develop Global Benchmarking Framework', lead: 'Support Sector', responsibleBranch: 'Corporate Planning Branch', expectedOutcome: 'Framework established; First Comparative Report presented to SSC.', plan_start: '01/01/2025', plan_end: '31/12/2027', actual_start: '01/01/2025', actual_end: '', progress: 20, linkedKpiIds: ['KPI-10'] },
  { id: '6.1.2', thrustId: 6, tier: 'Thrust 1', name: 'Participate in International Infrastructure Awards', lead: 'Infrastructure Sector', responsibleBranch: 'Infrastructure Sector', expectedOutcome: '3 award submissions annually; Achieve 1 Finalist position by 2027.', plan_start: '01/01/2025', plan_end: '31/12/2030', actual_start: '01/01/2025', actual_end: '', progress: 60, linkedKpiIds: ['KPI-10'] },
  { id: '6.1.3', thrustId: 6, tier: 'Thrust 1', name: 'Global Infrastructure Networks', lead: 'Infrastructure Sector', responsibleBranch: 'Infrastructure Sector', expectedOutcome: 'Memberships secured in selected networks; Best practices adopted.', plan_start: '01/01/2025', plan_end: '31/12/2027', actual_start: '01/01/2025', actual_end: '', progress: 40 },
  { id: '6.1.4', thrustId: 6, tier: 'Thrust 2', name: 'Peer Review Exchanges', lead: 'Support Sector', responsibleBranch: 'Audit Branch', expectedOutcome: 'Peer reviews conducted on selected functions; Credibility enhanced.', plan_start: '01/01/2027', plan_end: '31/12/2029', actual_start: '', actual_end: '', progress: 0 },
  { id: '6.1.5', thrustId: 6, tier: 'Thrust 2', name: 'Publish JKR Sarawak Annual Report', lead: 'Support Sector', responsibleBranch: 'Corporate Planning Branch', expectedOutcome: 'Digital and physical Annual Report published and accessible.', plan_start: '01/01/2026', plan_end: '31/12/2030', actual_start: '', actual_end: '', progress: 0, linkedKpiIds: ['KPI-10'] },
  { id: '6.2.1', thrustId: 6, tier: 'Thrust 1', name: 'International Knowledge Exchange Program', lead: 'Technical Services Sector', responsibleBranch: 'Training & Competency Branch', expectedOutcome: 'MOU signed with partners; First cohort of 5 officers deployed.', plan_start: '01/01/2025', plan_end: '31/12/2028', actual_start: '01/01/2025', actual_end: '', progress: 15, linkedKpiIds: ['KPI-9'] },
  { id: '6.2.2', thrustId: 6, tier: 'Thrust 2', name: 'Knowledge Transfer', lead: 'Support Sector', responsibleBranch: 'Corporate Planning Branch', expectedOutcome: 'Best practices documented and disseminated; Adoption tracked.', plan_start: '01/01/2027', plan_end: '31/12/2028', actual_start: '', actual_end: '', progress: 0, linkedKpiIds: ['KPI-9'] },
  { id: '6.2.3', thrustId: 6, tier: 'Thrust 1', name: 'Partner with Global Industry Leaders', lead: 'Technical Services Sector', responsibleBranch: 'Technical Services Sector', expectedOutcome: '3 Strategic Partnerships (e.g., Bentley, Autodesk) formalized.', plan_start: '01/01/2026', plan_end: '31/12/2028', actual_start: '', actual_end: '', progress: 0 },
  { id: '6.2.4', thrustId: 6, tier: 'Thrust 2', name: 'Host Annual Sarawak Infrastructure Innovation Summit', lead: 'Infrastructure Sector', responsibleBranch: 'Infrastructure Sector', expectedOutcome: 'Summit launched; >500 international delegates in attendance.', plan_start: '01/01/2027', plan_end: '31/12/2030', actual_start: '', actual_end: '', progress: 0 },
  { id: '6.2.5', thrustId: 6, tier: 'Thrust 2', name: 'Establish Centralised Knowledge Repository', lead: 'Support Sector', responsibleBranch: 'Corporate Planning Branch / DTC', expectedOutcome: 'Digital repository platform launched; 500+ documents catalogued.', plan_start: '01/01/2027', plan_end: '31/12/2028', actual_start: '', actual_end: '', progress: 0, linkedKpiIds: ['KPI-6'] },
  { id: '6.2.6', thrustId: 6, tier: 'Thrust 2', name: 'Publish Annual Best Practices & Innovation Report', lead: 'Support Sector', responsibleBranch: 'Corporate Planning Branch', expectedOutcome: 'First annual report published and distributed; used in planning.', plan_start: '01/01/2027', plan_end: '31/12/2030', actual_start: '', actual_end: '', progress: 0 },
  { id: '6.2.7', thrustId: 6, tier: 'Thrust 2', name: 'Establish a \"Global Services Office\" (GSO)', lead: 'HQ Sector', responsibleBranch: 'Director Office', expectedOutcome: 'GSO legally established with a business plan; first contract secured.', plan_start: '01/01/2028', plan_end: '31/12/2029', actual_start: '', actual_end: '', progress: 0 },
  { id: '6.2.8', thrustId: 6, tier: 'Thrust 2', name: 'Generate RM50 Million Revenue from Global Services', lead: 'HQ Sector', responsibleBranch: 'Global Services Office', expectedOutcome: 'Cumulative revenue of RM50 million booked by the GSO.', plan_start: '01/01/2029', plan_end: '31/12/2030', actual_start: '', actual_end: '', progress: 0 },
  { id: '6.3.1', thrustId: 6, tier: 'Thrust 2', name: 'Establish JKR Sarawak Research Centre as a Centre of Excellence (CoE)', lead: 'QAQC Sector', responsibleBranch: 'Research & Investigation Branch', expectedOutcome: 'CoE formally recognized by Board of Engineers Malaysia (BEM).', plan_start: '01/01/2025', plan_end: '31/12/2028', actual_start: '01/01/2025', actual_end: '', progress: 20 },
  { id: '6.3.2', thrustId: 6, tier: 'Thrust 2', name: 'Establish Construction Technology Hub', lead: 'QAQC Sector', responsibleBranch: 'Research & Investigation Branch', expectedOutcome: 'Hub facility established; collaboration agreements with 5+ startups.', plan_start: '01/01/2028', plan_end: '31/12/2030', actual_start: '', actual_end: '', progress: 0 },
  { id: '6.3.3', thrustId: 6, tier: 'Thrust 2', name: 'License SGIS Certification', lead: 'QAQC Sector', responsibleBranch: 'Research & Investigation Branch', expectedOutcome: 'SGIS standard launched; licensing framework established; 50 certifications.', plan_start: '01/01/2028', plan_end: '31/12/2030', actual_start: '', actual_end: '', progress: 0 },
  { id: '6.4.1', thrustId: 6, tier: 'Thrust 3', name: 'Leverage Digital Platforms Like MyJKR App', lead: 'Human Resource & Corporate Affairs Sector', responsibleBranch: 'Corporate Communication Branch', expectedOutcome: 'App upgraded with new features; 100,000 downloads achieved.', plan_start: '01/01/2025', plan_end: '31/12/2027', actual_start: '01/01/2025', actual_end: '', progress: 30, linkedKpiIds: ['KPI-10'] },
  { id: '6.4.2', thrustId: 6, tier: 'Thrust 3', name: 'Implement Structured Stakeholder Engagement', lead: 'Human Resource & Corporate Affairs Sector', responsibleBranch: 'Corporate Communication Branch', expectedOutcome: 'Annual engagement calendar executed for all key groups.', plan_start: '01/01/2025', plan_end: '31/12/2030', actual_start: '01/01/2025', actual_end: '', progress: 45, linkedKpiIds: ['KPI-10'] },
  { id: '6.4.3', thrustId: 6, tier: 'Thrust 3', name: 'Strengthen Proactive Media Engagement', lead: 'Human Resource & Corporate Affairs Sector', responsibleBranch: 'Corporate Communication Branch', expectedOutcome: 'Annual media events held; positive/neutral sentiment in >80% coverage.', plan_start: '01/01/2025', plan_end: '31/12/2030', actual_start: '01/01/2025', actual_end: '', progress: 40, linkedKpiIds: ['KPI-10'] },
  { id: '6.4.4', thrustId: 6, tier: 'Thrust 3', name: 'Expedite Response Times to Public Complaints', lead: 'Human Resource & Corporate Affairs Sector', responsibleBranch: 'Corporate Communication Branch', expectedOutcome: 'Public SLA published; >95% compliance rate achieved.', plan_start: '01/01/2028', plan_end: '31/12/2028', actual_start: '', actual_end: '', progress: 0, linkedKpiIds: ['KPI-10'] },
  { id: '6.4.5', thrustId: 6, tier: 'Thrust 3', name: 'Systematically Showcase Innovation & Delivery Achievements', lead: 'Human Resource & Corporate Affairs Sector', responsibleBranch: 'Corporate Communication Branch', expectedOutcome: 'Regular stream of \"innovation story\" content published; consistent branding.', plan_start: '01/01/2025', plan_end: '31/12/2030', actual_start: '01/01/2025', actual_end: '', progress: 55, linkedKpiIds: ['KPI-10'] },
  { id: '6.4.6', thrustId: 6, tier: 'Thrust 3', name: 'Launch Annual \"JKR Open Site Day\"', lead: 'Human Resource & Corporate Affairs Sector', responsibleBranch: 'Corporate Communication Branch', expectedOutcome: 'Annual Open Site Day event held successfully in every Division.', plan_start: '01/01/2026', plan_end: '31/12/2030', actual_start: '', actual_end: '', progress: 0, linkedKpiIds: ['KPI-10'] },
  { id: '6.4.7', thrustId: 6, tier: 'Thrust 3', name: 'Formalise \"Rakan Media\" Partnership Programme', lead: 'Human Resource & Corporate Affairs Sector', responsibleBranch: 'Corporate Communication Branch', expectedOutcome: '20 media partners formally enrolled in the programme.', plan_start: '01/01/2025', plan_end: '31/12/2027', actual_start: '01/01/2025', actual_end: '', progress: 20, linkedKpiIds: ['KPI-10'] },
  { id: '6.4.8', thrustId: 6, tier: 'Thrust 3', name: 'Implement Media Training for Selected Officers', lead: 'Technical Services Sector', responsibleBranch: 'Training & Competency Branch', expectedOutcome: 'A trained spokesperson pool established; improved confidence.', plan_start: '01/01/2026', plan_end: '31/12/2030', actual_start: '', actual_end: '', progress: 0, linkedKpiIds: ['KPI-9'] },
  { id: '6.4.9', thrustId: 6, tier: 'Thrust 3', name: 'Organise Annual \"Hari Bersama Pelanggan\"', lead: 'Human Resource & Corporate Affairs Sector', responsibleBranch: 'Corporate Communication Branch', expectedOutcome: 'Annual public engagement event held in each Division; feedback recorded.', plan_start: '01/01/2026', plan_end: '31/12/2030', actual_start: '', actual_end: '', progress: 0, linkedKpiIds: ['KPI-10'] },
  { id: '6.4.10', thrustId: 6, tier: 'Thrust 3', name: 'Conduct Annual Public Satisfaction Surveys', lead: 'Human Resource & Corporate Affairs Sector', responsibleBranch: 'Corporate Communication Branch', expectedOutcome: 'Annual survey conducted and analysed; inform corporate planning.', plan_start: '01/01/2025', plan_end: '31/12/2030', actual_start: '01/01/2025', actual_end: '', progress: 50, linkedKpiIds: ['KPI-10'] },

  // --- PILLAR 7: THE ENABLING ECOSYSTEM (7 ITEMS) ---
  { id: '7.1.1', thrustId: 7, tier: 'ENABLER', name: 'Establish the \"JKR Change Champions\" Network', lead: 'Human Resource & Corporate Affairs Sector', responsibleBranch: 'Human Resource Branch', expectedOutcome: '50 Change Champions recruited (2+ per Division); network supporting rollout.', plan_start: '01/01/2026', plan_end: '31/12/2026', actual_start: '', actual_end: '', progress: 0, linkedKpiIds: ['KPI-9', 'KPI-10'] },
  { id: '7.1.2', thrustId: 7, tier: 'ENABLER', name: 'Execute \"Kill-Stupid-Rules\" Campaign', lead: 'HQ Sector', responsibleBranch: 'Director Office', expectedOutcome: '20+ obsolete processes/forms/circulars formally abolished.', plan_start: '01/01/2028', plan_end: '31/12/2028', actual_start: '', actual_end: '', progress: 0, linkedKpiIds: ['KPI-1'] },
  { id: '7.1.3', thrustId: 7, tier: 'ENABLER', name: 'Launch the \"Fail-Fast\" Innovation Fund', lead: 'Human Resource & Corporate Affairs Sector', responsibleBranch: 'Finance Branch', expectedOutcome: 'RM 500k fund established; 5 pilot projects funded annually.', plan_start: '01/01/2026', plan_end: '31/12/2030', actual_start: '', actual_end: '', progress: 0 },
  { id: '7.2.1', thrustId: 7, tier: 'ENABLER', name: 'Launch Vendor Development Programme (VDP)', lead: 'Support Sector', responsibleBranch: 'Quantity Surveying Branch', expectedOutcome: '20 promising contractors complete the programme; 0% failure rate.', plan_start: '01/01/2026', plan_end: '31/12/2028', actual_start: '', actual_end: '', progress: 0, linkedKpiIds: ['KPI-1', 'KPI-2'] },
  { id: '7.2.2', thrustId: 7, tier: 'ENABLER', name: 'Launch Green Materials Marketplace', lead: 'QAQC Sector', responsibleBranch: 'Research & Investigation Branch', expectedOutcome: 'Digital marketplace platform live; >50 green material suppliers listed.', plan_start: '01/01/2027', plan_end: '31/12/2027', actual_start: '', actual_end: '', progress: 0, linkedKpiIds: ['KPI-7'] },
  { id: '7.3.1', thrustId: 7, tier: 'ENABLER', name: 'Implement Annual Strategy Refresh', lead: 'HQ Sector', responsibleBranch: 'Strategic Steering Committee (SSC)', expectedOutcome: 'Annual \"Kill/Keep/Start\" review conducted; strategic portfolio dynamically managed.', plan_start: '01/01/2026', plan_end: '31/12/2030', actual_start: '01/01/2026', actual_end: '', progress: 20 },
  { id: '7.3.2', thrustId: 7, tier: 'ENABLER', name: 'Develop Leading Indicator Dashboard', lead: 'Support Sector', responsibleBranch: 'Corporate Planning Branch', expectedOutcome: 'Dashboard live and integrated with JKR Dash; primay diagnostic tool in SSC.', plan_start: '01/01/2026', plan_end: '31/12/2026', actual_start: '', actual_end: '', progress: 0, linkedKpiIds: ['KPI-5'] }
];

export const navItems: NavItem[] = [
  { id: 'welcome', label: 'Welcome', icon: Home },
  { 
    id: 'strategy', 
    label: 'Strategic Vision', 
    icon: Target,
    children: [
      { id: 'overview', label: 'Mission & Goals', icon: Target },
      { id: 'thrusts', label: '6 Strategic Pillars', icon: Briefcase },
      { id: 'ecosystem', label: 'Enabling Ecosystem', icon: Layers },
      { id: 'roadmap', label: 'Strategic Roadmap', icon: Calendar },
    ]
  },
  {
    id: 'operations',
    label: 'Execution Mode',
    icon: LayoutDashboard,
    children: [
      { id: 'timeline', label: 'Master Timeline', icon: Calendar },
      { id: 'kpi-dashboard', label: 'KPI Scorecard', icon: BarChartHorizontal },
      { id: 'checklist', label: 'Implementation Checklist', icon: CheckSquare },
      { id: 'tasks', label: 'Task Management', icon: ListTodo },
    ]
  },
  {
    id: 'communication',
    label: 'Unity & Results',
    icon: MessageSquare,
    children: [
      { id: 'stories', label: 'Impact Stories', icon: Video },
      { id: 'achievements', label: 'Achievements', icon: Trophy },
      { id: 'partners', label: 'Our Partners', icon: Handshake },
      { id: 'engage', label: 'Public Trust', icon: Users },
    ]
  },
  { id: 'admin', label: 'Admin', icon: Settings, adminOnly: true },
];

export const initialSuccessStories: SuccessStory[] = [
  {
    id: 1,
    title: "SSLR Phase 2",
    subtitle: "Connecting the Interior",
    description: "🏆 WINNER: Bentley’s 2025 Going Digital Award. Proving our excellence on the global stage.",
    gradient: "from-blue-600 to-cyan-500",
    href: "#",
    buttonText: "View Case Study"
  },
  {
    id: 2,
    title: "Pan Borneo Highway",
    subtitle: "The Economic Spine",
    description: "Completing Sarawak's most significant infrastructure backbone to date.",
    gradient: "from-emerald-600 to-teal-500",
    href: "#",
    buttonText: "Read More"
  }
];

export const initialAchievements: Achievement[] = [
  {
    id: 1,
    title: "Going Digital Award 2025",
    organization: "Bentley Systems",
    date: "2025",
    description: "Winner in the Roads and Highways category for the Sarawak-Sabah Link Road (SSLR) Phase 2 project, recognizing excellence in digital transformation.",
    icon: Trophy,
    category: 'Global',
    imgUrl: "https://ik.imagekit.io/z7yhsbzej/winner%20bentley%20YII%202025.png"
  },
  {
    id: 3,
    title: "Malaysian Book of Records",
    organization: "The Malaysia Book of Records",
    date: "Pending 2026",
    description: "First 3-legged Pier Bridge in Malaysia - Datuk Amar Jama'ani Bridge, Kuching.",
    icon: Star,
    category: 'National',
    imgUrl: "https://ik.imagekit.io/z7yhsbzej/527732416_1138113751680321_7219537451605359459_n.jpg"
  }
];

export const initialPartners: Partner[] = [
  { id: 1, acronym: 'WLF', name: 'Women Leadership Foundation (WLF)', date: '25 November 2025', logoUrl: 'https://ik.imagekit.io/z7yhsbzej/WLF%20logo.png' },
  { id: 2, acronym: 'DBOS', name: 'Development Bank of Sarawak Berhad (DBOS)', date: '17 November 2025', logoUrl: 'https://ik.imagekit.io/z7yhsbzej/DBOS%20logo.png' },
  { id: 3, acronym: 'TAR UMT', name: 'Tunku Abdul Rahman University of Management and Technology (TAR UMT)', date: '3 Oktober 2025', logoUrl: 'https://ik.imagekit.io/z7yhsbzej/UNITAR%20logo.png' },
  { id: 4, acronym: 'UNIMAS', name: 'University Malaysia Sarawak (UNIMAS)', date: '9 September 2025', logoUrl: 'https://ik.imagekit.io/z7yhsbzej/UNIMAS%20logo.jpg' },
  { id: 5, acronym: 'MAE', name: 'Malaysian Association of Engineers', date: '12 Ogos 2025', logoUrl: 'https://ik.imagekit.io/z7yhsbzej/MAE%20logo.png' },
  { id: 6, acronym: 'i-CATS', name: 'i-CATS University College', date: '2 Mei 2025', logoUrl: 'https://ik.imagekit.io/z7yhsbzej/ICATS%20logo.png' },
  { id: 7, acronym: 'SDEC', name: 'Sarawak Digital Economy Corporation (SDEC)', date: '9 Disember 2024', logoUrl: 'https://ik.imagekit.io/z7yhsbzej/SDEC%20logo.png' },
  { id: 8, acronym: 'UTS', name: 'University of Technology Sarawak (UTS)', date: '6 Disember 2024', logoUrl: 'https://ik.imagekit.io/z7yhsbzej/UTS%20logo.png' },
];

export const initialStoriesPageContent: StoriesPageContent = {
  mainTitle: "Excellence Demonstrated",
  mainSubtitle: "Showcasing how JKR Sarawak transforms vision into life-changing infrastructure for the Rakyat.",
  knowledgeSharingTitle: "Global Knowledge Exchange",
  knowledgeSharingBody: "Through international collaborations with tech giants like Bentley and Autodesk, we are exporting Sarawak's engineering expertise to the world."
};

export const initialEngagementChannels: EngagementChannel[] = [
  {
    id: 1,
    icon: Smartphone,
    color: "text-blue-500",
    title: "MyJKR App",
    description: "Putting JKR in every pocket. Real-time road closures and GPS-enabled pothole reporting.",
    buttonText: "Launch Portal",
    buttonColor: "bg-blue-600 hover:bg-blue-700",
    href: "https://jkr.sarawak.gov.my"
  },
  {
    id: 2,
    icon: MessageSquare,
    color: "text-emerald-500",
    title: "Stakeholder Committees",
    description: "Active quarterly engagements between Divisional Engineers and local community leaders.",
    buttonText: "View Schedule",
    buttonColor: "bg-emerald-600 hover:bg-emerald-700",
    href: "https://jkr.sarawak.gov.my"
  },
  {
    id: 3,
    icon: FileText,
    color: "text-red-500",
    title: "Annual Report",
    description: "Transitioning to radical transparency with our public-facing corporate performance review.",
    buttonText: "Download 2025",
    buttonColor: "bg-red-600 hover:bg-red-700",
    href: "#"
  }
];

export const initialEngagePageContent: EngagePageContent = {
  mainTitle: "Building Public Confidence",
  mainSubtitle: "Fostering a culture of responsiveness and accountability through Digital-First communication.",
  transparencyTitle: "Governance & Transparency",
  governanceTitle: "Command Code Enforcement",
  governanceInitiatives: [
    { id: 1, strong: "Safety Tribunal", text: "Zero-tolerance for safety breaches." },
    { id: 2, strong: "Project Court", text: "Mandatory intervention for sick projects." },
    { id: 3, strong: "Whistleblower App", text: "Secure anonymous reporting for all staff." }
  ],
  mediaTitle: "Rakan Media Program",
  mediaInitiatives: [
    { id: 1, strong: "Exclusive Access", text: "Providing journalists deep-dive briefings on technical challenges." },
    { id: 2, strong: "Media Training", text: "Certifying officers for consistent public messaging." }
  ]
};

export const initialWelcomePageContent: WelcomePageContent = {
  title: "JKR SARAWAK MOVING FORWARD STRATEGY 2025-2030",
  subtitle: "FASTER • SMARTER • SAFER • GREENER",
  body: "Welcome to the Strategic Implementation Portal. This dashboard tracks our definitive response to the call of PCDS 2030, transforming JKR from a maintenance-focused department into a globally recognized engineering authority."
};

export const kpis: KPI[] = [
  { 
    id: 'KPI-1',
    name: "% of projects completed on time", 
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