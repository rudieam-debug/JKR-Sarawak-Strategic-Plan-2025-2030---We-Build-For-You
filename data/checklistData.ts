import type { ChecklistPhase } from '../types';

/**
 * STRATEGIC IMPLEMENTATION WORKFLOWS
 * Extracted from "JKR Sarawak Moving Forward Strategy 2025-2030: Detail Implementation Timeline"
 */

const initiativeWorkflows: Record<string, ChecklistPhase[]> = {
    // ==================================================================================
    // PILLAR 1: INFRASTRUCTURE DELIVERY EXCELLENCE
    // ==================================================================================
    '1.1.1': [
        { 
            name: "REQUIREMENT ANALYSIS & BENCHMARKING (Jan - Mar 2026)", 
            items: [
                { id: '1.1.1-1', label: 'Review existing project management processes, templates, and guidelines across divisions to identify gaps and best practices.' },
                { id: '1.1.1-2', label: 'Research project delivery playbooks from leading international and domestic infrastructure agencies.' },
                { id: '1.1.1-3', label: 'Conduct workshops with senior project managers and divisional engineers to finalize core modules and structure of the playbook.' },
                { id: '1.1.1-M1', label: 'Milestone M1: Requirements and Structure Specification document approved.' }
            ]
        },
        { 
            name: "CONTENT DEVELOPMENT & DRAFTING (Apr - Aug 2026)", 
            items: [
                { id: '1.1.1-4', label: 'Write core playbook content (Initiation → Planning → Execution → Monitoring → Closing), including standard templates (Site Diaries, RFI Logs, Handover Checklists).' },
                { id: '1.1.1-5', label: 'Internal cross-departmental review (Technical, Construction, QA/QC, Safety).' },
                { id: '1.1.1-6', label: 'Incorporate feedback and finalize the playbook draft (Beta Version).' },
                { id: '1.1.1-M2', label: 'Milestone M2: JKR Project Delivery Playbook Draft completed.' }
            ]
        },
        { 
            name: "PILOT TESTING & REFINEMENT (Sep - Oct 2026)", 
            items: [
                { id: '1.1.1-7', label: 'Pilot the application of playbook processes and templates in 2-3 selected new projects across divisions.' },
                { id: '1.1.1-8', label: 'Gather feedback from pilot projects, assess usability and effectiveness, and make final revisions.' },
                { id: '1.1.1-M3', label: 'Milestone M3: Playbook finalized based on pilot feedback.' }
            ]
        },
        { 
            name: "PUBLICATION & MANDATE (Nov 2026)", 
            items: [
                { id: '1.1.1-9', label: 'Officially publish the digital and printed JKR Project Delivery Playbook.' },
                { id: '1.1.1-10', label: 'Issue a Circular mandating its use for all new projects.' },
                { id: '1.1.1-M4', label: 'Milestone M4: Playbook officially published and mandated.' }
            ]
        },
        { 
            name: "TRAINING & CERTIFICATION (Dec 2026)", 
            items: [
                { id: '1.1.1-11', label: 'Organize mandatory training sessions for all Project Implementation & Monitoring Branch staff.' },
                { id: '1.1.1-12', label: 'Establish an online testing/certification mechanism.' },
                { id: '1.1.1-M5', label: 'Milestone M5: 100% of target staff certified on playbook contents.' }
            ]
        }
    ],
    '1.1.2': [
        { 
            name: "Phase 1: Discovery & Root Cause Analysis (Jan – Feb 2026)", 
            items: [
                { id: '1.1.2-1', label: 'Review historical VOs from the past 3 years to categorize them by root cause.' },
                { id: '1.1.2-2', label: 'Audit existing "Project Brief" templates used across different JKR divisions.' },
                { id: '1.1.2-M1', label: 'Milestone M1: Root Cause Report approved.' }
            ]
        }
    ]
};

/**
 * Helper to retrieve checklist for a specific initiative.
 * Provides a fallback template if the specific ID is not defined.
 */
export const getChecklistForInitiative = (
  initiativeId: string,
  branch?: string,
  name?: string,
  targetYear?: string
): ChecklistPhase[] => {
  if (initiativeWorkflows[initiativeId]) {
    return initiativeWorkflows[initiativeId];
  }

  const year = targetYear || "2026";
  const startYear = (parseInt(year) > 2025) ? (parseInt(year) - 1).toString() : "2025";
  const lead = branch || "Lead Branch";
  
  return [
    {
      name: `Phase 1: Strategy & Setup (Q1-Q2 ${startYear})`,
      items: [
        { id: `${initiativeId}-p1-1`, label: `Form Implementation Task Force within ${lead}.` },
        { id: `${initiativeId}-M1`, label: `Milestone M1: Project Charter for ${name || initiativeId} approved.` }
      ]
    },
    {
      name: `Phase 2: Execution & Monitoring (${year})`,
      items: [
        { id: `${initiativeId}-p2-1`, label: 'Execute project tasks according to strategic roadmap.' },
        { id: `${initiativeId}-M2`, label: 'Milestone M2: Strategic targets validated.' }
      ]
    }
  ];
};