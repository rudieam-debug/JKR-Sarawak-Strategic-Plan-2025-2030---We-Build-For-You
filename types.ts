
import type { LucideProps } from 'lucide-react';
import type React from 'react';

export type IconType = React.ComponentType<LucideProps> | string;

export type UserRole = 'super_admin' | 'editor' | 'viewer';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export interface MediaItem {
  id: string;
  name: string;
  data: string; // base64 data URL
  type: string;
  size: number;
}


export interface StrategicThrust {
  id: number;
  title: string;
  icon: IconType;
  color: string;
  shortColor: string;
  description: string;
}

export interface TierMilestone {
  tier: string;
  milestones: string[];
  color:string;
}

export interface KPIHistory {
  date: string; // YYYY-MM-DD
  value: number;
}

export interface KPI {
  id: string; // Added ID for formal linking
  name: string;
  target: string;
  current: string;
  targetValue: number;
  currentValue: number;
  history?: KPIHistory[];
  plan_start?: string; // DD/MM/YYYY
  plan_end?: string;   // DD/MM/YYYY
  actual_start?: string; // DD/MM/YYYY
  actual_end?: string; // DD/MM/YYYY
}

export interface ProgressUpdate {
  date: string; // YYYY-MM-DD
  progress: number;
  note: string;
}

export interface Initiative {
  id: string;
  thrustId: number;
  name:string;
  tier?: 'Thrust 1' | 'Thrust 2' | 'Thrust 3' | 'ENABLER';
  targetYear?: number; // Helper for approximation logic
  plan_start: string; // DD/MM/YYYY
  plan_end: string;   // DD/MM/YYYY
  actual_start: string; // DD/MM/YYYY
  actual_end: string;   // DD/MM/YYYY
  progress: number;
  responsibleBranch: string;
  expectedOutcome: string; // Now required
  remarks?: string;
  progressHistory?: ProgressUpdate[];
  
  // Playbook Specific Fields
  description?: string;
  lead?: string; // Owner (Lead)
  supportingUnits?: string;
  kpiText?: string; // The descriptive text of the KPI from Playbook
  dependencies?: string; // Text description
  predecessors?: string[]; // Array of Initiative IDs for Gantt
  risks?: string;
  mitigation?: string;
  budgetEstimate?: string;
  successIndicators?: string;
  notes?: string; // User-added notes
  linkedKpiIds?: string[]; // Added to formalize the link to specific KPIs
}

export interface NavItem {
  id: string;
  label: string;
  icon: IconType;
  adminOnly?: boolean;
  children?: NavItem[];
  badge?: string;
  badgeColor?: string;
}

export interface StrategicObjective {
  id: number;
  title: string;
  description: string;
  icon: IconType;
  imgSrc?: string; // For custom uploaded icons
  color: string;
  thrusts: number[];
}

export interface StrategicDirection {
  vision: string;
  mission: string;
  goal: string;
}

export interface SuccessStory {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  gradient: string;
  href: string;
  buttonText: string;
}

export interface Achievement {
  id: number;
  title: string;
  organization: string;
  date: string;
  description: string;
  icon: IconType;
  category: 'Global' | 'National' | 'State';
  imgUrl?: string;
}

export interface Partner {
  id: number;
  name: string;
  acronym: string;
  date: string;
  logoUrl?: string;
}

export interface StoriesPageContent {
  mainTitle: string;
  mainSubtitle: string;
  knowledgeSharingTitle: string;
  knowledgeSharingBody: string;
}

export interface EngagementChannel {
  id: number;
  icon: IconType;
  imgSrc?: string; // For custom uploaded icons
  color: string;
  title: string;
  description: string;
  buttonText: string;
  buttonColor: string;
  href: string;
}

export interface EngagePageContent {
  mainTitle: string;
  mainSubtitle: string;
  transparencyTitle: string;
  governanceTitle: string;
  governanceInitiatives: { id: number; text: string; strong: string }[];
  mediaTitle: string;
  mediaInitiatives: { id: number; text: string; strong: string }[];
}

// Editable UI Content Types
export interface HeaderData {
  mainTitle: string;
  tagline: string;
  headerLink: string;
}

export interface FooterLink {
  text: string;
  href: string;
}

export interface FooterData {
  tagline: string;
  links: FooterLink[];
  copyright: string;
}

export interface WelcomePageContent {
  title: string;
  subtitle: string;
  body: string;
}

export interface FinancialSummary {
  title: string;
  subtitle: string;
  budget: number;
  spending: number;
}

export interface ThrustFinancials {
  id: number;
  thrustId: number;
  thrustTitle: string;
  budget: number;
  spending: number;
}

// Checklist Types
export interface ChecklistItem {
  id: string;
  label: string;
}

export interface ChecklistPhase {
  name: string;
  items: ChecklistItem[];
}

export type InitiativeChecklistState = Record<string, Record<string, boolean>>;

// AI Chat Types
export interface ChatMessage {
  role: 'user' | 'model';
  parts: { text: string }[];
  timestamp: string;
}

// Live Dashboard Types
export interface LiveMetric {
  title: string;
  value: string;
  icon: IconType;
  color: string;
  change?: string;
  changeType?: 'increase' | 'decrease';
}

export interface ProjectLocation {
  id: string;
  name: string;
  coordinates: { x: number; y: number };
  status: 'on-track' | 'at-risk' | 'overdue' | 'completed';
}

export type LiveProjectUpdateStatus = 'Milestone Achieved' | 'On Track' | 'Delay Reported' | 'Community Update' | 'Safety Alert';

export interface LiveProjectUpdate {
  id: string;
  projectId: string;
  timestamp: string;
  update: string;
  status: LiveProjectUpdateStatus;
}

export interface LiveFeedback {
  id: string;
  text: string;
  source: string;
}

// Risk Analysis Types
export interface RiskProfile {
  level: 'High' | 'Medium' | 'Low';
  justification: string;
}

// Task List Type
export interface Task {
  id: string;
  text: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  createdAt: string;
}
