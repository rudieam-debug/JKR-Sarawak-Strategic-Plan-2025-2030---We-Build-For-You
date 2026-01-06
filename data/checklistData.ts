
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
        { name: "Phase 1: Requirement Analysis & Benchmarking (Jan – Mar 2026)", items: [
            { id: '1.1.1-1', label: 'Review existing project management processes, templates, and guidelines across divisions to identify gaps and best practices.' },
            { id: '1.1.1-2', label: 'Research project delivery playbooks from leading international and domestic infrastructure agencies.' },
            { id: '1.1.1-3', label: 'Conduct workshops with senior project managers and divisional engineers to finalize core modules.' },
            { id: '1.1.1-M1', label: 'Milestone M1: Requirements and Structure Specification document approved (Mar 2026).' }
        ]},
        { name: "Phase 2: Content Development & Drafting (Apr – Aug 2026)", items: [
            { id: '1.1.1-4', label: 'Write core playbook content (Initiation → Planning → Execution → Monitoring → Closing).' },
            { id: '1.1.1-5', label: 'Draft standard templates: Site Diaries, RFI Logs, Handover Checklists.' },
            { id: '1.1.1-6', label: 'Internal cross-departmental review (Technical, Construction, QA/QC, Safety).' },
            { id: '1.1.1-7', label: 'Incorporate feedback and finalize the playbook draft (Beta Version).' },
            { id: '1.1.1-M2', label: 'Milestone M2: JKR Project Delivery Playbook Draft completed (Jul 2026).' }
        ]},
        { name: "Phase 3: Pilot Testing & Refinement (Sep – Oct 2026)", items: [
            { id: '1.1.1-8', label: 'Pilot the application of playbook processes and templates in 2-3 selected new projects.' },
            { id: '1.1.1-9', label: 'Gather feedback from pilot projects, assess usability and effectiveness, and make final revisions.' },
            { id: '1.1.1-M3', label: 'Milestone M3: Playbook finalized based on pilot feedback (Oct 2026).' }
        ]},
        { name: "Phase 4: Publication & Mandate (Nov 2026)", items: [
            { id: '1.1.1-10', label: 'Officially publish the digital and printed JKR Project Delivery Playbook.' },
            { id: '1.1.1-11', label: 'Issue a Circular mandating its use for all new projects.' },
            { id: '1.1.1-M4', label: 'Milestone M4: Playbook officially published and mandated (Nov 2026).' }
        ]},
        { name: "Phase 5: Training & Certification (Dec 2026)", items: [
            { id: '1.1.1-12', label: 'Organize mandatory training sessions for all Project Implementation & Monitoring Branch staff.' },
            { id: '1.1.1-13', label: 'Establish an online testing/certification mechanism.' },
            { id: '1.1.1-M5', label: 'Milestone M5: 100% of target staff certified on playbook contents (Dec 2026).' }
        ]}
    ],
    '1.1.2': [
        { name: "Phase 1: Discovery & Root Cause Analysis (Jan – Feb 2026)", items: [
            { id: '1.1.2-1', label: 'Review historical VOs from the past 3 years to categorize them by root cause.' },
            { id: '1.1.2-2', label: 'Audit existing "Project Brief" templates used across different JKR divisions.' },
            { id: '1.1.2-3', label: 'Conduct stakeholder workshops with Architects, Engineers, and Client Agencies.' },
            { id: '1.1.2-M1', label: 'Milestone M1: Report on "Root Causes of VOs" approved (Feb 2026).' }
        ]},
        { name: "Phase 2: Development of Guidelines & Checklist (Mar – May 2026)", items: [
            { id: '1.1.2-4', label: 'Draft the mandatory "Pre-design Checklist" covering site conditions, utilities, and budget caps.' },
            { id: '1.1.2-5', label: 'Technical and Legal review to ensure guidelines align with Akta 730.' },
            { id: '1.1.2-6', label: 'Apply the new Checklist to 3-5 ongoing pilot projects.' },
            { id: '1.1.2-M2', label: 'Milestone M2: Beta Version of Guidelines & Checklist finalized (May 2026).' }
        ]},
        { name: "Phase 3: Planning Authority Alignment & Approval (Jun – Aug 2026)", items: [
            { id: '1.1.2-7', label: 'Submit the "Standardised Guidelines" to relevant Planning Authorities (e.g., JPBD).' },
            { id: '1.1.2-8', label: 'Secure formal recognition/approval of the checklist as a valid submission document.' },
            { id: '1.1.2-M3', label: 'Milestone M3: Planning Authority Recognition Obtained (Aug 2026).' }
        ]},
        { name: "Phase 4: Finalization & Publication (Sep – Oct 2026)", items: [
            { id: '1.1.2-9', label: 'Incorporate feedback into final master copy and design the layout for manuals.' },
            { id: '1.1.2-10', label: 'Issue the "Technical Circular" mandating use for all projects starting Oct 2026.' },
            { id: '1.1.2-M4', label: 'Milestone M4: Guidelines Officially Published and Mandated (Oct 2026).' }
        ]},
        { name: "Phase 5: Training & Baseline Establishment (Nov – Dec 2026)", items: [
            { id: '1.1.2-11', label: 'Conduct training for Project Architects (PA) and Engineers on enforcement.' },
            { id: '1.1.2-12', label: 'Establish a monitoring dashboard to track VO rates.' },
            { id: '1.1.2-M5', label: 'Milestone M5: Staff trained and Monitoring System Active (Nov 2026).' }
        ]}
    ],
    '1.1.3': [
        { name: "Phase 1: PEP Template & Requirements Development (2025 Q3 – Q4)", items: [
            { id: '1.1.3-1', label: 'Define mandatory PEP content (Baseline Schedule/S-Curve, Risk Plan, Communication Plan).' },
            { id: '1.1.3-2', label: 'Develop standard PEP template and integrate with JKR Dash workflow.' },
            { id: '1.1.3-M1', label: 'Milestone M1: PEP standard template and submission process developed (2025 Q4).' }
        ]},
        { name: "Phase 2: System Integration & Pilot (2026 Q1 – Q2)", items: [
            { id: '1.1.3-3', label: 'Deploy the PEP module within JKR Dash.' },
            { id: '1.1.3-4', label: 'Select 5 eligible projects for pilot implementation and gather feedback.' },
            { id: '1.1.3-M2', label: 'Milestone M2: PEP module pilot successfully completed and optimized (2026 Q2).' }
        ]},
        { name: "Phase 3: Full Rollout & Enforcement (2026 Q3 – 2027 Q4)", items: [
            { id: '1.1.3-5', label: 'Issue Circular mandating PEP submission for all projects > RM500K.' },
            { id: '1.1.3-6', label: 'Achieve 80% PEP compliance rate for applicable new projects.' },
            { id: '1.1.3-7', label: 'Achieve 100% PEP compliance rate and enforce as a "gate" for project commencement.' },
            { id: '1.1.3-M3', label: 'Milestone M3: 80% Compliance Rate Achieved (2026 Q4).' },
            { id: '1.1.3-M4', label: 'Milestone M4: 100% Compliance Rate Achieved (2027 Q4).' }
        ]}
    ],
    '1.1.4': [
        { name: "Phase 1: Criteria Definition & Risk Assessment (Jan – Mar 2028)", items: [
            { id: '1.1.4-1', label: 'Analyze historical project data to define "non-critical" and "low-risk" categories.' },
            { id: '1.1.4-2', label: 'Establish clear delegation guidelines and liability frameworks for Divisional Engineers.' },
            { id: '1.1.4-3', label: 'Draft the revised criteria and updated procedural flowchart.' },
            { id: '1.1.4-M1', label: 'Milestone M1: Risk-based project categorization and delegation criteria finalized (Mar 2028).' }
        ]},
        { name: "Phase 2: Drafting & Legal Review (Apr – Jun 2028)", items: [
            { id: '1.1.4-4', label: 'Draft the amended MTRA Circular incorporating new waiver clauses.' },
            { id: '1.1.4-5', label: 'Internal review by Technical Services Sector and Legal Unit.' },
            { id: '1.1.4-M2', label: 'Milestone M2: Final draft of the Amended MTRA Circular approved internally (Jun 2028).' }
        ]},
        { name: "Phase 3: Approval & Promulgation (Jul – Sep 2028)", items: [
            { id: '1.1.4-6', label: 'Seek formal approval for the amended circular from the Director.' },
            { id: '1.1.4-7', label: 'Officially issue the amended MTRA Circular to all branches and divisions.' },
            { id: '1.1.4-8', label: 'Conduct briefings for all Divisional Engineers on new procedures.' },
            { id: '1.1.4-M3', label: 'Milestone M3: Amended MTRA Circular officially issued and communicated (Aug 2028).' }
        ]},
        { name: "Phase 4: Implementation & Monitoring (Oct – Dec 2028)", items: [
            { id: '1.1.4-9', label: 'Begin applying the new MTRA waiver to eligible projects.' },
            { id: '1.1.4-10', label: 'Monitor the first batch of projects and measure time savings.' },
            { id: '1.1.4-M4', label: 'Milestone M4: Monitoring system active; data on time savings collected (Dec 2028).' }
        ]}
    ],
    '1.1.5': [
        { name: "Phase 1: Unit Design & Resourcing (Jan – Apr 2026)", items: [
            { id: '1.1.5-1', label: 'Define the VM Unit\'s Terms of Reference, structure, and reporting lines.' },
            { id: '1.1.5-2', label: 'Recruit or assign dedicated senior QS, Architects, and Engineers.' },
            { id: '1.1.5-M1', label: 'Milestone M1: VM Unit formally established with appointed head and core team (Apr 2026).' }
        ]},
        { name: "Phase 2: Methodology & Protocol Development (May – Aug 2026)", items: [
            { id: '1.1.5-3', label: 'Develop the JKR Sarawak VM Standard Operating Procedure (SOP).' },
            { id: '1.1.5-4', label: 'Train VM Unit members on advanced methodologies and facilitation skills.' },
            { id: '1.1.5-M2', label: 'Milestone M2: VM SOP finalized and team trained (Aug 2026).' }
        ]},
        { name: "Phase 3: Pilot Reviews & Process Refinement (Sep 2026 – Feb 2027)", items: [
            { id: '1.1.5-5', label: 'Conduct pilot VM workshops on 3-5 selected projects >RM70m.' },
            { id: '1.1.5-6', label: 'Evaluate pilot outcomes and refine the SOP based on lessons learned.' },
            { id: '1.1.5-M3', label: 'Milestone M3: VM process validated and refined through successful pilots (Feb 2027).' }
        ]},
        { name: "Phase 4: Formal Mandate & Full Implementation (Mar 2027 – Dec 2027)", items: [
            { id: '1.1.5-7', label: 'Issue a Technical Circular mandating VM review for all projects >RM70m.' },
            { id: '1.1.5-8', label: 'Produce the first annual report on cost savings generated.' },
            { id: '1.1.5-M4', label: 'Milestone M4: VM mandate fully operational. Savings reported (Dec 2027).' }
        ]}
    ],
    '1.1.6': [
        { name: "Phase 1: Framework & MoU Development (Jan – Mar 2026)", items: [
            { id: '1.1.6-1', label: 'Initiate discussions with the State Economic Planning Unit (EPU).' },
            { id: '1.1.6-2', label: 'Draft and sign a Memorandum of Understanding (MoU) with EPU.' },
            { id: '1.1.6-M1', label: 'Milestone M1: Formal Collaboration Framework/MoU with EPU signed (Mar 2026).' }
        ]},
        { name: "Phase 2: Joint Team Formation & Planning (Apr – Jun 2026)", items: [
            { id: '1.1.6-3', label: 'Establish dedicated VM-EPU coordination team (QS Branch + EPU staff).' },
            { id: '1.1.6-4', label: 'Develop a joint annual plan identifying major projects for review.' },
            { id: '1.1.6-M2', label: 'Milestone M2: Joint Coordination Team operational and annual plan approved (Jun 2026).' }
        ]},
        { name: "Phase 3: Execution of Joint VM Exercises (Jul – Oct 2026)", items: [
            { id: '1.1.6-5', label: 'Conduct the first joint VM workshop for a high-priority project (e.g. major hospital).' },
            { id: '1.1.6-6', label: 'Present findings and recommendations to JKR and EPU management.' },
            { id: '1.1.6-M3', label: 'Milestone M3: First joint VM workshop successfully completed with endorsed recommendations (Oct 2026).' }
        ]},
        { name: "Phase 4: Institutionalization & Reporting (Nov – Dec 2026)", items: [
            { id: '1.1.6-7', label: 'Integrate the EPU alignment step into the standard VM SOP.' },
            { id: '1.1.6-8', label: 'Prepare first annual JKR-EPU report on process benefits.' },
            { id: '1.1.6-M4', label: 'Milestone M4: Process institutionalized. First annual synergy report completed (Dec 2026).' }
        ]}
    ],
    '1.1.7': [
        { name: "Phase 1: Protocol Design & Threshold Definition (Jan – Apr 2026)", items: [
            { id: '1.1.7-1', label: 'Analyze historical delay data to validate 5%, 10%, 15% slippage thresholds.' },
            { id: '1.1.7-2', label: 'Draft detailed protocol: "Yellow Notice" template and "Recovery Meeting" agenda.' },
            { id: '1.1.7-3', label: 'Legal vetting of the referral dossier requirements.' },
            { id: '1.1.7-M1', label: 'Milestone M1: Project Delay Mitigation Protocol finalized and vetted (Apr 2026).' }
        ]},
        { name: "Phase 2: System Integration & Workflow Development (May – Sep 2026)", items: [
            { id: '1.1.7-4', label: 'Design logic and automated alerts within JKR Dash.' },
            { id: '1.1.7-5', label: 'Test the digital workflow for issuing Yellow Notices.' },
            { id: '1.1.7-M2', label: 'Milestone M2: Digital workflow for delay protocol integrated and tested in JKR Dash (Sep 2026).' }
        ]},
        { name: "Phase 3: Pilot Implementation & Training (Oct 2026 – Mar 2027)", items: [
            { id: '1.1.7-6', label: 'Pilot the full protocol on 10 ongoing projects.' },
            { id: '1.1.7-7', label: 'Train all Divisional Engineers and Project Managers on the new protocol.' },
            { id: '1.1.7-M3', label: 'Milestone M3: Protocol piloted and staff training completed (Mar 2027).' }
        ]},
        { name: "Phase 4: Full Rollout & Governance Embedding (Apr – Dec 2027)", items: [
            { id: '1.1.7-8', label: 'Issue the official Circular mandating use for all projects.' },
            { id: '1.1.7-9', label: 'Monitor adherence; protocol compliance as standard agenda in DOU meetings.' },
            { id: '1.1.7-M4', label: 'Milestone M4: Framework fully operational and mandated (Apr 2027).' }
        ]}
    ],
    '1.2.1': [
        { name: "Phase 1: Requirements & System Design (2025 Q3 – Q4)", items: [
            { id: '1.2.1-1', label: 'Map all existing data sources (spreadsheets, evaluations, blacklists).' },
            { id: '1.2.1-2', label: 'Define database schema, user roles, and SFS integration requirements.' },
            { id: '1.2.1-M1', label: 'Milestone M1: Database Functional and Technical Specifications approved (2025 Q4).' }
        ]},
        { name: "Phase 2: Development & SFS Integration (2026 Q1 – Q3)", items: [
            { id: '1.2.1-3', label: 'Begin database development and establish data-sharing agreement with SFS.' },
            { id: '1.2.1-4', label: 'Complete integration work for real-time status checks.' },
            { id: '1.2.1-M2', label: 'Milestone M2: Database development and SFS integration completed (Test Env) (2026 Q3).' }
        ]},
        { name: "Phase 3: Data Migration & Validation (2026 Q4 – 2027 Q1)", items: [
            { id: '1.2.1-5', label: 'Initiate "data cleanse" exercise: migrate historical data from all divisions.' },
            { id: '1.2.1-6', label: 'Validate migrated data accuracy and consistency with SFS records.' },
            { id: '1.2.1-M3', label: 'Milestone M3: Data migration completed and validated. UAT signed off (2027 Q1).' }
        ]},
        { name: "Phase 4: Pilot Launch & Full Rollout (2027 Q2 – Q4)", items: [
            { id: '1.2.1-7', label: 'Soft launch to QS Branch and selected Divisional Offices.' },
            { id: '1.2.1-8', label: 'Officially launch the Unified Database and mandate its use for tender evaluations.' },
            { id: '1.2.1-M4', label: 'Milestone M4: Database fully operational and mandatory for use (2027 Q3).' }
        ]}
    ],
    '1.2.2': [
        { name: "Phase 1: Scorecard Design & Weighting (Jan – Mar 2028)", items: [
            { id: '1.2.2-1', label: 'Finalize rating criteria: Progress (40%), Quality (30%), Safety (20%), Environment (10%).' },
            { id: '1.2.2-2', label: 'Define the 1-5 star algorithm and "Fast-Track" payment/tender ban rules.' },
            { id: '1.2.2-M1', label: 'Milestone M1: CPRS design, rules, and consequences approved (Mar 2028).' }
        ]},
        { name: "Phase 2: System Build & Integration (Apr – Jul 2028)", items: [
            { id: '1.2.2-3', label: 'Develop CPRS module within JKR Dash to auto-pull project report data.' },
            { id: '1.2.2-4', label: 'Integrate output with the tender preparation system to flag 1-star contractors.' },
            { id: '1.2.2-M2', label: 'Milestone M2: CPRS IT module developed and integrated (Jul 2028).' }
        ]},
        { name: "Phase 3: Dry-Run & Communication (Aug – Sep 2028)", items: [
            { id: '1.2.2-5', label: 'Conduct dry-run on completed projects to test algorithm accuracy.' },
            { id: '1.2.2-6', label: 'Officially communicate new CPRS to industry via briefings.' },
            { id: '1.2.2-M3', label: 'Milestone M3: System dry-run completed and industry informed (Sep 2028).' }
        ]},
        { name: "Phase 4: First Official Rating Cycle (Oct – Dec 2028)", items: [
            { id: '1.2.2-7', label: 'Run first semi-annual rating cycle and notify individual contractors.' },
            { id: '1.2.2-8', label: 'Enforce consequences: fast-track payments and tender ban letters.' },
            { id: '1.2.2-M4', label: 'Milestone M4: First rating cycle completed and consequences enforced (Dec 2028).' }
        ]}
    ],
    '1.2.3': [
        { name: "Phase 1: Framework Design & Legal Mandate (2025 Q1 – Q2)", items: [
            { id: '1.2.3-1', label: 'Draft initial concept for Project Court (termination, S.O. replacement, Rescue Team).' },
            { id: '1.2.3-2', label: 'Develop detailed TOR (Chair: Director, triggers, process flow).' },
            { id: '1.2.3-M1', label: 'Milestone M1: Draft Project Court TOR completed (2025 Q2).' }
        ]},
        { name: "Phase 2: Stakeholder Alignment & Approval (2025 Q3)", items: [
            { id: '1.2.3-3', label: 'Present TOR to JKR senior management (SSC) and Ministry.' },
            { id: '1.2.3-M2', label: 'Milestone M2: Project Court TOR officially endorsed by the Ministry (2025 Q3).' }
        ]},
        { name: "Phase 3: Operational Setup & Protocol (2025 Q4)", items: [
            { id: '1.2.3-4', label: 'Formalize member appointments and develop "Summons" procedures.' },
            { id: '1.2.3-M3', label: 'Milestone M3: Project Court constituted and operational protocols finalized (2025 Q4).' }
        ]},
        { name: "Phase 4: Pilot Cases & Process Refinement (2026 Q1 – Q3)", items: [
            { id: '1.2.3-5', label: 'Identify first 2-3 candidate "Red Light" projects (>15% delay).' },
            { id: '1.2.3-6', label: 'Conduct inaugural sessions and issue formal verdicts.' },
            { id: '1.2.3-M4', label: 'Milestone M4: First 5 cases adjudicated by the Project Court (2026 Q3).' }
        ]},
        { name: "Phase 5: Institutionalization (2026 Q4 Onwards)", items: [
            { id: '1.2.3-7', label: 'Systematically implement and track verdicts across JKR governance framework.' },
            { id: '1.2.3-M5', label: 'KPI Met: 100% implementation of verdicts (Ongoing).' }
        ]}
    ],
    '1.2.4': [
        { name: "Phase 1: Unit Design & Process Mapping (Jan – Mar 2028)", items: [
            { id: '1.2.4-1', label: 'Define scope, staffing, and workflow of the Central Tender Prep Unit (CTPU).' },
            { id: '1.2.4-2', label: 'Map current division processes to identify pain points.' },
            { id: '1.2.4-M1', label: 'Milestone M1: CTPU Operational Design and Workflow Blueprint approved (Mar 2028).' }
        ]},
        { name: "Phase 2: Team Assembly & Templates (Apr – Jul 2028)", items: [
            { id: '1.2.4-3', label: 'Recruit/assign specialized staff (Senior QS, legal, document controllers).' },
            { id: '1.2.4-4', label: 'Standardize tender templates (Form of Contract, Spec Index, etc.).' },
            { id: '1.2.4-M2', label: 'Milestone M2: CTPU team assembled and core tender templates developed (Jul 2028).' }
        ]},
        { name: "Phase 3: Pilot Operation & Training (Aug – Oct 2028)", items: [
            { id: '1.2.4-5', label: 'Launch pilot of CTPU for building projects RM5m-RM20m.' },
            { id: '1.2.4-6', label: 'Train divisional staff on technical input package requirements.' },
            { id: '1.2.4-M3', label: 'Milestone M3: Pilot evaluation completed. Process refined (Oct 2028).' }
        ]},
        { name: "Phase 4: Full Rollout (Nov – Dec 2028)", items: [
            { id: '1.2.4-7', label: 'Officially launch the CTPU for all defined project categories.' },
            { id: '1.2.4-8', label: 'Establish tracking dashboard for tender preparation time.' },
            { id: '1.2.4-M4', label: 'Milestone M4: CTPU fully operational. Baseline established (Dec 2028).' }
        ]}
    ],
    '1.2.5': [
        { name: "Phase 1: Framework Development (Jan – Mar 2028)", items: [
            { id: '1.2.5-1', label: 'Review existing practices and benchmark against best practice models.' },
            { id: '1.2.5-2', label: 'Draft "Supervision Fee Framework" defining SO roles.' },
            { id: '1.2.5-M1', label: 'Milestone M1: Draft Supervision Fee Framework completed (Mar 2028).' }
        ]},
        { name: "Phase 2: Consultation & Refinement (Apr – Jun 2028)", items: [
            { id: '1.2.5-3', label: 'Conduct consultations with consulting engineer/architect bodies.' },
            { id: '1.2.5-4', label: 'Legal and Finance review for contractual viability.' },
            { id: '1.2.5-M2', label: 'Milestone M2: Finalized framework endorsed by JKR Management (Jun 2028).' }
        ]},
        { name: "Phase 3: Integration & Training (Jul – Sep 2028)", items: [
            { id: '1.2.5-5', label: 'Update JKR Consultancy Agreement and Tender Templates.' },
            { id: '1.2.5-6', label: 'Train SOs and PMs on enhanced monitoring roles.' },
            { id: '1.2.5-M3', label: 'Milestone M3: Contract templates updated and staff trained (Sep 2028).' }
        ]},
        { name: "Phase 4: Implementation & Monitoring (Oct – Dec 2028)", items: [
            { id: '1.2.5-7', label: 'Apply new framework to all consultancy contracts signed after Oct.' },
            { id: '1.2.5-8', label: 'Monitor first payments and track supervision-related disputes.' },
            { id: '1.2.5-M4', label: 'Milestone M4: Framework active on new contracts (Oct 2028).' }
        ]}
    ],
    '1.2.6': [
        { name: "Phase 1: Process Re-engineering (Jan – Mar 2028)", items: [
            { id: '1.2.6-1', label: 'Map current manual VO/EOT process end-to-end.' },
            { id: '1.2.6-2', label: 'Design streamlined digital workflow and electronic approval routing.' },
            { id: '1.2.6-M1', label: 'Milestone M1: Digital VO/EOT Process Design approved (Mar 2028).' }
        ]},
        { name: "Phase 2: System Development & Testing (Apr – Jul 2028)", items: [
            { id: '1.2.6-3', label: 'Develop digital portal/module within JKR Dash.' },
            { id: '1.2.6-4', label: 'Conduct rigorous UAT with contractors and QS officers.' },
            { id: '1.2.6-M2', label: 'Milestone M2: Digital VO/EOT System development completed (Jul 2028).' }
        ]},
        { name: "Phase 3: Pilot Launch & Training (Aug – Sep 2028)", items: [
            { id: '1.2.6-5', label: 'Launch pilot of system in 2-3 selected Divisional Offices.' },
            { id: '1.2.6-6', label: 'Train contractors and JKR staff on use of the new system.' },
            { id: '1.2.6-M3', label: 'Milestone M3: Pilot launched and user training completed (Sep 2028).' }
        ]},
        { name: "Phase 4: Full Rollout & Mandate (Oct – Dec 2028)", items: [
            { id: '1.2.6-7', label: 'Issue Circular mandating all requests be submitted via portal.' },
            { id: '1.2.6-8', label: 'Decommission old manual submission process.' },
            { id: '1.2.6-M4', label: 'Milestone M4: System fully operational; Manual process retired (Nov 2028).' }
        ]}
    ],
    '1.3.1': [
        { name: "Phase 1: Policy Formulation (Jan – Jun 2026)", items: [
            { id: '1.3.1-1', label: 'Draft policy circular mandating scoring for projects >RM5m.' },
            { id: '1.3.1-2', label: 'Integrate QLASSIC requirements into tender documents.' },
            { id: '1.3.1-M1', label: 'Milestone M1: Mandatory QLASSIC Policy approved (Jun 2026).' }
        ]},
        { name: "Phase 2: Assessor Certification (Jul – Dec 2026)", items: [
            { id: '1.3.1-3', label: 'Enroll nominated staff in CIDB-recognized certification courses.' },
            { id: '1.3.1-M2', label: 'Milestone M2: 12 Division-Based QLASSIC Assessors Certified (Dec 2026).' }
        ]},
        { name: "Phase 3: Pilot Implementation (Jan – Jun 2027)", items: [
            { id: '1.3.1-4', label: 'Conduct assessments and generate scores for 5-10 wave-1 projects.' },
            { id: '1.3.1-M3', label: 'Milestone M3: Pilot Assessments Completed & Average Score Established (Jun 2027).' }
        ]},
        { name: "Phase 4: Full Enforcement (Jul – Dec 2027)", items: [
            { id: '1.3.1-5', label: 'Issue final enforcement circular. All new building tenders must comply.' },
            { id: '1.3.1-M4', label: 'Milestone M4: Policy fully enforced; Annual score published (Dec 2027).' }
        ]}
    ],
    '1.3.2': [
        { name: "Phase 1: Tribunal Design & Authority (2025 Q2 – Q3)", items: [
            { id: '1.3.2-1', label: 'Draft TOR defining composition, triggers, and blacklisting powers (1-5 years).' },
            { id: '1.3.2-2', label: 'Align legal authority with procurement regulations.' },
            { id: '1.3.2-M1', label: 'Milestone M1: Safety Tribunal TOR and Legal Framework drafted and approved (2025 Q3).' }
        ]},
        { name: "Phase 2: Formation & Protocol (2025 Q4)", items: [
            { id: '1.3.2-3', label: 'Formally appoint members and develop investigation procedures.' },
            { id: '1.3.2-M2', label: 'Milestone M2: Safety Tribunal formally constituted with operational protocols (2025 Q4).' }
        ]},
        { name: "Phase 3: Communication & Launch (2026 Q1)", items: [
            { id: '1.3.2-4', label: 'Announce establishment to all staff, contractors, and consultants.' },
            { id: '1.3.2-M3', label: 'Milestone M3: Safety Tribunal publicly announced and operational (2026 Q1).' }
        ]},
        { name: "Phase 4: Adjudication (2026 Q2 Onwards)", items: [
            { id: '1.3.2-5', label: 'Activate Tribunal for first cases following qualifying incidents.' },
            { id: '1.3.2-6', label: 'Issue first "Blacklist" circular as case study for deterrence.' },
            { id: '1.3.2-M4', label: 'Milestone M4: First Tribunal Case Adjudicated & Blacklist Issued (2026 Q4).' }
        ]}
    ],
    '1.3.3': [
        { name: "Phase 1: Module Development (Jan – Mar 2026)", items: [
            { id: '1.3.3-1', label: 'Needs assessment to identify key risk areas (conflict of interest, etc.).' },
            { id: '1.3.3-2', label: 'Develop core "JKR Sarawak Ethics & Integrity" module.' },
            { id: '1.3.3-M1', label: 'Milestone M1: Annual Ethics Training Module approved (Mar 2026).' }
        ]},
        { name: "Phase 2: Platform & Tracking (Apr – Jun 2026)", items: [
            { id: '1.3.3-3', label: 'Decide on delivery mode and set up tracking within HRMS.' },
            { id: '1.3.3-4', label: 'Mandate training in staff induction and LNPT system.' },
            { id: '1.3.3-M2', label: 'Milestone M2: Delivery Platform & Tracking System Ready (Jun 2026).' }
        ]},
        { name: "Phase 3: Annual Rollout (Jul – Nov 2026)", items: [
            { id: '1.3.3-5', label: 'Launch first cycle and achieve 100% staff completion by year-end.' },
            { id: '1.3.3-M3', label: 'Milestone M3: 100% Staff Completion for the Year Achieved (Nov 2026).' }
        ]},
        { name: "Phase 4: Promotion Linkage (Dec 2026)", items: [
            { id: '1.3.3-6', label: 'Formalize rule: completion is a prerequisite for promotion.' },
            { id: '1.3.3-M4', label: 'Milestone M4: Training Completion Tied to Promotion Requirements (Dec 2026).' }
        ]}
    ],
    '1.3.4': [
        { name: "Phase 1: Policy & Legal Framework (Jan – Mar 2028)", items: [
            { id: '1.3.4-1', label: 'Draft Whistleblower Protection Policy with MACC/Legal compliance.' },
            { id: '1.3.4-M1', label: 'Milestone M1: Whistleblower Protection Policy approved (Mar 2028).' }
        ]},
        { name: "Phase 2: Tech Development (Apr – Jul 2028)", items: [
            { id: '1.3.4-2', label: 'Define specs (anonymity, secure storage) and procure solution.' },
            { id: '1.3.4-3', label: 'Complete development and conduct security penetration testing.' },
            { id: '1.3.4-M2', label: 'Milestone M2: Secure Portal/App Developed & Security Tested (Jul 2028).' }
        ]},
        { name: "Phase 3: Team Training (Aug – Sep 2028)", items: [
            { id: '1.3.4-4', label: 'Establish dedicated investigation team within Integrity Branch.' },
            { id: '1.3.4-M3', label: 'Milestone M3: Dedicated Investigation Team Trained (Sep 2028).' }
        ]},
        { name: "Phase 4: Launch (Oct – Dec 2028)", items: [
            { id: '1.3.4-5', label: 'Officially launch policy and portal to all staff and registered subs.' },
            { id: '1.3.4-M4', label: 'Milestone M4: Policy & Portal Officially Launched (Nov 2028).' }
        ]}
    ],
    '1.3.5': [
        { name: "Phase 1: Curriculum & Partners (Jan – Apr 2028)", items: [
            { id: '1.3.5-1', label: 'Tailor FMEA and HAZOP curriculum to JKR bridge/building contexts.' },
            { id: '1.3.5-2', label: 'Engage certified training partners (e.g. IEM).' },
            { id: '1.3.5-M1', label: 'Milestone M1: Training Curriculum & Partner Finalized (Apr 2028).' }
        ]},
        { name: "Phase 2: Pilot & Material (May – Jul 2028)", items: [
            { id: '1.3.5-3', label: 'Conduct pilot session for 30 high-potential engineers.' },
            { id: '1.3.5-M2', label: 'Milestone M2: Pilot Training Completed & Materials Finalized (Jul 2028).' }
        ]},
        { name: "Phase 3: Certification (Aug – Oct 2028)", items: [
            { id: '1.3.5-4', label: 'Roll out program in batches and conduct competency assessments.' },
            { id: '1.3.5-M3', label: 'Milestone M3: Targeted Technical Staff Trained & Certified (Oct 2028).' }
        ]},
        { name: "Phase 4: Institutionalization (Nov – Dec 2028)", items: [
            { id: '1.3.5-5', label: 'Mandate application in design stages for projects >RM50m.' },
            { id: '1.3.5-M4', label: 'Milestone M4: Methodologies Applied in Projects & Benefits Documented (Dec 2028).' }
        ]}
    ],
    '1.3.6': [
        { name: "Phase 1: Mandate Definition (Jan – Mar 2028)", items: [
            { id: '1.3.6-1', label: 'Define scope linking to Pillar 1 (Safety) and Pillar 4 (Resilience).' },
            { id: '1.3.6-2', label: 'Draft TOR and secure Director/SSC approval.' },
            { id: '1.3.6-M1', label: 'Milestone M1: Task Force TOR Approved by SSC (Mar 2028).' }
        ]},
        { name: "Phase 2: Formation (Apr – Jun 2028)", items: [
            { id: '1.3.6-3', label: 'Appoint Chair and core members; adopt TOR.' },
            { id: '1.3.6-M2', label: 'Milestone M2: Task Force Formally Constituted (Jun 2028).' }
        ]},
        { name: "Phase 3: Action Planning (Jul – Sep 2028)", items: [
            { id: '1.3.6-4', label: 'Cross-sectoral review of top 10 systemic risks.' },
            { id: '1.3.6-5', label: 'Develop mitigation plans for top identified risks.' },
            { id: '1.3.6-M3', label: 'Milestone M3: First Cross-Sector Risk Review & Plans Endorsed (Sep 2028).' }
        ]},
        { name: "Phase 4: Annual Reporting (Oct – Dec 2028)", items: [
            { id: '1.3.6-6', label: 'Submit inaugural Annual Resilience Report to Director.' },
            { id: '1.3.6-M4', label: 'Milestone M4: First Annual Resilience Report Submitted to Director (Dec 2028).' }
        ]}
    ],
    '1.3.7': [
        { name: "Phase 1: Setup (Jan – Mar 2026)", items: [
            { id: '1.3.7-1', label: 'Define list of "Critical Infrastructure" assets.' },
            { id: '1.3.7-2', label: 'Develop standardized "Resilience Audit" checklist (climate stressors).' },
            { id: '1.3.7-M1', label: 'Milestone M1: Critical Asset Register & Audit Framework Approved (Mar 2026).' }
        ]},
        { name: "Phase 2: Pilot & Refinement (Apr – Jun 2026)", items: [
            { id: '1.3.7-3', label: 'Conduct inaugural audits on 5-10 high-priority assets.' },
            { id: '1.3.7-M2', label: 'Milestone M2: Pilot resilience audits completed and process refined (Jun 2026).' }
        ]},
        { name: "Phase 3: Cycle Cycle & Reporting (Jul – Oct 2026)", items: [
            { id: '1.3.7-4', label: 'Complete audits for remaining critical register assets.' },
            { id: '1.3.7-M3', label: 'Milestone M3: First Annual Resilience Audit Report Completed (Oct 2026).' }
        ]},
        { name: "Phase 4: Budget Integration (Nov – Dec 2026)", items: [
            { id: '1.3.7-5', label: 'Present list of prioritized remedial works to SSC for funding.' },
            { id: '1.3.7-M4', label: 'Milestone M4: Remedial Works Program Budgeted for Next Year (Dec 2026).' }
        ]}
    ],
    '1.4.1': [
        { name: "Phase 1: Design & Architecture (2025 Q3 – Q4)", items: [
            { id: '1.4.1-1', label: 'Define data structure, user roles, and select platform.' },
            { id: '1.4.1-2', label: 'Finalize tech specs and establish validation rules.' },
            { id: '1.4.1-M1', label: 'Milestone M1: System Design & Architecture Approved (2025 Q4).' }
        ]},
        { name: "Phase 2: Population (2026 Q1 – Q3)", items: [
            { id: '1.4.1-3', label: 'Massive data collection: 3 years of historical tender data.' },
            { id: '1.4.1-4', label: 'Develop APIs for future automated data feeds from suppliers.' },
            { id: '1.4.1-M2', label: 'Milestone M2: Application Developed & Initial Data Loaded (2026 Q3).' }
        ]},
        { name: "Phase 3: Pilot & Refinement (2026 Q4 – 2027 Q1)", items: [
            { id: '1.4.1-5', label: 'Launch pilot to QS Branch and 2 Divisional Offices.' },
            { id: '1.4.1-M3', label: 'Milestone M3: Pilot Completed & System Refined (2027 Q1).' }
        ]},
        { name: "Phase 4: Rollout (2027 Q2 – Q4)", items: [
            { id: '1.4.1-6', label: 'Officially launch and mandate for all new estimates.' },
            { id: '1.4.1-M4', label: 'Milestone M4: Full Launch & First Variance Report (<10% target) (2027 Q4).' }
        ]}
    ],
    '1.4.2': [
        { name: "Phase 1: Framework (2026 Q1 – Q2)", items: [
            { id: '1.4.2-1', label: 'Develop RBB template: Obj -> KPI -> Target -> Budget.' },
            { id: '1.4.2-2', label: 'Train all Branch/Division heads on completion.' },
            { id: '1.4.2-M1', label: 'Milestone M1: RBB Framework & Templates Finalized; Staff Trained (2026 Q2).' }
        ]},
        { name: "Phase 2: Pilot Submission (2026 Q3)", items: [
            { id: '1.4.2-3', label: 'Pilot submission for 3-5 major program areas.' },
            { id: '1.4.2-M2', label: 'Milestone M2: Pilot RBB Submissions for Selected Programs Completed (2026 Q3).' }
        ]},
        { name: "Phase 3: MoF Engagement (2026 Q4 – 2027 Q1)", items: [
            { id: '1.4.2-4', label: 'Submit pilot proposals to MoF and secure in-principle approval.' },
            { id: '1.4.2-M3', label: 'Milestone M3: RBB Format Endorsed by Ministry of Finance (2027 Q1).' }
        ]},
        { name: "Phase 4: Full Implementation (2027 Q2 – Q4)", items: [
            { id: '1.4.2-5', label: 'Consolidate RBB-based budget as the official JKR proposal.' },
            { id: '1.4.2-M4', label: 'Milestone M4: First Full RBB-Based Annual Budget Submitted to MoF (2027 Q4).' }
        ]}
    ],
    '1.4.3': [
        { name: "Phase 1: Template (Jan – Mar 2028)", items: [
            { id: '1.4.3-1', label: 'Analyze causes of past cash flow work stoppages.' },
            { id: '1.4.3-2', label: 'Develop standardized template linked to S-curves.' },
            { id: '1.4.3-M1', label: 'Milestone M1: Forecasting Template & Methodology Approved (Mar 2028).' }
        ]},
        { name: "Phase 2: System Integration (Apr – Jun 2028)", items: [
            { id: '1.4.3-3', label: 'Integrate template into JKR Dash/PEP for auto-data pull.' },
            { id: '1.4.3-M2', label: 'Milestone M2: System Integration & Training Completed; MoF Aligned (Jun 2028).' }
        ]},
        { name: "Phase 3: Pilot (Jul – Sep 2028)", items: [
            { id: '1.4.3-4', label: 'Mandate forecasts for all new projects >RM10m.' },
            { id: '1.4.3-M3', label: 'Milestone M3: Mandatory for New Projects; First Gaps Proactively Managed (Sep 2028).' }
        ]},
        { name: "Phase 4: Full implementation (Oct – Dec 2028)", items: [
            { id: '1.4.3-5', label: 'Roll out requirement to all active major projects.' },
            { id: '1.4.3-M4', label: 'Milestone M4: Full Implementation Reviewed; Zero Stoppage Target Verified (Dec 2028).' }
        ]}
    ],
    '1.4.4': [
        { name: "Phase 1: Methodology (Jan – Apr 2026)", items: [
            { id: '1.4.4-1', label: 'Adopt framework incorporating social/environmental costs.' },
            { id: '1.4.4-2', label: 'Train Corporate Planning staff on methodology.' },
            { id: '1.4.4-M1', label: 'Milestone M1: Standardized CBA Methodology & Templates Approved (Apr 2026).' }
        ]},
        { name: "Phase 2: First Cycle (May – Sep 2026)", items: [
            { id: '1.4.4-3', label: 'Define criteria for "major projects" requiring annual CBA.' },
            { id: '1.4.4-M2', label: 'Milestone M2: First Annual CBA Report (Draft) Completed (Sep 2026).' }
        ]},
        { name: "Phase 3: Integration (Oct – Nov 2026)", items: [
            { id: '1.4.4-4', label: 'Present findings to SSC for re-prioritization funding decisions.' },
            { id: '1.4.4-M3', label: 'Milestone M3: CBA Findings Reviewed by SSC & Integrated into Decisions (Nov 2026).' }
        ]},
        { name: "Phase 4: Institutionalization (Dec 2026 & Ongoing)", items: [
            { id: '1.4.4-5', label: 'Establish process as permanent annual planning cycle.' },
            { id: '1.4.4-M4', label: 'Milestone M4: Process Institutionalized into Annual Planning Cycle (Dec 2026).' }
        ]}
    ],
    '1.4.5': [
        { name: "Phase 1: Benchmarking (2027 Q1 – Q3)", items: [
            { id: '1.4.5-1', label: 'Procure laser-profiling (IRI) equipment for surveys.' },
            { id: '1.4.5-2', label: 'Finalize the RQI 5.0 standard within concession agreements.' },
            { id: '1.4.5-M1', label: 'Milestone M1: Baseline Set, Equipment Ready, Contractual Standard Defined (2027 Q3).' }
        ]},
        { name: "Phase 2: Assessment (2027 Q4 – 2028 Q1)", items: [
            { id: '1.4.5-3', label: 'Execute first comprehensive IRI survey of all Protocol Roads.' },
            { id: '1.4.5-M2', label: 'Milestone M2: First Comprehensive Network RQI Report Published (2028 Q1).' }
        ]},
        { name: "Phase 3: Corrective Actions (2028 Q2 – 2029)", items: [
            { id: '1.4.5-4', label: 'Issue formal notices and levy penalties for failing sections.' },
            { id: '1.4.5-M3', label: 'Milestone M3: First Penalty Cycle Enforced & Corrective Actions Initiated (2028 Q2).' }
        ]},
        { name: "Phase 4: Achievement (2030)", items: [
            { id: '1.4.5-5', label: 'Significant increase in network length achieving RQI >= 5.0.' },
            { id: '1.4.5-M4', label: 'Milestone M4: Program Review & Demonstrated Network Improvement (2030 Q4).' }
        ]}
    ],
    '1.5.1': [
        { name: "Phase 1: Practice Audit (Jan – Mar 2028)", items: [
            { id: '1.5.1-1', label: 'Survey all offices to document current practices.' },
            { id: '1.5.1-2', label: 'Benchmark against ISO 41000 and Malaysian state peers.' },
            { id: '1.5.1-M1', label: 'Milestone M1: Current Practice Audit & Benchmarking Completed (Mar 2028).' }
        ]},
        { name: "Phase 2: Drafting (Apr – Jul 2028)", items: [
            { id: '1.5.1-3', label: 'Form technical committee (Building, Road, Asset).' },
            { id: '1.5.1-M2', label: 'Milestone M2: Draft Guidelines Completed & Internally Reviewed (Jul 2028).' }
        ]},
        { name: "Phase 3: Consultation (Aug – Oct 2028)", items: [
            { id: '1.5.1-4', label: 'Workshops with key client agencies (Education, Health).' },
            { id: '1.5.1-M3', label: 'Milestone M3: Guidelines Finalized & Officially Approved (Oct 2028).' }
        ]},
        { name: "Phase 4: Launch (Nov – Dec 2028)", items: [
            { id: '1.5.1-5', label: 'Mandate adoption statewide and train facility managers.' },
            { id: '1.5.1-M4', label: 'Milestone M4: Guidelines Launched, Training Conducted, Audit Framework Set (Dec 2028).' }
        ]}
    ],
    '1.5.2': [
        { name: "Phase 1: Unit Design (2026 Q1 – Q2)", items: [
            { id: '1.5.2-1', label: 'Identify priority complexes (DUN, hospitals) and assess costs.' },
            { id: '1.5.2-M1', label: 'Milestone M1: FM Unit Business Case & Org Design Approved (2026 Q2).' }
        ]},
        { name: "Phase 2: Staffing (2026 Q3)", items: [
            { id: '1.5.2-2', label: 'Develop detailed job descriptions for engineer-led FM roles.' },
            { id: '1.5.2-M2', label: 'Milestone M2: Job Descriptions & Staffing Plan Finalized (2026 Q3).' }
        ]},
        { name: "Phase 3: Establishment (2026 Q4 – 2027 Q2)", items: [
            { id: '1.5.2-3', label: 'Appoint Heads of FM and train initial teams.' },
            { id: '1.5.2-M3', label: 'Milestone M3: First FM Units Established with Appointed Heads (2027 Q2).' }
        ]},
        { name: "Phase 4: Handover (2027 Q3 – Q4)", items: [
            { id: '1.5.2-4', label: 'Formal handover from admin staff to dedicated FM Units.' },
            { id: '1.5.2-M4', label: 'Milestone M4: FM Units Fully Operational & Performance Monitoring Started (2027 Q4).' }
        ]}
    ],
    '1.5.3': [
        { name: "Phase 1: Framework (2026 Q1 – Q2)", items: [
            { id: '1.5.3-1', label: 'Define core principles: lifecycle costing, bundled services.' },
            { id: '1.5.3-M1', label: 'Milestone M1: FMMC Framework (Draft) Completed (2026 Q2).' }
        ]},
        { name: "Phase 2: Pilot Selection (2026 Q3)", items: [
            { id: '1.5.3-2', label: 'Stakeholder engagement and market sounding.' },
            { id: '1.5.3-M2', label: 'Milestone M2: Framework Endorsed & Market Sounding Done (2026 Q3).' }
        ]},
        { name: "Phase 3: Tendering (2026 Q4 – 2027 Q1)", items: [
            { id: '1.5.3-3', label: 'Develop detailed tender docs for pilot non-critical buildings.' },
            { id: '1.5.3-M3', label: 'Milestone M3: Pilot FMMC Tender Documents Finalized (2027 Q1).' }
        ]},
        { name: "Phase 4: Award (2027 Q2 – Q4)", items: [
            { id: '1.5.3-4', label: 'Mobilize contractors and perform mid-term review against KPIs.' },
            { id: '1.5.3-M4', label: 'Milestone M4: Pilot Contracts Awarded & Initial Review Completed (2027 Q4).' }
        ]}
    ],
    '1.5.4': [
        { name: "Phase 1: Gap Analysis (2026 Q1 – Q2)", items: [
            { id: '1.5.4-1', label: 'Review existing standards for maintainability gaps.' },
            { id: '1.5.4-M1', label: 'Milestone M1: Gap Analysis & Scope Approved (2026 Q2).' }
        ]},
        { name: "Phase 2: Drafting (2026 Q3 – 2027 Q1)", items: [
            { id: '1.5.4-2', label: 'Integrate requirements from GBI, GreenRE, and universal design.' },
            { id: '1.5.4-M2', label: 'Milestone M2: Complete Draft of Guidelines Ready (2027 Q1).' }
        ]},
        { name: "Phase 3: Multi-Stakeholder Review (2027 Q2)", items: [
            { id: '1.5.4-3', label: 'Review by technical branches and relevant external agencies.' },
            { id: '1.5.4-M3', label: 'Milestone M3: Guidelines Finalized after Stakeholder Review (2027 Q2).' }
        ]},
        { name: "Phase 4: Compliance (2027 Q3 – Q4)", items: [
            { id: '1.5.4-4', label: 'Integrate mandatory checklist into design approval workflow.' },
            { id: '1.5.4-M4', label: 'Milestone M4: Guidelines Published & Compliance Process Implemented (2027 Q4).' }
        ]}
    ],
    '1.5.5': [
        { name: "Phase 1: Design (Jan – Mar 2028)", items: [
            { id: '1.5.5-1', label: 'Tenant focus groups for desired "Uber-style" features.' },
            { id: '1.5.5-2', label: 'Finalize UX/UI and select development partner.' },
            { id: '1.5.5-M1', label: 'Milestone M1: App Requirements & Design Approved (Mar 2028).' }
        ]},
        { name: "Phase 2: Development (Apr – Jul 2028)", items: [
            { id: '1.5.5-3', label: 'Mobile app development (iOS/Android) and backend integration.' },
            { id: '1.5.5-M2', label: 'Milestone M2: App & Backend Dashboard Developed & Integrated (Jul 2028).' }
        ]},
        { name: "Phase 3: Pilot Testing (Aug – Sep 2028)", items: [
            { id: '1.5.5-4', label: 'Launch pilot in one major complex (e.g. Kuching).' },
            { id: '1.5.5-M3', label: 'Milestone M3: Pilot Completed & Process Optimized (Sep 2028).' }
        ]},
        { name: "Phase 4: SLA Enforcement (Oct – Dec 2028)", items: [
            { id: '1.5.5-5', label: 'Enforce the 72-hour resolution SLA via dashboard.' },
            { id: '1.5.5-M4', label: 'Milestone M4: Full Launch; SLA Performance (<72 hrs) Verified (Dec 2028).' }
        ]}
    ],
    '1.5.6': [
        { name: "Phase 1: Assessment (Jan – Feb 2028)", items: [
            { id: '1.5.6-1', label: 'Assess state of manual records and coverage gaps.' },
            { id: '1.5.6-M1', label: 'Milestone M1: System Enhancement Plan Approved (Feb 2028).' }
        ]},
        { name: "Phase 2: Data Migration (Mar – Jul 2028)", items: [
            { id: '1.5.6-2', label: 'Clean and validate all historical tenant and billing data.' },
            { id: '1.5.6-M2', label: 'Milestone M2: Enhanced BQRMS Platform Ready with Data Migrated (Jul 2028).' }
        ]},
        { name: "Phase 3: Rollout (Aug – Sep 2028)", items: [
            { id: '1.5.6-3', label: 'Train divisional administrators on new tenancy setups.' },
            { id: '1.5.6-M3', label: 'Milestone M3: Staff Training Completed & Pilot Successful (Sep 2028).' }
        ]},
        { name: "Phase 4: Performance Monitoring (Oct – Dec 2028)", items: [
            { id: '1.5.6-4', label: 'Achieve full system usage and improved rental collection.' },
            { id: '1.5.6-M4', label: 'Milestone M4: Full Statewide Rollout & First Reports Generated (Dec 2028).' }
        ]}
    ],

    // ==================================================================================
    // PILLAR 2: DIGITAL TRANSFORMATION & AI ENGINEERING
    // ==================================================================================
    '2.1.1': [
        { name: "Phase 1: Launch (2025)", items: [
            { id: '2.1.1-1', label: 'Draft phased approach (>RM200m Infra / >RM50m Bldg).' },
            { id: '2.1.1-2', label: 'Issue BIM Mandate Circular and conduct awareness.' },
            { id: '2.1.1-M1', label: 'Milestone M1: BIM Mandate Circular Issued & Phase 1 Enforced (2025).' }
        ]},
        { name: "Phase 2: Market Prep (2026-2027)", items: [
            { id: '2.1.1-3', label: 'Ecosystem readiness assessment for Phase 2.' },
            { id: '2.1.1-M2', label: 'Milestone M2: Ecosystem Readiness for Phase 2 Assessed (2027).' }
        ]},
        { name: "Phase 3: Enforcement (2028)", items: [
            { id: '2.1.1-4', label: 'Phase 2 mandate enforced (>RM100m Infra / >RM20m Bldg).' },
            { id: '2.1.1-M3', label: 'Milestone M3: Phase 2 Mandate Enforced & Compliant (2028).' }
        ]},
        { name: "Phase 4: Universal Adoption (2029-2030)", items: [
            { id: '2.1.1-5', label: 'Final threshold mandate (>RM10m).' },
            { id: '2.1.1-M4', label: 'Milestone M4: Full Implementation of Phase 3 Mandate (>RM10m) (2030).' }
        ]}
    ],
    '2.1.2': [
        { name: "Phase 1: Inventory (2025 Q3 – Q4)", items: [
            { id: '2.1.2-1', label: 'Catalog most used plans for initial conversion.' },
            { id: '2.1.2-M1', label: 'Milestone M1: SPAP Inventory & BIM Standards Finalized (2025 Q4).' }
        ]},
        { name: "Phase 2: Conversion (2026 Q1 – Q2)", items: [
            { id: '2.1.2-2', label: 'Convert first high-priority SPAPs and pilot in-situ.' },
            { id: '2.1.2-M2', label: 'Milestone M2: First BIM SPAPs Created & Pilot-Tested (2026 Q2).' }
        ]},
        { name: "Phase 3: Full Library (2026 Q3 – 2027 Q2)", items: [
            { id: '2.1.2-3', label: 'Batch conversion of remaining plans into cloud library.' },
            { id: '2.1.2-M3', label: 'Milestone M3: Full BIM Library Deployed on Cloud Platform (2027 Q2).' }
        ]},
        { name: "Phase 4: Promotion (2027 Q3 – Q4)", items: [
            { id: '2.1.2-4', label: 'Officially launch "JKR Digital SPAP Library".' },
            { id: '2.1.2-M4', label: 'Milestone M4: Official Launch & User Training Completed (2027 Q4).' }
        ]}
    ],
    '2.1.3': [
        { name: "Phase 1: Pilot Selection (2026 Q1 – Q2)", items: [
            { id: '2.1.3-1', label: 'Research 4D/5D methodology suitable for JKR contracts.' },
            { id: '2.1.3-M1', label: 'Milestone M1: Methodology Defined & Pilot Projects Selected (2026 Q2).' }
        ]},
        { name: "Phase 2: Execution (2026 Q3 – 2027 Q2)", items: [
            { id: '2.1.3-2', label: 'Link BIM to baseline schedule and BOQ for progress claims.' },
            { id: '2.1.3-M2', label: 'Milestone M2: Full 4D/5D Proof-of-Concept Completed on First Pilot (2027 Q2).' }
        ]},
        { name: "Phase 3: Refinement (2027 Q3 – Q4)", items: [
            { id: '2.1.3-3', label: 'Standard Operating Procedures for 4D and 5D BIM finalized.' },
            { id: '2.1.3-M3', label: 'Milestone M3: Standard Operating Procedures for 4D/5D Finalized (2027 Q4).' }
        ]},
        { name: "Phase 4: Training (2028)", items: [
            { id: '2.1.3-4', label: 'Train PIMB and QS staff on BIM progress validation.' },
            { id: '2.1.3-M4', label: 'Milestone M4: Protocols Integrated into Standards & Staff Trained (2028 Q3).' }
        ]}
    ],
    '2.1.4': [
        { name: "Phase 1: Legal Drafting (Jan – Mar 2028)", items: [
            { id: '2.1.4-1', label: 'Form working group with QS, Technical, and DTC.' },
            { id: '2.1.4-M1', label: 'Milestone M1: Draft BIM Contract Clauses Finalized (Internal) (Mar 2028).' }
        ]},
        { name: "Phase 2: Consultation (Apr – Jun 2028)", items: [
            { id: '2.1.4-2', label: 'Circulate clauses to PAM, ACEM, and BEM for impact assessment.' },
            { id: '2.1.4-M2', label: 'Milestone M2: Industry Consultation Completed & Clauses Refined (Jun 2028).' }
        ]},
        { name: "Phase 3: Endorsement (Jul – Sep 2028)", items: [
            { id: '2.1.4-3', label: 'Obtain formal endorsement from State Attorney General.' },
            { id: '2.1.4-M3', label: 'Milestone M3: Endorsement from State Attorney General Obtained (Sep 2028).' }
        ]},
        { name: "Phase 4: Publication (Oct – Dec 2028)", items: [
            { id: '2.1.4-4', label: 'Officially issue updated Standard Form of Contract.' },
            { id: '2.1.4-M4', label: 'Milestone M4: Updated Contracts Published & Enforced (Nov 2028).' }
        ]}
    ],
    '2.1.5': [
        { name: "Phase 1: Feasibility (2027 Q1 – Q2)", items: [
            { id: '2.1.5-1', label: 'Define data exchange protocol (COBie, IFC data drops).' },
            { id: '2.1.5-M1', label: 'Milestone M1: Integration Design & Tech Specs Approved (2027 Q2).' }
        ]},
        { name: "Phase 2: Development (2027 Q3 – Q4)", items: [
            { id: '2.1.5-2', label: 'Develop APIs or middleware with vendors (Autodesk, Bentley).' },
            { id: '2.1.5-M2', label: 'Milestone M2: Prototype Integration Developed & Tested (2027 Q4).' }
        ]},
        { name: "Phase 3: Pilot (2028 Q1 – Q2)", items: [
            { id: '2.1.5-3', label: 'Test Usability on 2-3 ongoing projects with good models.' },
            { id: '2.1.5-M3', label: 'Milestone M3: Pilot Testing with Live Projects Completed (2028 Q2).' }
        ]},
        { name: "Phase 4: Rollout (2028 Q3 – Q4)", items: [
            { id: '2.1.5-4', label: 'Official launch of integrated system to all QS Branch staff.' },
            { id: '2.1.5-M4', label: 'Milestone M4: System Refined, Launched & Initial Benefits Measured (2028 Q4).' }
        ]}
    ],
    '2.1.6': [
        { name: "Phase 1: Curriculum (2025 Q1)", items: [
            { id: '2.1.6-1', label: 'Define tiers: Basics (Navigation), Modeller (Authoring), Manager (BEP).' },
            { id: '2.1.6-M1', label: 'Milestone M1: Three-Tier Training Curriculum Framework Approved (2025 Q1).' }
        ]},
        { name: "Phase 2: Trainers (2025 Q2)", items: [
            { id: '2.1.6-2', label: 'Identify and train/contract certified BIM trainers.' },
            { id: '2.1.6-M2', label: 'Milestone M2: Training Materials Developed & Trainers Ready (2025 Q2).' }
        ]},
        { name: "Phase 3: Execution (2025 Q3 – Q4)", items: [
            { id: '2.1.6-3', label: 'First annual cycle completed with 300 staff certified.' },
            { id: '2.1.6-M3', label: 'Milestone M3: First Annual Training Cycle Completed (300 staff) (2025 Q4).' }
        ]}
    ],
    '2.1.7': [
        { name: "Phase 1: Mapping (2026 Q1 – Q2)", items: [
            { id: '2.1.7-1', label: 'Define scope for Dashboards, Data Analytics, and Digital PM.' },
            { id: '2.1.7-M1', label: 'Milestone M1: Competency Matrix & Certification Framework Approved (2026 Q2).' }
        ]},
        { name: "Phase 2: Mechanism (2026 Q3 – Q4)", items: [
            { id: '2.1.7-2', label: 'Design assessment methods (practical tests, online exams).' },
            { id: '2.1.7-M2', label: 'Milestone M2: Assessment Tools & Certification Tracking System Developed (2026 Q4).' }
        ]},
        { name: "Phase 3: Pilot (2027 Q1 – Q2)", items: [
            { id: '2.1.7-3', label: 'Run pilot certification drive for BIM Level 2 with 50 volunteers.' },
            { id: '2.1.7-M3', label: 'Milestone M3: Pilot Certification Completed; HR Policy Drafted (2027 Q2).' }
        ]},
        { name: "Phase 4: Launch (2027 Q3 – Q4)", items: [
            { id: '2.1.7-4', label: 'Official launch of Certification Program integrated with HR reviews.' },
            { id: '2.1.7-M4', label: 'Milestone M4: Program Launched & Integrated with HR Policies (2027 Q4).' }
        ]}
    ],
    '2.2.1': [
        { name: "Phase 1: Selection (2026 Q1 – Q2)", items: [
            { id: '2.2.1-1', label: 'Identify 2 critical long-span bridges and 5 high-risk slopes.' },
            { id: '2.2.1-M1', label: 'Milestone M1: Pilot Sites & Technical Architecture Finalized (2026 Q2).' }
        ]},
        { name: "Phase 2: Procurement (2026 Q3 – 2027 Q1)", items: [
            { id: '2.2.1-2', label: 'Procure IoT sensors (strain, accelerometers, piezometers).' },
            { id: '2.2.1-M2', label: 'Milestone M2: IoT Hardware Installed & Data Streaming on All Sites (2027 Q1).' }
        ]},
        { name: "Phase 3: Calibration (2027 Q2 – Q4)", items: [
            { id: '2.2.1-3', label: 'Calibrate anomaly detection algorithms and SMS alerts.' },
            { id: '2.2.1-M3', label: 'Milestone M3: AI Models Trained & Alert System Operational (2027 Q4).' }
        ]},
        { name: "Phase 4: Evaluation (2028)", items: [
            { id: '2.2.1-4', label: 'Run pilot for full year; assess system uptime and false positives.' },
            { id: '2.2.1-M4', label: 'Milestone M4: Pilot Evaluation Completed & Expansion Case Prepared (2028 Q4).' }
        ]}
    ],
    '2.2.2': [
        { name: "Phase 1: Analytics Requirements (2027 Q1)", items: [
            { id: '2.2.2-1', label: 'Select appropriate predictive algorithms (regression, time-series).' },
            { id: '2.2.2-M1', label: 'Milestone M1: Predictive Model Requirements Defined (2027 Q1).' }
        ]},
        { name: "Phase 2: Integration (2027 Q2 – Q3)", items: [
            { id: '2.2.2-2', label: 'Develop front-end visualization: "Predictive Analytics" view.' },
            { id: '2.2.2-M3', label: 'Milestone M3: Model Integrated into JKR Dash with New UI (2027 Q3).' }
        ]},
        { name: "Phase 4: Launch (2027 Q4)", items: [
            { id: '2.2.2-3', label: 'Dashboard launched; verified accuracy >80% target.' },
            { id: '2.2.2-M4', label: 'Milestone M4: Dashboard Launched; Prediction Accuracy >80% Verified (2027 Q4).' }
        ]}
    ],
    '2.2.3': [
        { name: "Phase 1: Aggregation (2027 Q1 – Q2)", items: [
            { id: '2.2.3-1', label: 'Aggregate 20 years of historical tender data and price indices.' },
            { id: '2.2.3-M1', label: 'Milestone M1: Historical Cost Data Consolidated & Cleaned (2027 Q2).' }
        ]},
        { name: "Phase 2: Training (2027 Q3 – Q4)", items: [
            { id: '2.2.3-2', label: 'Develop ML models (ARIMA, LSTM) for material price trends.' },
            { id: '2.2.3-M2', label: 'Milestone M2: Predictive AI Models Trained & Validated (2027 Q4).' }
        ]},
        { name: "Phase 3: Integration (2028 Q1)", items: [
            { id: '2.2.3-3', label: 'Develop user-friendly costing dashboard for estimators.' },
            { id: '2.2.3-M3', label: 'Milestone M3: User-Friendly Predictive Costing Tool Developed (2028 Q1).' }
        ]},
        { name: "Phase 4: Budgeting (2028 Q2 – Q4)", items: [
            { id: '2.2.3-4', label: 'Pilot use for 2029 Development Budget submission.' },
            { id: '2.2.3-M4', label: 'Milestone M4: Model Piloted for 2029 Budget & Process Reviewed (2028 Q4).' }
        ]}
    ],
    '2.2.4': [
        { name: "Phase 1: Selection (2027 Q1)", items: [
            { id: '2.2.4-1', label: 'Identify 3-5 complex projects with good historical schedule data.' },
            { id: '2.2.4-M1', label: 'Milestone M1: Software & Pilot Projects Selected (2027 Q1).' }
        ]},
        { name: "Phase 2: Configuration (2027 Q2)", items: [
            { id: '2.2.4-2', label: 'Configure software with JKR data and train PMs.' },
            { id: '2.2.4-M2', label: 'Milestone M2: Software Implemented & Teams Trained (2027 Q2).' }
        ]},
        { name: "Phase 3: Execution (2027 Q3)", items: [
            { id: '2.2.4-3', label: 'Run pilot for 3 months; simulate "what-if" scenarios.' },
            { id: '2.2.4-M3', label: 'Milestone M3: Pilot Execution Phase Completed (2027 Q3).' }
        ]},
        { name: "Phase 4: Recommendation (2027 Q4)", items: [
            { id: '2.2.4-4', label: 'Adopt/Discontinue recommendation report for SSC.' },
            { id: '2.2.4-M4', label: 'Milestone M4: Evaluation Report & Recommendation Finalized (2027 Q4).' }
        ]}
    ],
    '2.2.5': [
        { name: "Phase 1: Curriculum (2027 Q1 – Q2)", items: [
            { id: '2.2.5-1', label: 'Practical curriculum focused on interpreting AI alerts.' },
            { id: '2.2.5-M1', label: 'Milestone M1: Training Curriculum & Materials Developed (2027 Q2).' }
        ]},
        { name: "Phase 2: Training (2027 Q3)", items: [
            { id: '2.2.5-2', label: 'Train core group of "AI Champion" PMs.' },
            { id: '2.2.5-M2', label: 'Milestone M2: Train-the-Trainer & Pilot Session Completed (2027 Q3).' }
        ]},
        { name: "Phase 3: Rollout (2027 Q4 – 2028 Q1)", items: [
            { id: '2.2.5-3', label: 'First wave of training for all target PMs.' },
            { id: '2.2.5-M3', label: 'Milestone M3: First Wave of PM Training Completed (2028 Q1).' }
        ]},
        { name: "Phase 4: Adoption (2028 Q2 – Q4)", items: [
            { id: '2.2.5-4', label: 'Institutionalize program into annual training calendar.' },
            { id: '2.2.5-M4', label: 'Milestone M4: Adoption Measured & Program Institutionalized (2028 Q4).' }
        ]}
    ],
    '2.2.6': [
        { name: "Phase 1: Selection (2028 Q1)", items: [
            { id: '2.2.6-1', label: 'Select clear, bounded pilot use case (e.g. small works).' },
            { id: '2.2.6-M1', label: 'Milestone M1: Pilot Scope & Technology Partner Selected (2028 Q1).' }
        ]},
        { name: "Phase 2: Configuration (2028 Q2)", items: [
            { id: '2.2.6-2', label: 'Digitize and upload contract to blockchain platform.' },
            { id: '2.2.6-M2', label: 'Milestone M2: Contracts Digitized & Onboarded to Blockchain (2028 Q2).' }
        ]},
        { name: "Phase 3: Execution (2028 Q3)", items: [
            { id: '2.2.6-3', label: 'Record certifications and variations as blockchain transactions.' },
            { id: '2.2.6-M3', label: 'Milestone M3: Contract Lifecycle Executed on Platform (2028 Q3).' }
        ]},
        { name: "Phase 4: Audit (2028 Q4)", items: [
            { id: '2.2.6-4', label: 'Independent audit of immutable ledger audit trail.' },
            { id: '2.2.6-M4', label: 'Milestone M4: Audit Completed & Adoption Recommendation Made (2028 Q4).' }
        ]}
    ],
    '2.2.7': [
        { name: "Phase 1: Technology Setup (2028 Q1 – Q2)", items: [
            { id: '2.2.7-1', label: 'Select AR hardware (ruggedized tablets vs glasses).' },
            { id: '2.2.7-M1', label: 'Milestone M1: AR Tech Stack & Pilot Project Selected (2028 Q2).' }
        ]},
        { name: "Phase 2: Training (2028 Q3)", items: [
            { id: '2.2.7-2', label: 'Train site supervision team on daily AR checks.' },
            { id: '2.2.7-M2', label: 'Milestone M2: System Configured & Site Team Trained (2028 Q3).' }
        ]},
        { name: "Phase 3: Execution (2028 Q4 – 2029 Q3)", items: [
            { id: '2.2.7-3', label: 'Document instances where AR caught errors before casting.' },
            { id: '2.2.7-M3', label: 'Milestone M3: AR Used Throughout Construction of Pilot Project (2029 Q3).' }
        ]},
        { name: "Phase 4: Review (2029 Q4)", items: [
            { id: '2.2.7-4', label: 'ROI analysis and roll-out strategy defined.' },
            { id: '2.2.7-M4', label: 'Milestone M4: Benefits Analysis & Case Study Completed (2029 Q4).' }
        ]}
    ],
    '2.3.1': [
        { name: "Phase 1: Design (2026 Q1 – Q2)", items: [
            { id: '2.3.1-1', label: 'Define mandatory data fields (location, construction date, rating).' },
            { id: '2.3.1-M1', label: 'Milestone M1: Asset Taxonomy & Database Design Approved (2026 Q2).' }
        ]},
        { name: "Phase 2: Piloting (2026 Q3)", items: [
            { id: '2.3.1-2', label: 'Pilot mobile app collection methodology in one division.' },
            { id: '2.3.1-M2', label: 'Milestone M2: Field Data Collection Methodology Finalized & Piloted (2026 Q3).' }
        ]},
        { name: "Phase 3: State-Wide Blitz (2026 Q4 – 2027 Q3)", items: [
            { id: '2.3.1-3', label: 'Equip divisional teams for prioritize critical asset capture.' },
            { id: '2.3.1-M3', label: 'Milestone M3: 100% Asset Data Capture Completed (2027 Q3).' }
        ]},
        { name: "Phase 4: Go-Live (2027 Q4)", items: [
            { id: '2.3.1-4', label: 'Integrate inventory with JKR Dash and Finance systems.' },
            { id: '2.3.1-M4', label: 'Milestone M4: System Live, Mobile App Deployed & Integrated (2027 Q4).' }
        ]}
    ],
    '2.3.2': [
        { name: "Phase 1: Bridge Prioritization (2026 Q1 – Q2)", items: [
            { id: '2.3.2-1', label: 'Risk-based assessment of top 10-15 most critical bridges.' },
            { id: '2.3.2-M1', label: 'Milestone M1: Priority Bridges & SHMS Design Finalized (2026 Q2).' }
        ]},
        { name: "Phase 2: Wave 1 Installation (2026 Q3 – 2027 Q1)", items: [
            { id: '2.3.2-2', label: 'Commission systems for first 5-7 priority bridges.' },
            { id: '2.3.2-M2', label: 'Milestone M2: First Wave of SHMS Installations Operational (2027 Q1).' }
        ]},
        { name: "Phase 3: Wave 2 & Protocol (2027 Q2 – 2028 Q1)", items: [
            { id: '2.3.2-3', label: 'Implement formal protocol for responding to SHMS alerts.' },
            { id: '2.3.2-M3', label: 'Milestone M3: All Target Bridges Monitored & Alert Protocol Live (2028 Q1).' }
        ]},
        { name: "Phase 4: Impact (2028 Q2 – Q4)", items: [
            { id: '2.3.2-4', label: 'Assess impact on maintenance planning via JKR Dash.' },
            { id: '2.3.2-M4', label: 'Milestone M4: System Integrated & Annual Review Completed (2028 Q4).' }
        ]}
    ],
    '2.3.3': [
        { name: "Phase 1: Database Setup (2027 Q1 – Q2)", items: [
            { id: '2.3.3-1', label: 'Develop schema to store geology, geometry, and imagery.' },
            { id: '2.3.3-M1', label: 'Milestone M1: Slope Database & Risk Rating Methodology Developed (2027 Q2).' }
        ]},
        { name: "Phase 2: Initial Population (2027 Q3 – Q4)", items: [
            { id: '2.3.3-2', label: 'Populate database with known slopes from existing records.' },
            { id: '2.3.3-M2', label: 'Milestone M2: Initial Data Loaded & Rating Process Validated (2027 Q4).' }
        ]},
        { name: "Phase 3: State-Wide Rollout (2028 Q1 – Q3)", items: [
            { id: '2.3.3-3', label: 'Campaign to ensure all ~20,000+ slopes are rated.' },
            { id: '2.3.3-M3', label: 'Milestone M3: State-Wide Slope Inventory & Risk Rating Completed (2028 Q3).' }
        ]},
        { name: "Phase 4: Budget Integration (2028 Q4)", items: [
            { id: '2.3.3-4', label: 'Formally link register outputs to capital works programming.' },
            { id: '2.3.3-M4', label: 'Milestone M4: System Outputs Drive Budget Prioritization (2028 Q4).' }
        ]}
    ],
    '2.3.4': [
        { name: "Phase 1: Sensor Spec (2028 Q1)", items: [
            { id: '2.3.4-1', label: 'Select 5 high-volume trunk roads for WIM and counters.' },
            { id: '2.3.4-M1', label: 'Milestone M1: Pilot Roads & Sensor Specifications Finalized (2028 Q1).' }
        ]},
        { name: "Phase 2: Installation (2028 Q2 – Q3)", items: [
            { id: '2.3.4-2', label: 'Establish reliable data transmission to central platform.' },
            { id: '2.3.4-M2', label: 'Milestone M2: Sensors Installed, Calibrated & Data Streaming (2028 Q3).' }
        ]},
        { name: "Phase 3: Logic (2028 Q4)", items: [
            { id: '2.3.4-3', label: 'Shift from age-based to usage-based prioritization.' },
            { id: '2.3.4-M3', label: 'Milestone M3: Data Analyzed & Maintenance Logic Developed (2028 Q4).' }
        ]},
        { name: "Phase 4: Planning Integration (2028 Q4)", items: [
            { id: '2.3.4-4', label: 'Integrate into 2029 road maintenance planning cycle.' },
            { id: '2.3.4-M4', label: 'Milestone M4: Data Integrated into Planning & Pilot Evaluated (2028 Q4).' }
        ]}
    ],
    '2.3.5': [
        { name: "Phase 1: Needs Analysis (2028 Q1)", items: [
            { id: '2.3.5-1', label: 'Assess current skill levels of divisional asset managers.' },
            { id: '2.3.5-M1', label: 'Milestone M1: Training Needs Analysis & Curriculum Design Approved (2028 Q1).' }
        ]},
        { name: "Phase 2: Material (2028 Q2)", items: [
            { id: '2.3.5-2', label: 'Develop manual and exercises using LIVE system data.' },
            { id: '2.3.5-M2', label: 'Milestone M2: Training Materials Developed & Trainers Prepared (2028 Q2).' }
        ]},
        { name: "Phase 3: Delivery (2028 Q3)", items: [
            { id: '2.3.5-3', label: 'Hands-on workshops with live asset systems.' },
            { id: '2.3.5-M3', label: 'Milestone M3: Training Program Delivered to All Target Staff (2028 Q3).' }
        ]},
        { name: "Phase 4: Certification (2028 Q4)", items: [
            { id: '2.3.5-4', label: 'Establish helpdesk support structure post-training.' },
            { id: '2.3.5-M4', label: 'Milestone M4: Staff Certified & Ongoing Support Framework in Place (2028 Q4).' }
        ]}
    ],

    // ==================================================================================
    // PILLAR 3: RURAL TRANSFORMATION & CONNECTIVITY
    // ==================================================================================
    '3.1.1': [
        { name: "Phase 1: Closure (2025-2026)", items: [
            { id: '3.1.1-1', label: 'Survey all remaining physical gaps and substandard "Redline" sections.' },
            { id: '3.1.1-M1', label: 'Milestone M1: All Final Work Packages Awarded & Active (2026).' }
        ]},
        { name: "Phase 2: Construction (2027-2028)", items: [
            { id: '3.1.1-2', label: 'Finalize signage and furniture; begin preliminary commissioning.' },
            { id: '3.1.1-M2', label: 'Milestone M2: All Physical Construction Works 100% Complete (2028).' }
        ]},
        { name: "Phase 3: Commissioning (2029)", items: [
            { id: '3.1.1-3', label: 'Comprehensive road safety and drainage performance audits.' },
            { id: '3.1.1-M3', label: 'Milestone M3: Certificates of Practical Completion (CPC) Obtained for All Sections (2029 Q4).' }
        ]},
        { name: "Phase 4: Handover (2030)", items: [
            { id: '3.1.1-4', label: 'Publish "PBH Legacy Report" documenting economic impact.' },
            { id: '3.1.1-M4', label: 'Milestone M4: Formal Handover & Legacy Report Published (2030 Q1).' }
        ]}
    ],
    '3.1.2': [
        { name: "Phase 1: Mobilization (2025 Q2 – Q4)", items: [
            { id: '3.1.2-1', label: 'Award main construction contracts and finalize challenging designs.' },
            { id: '3.1.2-M1', label: 'Milestone M1: FOBs Established & Contractor Mobilized (2025 Q4).' }
        ]},
        { name: "Phase 2: Earthworks (2026)", items: [
            { id: '3.1.2-2', label: '40% of earthworks and all minor drainage structures completed.' },
            { id: '3.1.2-M2', label: 'Milestone M2: 40% Earthworks & Minor Drainage Complete (2026 Q4).' }
        ]},
        { name: "Phase 3: Bridges (2027)", items: [
            { id: '3.1.2-3', label: 'Superstructure construction and laying final pavement layers.' },
            { id: '3.1.2-M3', label: 'Milestone M3: Pavement Layers & Bridge Structures Complete (2027 Q4).' }
        ]},
        { name: "Phase 4: Opening (2028)", items: [
            { id: '3.1.2-4', label: 'Officially open Phase 1 (77km) to public traffic.' },
            { id: '3.1.2-M4', label: 'Milestone M4: Phase 1 Officially Opened to Traffic (2028 Q3).' }
        ]}
    ],
    '3.1.3': [
        { name: "Phase 1: Design (2025-2026)", items: [
            { id: '3.1.3-1', label: 'Complete EIA and detailed design for the full 335km alignment.' },
            { id: '3.1.3-M1', label: 'Milestone M1: Detailed Design Finalized; First Packages Awarded (2026).' }
        ]},
        { name: "Phase 2: Ramp-Up (2027)", items: [
            { id: '3.1.3-2', label: 'Focus on earthworks and challenging terrain river crossings.' },
            { id: '3.1.3-M2', label: 'Milestone M2: 25% of Earthworks & Substructure Complete (2027).' }
        ]},
        { name: "Phase 3: Integration (2028)", items: [
            { id: '3.1.3-3', label: 'Complete majority of bridge structures and drainage.' },
            { id: '3.1.3-M3', label: 'Milestone M3: 70% of Physical Works Complete (2028).' }
        ]},
        { name: "Phase 4: Opening (2029)", items: [
            { id: '3.1.3-4', label: 'Enable Miri-Limbang-Lawas travel without exiting Sarawak.' },
            { id: '3.1.3-M4', label: 'Milestone M4: Phase 2 Officially Opened to Traffic (2029).' }
        ]}
    ],
    '3.1.4': [
        { name: "Phase 1: Foundations (2025-2026)", items: [
            { id: '3.1.4-1', label: 'Piling and substructure works for Batang Lupar bridge.' },
            { id: '3.1.4-M1', label: 'Milestone M1: Bridge Substructures 50% Complete (2026).' }
        ]},
        { name: "Phase 2: Superstructure (2027)", items: [
            { id: '3.1.4-2', label: 'Significant progress on deck segments and cable-stayed elements.' },
            { id: '3.1.4-M2', label: 'Milestone M2: First Bridge Superstructure Complete; 50% Pavement Done (2027).' }
        ]},
        { name: "Phase 3: Opening (2028)", items: [
            { id: '3.1.4-3', label: 'All mega-bridges and connecting pavement open to traffic.' },
            { id: '3.1.4-M3', label: 'Milestone M3: Coastal Road Network (Bridges & Pavement) Opened to Traffic (2028 Q4).' }
        ]}
    ],
    '3.1.5': [
        { name: "Phase 1: Design (2025)", items: [
            { id: '3.1.5-1', label: 'Complete land acquisition for Second Trunk alignment.' },
            { id: '3.1.5-M1', label: 'Milestone M1: All Construction Contracts Awarded (2025).' }
        ]},
        { name: "Phase 2: Construction (2026-2027)", items: [
            { id: '3.1.5-2', label: 'Commence piling for Batang Saribas and Batang Lupar 2.' },
            { id: '3.1.5-M2', label: 'Milestone M2: Bridge Superstructures 50% Complete; 60% Earthworks Done (2027).' }
        ]},
        { name: "Phase 3: Integration (2028)", items: [
            { id: '3.1.5-3', label: 'Second Trunk Road becomes fully operational.' },
            { id: '3.1.5-M3', label: 'Milestone M3: Second Trunk Road Opened to Traffic (2028 Q4).' }
        ]}
    ],
    '3.1.6': [
        { name: "Phase 1: Contract Prep (2027 Q1 – Q2)", items: [
            { id: '3.1.6-1', label: 'Finalize design for geometric and drainage improvements.' },
            { id: '3.1.6-M1', label: 'Milestone M1: Tender for Completion Works Issued (2027 Q2).' }
        ]},
        { name: "Phase 2: Ramp-Up (2027 Q3 – 2028 Q1)", items: [
            { id: '3.1.6-2', label: '50% of physical LTB completion works complete.' },
            { id: '3.1.6-M2', label: 'Milestone M2: 50% of Physical Construction Works Complete (2028 Q1).' }
        ]},
        { name: "Phase 3: Compliance (2028 Q2 – Q3)", items: [
            { id: '3.1.6-3', label: 'Conduct independent quality inspection and safety audits.' },
            { id: '3.1.6-M3', label: 'Milestone M3: All Works Completed & Pass Independent Inspection (2028 Q3).' }
        ]},
        { name: "Phase 4: Opening (2028 Q4)", items: [
            { id: '3.1.6-4', label: 'Performance baseline for Northern Region travel time removal.' },
            { id: '3.1.6-M4', label: 'Milestone M4: Highway Fully Opened & Performance Measured (2028 Q4).' }
        ]}
    ],
    '3.2.1': [
        { name: "Phase 1: Validation (2025)", items: [
            { id: '3.2.1-1', label: 'Cross-reference settlement list with GIS and community validation.' },
            { id: '3.2.1-M1', label: 'Milestone M1: Prioritized 4-Year Implementation Plan Approved & Funded (2025).' }
        ]},
        { name: "Phase 2: Design (2026)", items: [
            { id: '3.2.1-2', label: 'Issue library of *Standardized Rural Road Designs* to divisions.' },
            { id: '3.2.1-M2', label: 'Milestone M2: Standard Designs Rolled Out; First Major Packages Tendered (2026).' }
        ]},
        { name: "Phase 3: Achievement (2027-2028)", items: [
            { id: '3.2.1-3', label: 'Achieve 80% connection target (~1,108 settlements).' },
            { id: '3.2.1-M3', label: 'Milestone M3: 80% of Target Settlements (approx. 1,108) Connected (2028 Q3).' }
        ]},
        { name: "Phase 4: Socio-Economic (2028 Q4)", items: [
            { id: '3.2.1-4', label: 'Initiate impact assessment on access to healthcare and markets.' },
            { id: '3.2.1-M4', label: 'Milestone M4: Handover Completed & Impact Review Started (2028 Q4).' }
        ]}
    ],
    '3.2.2': [
        { name: "Phase 1: Standardization (2025)", items: [
            { id: '3.2.2-1', label: 'Finalize list and approve 2-3 standard modular designs.' },
            { id: '3.2.2-M1', label: 'Milestone M1: Bridge List & Standard Designs Finalized (2025).' }
        ]},
        { name: "Phase 2: Early Construction (2026-2027)", items: [
            { id: '3.2.2-2', label: 'Tender first batch of 10-12 bridge replacements.' },
            { id: '3.2.2-M2', label: 'Milestone M2: First Batch (10-12 Bridges) Completed & Opened (2027).' }
        ]},
        { name: "Phase 3: Main Push (2028)", items: [
            { id: '3.2.2-3', label: 'Peak year: over 30 bridges under construction or completed.' },
            { id: '3.2.2-M3', label: 'Milestone M3: 75% of Bridges (28) Completed or Under Construction (2028).' }
        ]},
        { name: "Phase 4: Closure (2029)", items: [
            { id: '3.2.2-4', label: 'Officially close program; all 38 bridges operational.' },
            { id: '3.2.2-M4', label: 'Milestone M4: All 38 Bridges Completed & Program Closed (2029).' }
        ]}
    ],
    '3.2.3': [
        { name: "Phase 1: Vulnerability (2027 Q1 – Q2)", items: [
            { id: '3.2.3-1', label: 'Develop risk matrix using GIS floodplain data.' },
            { id: '3.2.3-M1', label: 'Milestone M1: Prioritized List of Bridges for Retrofitting Finalized (2027 Q2).' }
        ]},
        { name: "Phase 2: Prototyping (2027 Q3 – Q4)", items: [
            { id: '3.2.3-2', label: 'Construct prototype raised-abutment retrofit.' },
            { id: '3.2.3-M2', label: 'Milestone M2: Retrofit Designs Finalized & Prototype Built (2027 Q4).' }
        ]},
        { name: "Phase 3: Implementation (2028)", items: [
            { id: '3.2.3-3', label: 'Tender first major batch of retrofit works.' },
            { id: '3.2.3-M3', label: 'Milestone M3: First Major Batch of Retrofits Completed (2028).' }
        ]},
        { name: "Phase 4: Verification (2029)", items: [
            { id: '3.2.3-4', label: 'Monitor performance through next monsoon season.' },
            { id: '3.2.3-M4', label: 'Milestone M4: 30% of High-Risk Bridges Retrofitted; Performance Verified (2029 Q4).' }
        ]}
    ],
    '3.3.1': [
        { name: "Phase 1: Setup (2025)", items: [
            { id: '3.3.1-1', label: 'Establish standard GIS platform with core data layers.' },
            { id: '3.3.1-M1', label: 'Milestone M1: Centralized GIS Platform with Core Data Layers Operational (2025).' }
        ]},
        { name: "Phase 2: Training (2026 Q1 – Q2)", items: [
            { id: '3.3.1-2', label: 'Train planning staff on least-cost path analysis.' },
            { id: '3.3.1-M2', label: 'Milestone M2: Mandatory Use Policy Issued & Core Staff Trained (2026 Q2).' }
        ]},
        { name: "Phase 3: Pilot (2026 Q3 – 2027 Q1)", items: [
            { id: '3.3.1-3', label: '100% of new Project Briefs include mandated GIS report.' },
            { id: '3.3.1-M3', label: 'Milestone M3: 100% of New Rural Road Briefs Include GIS Report (2027 Q1).' }
        ]},
        { name: "Phase 4: Assessment (2027 Q2 – Q4)", items: [
            { id: '3.3.1-4', label: 'Measure reduction in post-approval alignment VOs.' },
            { id: '3.3.1-M4', label: 'Milestone M4: Impact Assessment on Planning Quality Completed (2027 Q4).' }
        ]}
    ],
    '3.3.2': [
        { name: "Phase 1: Vendor Selection (2025 Q1 – Q2)", items: [
            { id: '3.3.2-1', label: 'Gather divisional requirements (offline mapping, project pinning).' },
            { id: '3.3.2-M1', label: 'Milestone M1: Requirements Spec Finalized & Vendor Selected (2025 Q2).' }
        ]},
        { name: "Phase 2: Integration (2025 Q3 – 2026 Q1)", items: [
            { id: '3.3.2-2', label: 'Seamless integration of central GIS layers into mapping interface.' },
            { id: '3.3.2-M2', label: 'Milestone M2: Application Development Completed (Alpha) (2026 Q1).' }
        ]},
        { name: "Phase 3: Testing (2026 Q2)", items: [
            { id: '3.3.2-3', label: 'Pilot the upgraded app in 2-3 divisions for speed/functionality.' },
            { id: '3.3.2-M3', label: 'Milestone M3: Pilot Testing Completed & App Refined (2026 Q2).' }
        ]},
        { name: "Phase 4: Training (2026 Q3 – Q4)", items: [
            { id: '3.3.2-4', label: 'Mandate prepared/submitted plans must use the new app.' },
            { id: '3.3.2-M4', label: 'Milestone M4: Full Deployment & Mandatory Use Directive Issued (2026 Q4).' }
        ]}
    ],
    '3.3.3': [
        { name: "Phase 1: Model Development (2025)", items: [
            { id: '3.3.3-1', label: 'Develop prioritization model based on service distance.' },
            { id: '3.3.3-M1', label: 'Milestone M1: Database & Prioritization Algorithm Developed (2025).' }
        ]},
        { name: "Phase 2: Stakeholder Validation (2026 Q1 – Q3)", items: [
            { id: '3.3.3-2', label: 'Draft full document including ranked "Hit List".' },
            { id: '3.3.3-M2', label: 'Milestone M2: Draft Master Plan Submitted for Technical Review (2026 Q3).' }
        ]},
        { name: "Phase 3: Endorsement (2026 Q4 – 2027 Q1)", items: [
            { id: '3.3.3-3', label: 'Endorsement from State Cabinet for ranking-based funding.' },
            { id: '3.3.3-M3', label: 'Milestone M3: Master Plan Endorsed by State Cabinet (2027 Q1).' }
        ]},
        { name: "Phase 4: Integration (2027 Q2 – Q4)", items: [
            { id: '3.3.3-4', label: 'Publish first annual report on implementation against plan.' },
            { id: '3.3.3-M4', label: 'Milestone M4: Plan Integrated into Budgeting; First Report Published (2027 Q4).' }
        ]}
    ],
    '3.3.4': [
        { name: "Phase 1: Town Selection (2026 Q1 – Q2)", items: [
            { id: '3.3.4-1', label: 'Select 2-3 pilot secondary towns with acute congestion.' },
            { id: '3.3.4-M1', label: 'Milestone M1: Specialist Consultant Engaged for Study (2026 Q2).' }
        ]},
        { name: "Phase 2: Analysis (2026 Q3 – 2027 Q1)", items: [
            { id: '3.3.4-2', label: 'Consultant models future growth and identifies bottlenecks.' },
            { id: '3.3.4-M2', label: 'Milestone M2: Draft Traffic Management Masterplan Delivered (2027 Q1).' }
        ]},
        { name: "Phase 3: Finalization (2027 Q2)", items: [
            { id: '3.3.4-3', label: 'Workshops with local councils, police, and transport operators.' },
            { id: '3.3.4-M3', label: 'Milestone M3: Final Masterplan Approved by Stakeholders (2027 Q2).' }
        ]},
        { name: "Phase 4: Kick-off (2027 Q3 – Q4)", items: [
            { id: '3.3.4-4', label: 'Issue tender for highest-priority junction upgrades.' },
            { id: '3.3.4-M4', label: 'Milestone M4: Tender for Phase 1 Implementation Issued (2027 Q4).' }
        ]}
    ],
    '3.3.5': [
        { name: "Phase 1: Benchmarking (2026 Q1 – Q2)", items: [
            { id: '3.3.5-1', label: 'Review existing national standards (MS) and ISO 21542.' },
            { id: '3.3.5-M1', label: 'Milestone M1: Draft Accessibility Standards Completed (2026 Q2).' }
        ]},
        { name: "Phase 2: Consultation (2026 Q3)", items: [
            { id: '3.3.5-2', label: 'Workshops with disability advocacy groups for feedback.' },
            { id: '3.3.5-M2', label: 'Milestone M2: Stakeholder Consultation & Legal Review Completed (2026 Q3).' }
        ]},
        { name: "Phase 3: Integration (2026 Q4 – 2027 Q1)", items: [
            { id: '3.3.5-3', label: 'Integrate standards into JKR architectural design checklist.' },
            { id: '3.3.5-M3', label: 'Milestone M3: Standards Officially Approved & Integrated into Design (2027 Q1).' }
        ]},
        { name: "Phase 4: Enforcement (2027 Q2 – Q4)", items: [
            { id: '3.3.5-4', label: '100% compliance rate for new public building designs.' },
            { id: '3.3.5-M4', label: 'Milestone M4: Standards Enforced & First Compliance Audits Conducted (2027 Q4).' }
        ]}
    ],
    '3.4.1': [
        { name: "Phase 1: Site ID (2027 Q1 – Q2)", items: [
            { id: '3.4.1-1', label: 'Identify 5-7 potential sites at key river-road junctions.' },
            { id: '3.4.1-M1', label: 'Milestone M1: Final 5 Hub Locations Selected with Community Input (2027 Q2).' }
        ]},
        { name: "Phase 2: Tendering (2027 Q3 – 2028 Q1)", items: [
            { id: '3.4.1-2', label: 'Develop 2-3 standardized modular designs for covered jetties.' },
            { id: '3.4.1-M2', label: 'Milestone M2: Construction Contracts Tendered and Awarded (2028 Q1).' }
        ]},
        { name: "Phase 3: Supervision (2028 Q2 – 2029 Q2)", items: [
            { id: '3.4.1-3', label: 'Construction of all 5 pilot hubs substantially complete.' },
            { id: '3.4.1-M3', label: 'Milestone M3: Construction of All 5 Hubs Substantially Complete (2029 Q2).' }
        ]},
        { name: "Phase 4: Handover (2029 Q3 – Q4)", items: [
            { id: '3.4.1-4', label: '6-month impact study to measure usage and satisfaction.' },
            { id: '3.4.1-M4', label: 'Milestone M4: Hubs Operational and Impact Study Initiated (2029 Q4).' }
        ]}
    ],
    '3.4.2': [
        { name: "Phase 1: System Setup (2025)", items: [
            { id: '3.4.2-1', label: 'Finalize policy clause threshold (e.g. projects >RM20m).' },
            { id: '3.4.2-M1', label: 'Milestone M1: Policy Clause Standardized & Tracking Prototyped (2025).' }
        ]},
        { name: "Phase 2: Mandatory Monitoring (2026-2027)", items: [
            { id: '3.4.2-2', label: 'Publish first Annual Local SME Participation Report.' },
            { id: '3.4.2-M2', label: 'Milestone M2: First Annual Local SME Participation Report Published (2027).' }
        ]},
        { name: "Phase 3: Enforcement (2028-2029)", items: [
            { id: '3.4.2-3', label: 'Integrate tracking data with CPRS (1.2.2) ratings.' },
            { id: '3.4.2-M3', label: 'Milestone M3: Compliance Linked to Contractor Ratings; SME Support Initiated (2029).' }
        ]},
        { name: "Phase 4: Legacy (2030)", items: [
            { id: '3.4.2-4', label: 'Institutionalized, non-negotiable part of JKR procurement.' },
            { id: '3.4.2-M4', label: 'Milestone M4: Policy Institutionalized & Legacy Review Prepared (2030).' }
        ]}
    ],
    '3.4.3': [
        { name: "Phase 1: Policy (2025)", items: [
            { id: '3.4.3-1', label: 'Define minimum targets for skilled, semi-skilled, and unskilled.' },
            { id: '3.4.3-M1', label: 'Milestone M1: Local Employment Policy Issued & Embedded in Contracts (2025).' }
        ]},
        { name: "Phase 2: Audit (2026-2027)", items: [
            { id: '3.4.3-2', label: 'Conduct first round of audits on a sample of projects.' },
            { id: '3.4.3-M2', label: 'Milestone M2: First Compliance Audits Completed & Actions Taken (2027).' }
        ]},
        { name: "Phase 3: Systematization (2028-2029)", items: [
            { id: '3.4.3-3', label: 'Compliance directly tied to contractor progress payments.' },
            { id: '3.4.3-M3', label: 'Milestone M3: Digital Tracking Implemented; Compliance Linked (2029).' }
        ]},
        { name: "Phase 4: Impact (2030)", items: [
            { id: '3.4.3-4', label: 'Impact assessment completed; policy refined for next strategy phase.' },
            { id: '3.4.3-M4', label: 'Milestone M4: Impact Assessment Completed & Policy Refined (2030).' }
        ]}
    ],
    '3.4.4': [
        { name: "Phase 1: Protocol (2025)", items: [
            { id: '3.4.4-1', label: 'Define membership (local councils, Tuai Rumah, Kapitan).' },
            { id: '3.4.4-M1', label: 'Milestone M1: Committee Framework Issued & Formation Mandated (2025 Q2).' }
        ]},
        { name: "Phase 2: Launch (2025 Q3 – 2026)", items: [
            { id: '3.4.4-2', label: 'All 12 committees operational and meeting quarterly.' },
            { id: '3.4.4-M2', label: 'Milestone M2: All 12 Divisional Committees Operational (2026).' }
        ]},
        { name: "Phase 3: Digital Cycle (2027)", items: [
            { id: '3.4.4-3', label: 'Create dedicated module for uploading minutes and action items.' },
            { id: '3.4.4-M3', label: 'Milestone M3: Minutes Centrally Archived; Reports to Management (2027).' }
        ]},
        { name: "Phase 4: Maturity (2028-2030)", items: [
            { id: '3.4.4-4', label: 'Committees are a valued, institutionalized part of JKR management.' },
            { id: '3.4.4-M4', label: 'Milestone M4: Committees Institutionalized; Impact Review Conducted (2030).' }
        ]}
    ],

    // ==================================================================================
    // PILLAR 4: ESG & GREEN INFRASTRUCTURE
    // ==================================================================================
    '4.1.1': [
        { name: "Phase 1: Research (2026 Q1 – Q3)", items: [
            { id: '4.1.1-1', label: 'Conduct market research for Sarawak context (e.g. Geopolymer Concrete).' },
            { id: '4.1.1-M1', label: 'Milestone M1: Draft List & Selection Criteria Finalized (2026 Q3).' }
        ]},
        { name: "Phase 2: Testing (2026 Q4 – 2027 Q2)", items: [
            { id: '4.1.1-2', label: 'Pilot testing in non-critical project elements (e.g. car parks).' },
            { id: '4.1.1-M2', label: 'Milestone M2: Pilot Testing Completed & List Revised (2027 Q2).' }
        ]},
        { name: "Phase 3: Publication (2027 Q3 – Q4)", items: [
            { id: '4.1.1-3', label: 'Incorporate list into JKR Standard Specs as new appendix.' },
            { id: '4.1.1-M3', label: 'Milestone M3: List Officially Published in JKR Standards (2027 Q4).' }
        ]},
        { name: "Phase 4: Target (2028)", items: [
            { id: '4.1.1-4', label: 'Achieve 20% adoption rate in new project tenders.' },
            { id: '4.1.1-M4', label: 'Milestone M4: Adoption Rate Measured & Target Set for 20% (2028 Q4).' }
        ]}
    ],
    '4.1.2': [
        { name: "Phase 1: Gap Analysis (2026 Q1 – Q2)", items: [
            { id: '4.1.2-1', label: 'Audit existing JKR standards against GBI criteria.' },
            { id: '4.1.2-M1', label: 'Milestone M1: Gap Analysis & New Standards Framework Defined (2026 Q2).' }
        ]},
        { name: "Phase 2: Drafting (2026 Q3 – 2027 Q1)", items: [
            { id: '4.1.2-2', label: 'Draft the revised "JKR Sustainable Architectural Design Standards".' },
            { id: '4.1.2-M2', label: 'Milestone M2: Draft of Revised Sustainable Design Standards Completed (2027 Q1).' }
        ]},
        { name: "Phase 3: Stakeholder Review (2027 Q2)", items: [
            { id: '4.1.2-3', label: 'Present to DTC and Technical Services for endorsement.' },
            { id: '4.1.2-M3', label: 'Milestone M3: Revised Standards Officially Endorsed (2027 Q2).' }
        ]},
        { name: "Phase 4: Mechanism (2027 Q3 – Q4)", items: [
            { id: '4.1.2-4', label: '100% of new projects >RM20m comply with new standards.' },
            { id: '4.1.2-M4', label: 'Milestone M4: Standards Enforced, Training & Compliance Implemented (2027 Q4).' }
        ]}
    ],
    '4.1.3': [
        { name: "Phase 1: Policy Formulation (2025 Q4 – 2026 Q1)", items: [
            { id: '4.1.3-1', label: 'Draft "≤5% more than traditional" selection rule.' },
            { id: '4.1.3-M1', label: 'Milestone M1: Draft Policy & Implementation Rules Finalized (2026 Q1).' }
        ]},
        { name: "Phase 2: Review (2026 Q2)", items: [
            { id: '4.1.3-2', label: 'Submit to Legal and Finance to ensure procurement alignment.' },
            { id: '4.1.3-M2', label: 'Milestone M2: Policy Vetted by Legal & Finance (2026 Q2).' }
        ]},
        { name: "Phase 3: Integration (2026 Q3 – Q4)", items: [
            { id: '4.1.3-3', label: 'Revise QS Cost Comparison templates.' },
            { id: '4.1.3-M3', label: 'Milestone M3: Policy Integrated into Tender Documents & Manuals (2026 Q4).' }
        ]},
        { name: "Phase 4: Issuance (2027 Q1 – Q2)", items: [
            { id: '4.1.3-4', label: 'Officially issue Circular to all staff and registered contractors.' },
            { id: '4.1.3-M4', label: 'Milestone M4: Policy Circular Issued & Staff Trained (2027 Q2).' }
        ]}
    ],
    '4.1.4': [
        { name: "Phase 1: Establishment (2026 Q1)", items: [
            { id: '4.1.4-1', label: 'Define Task Force mandate and appoint Chair.' },
            { id: '4.1.4-M1', label: 'Milestone M1: Task Force Formally Constituted with Charter (2026 Q1).' }
        ]},
        { name: "Phase 2: Work Plan (2026 Q2 – Q3)", items: [
            { id: '4.1.4-2', label: 'Prioritize standards to update (road drainage, envelopes, M&E).' },
            { id: '4.1.4-M2', label: 'Milestone M2: Baseline Review & 2-Year Work Plan Approved (2026 Q3).' }
        ]},
        { name: "Phase 3: Execution (2026 Q4 – 2027 Q3)", items: [
            { id: '4.1.4-3', label: 'Issue first major set of updated sustainable standards.' },
            { id: '4.1.4-M3', label: 'Milestone M3: First Set of Updated Sustainable Standards Issued (2027 Q3).' }
        ]},
        { name: "Phase 4: Monitoring (2027 Q4)", items: [
            { id: '4.1.4-4', label: 'Publish First Annual Report detailing achievements.' },
            { id: '4.1.4-M4', label: 'Milestone M4: First Annual Report Published; Monitoring Framework Set (2027 Q4).' }
        ]}
    ],
    '4.1.5': [
        { name: "Phase 1: Selection (2027 Q1 – Q2)", items: [
            { id: '4.1.5-1', label: 'Select suitable small-scale visible structure pilot (e.g. bridge).' },
            { id: '4.1.5-M1', label: 'Milestone M1: Pilot Project Selected & Detailed Design Finalized (2027 Q2).' }
        ]},
        { name: "Phase 2: Construction (2027 Q3 – 2028 Q2)", items: [
            { id: '4.1.5-2', label: 'Procure treated bamboo and geopolymer binder.' },
            { id: '4.1.5-M2', label: 'Milestone M2: Construction of the Pilot Project Completed (2028 Q2).' }
        ]},
        { name: "Phase 3: Data Collection (2028 Q3 – 2029 Q2)", items: [
            { id: '4.1.5-3', label: '12-month post-construction monitoring of durability.' },
            { id: '4.1.5-M3', label: 'Milestone M3: 12-Month Post-Construction Monitoring Completed (2029 Q2).' }
        ]},
        { name: "Phase 4: Knowledge Dissemination (2029 Q3 – Q4)", items: [
            { id: '4.1.5-4', label: 'Publish technical paper detailing carbon savings vs conventional.' },
            { id: '4.1.5-M4', label: 'Milestone M4: Technical Paper Published & Findings Disseminated (2029 Q4).' }
        ]}
    ],
    '4.2.1': [
        { name: "Phase 1: Standard Development (2025 Q3 – 2026 Q1)", items: [
            { id: '4.2.1-1', label: 'Draft specifications for roof load and grid connection.' },
            { id: '4.2.1-M1', label: 'Milestone M1: Solar PV Mandate Policy & Technical Specs Finalized (2026 Q1).' }
        ]},
        { name: "Phase 2: Lifecycle Integration (2026 Q2 – Q4)", items: [
            { id: '4.2.1-2', label: 'Update Playbook and Project Brief checklists.' },
            { id: '4.2.1-M2', label: 'Milestone M2: Mandate Enforced in Project Briefs (2026 Q4).' }
        ]},
        { name: "Phase 3: Monitoring (2027)", items: [
            { id: '4.2.1-3', label: 'Closely monitor first wave of projects for cost data.' },
            { id: '4.2.1-M3', label: 'Milestone M3: First Mandated Projects Tendered (2027).' }
        ]},
        { name: "Phase 4: Target (2028 – 2029)", items: [
            { id: '4.2.1-4', label: '80% adoption rate target reached.' },
            { id: '4.2.1-M4', label: 'Milestone M4: 80% Adoption Rate Achieved (2029).' }
        ]}
    ],
    '4.2.2': [
        { name: "Phase 1: Audit (2027 Q1 – Q3)", items: [
            { id: '4.2.2-1', label: 'Analyze data for highest-return retrofit measures.' },
            { id: '4.2.2-M1', label: 'Milestone M1: Audit Complete & Buildings Prioritized (2027 Q3).' }
        ]},
        { name: "Phase 2: Pilot (2027 Q4 – 2028 Q3)", items: [
            { id: '4.2.2-2', label: 'Execute pilot retrofits on 3-5 high-priority buildings.' },
            { id: '4.2.2-M2', label: 'Milestone M2: Pilot Retrofit Savings Verified (2028 Q3).' }
        ]},
        { name: "Phase 3: Funding (2028 Q4 – 2030 Q3)", items: [
            { id: '4.2.2-3', label: 'Secure dedicated green budget or EPC funding.' },
            { id: '4.2.2-M3', label: 'Milestone M3: 50% of Target Buildings Retrofitted (2030 Q3).' }
        ]},
        { name: "Phase 4: Validation (2030 Q4)", items: [
            { id: '4.2.2-4', label: 'Verify aggregate energy savings exceed 15%.' },
            { id: '4.2.2-M4', label: 'Milestone M4: >15% Aggregate Energy Savings Achieved (2030 Q4).' }
        ]}
    ],
    '4.2.3': [
        { name: "Phase 1: Tool Development (2026 Q1 – Q2)", items: [
            { id: '4.2.3-1', label: 'Define waste stream categories and recycling receipts.' },
            { id: '4.2.3-M1', label: 'Milestone M1: SWMP Template & Protocol Finalized (2026 Q2).' }
        ]},
        { name: "Phase 2: Training (2026 Q3 – Q4)", items: [
            { id: '4.2.3-2', label: 'Mandate SWMP clause in 100% of new tender docs.' },
            { id: '4.2.3-M2', label: 'Milestone M2: SWMP Mandatory in Tenders; Staff Trained (2026 Q4).' }
        ]},
        { name: "Phase 3: Monitoring (2027)", items: [
            { id: '4.2.3-3', label: 'Random spot checks operational via NCR system.' },
            { id: '4.2.3-M3', label: 'Milestone M3: Spot-Check Enforcement Regime Active (2027).' }
        ]},
        { name: "Phase 4: Review (2027 Q4)", items: [
            { id: '4.2.3-4', label: 'Complete first annual review and establish baseline.' },
            { id: '4.2.3-M4', label: 'Milestone M4: Baseline Compliance Data Established (2027 Q4).' }
        ]}
    ],
    '4.3.1': [
        { name: "Phase 1: Research (2026 Q1 – Q3)", items: [
            { id: '4.3.1-1', label: 'Hydrological studies to justify increased design standards.' },
            { id: '4.3.1-M1', label: 'Milestone M1: Draft Revised Standards Prepared (2026 Q3).' }
        ]},
        { name: "Phase 2: Approval (2026 Q4 – 2027 Q1)", items: [
            { id: '4.3.1-2', label: 'Endorsement from State Technical Committee.' },
            { id: '4.3.1-M2', label: 'Milestone M2: Standards Officially Approved (2027 Q1).' }
        ]},
        { name: "Phase 3: Rollout (2027 Q2 – Q4)", items: [
            { id: '4.3.1-3', label: 'Standards mandatory for all Project Briefs.' },
            { id: '4.3.1-M3', label: 'Milestone M3: Standards Mandatory & Staff Trained (2027 Q4).' }
        ]},
        { name: "Phase 4: Compliance (2028)", items: [
            { id: '4.3.1-4', label: 'Achieve 80% compliance rate for new projects.' },
            { id: '4.3.1-M4', label: 'Milestone M4: 80% Project Compliance Achieved (2028).' }
        ]}
    ],
    '4.3.2': [
        { name: "Phase 1: Site ID (2025 Q4 – 2026 Q2)", items: [
            { id: '4.3.2-1', label: 'Identify 50 critical flood-prone bridge locations.' },
            { id: '4.3.2-M1', label: 'Milestone M1: Monitoring Sites & Tech Specs Finalized (2026 Q2).' }
        ]},
        { name: "Phase 2: Pilot (2026 Q3 – 2027 Q1)", items: [
            { id: '4.3.2-2', label: 'Commission 5-10 pilot stations and test data flow.' },
            { id: '4.3.2-M2', label: 'Milestone M2: Pilot Network Operational & Integrated (2027 Q1).' }
        ]},
        { name: "Phase 3: Full Deployment (2027 Q2 – 2028 Q2)", items: [
            { id: '4.3.2-3', label: 'Roll out remaining 40+ stations across all divisions.' },
            { id: '4.3.2-M3', label: 'Milestone M3: All 50 Stations Installed (2028 Q2).' }
        ]},
        { name: "Phase 4: activation (2028 Q3 – Q4)", items: [
            { id: '4.3.2-4', label: 'Formalize operational protocol with NADMA.' },
            { id: '4.3.2-M4', label: 'Milestone M4: System Operational & Response Protocol Active (2028 Q4).' }
        ]}
    ],
    '4.3.3': [
        { name: "Phase 1: Risk Assessment (2027 Q1 – Q3)", items: [
            { id: '4.3.3-1', label: 'Finalize list of 20 highest-risk slopes along federal routes.' },
            { id: '4.3.3-M1', label: 'Milestone M1: Risk Register & System Design Finalized (2027 Q3).' }
        ]},
        { name: "Phase 2: Pilot (2027 Q4 – 2028 Q2)", items: [
            { id: '4.3.3-2', label: 'Test automated alert workflow on 5 pilot slopes.' },
            { id: '4.3.3-M2', label: 'Milestone M2: Pilot on 5 Slopes Operational (2028 Q2).' }
        ]},
        { name: "Phase 3: Deployment (2028 Q3 – 2029 Q1)", items: [
            { id: '4.3.3-3', label: 'Install monitoring on remaining 15 target slopes.' },
            { id: '4.3.3-M3', label: 'Milestone M3: All 20 High-Risk Slopes Monitored (2029 Q1).' }
        ]},
        { name: "Phase 4: Integration (2029 Q2 – Q3)", items: [
            { id: '4.3.3-4', label: 'Integrate slope data into Slope Safety Management System.' },
            { id: '4.3.3-M4', label: 'Milestone M4: System Integrated & Response Teams Trained (2029 Q3).' }
        ]}
    ],
    '4.3.4': [
        { name: "Phase 1: Standards (2028 Q1 – Q3)", items: [
            { id: '4.3.4-1', label: 'Research and compile a toolkit of design measures.' },
            { id: '4.3.4-M1', label: 'Milestone M1: Design Guide & Pilot Designs Completed (2028 Q3).' }
        ]},
        { name: "Phase 2: Pilot (2028 Q4 – 2030 Q1)", items: [
            { id: '4.3.4-2', label: 'Tender and award pilot resilient road projects.' },
            { id: '4.3.4-M2', label: 'Milestone M2: Pilot Road Projects Constructed (2030 Q1).' }
        ]},
        { name: "Phase 3: Monitoring (2030 Q2 – Q4)", items: [
            { id: '4.3.4-3', label: 'Quantify reduction in flood-related damage vs traditional.' },
            { id: '4.3.4-M3', label: 'Milestone M3: Performance Monitoring Report Finalized (2030 Q4).' }
        ]},
        { name: "Phase 4: Mainstreaming (2030 Q4)", items: [
            { id: '4.3.4-4', label: 'Update Standard Specs to include mandatory resilient design.' },
            { id: '4.3.4-M4', label: 'Milestone M4: Resilient Features Added to Road Standards (2030 Q4).' }
        ]}
    ],
    '4.3.5': [
        { name: "Phase 1: Plan Development (2026 Q1 – Q2)", items: [
            { id: '4.3.5-1', label: 'Draft "Battle Procedures" command structure.' },
            { id: '4.3.5-M1', label: 'Milestone M1: Draft Plan Completed (2026 Q2).' }
        ]},
        { name: "Phase 2: Validation (2026 Q3)", items: [
            { id: '4.3.5-2', label: 'Conduct table-top exercises with Divisional Engineers.' },
            { id: '4.3.5-M2', label: 'Milestone M2: Plan Officially Approved & Distributed (2026 Q3).' }
        ]},
        { name: "Phase 3: Simulation (2026 Q4)", items: [
            { id: '4.3.5-3', label: 'Conduct inaugural state-wide "Exercise Musim Tengkujuh".' },
            { id: '4.3.5-M3', label: 'Milestone M3: First Annual Simulation Exercise Completed (2026 Q4).' }
        ]}
    ],
    '4.3.6': [
        { name: "Phase 1: Framework (2028 Q1 – Q2)", items: [
            { id: '4.3.6-1', label: 'Develop Rapid vs Detailed post-disaster protocol.' },
            { id: '4.3.6-M1', label: 'Milestone M1: Draft Recovery Framework Completed (2028 Q2).' }
        ]},
        { name: "Phase 2: Integration (2028 Q3)", items: [
            { id: '4.3.6-2', label: 'Train Divisional Engineers on framework application.' },
            { id: '4.3.6-M2', label: 'Milestone M2: Framework Training Delivered (2028 Q3).' }
        ]},
        { name: "Phase 3: Finalization (2028 Q4)", items: [
            { id: '4.3.6-3', label: 'Test workflows in annual disaster simulation.' },
            { id: '4.3.6-M3', label: 'Milestone M3: Framework Tested & Officially Activated (2028 Q4).' }
        ]}
    ],
    '4.4.1': [
        { name: "Phase 1: Standardization (2026 Q1 – Q3)", items: [
            { id: '4.4.1-1', label: 'Draft mandatory "Pollution Control Clause" for contracts.' },
            { id: '4.4.1-M1', label: 'Milestone M1: Mandatory Clause in All New Tenders (2026 Q3).' }
        ]},
        { name: "Phase 2: Monitoring (2026 Q4 – 2027 Q3)", items: [
            { id: '4.4.1-2', label: 'Third NCR triggers automatic review by Safety Tribunal.' },
            { id: '4.4.1-M2', label: 'Milestone M2: "Three Strikes" Enforcement Protocol Active (2027 Q3).' }
        ]},
        { name: "Phase 3: Reporting (2027 Q4)", items: [
            { id: '4.4.1-3', label: 'Establish public transparency benchmark for site compliance.' },
            { id: '4.4.1-M3', label: 'Milestone M3: Annual Compliance Report Published (2027 Q4).' }
        ]}
    ],
    '4.4.2': [
        { name: "Phase 1: Species Selection (2027 Q1 – Q3)", items: [
            { id: '4.4.2-1', label: 'Identify priority eroded river mouth sites with DID.' },
            { id: '4.4.2-M1', label: 'Milestone M1: Planting Master Plan Finalized (2027 Q3).' }
        ]},
        { name: "Phase 2: Pilot (2027 Q4 – 2028 Q2)", items: [
            { id: '4.4.2-2', label: 'Initial survival rate >70% for high-priority sites.' },
            { id: '4.4.2-M2', label: 'Milestone M2: Pilot Planting Successfully Completed (2028 Q2).' }
        ]},
        { name: "Phase 3: Expansion (2028 Q3 – 2029 Q2)", items: [
            { id: '4.4.2-3', label: 'All identified target Master Plan sites planted.' },
            { id: '4.4.2-M3', label: 'Milestone M3: All Target Sites Planted (2029 Q2).' }
        ]},
        { name: "Phase 4: Monitoring (2029 Q3 – Q4)", items: [
            { id: '4.4.2-4', label: 'Monitoring protocol active for carbon sequestration.' },
            { id: '4.4.2-M4', label: 'Milestone M4: Long-Term Monitoring Established & Report Published (2029 Q4).' }
        ]}
    ],
    '4.4.3': [
        { name: "Phase 1: Guidelines (2028 Q1 – Q3)", items: [
            { id: '4.4.3-1', label: 'Define standards for green roofs and shade trees.' },
            { id: '4.4.3-M1', label: 'Milestone M1: Guidelines & Pilot Site List Finalized (2028 Q3).' }
        ]},
        { name: "Phase 2: Implementation (2028 Q4 – 2029 Q3)", items: [
            { id: '4.4.3-2', label: 'Execute planting for 3-5 high-profile pilot buildings.' },
            { id: '4.4.3-M2', label: 'Milestone M2: Pilot Projects Constructed (2029 Q3).' }
        ]},
        { name: "Phase 3: Mainstreaming (2029 Q4 – 2030 Q3)", items: [
            { id: '4.4.3-3', label: 'Update Building Planning Guidelines to include greening.' },
            { id: '4.4.3-M3', label: 'Milestone M3: Greening Criteria in Building Design Standards (2030 Q3).' }
        ]},
        { name: "Phase 4: Asset Integration (2030 Q4)", items: [
            { id: '4.4.3-4', label: 'Incorporate into standard maintenance schedules for FMUs.' },
            { id: '4.4.3-M4', label: 'Milestone M4: Greening Integrated into FMU Maintenance Plans (2030 Q4).' }
        ]}
    ],
    '4.4.4': [
        { name: "Phase 1: Policy Update (2026 Q1)", items: [
            { id: '4.4.4-1', label: 'Mandate EIA concurrent with Feasibility for projects >RM50m.' },
            { id: '4.4.4-M1', label: 'Milestone M1: Policy Mandating Early EIA Issued (2026 Q1).' }
        ]},
        { name: "Phase 2: Integration (2026 Q2 – Ongoing)", items: [
            { id: '4.4.4-2', label: 'Integrate EIA checklist into "Pre-design Checklist".' },
            { id: '4.4.4-M2', label: 'Milestone M2: EIA Integrated into Feasibility Gate Process (2026 Q2).' }
        ]},
        { name: "Phase 3: Compliance (2026 Q4 – Annually)", items: [
            { id: '4.4.4-3', label: '100% Annual Compliance verified and reported.' },
            { id: '4.4.4-M3', label: 'Milestone M3: 100% Annual Compliance Verified (2026 Q4 (and annually)).' }
        ]}
    ],
    '4.4.5': [
        { name: "Phase 1: Curriculum (2026 Q1)", items: [
            { id: '4.4.5-1', label: 'Site-focused curriculum covering SWMP enforcement.' },
            { id: '4.4.5-M1', label: 'Milestone M1: Training Curriculum Finalized (2026 Q1).' }
        ]},
        { name: "Phase 2: Pilot Delivery (2026 Q2)", items: [
            { id: '4.4.5-2', label: 'Deliver training to pilot group from 3 divisions.' },
            { id: '4.4.5-M2', label: 'Milestone M2: Pilot Training Delivered & Refined (2026 Q2).' }
        ]},
        { name: "Phase 3: Rollout (2026 Q3 – Q4)", items: [
            { id: '4.4.5-3', label: 'Certify all site supervision staff across JKR and consultants.' },
            { id: '4.4.5-M3', label: 'Milestone M3: Full Rollout to Target Staff Completed (2026 Q4).' }
        ]},
        { name: "Phase 4: Impact (2026 Q4)", items: [
            { id: '4.4.5-4', label: 'Assess measurable reduction in violations on trained sites.' },
            { id: '4.4.5-M4', label: 'Milestone M4: Positive Impact on Compliance Verified (2026 Q4).' }
        ]}
    ],
    '4.4.6': [
        { name: "Phase 1: Material Development (2026 Q1 – Q2)", items: [
            { id: '4.4.6-1', label: 'Produce case study videos on green material efficiency.' },
            { id: '4.4.6-M1', label: 'Milestone M1: Campaign Strategy & Materials Finalized (2026 Q2).' }
        ]},
        { name: "Phase 2: Engagement (2026 Q3 – 2027 Q1)", items: [
            { id: '4.4.6-2', label: 'Minimum of 10 major engagement sessions conducted.' },
            { id: '4.4.6-M2', label: 'Milestone M2: First Wave of Engagement Sessions Completed (2027 Q1).' }
        ]},
        { name: "Phase 3: Partnerships (2027 Q2 – Q3)", items: [
            { id: '4.4.6-3', label: 'Highlight tender advantages for sustainable practices.' },
            { id: '4.4.6-M3', label: 'Milestone M3: Business & Partnership Messaging Promoted (2027 Q3).' }
        ]},
        { name: "Phase 4: Measurement (2027 Q4)", items: [
            { id: '4.4.6-4', label: 'Impact on industry perception and hard IBS adoption data.' },
            { id: '4.4.6-M4', label: 'Milestone M4: Impact on Industry Perception & Practice Measured (2027 Q4).' }
        ]}
    ],
    '4.4.7': [
        { name: "Phase 1: Integration (2027 Q1)", items: [
            { id: '4.4.7-1', label: 'Design user journey within MyJKR App.' },
            { id: '4.4.7-M1', label: 'Milestone M1: Module Design & Workflow Plan Finalized (2027 Q1).' }
        ]},
        { name: "Phase 2: Testing (2027 Q2)", items: [
            { id: '4.4.7-2', label: 'Ensure automated acknowledgement receipts functionality.' },
            { id: '4.4.7-M2', label: 'Milestone M2: App Module Developed & Tested (2027 Q2).' }
        ]},
        { name: "Phase 3: Launch (2027 Q3)", items: [
            { id: '4.4.7-3', label: 'Public awareness campaign to promote "Environmental Feedback".' },
            { id: '4.4.7-M3', label: 'Milestone M3: Module Launched & Public Awareness Campaign Run (2027 Q3).' }
        ]},
        { name: "Phase 4: SLA Enforcement (2027 Q4)", items: [
            { id: '4.4.7-4', label: 'Monitor >95% compliance with 48h resolution SLA.' },
            { id: '4.4.7-M4', label: 'Milestone M4: >95% Compliance with 48-hour Resolution SLA (2027 Q4).' }
        ]}
    ],
    '4.5.1': [
        { name: "Phase 1: Gap Analysis (2026 Q1 – Q3)", items: [
            { id: '4.5.1-1', label: 'Audit Procedures and Personnel Competency for target labs.' },
            { id: '4.5.1-M1', label: 'Milestone M1: Accreditation Roadmap & Investment Plan Approved (2026 Q3).' }
        ]},
        { name: "Phase 2: Upgrades (2026 Q4 – 2027 Q4)", items: [
            { id: '4.5.1-2', label: 'Implement QMS and conduct intensive internal audits.' },
            { id: '4.5.1-M2', label: 'Milestone M2: Lab Upgrades Complete & QMS Operational (2027 Q4).' }
        ]},
        { name: "Phase 3: Application (2028 Q1 – Q3)", items: [
            { id: '4.5.1-3', label: 'Submit formal application for accreditation to Standards Malaysia.' },
            { id: '4.5.1-M3', label: 'Milestone M3: Formal Accreditation Application Submitted (2028 Q3).' }
        ]},
        { name: "Phase 4: Certification (2028 Q4 – 2029)", items: [
            { id: '4.5.1-4', label: 'Successful accreditation of all 3 target labs.' },
            { id: '4.5.1-M4', label: 'Milestone M4: ISO/IEC 17025 Accreditation Achieved (2029 Q4).' }
        ]}
    ],
    '4.5.2': [
        { name: "Phase 1: Design (2025 Q4 – 2026 Q1)", items: [
            { id: '4.5.2-1', label: 'Define competency profiles for asphalt/concrete technicians.' },
            { id: '4.5.2-M1', label: 'Milestone M1: Manpower Plan & Training Curriculum Finalized (2026 Q1).' }
        ]},
        { name: "Phase 2: Recruitment (2026 Q2 – 2027 Q1)", items: [
            { id: '4.5.2-2', label: 'Enroll first cohort in foundational instrumentation programs.' },
            { id: '4.5.2-M2', label: 'Milestone M2: First Cohort Recruited & in Foundational Training (2027 Q1).' }
        ]},
        { name: "Phase 3: Specialized Training (2027 Q2 – 2028 Q2)", items: [
            { id: '4.5.2-3', label: 'Hands-on training aligned with specific accreditation tests.' },
            { id: '4.5.2-M3', label: 'Milestone M3: Specialized & On-the-Job Training Completed (2028 Q2).' }
        ]},
        { name: "Phase 4: Certification (2028 Q3 – Q4)", items: [
            { id: '4.5.2-4', label: '20 lab technicians certified as competent for accredited operations.' },
            { id: '4.5.2-M4', label: 'Milestone M4: 20 Technicians Competency-Certified (2028 Q4).' }
        ]}
    ],
    '4.5.3': [
        { name: "Phase 1: Outreach (2027 Q1 – Q3)", items: [
            { id: '4.5.3-1', label: 'Develop framework for engaging and pre-approving 3rd party labs.' },
            { id: '4.5.3-M1', label: 'Milestone M1: Engagement Framework Published (2027 Q3).' }
        ]},
        { name: "Phase 2: Pilot Engagement (2027 Q4 – 2028 Q4)", items: [
            { id: '4.5.3-2', label: 'Pilot use on selected non-critical projects.' },
            { id: '4.5.3-M2', label: 'Milestone M2: Pilot with Accredited Private Labs Completed (2028 Q4).' }
        ]},
        { name: "Phase 3: Panel (2029)", items: [
            { id: '4.5.3-3', label: 'Establish formal "JKR Recognized Laboratory Panel".' },
            { id: '4.5.3-M3', label: 'Milestone M3: Approved Laboratory Panel Operational (2029 Q4).' }
        ]},
        { name: "Phase 4: Functional (2030)", items: [
            { id: '4.5.3-4', label: 'Sustainable ecosystem of JKR and private labs functioning.' },
            { id: '4.5.3-M4', label: 'Milestone M4: Public-Private Lab Ecosystem Functional (2030).' }
        ]}
    ],

    // ==================================================================================
    // PILLAR 5: TALENT & ORGANISATIONAL EXCELLENCE
    // ==================================================================================
    '5.1.1': [
        { name: "Phase 1: Setup (2025 Q1 – Q2)", items: [
            { id: '5.1.1-1', label: 'Finalize core modules: Project Software, Contract Admin, QAQC.' },
            { id: '5.1.1-M1', label: 'Milestone M1: Training curriculum and digital tracking system ready (2025 Q2).' }
        ]},
        { name: "Phase 2: Launch (2025 Q3)", items: [
            { id: '5.1.1-2', label: 'Issue Director\'s Circular formally mandating training.' },
            { id: '5.1.1-M2', label: 'Milestone M2: Mandate Officially Launched (2025 Q3).' }
        ]},
        { name: "Phase 3: Compliance (2025 Q4 – Ongoing)", items: [
            { id: '5.1.1-3', label: 'Monthly compliance dashboards for department heads.' },
            { id: '5.1.1-M3', label: 'Milestone M3: 100% Annual Compliance Achieved (2025 Q4 (and annually)).' }
        ]}
    ],
    '5.1.2': [
        { name: "Phase 1: Framework (2025 Q2 – Q4)", items: [
            { id: '5.1.2-1', label: 'Design 3-year rotation: HQ Design -> Site -> Policy.' },
            { id: '5.1.2-M1', label: 'Milestone M1: First YEP Cohort Recruited (2025 Q4).' }
        ]},
        { name: "Phase 2: Rotation (2026 – 2028)", items: [
            { id: '5.1.2-2', label: 'Complete full 3-year rotation cycle for first cohort.' },
            { id: '5.1.2-M2', label: 'Milestone M2: First Cohort Completes Full Rotation Cycle (2028).' }
        ]},
        { name: "Phase 3: Integration (2029)", items: [
            { id: '5.1.2-3', label: '100 YEPs recruited and program institutionalized.' },
            { id: '5.1.2-M3', label: 'Milestone M3: 100 YEPs Recruited & Program Institutionalized (2029).' }
        ]}
    ],
    '5.1.3': [
        { name: "Phase 1: Design (2025 Q3 – Q4)", items: [
            { id: '5.1.3-1', label: 'Audit current status and establish CIDB partnerships.' },
            { id: '5.1.3-M1', label: 'Milestone M1: Gap Analysis & Training Pathway Finalized (2025 Q4).' }
        ]},
        { name: "Phase 2: Mandate (2026 Q1 – 2027 Q2)", items: [
            { id: '5.1.3-2', label: 'Roll out phased training schedule for incumbents.' },
            { id: '5.1.3-M2', label: 'Milestone M2: All Targeted Staff Enrolled in Certification (2027 Q2).' }
        ]},
        { name: "Phase 3: Integration (2027 Q3 – Q4)", items: [
            { id: '5.1.3-3', label: 'CCPM Level 6 as formal requirement in promotion criteria.' },
            { id: '5.1.3-M3', label: 'Milestone M3: 100% Compliance Achieved & Integrated into HR Policy (2027 Q4).' }
        ]}
    ],
    '5.1.4': [
        { name: "Phase 1: Post Creation (2025 Q4 – 2026 Q1)", items: [
            { id: '5.1.4-1', label: 'Secure JPA approval and funding for 12 new posts.' },
            { id: '5.1.4-M1', label: 'Milestone M1: 12 SHO Posts Officially Created & Funded (2026 Q1).' }
        ]},
        { name: "Phase 2: Recruitment (2026 Q2 – Q3)", items: [
            { id: '5.1.4-2', label: 'Select 12 candidates with construction experience.' },
            { id: '5.1.4-M2', label: 'Milestone M2: Candidates for All 12 Posts Selected (2026 Q3).' }
        ]},
        { name: "Phase 3: Deployment (2026 Q4 – 2027 Q2)", items: [
            { id: '5.1.4-3', label: 'SHOs operational and integrated into divisional meetings.' },
            { id: '5.1.4-M3', label: 'Milestone M3: SHOs Deployed and Operational in All Divisions (2027 Q2).' }
        ]},
        { name: "Phase 4: Benchmarking (2027 Q3 – Q4)", items: [
            { id: '5.1.4-4', label: 'Initial performance impact assessment report completed.' },
            { id: '5.1.4-M4', label: 'Milestone M4: First Performance Impact Assessment Completed (2027 Q4).' }
        ]}
    ],
    '5.1.5': [
        { name: "Phase 1: Framework (2027 Q1 – Q2)", items: [
            { id: '5.1.5-1', label: 'Define profile and select CAAM certified provider.' },
            { id: '5.1.5-M1', label: 'Milestone M1: Training Framework & Data Protocol Finalized (2027 Q2).' }
        ]},
        { name: "Phase 2: Pilot (2027 Q3 – Q4)", items: [
            { id: '5.1.5-2', label: 'First cohort of 25 pilots certified; pilot project executed.' },
            { id: '5.1.5-M2', label: 'Milestone M2: First Cohort (25 Pilots) Certified & Pilot Project Completed (2027 Q4).' }
        ]},
        { name: "Phase 3: System (2028 Q1 – Q2)", items: [
            { id: '5.1.5-3', label: 'Finalize integration of drone data workflows into JKR Dash.' },
            { id: '5.1.5-M3', label: 'Milestone M3: 50 Pilots Certified & Workflow Integrated into JKR Dash (2028 Q2).' }
        ]},
        { name: "Phase 4: Deployment (2028 Q3 – Q4)", items: [
            { id: '5.1.5-4', label: 'Drones in regular use for major projects and routine inspections.' },
            { id: '5.1.5-M4', label: 'Milestone M4: Drones in Regular Operational Use (2028 Q4).' }
        ]}
    ],
    '5.1.6': [
        { name: "Phase 1: Needs Scoping (2026 Q1 – Q2)", items: [
            { id: '5.1.6-1', label: 'Design 10 specific expert roles (AI, ESG, etc.).' },
            { id: '5.1.6-M1', label: 'Milestone M1: Expert Role Profiles & Strategy Finalized (2026 Q2).' }
        ]},
        { name: "Phase 2: Recruitment (2026 Q3 – 2027 Q1)", items: [
            { id: '5.1.6-2', label: 'International campaign through professional networks.' },
            { id: '5.1.6-M2', label: 'Milestone M2: 10 Global Experts Contracted (2027 Q1).' }
        ]},
        { name: "Phase 3: Onboarding (2027 Q2 – Q3)", items: [
            { id: '5.1.6-3', label: '24-month knowledge transfer plans active for all experts.' },
            { id: '5.1.6-M3', label: 'Milestone M3: Knowledge Transfer Plans Active (2027 Q3).' }
        ]},
        { name: "Phase 4: Early Impact (2027 Q4)", items: [
            { id: '5.1.6-4', label: 'First formal review demonstrates positive trajectory.' },
            { id: '5.1.6-M4', label: 'Milestone M4: First Programme Impact Review Completed (2027 Q4).' }
        ]}
    ],
    '5.2.1': [
        { name: "Phase 1: Design (2025 Q4 – 2026 Q2)", items: [
            { id: '5.2.1-1', label: 'Define mandatory "badges" required for each level.' },
            { id: '5.2.1-M1', label: 'Milestone M1: Draft Career Framework Completed (2026 Q2).' }
        ]},
        { name: "Phase 2: Gazette (2026 Q3 – Q4)", items: [
            { id: '5.2.1-2', label: 'Obtain official gazettement as governing policy.' },
            { id: '5.2.1-M2', label: 'Milestone M2: Framework Officially Gazetted by SPA (2026 Q4).' }
        ]},
        { name: "Phase 3: Planning (2027 Q1 – Q2)", items: [
            { id: '5.2.1-3', label: 'Transition plan for current staff including gap assessments.' },
            { id: '5.2.1-M3', label: 'Milestone M3: Staff Awareness Campaign & Transition Plans Complete (2027 Q2).' }
        ]},
        { name: "Phase 4: Implementation (2027 Q3 – Q4)", items: [
            { id: '5.2.1-4', label: 'First competency-based promotion cycle successfully executed.' },
            { id: '5.2.1-M4', label: 'Milestone M4: First Promotion Cycle Under New Framework Executed (2027 Q4).' }
        ]}
    ],
    '5.2.2': [
        { name: "Phase 1: Metrics (2026 Q1 – Q3)", items: [
            { id: '5.2.2-1', label: 'Obtain initial feedback from focus groups.' },
            { id: '5.2.2-M1', label: 'Milestone M1: Values-Based LNPT Metrics & Form Designed (2026 Q3).' }
        ]},
        { name: "Phase 2: Pilot (2026 Q4 – 2027 Q2)", items: [
            { id: '5.2.2-2', label: 'Conduct pilot with select group (one division, HQ heads).' },
            { id: '5.2.2-M2', label: 'Milestone M2: Pilot Program Completed & System Refined (2027 Q2).' }
        ]},
        { name: "Phase 3: Rollout (2027 Q3 – 2028 Q1)", items: [
            { id: '5.2.2-3', label: 'First full cycle under new system completed.' },
            { id: '5.2.2-M3', label: 'Milestone M3: First Full Organization-Wide Appraisal Cycle Completed (2028 Q1).' }
        ]},
        { name: "Phase 4: Enforcement (2028 Q2 – Q4)", items: [
            { id: '5.2.2-4', label: 'Values-based assessment visibly influencing outcomes.' },
            { id: '5.2.2-M4', label: 'Milestone M4: Values Assessment Actively Influencing Performance Ratings (2028 Q4).' }
        ]}
    ],
    '5.2.3': [
        { name: "Phase 1: Framework (2026 Q1 – Q2)", items: [
            { id: '5.2.3-1', label: 'Define clear, transparent criteria for HIPO status.' },
            { id: '5.2.3-M1', label: 'Milestone M1: HIPO Identification Framework Finalized (2026 Q2).' }
        ]},
        { name: "Phase 2: Selection (2026 Q3 – 2027 Q1)", items: [
            { id: '5.2.3-2', label: 'First cohort formally identified and notified.' },
            { id: '5.2.3-M2', label: 'Milestone M2: First HIPO Cohort Formally Identified (2027 Q1).' }
        ]},
        { name: "Phase 3: IDPs (2027 Q2 – Q4)", items: [
            { id: '5.2.3-3', label: 'Personalized development plans active for first cohort.' },
            { id: '5.2.3-M3', label: 'Milestone M3: Individual Development Plans Active for First Cohort (2027 Q4).' }
        ]},
        { name: "Phase 4: Integration (2028)", items: [
            { id: '5.2.3-4', label: 'Program feeding directly into annual succession plans.' },
            { id: '5.2.3-M4', label: 'Milestone M4: Programme Institutionalized into Annual Succession Planning (2028).' }
        ]}
    ],
    '5.2.4': [
        { name: "Phase 1: Design (2027 Q1)", items: [
            { id: '5.2.4-1', label: 'Matching criteria and structure developed.' },
            { id: '5.2.4-M1', label: 'Milestone M1: Programme Structure & Guides Developed (2027 Q1).' }
        ]},
        { name: "Phase 2: Mentors (2027 Q2)", items: [
            { id: '5.2.4-2', label: 'Recruit and train pool of senior engineers as mentors.' },
            { id: '5.2.4-M2', label: 'Milestone M2: Mentor Pool Recruited and Trained (2027 Q2).' }
        ]},
        { name: "Phase 3: Launch (2027 Q3)", items: [
            { id: '5.2.4-3', label: 'Programs officially launched with initial pairs matched.' },
            { id: '5.2.4-M3', label: 'Milestone M3: Programmes Launched with Initial Matches (2027 Q3).' }
        ]},
        { name: "Phase 4: Review (2027 Q4)", items: [
            { id: '5.2.4-4', label: 'First cycle of monitoring and surveys completed.' },
            { id: '5.2.4-M4', label: 'Milestone M4: First Monitoring Cycle Completed (2027 Q4).' }
        ]}
    ],
    '5.2.5': [
        { name: "Phase 1: Development (2027 Q1 – Q3)", items: [
            { id: '5.2.5-1', label: 'Co-develop curriculum for Data Analytics and BIM.' },
            { id: '5.2.5-M1', label: 'Milestone M1: Partnerships Secured & Curriculum Developed (2027 Q3).' }
        ]},
        { name: "Phase 2: Pilot (2027 Q4 – 2028 Q3)", items: [
            { id: '5.2.5-2', label: 'First 2-3 pilot cohorts complete training.' },
            { id: '5.2.5-M2', label: 'Milestone M2: Pilot Cohorts Successfully Complete Training (2028 Q3).' }
        ]},
        { name: "Phase 3: Scale (2028 Q4 – 2029 Q3)", items: [
            { id: '5.2.5-3', label: 'Academy operating at full scale: 200 graduates/year.' },
            { id: '5.2.5-M3', label: 'Milestone M3: Full-Scale Operation: 200 Graduates/Year (2029 Q3).' }
        ]},
        { name: "Phase 4: Impact (2029 Q4)", items: [
            { id: '5.2.5-4', label: 'Impact validated; future roadmap defined.' },
            { id: '5.2.5-M4', label: 'Milestone M4: Impact Assessment and Future Roadmap Defined (2029 Q4).' }
        ]}
    ],
    '5.3.1': [
        { name: "Phase 1: Blueprint (2026 Q1 – Q3)", items: [
            { id: '5.3.1-1', label: 'Identify gaps (lack of Digital Units) and redundancies.' },
            { id: '5.3.1-M1', label: 'Milestone M1: Proposed New Organizational Structure Blueprint Finalized (2026 Q3).' }
        ]},
        { name: "Phase 2: Refinement (2026 Q4)", items: [
            { id: '5.3.1-2', label: 'Final draft incorporates Director\'s endorsement.' },
            { id: '5.3.1-M2', label: 'Milestone M2: Final Draft Endorsed by Director (2026 Q4).' }
        ]},
        { name: "Phase 3: Approval (2027 Q1 – Q2)", items: [
            { id: '5.3.1-3', label: 'New Organizational Chart officially approved by JPA.' },
            { id: '5.3.1-M3', label: 'Milestone M3: Official Approval Received from JPA (2027 Q2).' }
        ]},
        { name: "Phase 4: Planning (2027 Q3 – Q4)", items: [
            { id: '5.3.1-4', label: 'Implementation and communication plan for new structure ready.' },
            { id: '5.3.1-M4', label: 'Milestone M4: Implementation & Communication Plan Ready (2027 Q4).' }
        ]}
    ],
    '5.3.2': [
        { name: "Phase 1: Definition (2026 Q1 – Q2)", items: [
            { id: '5.3.2-1', label: 'Draft business cases for priority new roles.' },
            { id: '5.3.2-M1', label: 'Milestone M1: Job Descriptions & Business Cases Completed (2026 Q2).' }
        ]},
        { name: "Phase 2: Submission (2026 Q3 – Q4)", items: [
            { id: '5.3.2-2', label: 'Secure formal creation and grading of new posts.' },
            { id: '5.3.2-M2', label: 'Milestone M2: New Posts Officially Created by JPA (2026 Q4).' }
        ]},
        { name: "Phase 3: Onboarding (2027 Q1 – Q3)", items: [
            { id: '5.3.2-3', label: 'Priority new positions filled with qualified staff.' },
            { id: '5.3.2-M3', label: 'Milestone M3: Priority New Positions Filled (2027 Q3).' }
        ]},
        { name: "Phase 4: Integration (2027 Q4)", items: [
            { id: '5.3.2-4', label: 'Clear career progression pathways defined.' },
            { id: '5.3.2-M4', label: 'Milestone M4: Career Pathways Defined & Integrated (2027 Q4).' }
        ]}
    ],
    '5.3.3': [
        { name: "Phase 1: Design (2025 Q4 – 2026 Q2)", items: [
            { id: '5.3.3-1', label: 'Tender and select an FMS vendor.' },
            { id: '5.3.3-M1', label: 'Milestone M1: FMS Vendor Selected & Plan Approved (2026 Q2).' }
        ]},
        { name: "Phase 2: Pilot (2026 Q3 – Q4)", items: [
            { id: '5.3.3-2', label: 'Pilot successful; operational and monitoring vehicles.' },
            { id: '5.3.3-M2', label: 'Milestone M2: Fleet Hub Operational & Pilot Complete (2026 Q4).' }
        ]},
        { name: "Phase 3: Rollout (2027 Q1 – Q3)", items: [
            { id: '5.3.3-3', label: '100% of JKR fleet GPS-tagged and in system.' },
            { id: '5.3.3-M3', label: 'Milestone M3: 100% of Fleet GPS-Tagged & in System (2027 Q3).' }
        ]},
        { name: "Phase 4: Enforcement (2027 Q4)", items: [
            { id: '5.3.3-4', label: 'Measurable cost reductions demonstrated.' },
            { id: '5.3.3-M4', label: 'Milestone M4: Measurable Cost Reductions Demonstrated (2027 Q4).' }
        ]}
    ],
    '5.3.4': [
        { name: "Phase 1: Policy (2027 Q1 – Q3)", items: [
            { id: '5.3.4-1', label: 'Draft Machinery Modernization Policy finalized.' },
            { id: '5.3.4-M1', label: 'Milestone M1: Draft Machinery Modernization Policy Finalized (2027 Q3).' }
        ]},
        { name: "Phase 2: Inventory (2027 Q4 – 2028 Q1)", items: [
            { id: '5.3.4-2', label: 'Establish contractor database and identify first retirement list.' },
            { id: '5.3.4-M2', label: 'Milestone M2: Contractor Inventory Database & First Retirement List Ready (2028 Q1).' }
        ]},
        { name: "Phase 3: Implementation (2028 Q2)", items: [
            { id: '5.3.4-3', label: 'Policy integrated into tenders and actively enforced.' },
            { id: '5.3.4-M3', label: 'Milestone M3: Policy Integrated into Tenders and Actively Enforced (2028 Q2).' }
        ]},
        { name: "Phase 4: Impact (2030 Q4)", items: [
            { id: '5.3.4-4', label: 'Review shows positive results on efficiency and safety.' },
            { id: '5.3.4-M4', label: 'Milestone M4: Impact Review Shows Positive Results on Efficiency/Safety (2030 Q4).' }
        ]}
    ],
    '5.3.5': [
        { name: "Phase 1: Design (2027 Q1 – Q2)", items: [
            { id: '5.3.5-1', label: 'Platform design and asset cataloging finalized.' },
            { id: '5.3.5-M1', label: 'Milestone M1: Platform Design & Asset Catalog Finalized (2027 Q2).' }
        ]},
        { name: "Phase 2: Pilot (2027 Q3 – Q4)", items: [
            { id: '5.3.5-2', label: 'Pilot successfully completed in 2-3 divisions.' },
            { id: '5.3.5-M2', label: 'Milestone M2: Pilot Successfully Completed in 2-3 Divisions (2027 Q4).' }
        ]},
        { name: "Phase 3: Rollout (2028 Q1 – Q2)", items: [
            { id: '5.3.5-3', label: 'Platform fully operational across all of JKR.' },
            { id: '5.3.5-M3', label: 'Milestone M3: Platform Fully Operational Across JKR (2028 Q2).' }
        ]},
        { name: "Phase 4: Verification (2028 Q3 – Q4)", items: [
            { id: '5.3.5-4', label: '20% increase in asset utilization verified.' },
            { id: '5.3.5-M4', label: 'Milestone M4: 20% Increase in Asset Utilization Verified (2028 Q4).' }
        ]}
    ],
    '5.3.6': [
        { name: "Phase 1: Template (2025 Q4 – 2026 Q1)", items: [
            { id: '5.3.6-1', label: 'PCDS Alignment Framework & Template finalized.' },
            { id: '5.3.6-M1', label: 'Milestone M1: PCDS Alignment Framework & Template Finalized (2026 Q1).' }
        ]},
        { name: "Phase 2: Integration (2026 Q2 – Q3)", items: [
            { id: '5.3.6-2', label: 'Mandate issued and staff training completed.' },
            { id: '5.3.6-M2', label: 'Milestone M2: Mandate Issued & Staff Training Completed (2026 Q3).' }
        ]},
        { name: "Phase 3: Submission (2026 Q4 – 2027 Q2)", items: [
            { id: '5.3.6-3', label: 'First PCDS-aligned budget submitted to State.' },
            { id: '5.3.6-M3', label: 'Milestone M3: First PCDS-Aligned Budget Submitted to State (2027 Q2).' }
        ]},
        { name: "Phase 4: institutional (2027 Q3 – Q4)", items: [
            { id: '5.3.6-4', label: 'Process institutionalized; advocacy strengthened.' },
            { id: '5.3.6-M4', label: 'Milestone M4: Process Institutionalized; Advocacy Strengthened (2027 Q4).' }
        ]}
    ],
    '5.4.1': [
        { name: "Phase 1: Design (2026 Q1)", items: [
            { id: '5.4.1-1', label: 'Awards framework finalized and approved.' },
            { id: '5.4.1-M1', label: 'Milestone M1: Awards Framework Finalized (2026 Q1).' }
        ]},
        { name: "Phase 2: Nominations (2026 Q3)", items: [
            { id: '5.4.1-2', label: 'First nomination cycle completed.' },
            { id: '5.4.1-M2', label: 'Milestone M2: First Nomination Cycle Completed (2026 Q3).' }
        ]},
        { name: "Phase 3: Ceremony (2026 Q4)", items: [
            { id: '5.4.1-3', label: 'Inaugural awards ceremony successfully held.' },
            { id: '5.4.1-M3', label: 'Milestone M3: Inaugural Awards Ceremony Successfully Held (2026 Q4).' }
        ]}
    ],
    '5.4.2': [
        { name: "Phase 1: criteria (2026 Q1)", items: [
            { id: '5.4.2-1', label: 'Selection process and criteria formalized.' },
            { id: '5.4.2-M1', label: 'Milestone M1: Selection Process & Criteria Formalized (2026 Q1).' }
        ]},
        { name: "Phase 2: Portfolio (2026 Q4)", items: [
            { id: '5.4.2-2', label: 'First annual portfolio published and shared.' },
            { id: '5.4.2-M2', label: 'Milestone M2: First Annual Portfolio Published & Shared (2026 Q4).' }
        ]},
        { name: "Phase 3: Integration (2027 Q1)", items: [
            { id: '5.4.2-3', label: 'Knowledge from showcases integrated into training.' },
            { id: '5.4.2-M3', label: 'Milestone M3: Knowledge from Showcases Integrated into Training (2027 Q1).' }
        ]}
    ],
    '5.4.3': [
        { name: "Phase 1: planning (2026 Q1)", items: [
            { id: '5.4.3-1', label: 'Series creative brief and production plan finalized.' },
            { id: '5.4.3-M1', label: 'Milestone M1: Series Creative Brief & Production Plan Finalized (2026 Q1).' }
        ]},
        { name: "Phase 2: Launch (2026 Q3)", items: [
            { id: '5.4.3-2', label: 'First episode launched successfully.' },
            { id: '5.4.3-M2', label: 'Milestone M2: First Episode Launched Successfully (2026 Q3).' }
        ]},
        { name: "Phase 3: quarterly (2026 Q4)", items: [
            { id: '5.4.3-3', label: 'Series established with regular quarterly releases.' },
            { id: '5.4.3-M3', label: 'Milestone M3: Series Established with Regular Quarterly Releases (2026 Q4).' }
        ]},
        { name: "Phase 4: impact (2027 Q4)", items: [
            { id: '5.4.3-4', label: 'Positive impact on morale and perception confirmed.' },
            { id: '5.4.3-M4', label: 'Milestone M4: Positive Impact on Morale & Perception Confirmed (2027 Q4).' }
        ]}
    ],

    // ==================================================================================
    // PILLAR 6: GLOBAL POSITIONING & PARTNERSHIPS
    // ==================================================================================
    '6.1.1': [
        { name: "Phase 1: Metrics (2026 Q1)", items: [
            { id: '6.1.1-1', label: 'Benchmarking peers and KPIs finalized.' },
            { id: '6.1.1-M1', label: 'Milestone M1: Benchmarking Peers & KPIs Finalized (2026 Q1).' }
        ]},
        { name: "Phase 2: Gap (2026 Q3)", items: [
            { id: '6.1.1-2', label: 'Initial data collection and gap analysis completed.' },
            { id: '6.1.1-M2', label: 'Milestone M2: Initial Data Collection & Gap Analysis Completed (2026 Q3).' }
        ]},
        { name: "Phase 3: Framework (2027 Q1)", items: [
            { id: '6.1.1-3', label: 'Benchmarking framework and draft report completed.' },
            { id: '6.1.1-M3', label: 'Milestone M3: Benchmarking Framework & Draft Report Completed (2027 Q1).' }
        ]},
        { name: "Phase 4: Action (2027 Q2)", items: [
            { id: '6.1.1-4', label: 'Framework endorsed by SSC; improvement plans initiated.' },
            { id: '6.1.1-M4', label: 'Milestone M4: Framework Endorsed by SSC; Improvement Plans Initiated (2027 Q2).' }
        ]}
    ],
    '6.1.2': [
        { name: "Phase 1: calendar (2026 Q1)", items: [
            { id: '6.1.2-1', label: 'Awards strategy and submission calendar finalized.' },
            { id: '6.1.2-M1', label: 'Milestone M1: Awards Strategy & Submission Calendar Finalized (2026 Q1).' }
        ]},
        { name: "Phase 2: cycle (2026 Q4)", items: [
            { id: '6.1.2-2', label: 'First annual submissions (3 entries) completed.' },
            { id: '6.1.2-M2', label: 'Milestone M2: First Annual Submissions (3 entries) Completed (2026 Q4).' }
        ]},
        { name: "Phase 3: position (2027)", items: [
            { id: '6.1.2-3', label: 'First finalist position achieved.' },
            { id: '6.1.2-M3', label: 'Milestone M3: First Finalist Position Achieved (2027).' }
        ]}
    ],
    '6.1.3': [
        { name: "Phase 1: identification (2026 Q1)", items: [
            { id: '6.1.3-1', label: 'Target networks shortlisted and approved.' },
            { id: '6.1.3-M1', label: 'Milestone M1: Target Networks Shortlisted (2026 Q1).' }
        ]},
        { name: "Phase 2: Membership (2026 Q4)", items: [
            { id: '6.1.3-2', label: 'Formal membership secured for selected networks.' },
            { id: '6.1.3-M2', label: 'Milestone M2: Formal Membership Secured (2026 Q4).' }
        ]},
        { name: "Phase 3: Repositories (2027)", items: [
            { id: '6.1.3-3', label: 'Knowledge repository from networks established.' },
            { id: '6.1.3-M3', label: 'Milestone M3: Knowledge Repository from Networks Established (2027).' }
        ]},
        { name: "Phase 4: Adoption (2027 Q4)", items: [
            { id: '6.1.3-4', label: 'First adopted best practice implemented.' },
            { id: '6.1.3-M4', label: 'Milestone M4: First Adopted Best Practice Implemented (2027 Q4).' }
        ]}
    ],
    '6.1.4': [
        { name: "Phase 1: Partners (2027 Q2)", items: [
            { id: '6.1.4-1', label: 'Review scope and peer partners confirmed.' },
            { id: '6.1.4-M1', label: 'Milestone M1: Review Scope & Peer Partners Confirmed (2027 Q2).' }
        ]},
        { name: "Phase 2: Visits (2028 Q2)", items: [
            { id: '6.1.4-2', label: 'Planned peer review visits successfully executed.' },
            { id: '6.1.4-M2', label: 'Milestone M2: Peer Review Visits Executed (2028 Q2).' }
        ]},
        { name: "Phase 3: Plans (2028 Q4)", items: [
            { id: '6.1.4-3', label: 'Management action plans based on reports approved.' },
            { id: '6.1.4-M3', label: 'Milestone M3: Reports Received & Management Action Plans Approved (2028 Q4).' }
        ]},
        { name: "Phase 4: Implement (2029)", items: [
            { id: '6.1.4-4', label: 'Key recommendations implemented across target areas.' },
            { id: '6.1.4-M4', label: 'Milestone M4: Key Recommendations Implemented (2029).' }
        ]}
    ],
    '6.1.5': [
        { name: "Phase 1: Protocol (2026 Q2)", items: [
            { id: '6.1.5-1', label: 'Report template and data protocol finalized.' },
            { id: '6.1.5-M1', label: 'Milestone M1: Report Template & Data Protocol Finalized (2026 Q2).' }
        ]},
        { name: "Phase 2: Compilation (2026 Q4)", items: [
            { id: '6.1.5-2', label: 'First Annual Report (FY2025) finalized and approved.' },
            { id: '6.1.5-M2', label: 'Milestone M2: First Annual Report (FY2025) Finalized & Approved (2026 Q4).' }
        ]},
        { name: "Phase 3: Launch (2027 Q1)", items: [
            { id: '6.1.5-3', label: 'Report publicly launched and distributed.' },
            { id: '6.1.5-M3', label: 'Milestone M3: Report Publicly Launched & Distributed (2027 Q1).' }
        ]}
    ],
    '6.2.1': [
        { name: "Phase 1: Framework (2026 Q2)", items: [
            { id: '6.2.1-1', label: 'Program framework and target partner list finalized.' },
            { id: '6.2.1-M1', label: 'Milestone M1: Program Framework & Partner List Finalized (2026 Q2).' }
        ]},
        { name: "Phase 2: MOUs (2027 Q1)", items: [
            { id: '6.2.1-2', label: 'MOUs signed and first cohort selected.' },
            { id: '6.2.1-M2', label: 'Milestone M2: MOUs Signed & First Cohort Selected (2027 Q1).' }
        ]},
        { name: "Phase 3: Deployment (2027 Q3)", items: [
            { id: '6.2.1-3', label: 'First cohort deployed internationally.' },
            { id: '6.2.1-M3', label: 'Milestone M3: First Cohort Deployed Internationally (2027 Q3).' }
        ]},
        { name: "Phase 4: cycle (2028)", items: [
            { id: '6.2.1-4', label: 'First knowledge exchange cycle completed and evaluated.' },
            { id: '6.2.1-M4', label: 'Milestone M4: Program Review & Institutionalization (2028).' }
        ]}
    ],
    '6.2.2': [
        { name: "Phase 1: platform (2027 Q2)", items: [
            { id: '6.2.2-1', label: 'Methodology and digital platform ready.' },
            { id: '6.2.2-M1', label: 'Milestone M1: Methodology & Digital Platform Ready (2027 Q2).' }
        ]},
        { name: "Phase 2: Hub (2027 Q4)", items: [
            { id: '6.2.2-2', label: 'Hub launched with initial high-quality content load.' },
            { id: '6.2.2-M2', label: 'Milestone M2: Hub Launched with Initial Content (2027 Q4).' }
        ]},
        { name: "Phase 3: training (2028 Q2)", items: [
            { id: '6.2.2-3', label: 'Organization-wide rollout and training complete.' },
            { id: '6.2.2-M3', label: 'Milestone M3: Organization-wide Rollout & Training Complete (2028 Q2).' }
        ]},
        { name: "Phase 4: Impact (2028 Q4)", items: [
            { id: '6.2.2-4', label: 'First annual usage and impact report published.' },
            { id: '6.2.2-M4', label: 'Milestone M4: First Annual Usage & Impact Report Published (2028 Q4).' }
        ]}
    ],
    '6.2.3': [
        { name: "Phase 1: proposals (2026 Q4)", items: [
            { id: '6.2.3-1', label: 'Target partner list and partnership proposal finalized.' },
            { id: '6.2.3-M1', label: 'Milestone M1: Target Partner List & Proposal Finalized (2026 Q4).' }
        ]},
        { name: "Phase 2: MOAs (2027 Q3)", items: [
            { id: '6.2.3-2', label: 'MOAs with 3 partners negotiated and ready.' },
            { id: '6.2.3-M2', label: 'Milestone M2: MOAs Negotiated with 3 Partners (2027 Q3).' }
        ]},
        { name: "Phase 3: Announced (2027 Q4)", items: [
            { id: '6.2.3-3', label: 'Strategic partnerships formally established.' },
            { id: '6.2.3-M3', label: 'Milestone M3: Partnerships Formally Signed and Announced (2027 Q4).' }
        ]},
        { name: "Phase 4: Value (2028)", items: [
            { id: '6.2.3-4', label: 'Partnership activities live and delivering value.' },
            { id: '6.2.3-M4', label: 'Milestone M4: Partnership Activities Live and Delivering Value (2028).' }
        ]}
    ],
    '6.2.4': [
        { name: "Phase 1: Concept (2027 Q1)", items: [
            { id: '6.2.4-1', label: 'Summit concept and committee established.' },
            { id: '6.2.4-M1', label: 'Milestone M1: Summit Concept & Committee Established (2027 Q1).' }
        ]},
        { name: "Phase 2: Marketing (2027 Q3)", items: [
            { id: '6.2.4-2', label: 'Speakers confirmed and registrations open.' },
            { id: '6.2.4-M2', label: 'Milestone M2: Speakers Confirmed & Registrations Open (2027 Q3).' }
        ]},
        { name: "Phase 3: Execution (2027 Q4)", items: [
            { id: '6.2.4-3', label: 'Inaugural summit successfully held with >500 delegates.' },
            { id: '6.2.4-M3', label: 'Milestone M3: Inaugural Summit Successfully Held (2027 Q4).' }
        ]},
        { name: "Phase 4: planning (2028 Q1)", items: [
            { id: '6.2.4-4', label: 'Planning for second annual summit begins.' },
            { id: '6.2.4-M4', label: 'Milestone M4: Planning for Second Annual Summit Begins (2028 Q1).' }
        ]}
    ],
    '6.2.5': [
        { name: "Phase 1: Specs (2027 Q2)", items: [
            { id: '6.2.5-1', label: 'Platform specs finalized and procured.' },
            { id: '6.2.5-M1', label: 'Milestone M1: Platform Specs Finalised & Procured (2027 Q2).' }
        ]},
        { name: "Phase 2: Beta (2028 Q1)", items: [
            { id: '6.2.5-2', label: 'Beta version live with 300+ documents.' },
            { id: '6.2.5-M2', label: 'Milestone M2: Beta Version Live with 300+ Documents (2028 Q1).' }
        ]},
        { name: "Phase 3: Rollout (2028 Q3)", items: [
            { id: '6.2.5-3', label: 'Full rollout and staff training complete.' },
            { id: '6.2.5-M3', label: 'Milestone M3: Full Rollout & Staff Training Complete (2028 Q3).' }
        ]},
        { name: "Phase 4: active (2028 Q4)", items: [
            { id: '6.2.5-4', label: 'Governance model and review cycle active.' },
            { id: '6.2.5-M4', label: 'Milestone M4: Governance Model & Review Cycle Active (2028 Q4).' }
        ]}
    ],
    '6.2.6': [
        { name: "Phase 1: Editorial (2027 Q2)", items: [
            { id: '6.2.6-1', label: 'Editorial framework and submission process live.' },
            { id: '6.2.6-M1', label: 'Milestone M1: Editorial Framework & Submission Process Live (2027 Q2).' }
        ]},
        { name: "Phase 2: Draft (2027 Q3)", items: [
            { id: '6.2.6-2', label: 'Full report draft ready for management review.' },
            { id: '6.2.6-M2', label: 'Milestone M2: Full Draft for Management Review (2027 Q3).' }
        ]},
        { name: "Phase 3: Launch (2027 Q4)", items: [
            { id: '6.2.6-3', label: 'First annual report officially launched and distributed.' },
            { id: '6.2.6-M3', label: 'Milestone M3: Report Officially Launched & Distributed (2027 Q4).' }
        ]},
        { name: "Phase 4: Feedback (2028 Q1)", items: [
            { id: '6.2.6-4', label: 'Feedback integrated into next annual cycle.' },
            { id: '6.2.6-M4', label: 'Milestone M4: Feedback Integrated into Next Cycle (2028 Q1).' }
        ]}
    ],
    '6.2.7': [
        { name: "Phase 1: Case (2028 Q2)", items: [
            { id: '6.2.7-1', label: 'Business case and structure approved by SSC/State.' },
            { id: '6.2.7-M1', label: 'Milestone M1: Business Case & Structure Approved by SSC/State (2028 Q2).' }
        ]},
        { name: "Phase 2: Establishment (2028 Q4)", items: [
            { id: '6.2.7-2', label: 'GSO legally established and team in place.' },
            { id: '6.2.7-M2', label: 'Milestone M2: GSO Legally Established & Team in Place (2028 Q4).' }
        ]},
        { name: "Phase 3: Contracts (2029 Q3)", items: [
            { id: '6.2.7-3', label: 'First international contract secured.' },
            { id: '6.2.7-M3', label: 'Milestone M3: First International Contract Secured (2029 Q3).' }
        ]},
        { name: "Phase 4: Review (2029 Q4)", items: [
            { id: '6.2.7-4', label: 'Year-one review and scaling strategy finalized.' },
            { id: '6.2.7-M4', label: 'Milestone M4: Year-One Review & Scaling Strategy Finalised (2029 Q4).' }
        ]}
    ],
    '6.2.8': [
        { name: "Phase 1: Wins (2029)", items: [
            { id: '6.2.8-1', label: 'GSO achieves its first RM5 million in annual revenue.' },
            { id: '6.2.8-M1', label: 'Milestone M1: First RM5 Million Annual Revenue Achieved (2029).' }
        ]},
        { name: "Phase 2: scaling (2030 H1)", items: [
            { id: '6.2.8-2', label: 'Two major licensing deals or joint ventures established.' },
            { id: '6.2.8-M2', label: 'Milestone M2: Major Licensing/Joint Venture Deals Secured (2030 H1).' }
        ]},
        { name: "Phase 3: acceleration (2030 H2)", items: [
            { id: '6.2.8-3', label: 'GSO annual run-rate revenue projects to exceed RM20 million.' },
            { id: '6.2.8-M3', label: 'Milestone M3: Annual Revenue Run-Rate > RM20 Million (2030 H2).' }
        ]},
        { name: "Phase 4: Target (2030 Q4)", items: [
            { id: '6.2.8-4', label: 'Cumulative RM50 million revenue target achieved and verified.' },
            { id: '6.2.8-M4', label: 'Milestone M4: Cumulative RM50 Million Revenue Target Met (2030 Q4).' }
        ]}
    ],
    '6.3.1': [
        { name: "Phase 1: Blueprint (2026 Q2)", items: [
            { id: '6.3.1-1', label: 'CoE blueprint finalized and accreditation application submitted.' },
            { id: '6.3.1-M1', label: 'Milestone M1: CoE Blueprint Finalised & Accreditation Application Submitted (2026 Q2).' }
        ]},
        { name: "Phase 2: Teams (2027)", items: [
            { id: '6.3.1-2', label: 'Research teams in place and flagship projects launched.' },
            { id: '6.3.1-M2', label: 'Milestone M2: Research Teams in Place & Flagship Projects Launched (2027).' }
        ]},
        { name: "Phase 3: BEM (2028)", items: [
            { id: '6.3.1-3', label: 'BEM accreditation achieved and first patents filed.' },
            { id: '6.3.1-M3', label: 'Milestone M3: BEM Accreditation Achieved & Patents Filed (2028).' }
        ]},
        { name: "Phase 4: Symposium (2028)", items: [
            { id: '6.3.1-4', label: 'First annual symposium held and research-based guidelines issued.' },
            { id: '6.3.1-M4', label: 'Milestone M4: First Annual Symposium Held & Research-Based Guidelines Issued (2028).' }
        ]}
    ],
    '6.3.2': [
        { name: "Phase 1: Design (2028 H2)", items: [
            { id: '6.3.2-1', label: 'Hub design and initial partnerships secured.' },
            { id: '6.3.2-M1', label: 'Milestone M1: Hub Design & Initial Partnerships Secured (2028 H2).' }
        ]},
        { name: "Phase 2: Opens (2029 H1)", items: [
            { id: '6.3.2-2', label: 'Hub facility opens and first pilots begin.' },
            { id: '6.3.2-M2', label: 'Milestone M2: Hub Facility Opens & First Pilots Begin (2029 H1).' }
        ]},
        { name: "Phase 3: Validated (2030)", items: [
            { id: '6.3.2-3', label: 'First technology successfully validated and scaled to project.' },
            { id: '6.3.2-M3', label: 'Milestone M3: First Technology Validated & Scaled to Project (2030).' }
        ]},
        { name: "Phase 4: Model (2030)", items: [
            { id: '6.3.2-4', label: 'Hub operating with a sustainable business model.' },
            { id: '6.3.2-M4', label: 'Milestone M4: Sustainable Operational Model Implemented (2030).' }
        ]}
    ],
    '6.3.3': [
        { name: "Phase 1: Testing (2028 H2)", items: [
            { id: '6.3.3-1', label: 'SGIS Version 1.0 finalized and validated through beta tests.' },
            { id: '6.3.3-M1', label: 'Milestone M1: SGIS Version 1.0 Finalized & Beta-Tested (2028 H2).' }
        ]},
        { name: "Phase 2: accreditation (2029 H1)", items: [
            { id: '6.3.3-2', label: 'Public launch and assessor accreditation program live.' },
            { id: '6.3.3-M2', label: 'Milestone M2: Public Launch & Assessor Accreditation Program Live (2029 H1).' }
        ]},
        { name: "Phase 3: Target (2030)", items: [
            { id: '6.3.3-3', label: 'Target of 50 private project certifications achieved.' },
            { id: '6.3.3-M3', label: 'Milestone M3: 50 Private Project Certification Target Met (2030).' }
        ]},
        { name: "Phase 4: body (2030)", items: [
            { id: '6.3.3-4', label: 'SGIS governance body formed for future revisions.' },
            { id: '6.3.3-M4', label: 'Milestone M4: SGIS Governance Body Formed for Future Revisions (2030).' }
        ]}
    ],
    '6.4.1': [
        { name: "Phase 1: roadmap (2026 Q1)", items: [
            { id: '6.4.1-1', label: 'App upgrade roadmap and technical specs finalized.' },
            { id: '6.4.1-M1', label: 'Milestone M1: App Upgrade Roadmap & Tech Specs Finalised (2026 Q1).' }
        ]},
        { name: "Phase 2: UAT (2026 Q4)", items: [
            { id: '6.4.1-2', label: 'App upgrade development complete and passes UAT.' },
            { id: '6.4.1-M2', label: 'Milestone M2: Development Complete & UAT Passed (2026 Q4).' }
        ]},
        { name: "Phase 3: Live (2027 Q1)", items: [
            { id: '6.4.1-3', label: 'Upgraded app publicly launched; promotional campaign active.' },
            { id: '6.4.1-M3', label: 'Milestone M3: Official Launch & Marketing Campaign Live (2027 Q1).' }
        ]},
        { name: "Phase 4: downloads (2027 Q4)", items: [
            { id: '6.4.1-4', label: '100,000 downloads and 4.5-star rating targets achieved.' },
            { id: '6.4.1-M4', label: 'Milestone M4: 100k Downloads & 4.5-Star Rating Achieved (2027 Q4).' }
        ]}
    ],
    '6.4.2': [
        { name: "Phase 1: Calendar (2025 Q2)", items: [
            { id: '6.4.2-1', label: 'Comprehensive stakeholder map and annual engagement calendar approved.' },
            { id: '6.4.2-M1', label: 'Milestone M1: Stakeholder Map & Annual Engagement Calendar Finalised (2025 Q2).' }
        ]},
        { name: "Phase 2: Toolkits (2025 Q3)", items: [
            { id: '6.4.2-2', label: 'Engagement toolkits distributed and key personnel trained.' },
            { id: '6.4.2-M2', label: 'Milestone M2: Engagement Toolkits & Training Completed (2025 Q3).' }
        ]},
        { name: "Phase 3: documented (2025 Q4)", items: [
            { id: '6.4.2-3', label: 'First full cycle of structured engagements executed.' },
            { id: '6.4.2-M3', label: 'Milestone M3: First Cycle of Engagements Executed & Documented (2025 Q4).' }
        ]}
    ],
    '6.4.3': [
        { name: "Phase 1: Strategy (2025 Q1)", items: [
            { id: '6.4.3-1', label: 'Proactive media strategy including message pillars finalized.' },
            { id: '6.4.3-M1', label: 'Milestone M1: Proactive Media Strategy Finalised (2025 Q1).' }
        ]},
        { name: "Phase 2: session (2025 Q3)", items: [
            { id: '6.4.3-2', label: 'First formal media relationship-building event held.' },
            { id: '6.4.3-M2', label: 'Milestone M2: First Media Appreciation & Briefing Session Held (2025 Q3).' }
        ]},
        { name: "Phase 3: trend (2025 Q4)", items: [
            { id: '6.4.3-3', label: 'Positive media sentiment trend established in first quarterly report.' },
            { id: '6.4.3-M3', label: 'Milestone M3: Positive Media Sentiment Trend Established (2025 Q4).' }
        ]}
    ],
    '6.4.4': [
        { name: "Phase 1: Flows (2028 Q1)", items: [
            { id: '6.4.4-1', label: 'Proposed SLA framework and new process flows approved.' },
            { id: '6.4.4-M1', label: 'Milestone M1: SLA Framework & Process Flows Approved (2028 Q1).' }
        ]},
        { name: "Phase 2: Systems (2028 Q2)", items: [
            { id: '6.4.4-2', label: 'Technical systems configured and staff policies updated.' },
            { id: '6.4.4-M2', label: 'Milestone M2: Tracking Systems & Internal Policies Updated (2028 Q2).' }
        ]},
        { name: "Phase 3: Trained (2028 Q3)", items: [
            { id: '6.4.4-3', label: 'SLA publicly announced and all relevant staff trained.' },
            { id: '6.4.4-M3', label: 'Milestone M3: SLA Publicly Announced & Staff Training Complete (2028 Q3).' }
        ]},
        { name: "Phase 4: >95% (2028 Q4)", items: [
            { id: '6.4.4-4', label: 'Achieve first month of >95% compliance across all channels.' },
            { id: '6.4.4-M4', label: 'Milestone M4: >95% SLA Compliance Rate Achieved (2028 Q4).' }
        ]}
    ],
    '6.4.5': [
        { name: "Phase 1: Pipeline (2025 Q2)", items: [
            { id: '6.4.5-1', label: 'Innovation story nomination process and annual content calendar in place.' },
            { id: '6.4.5-M1', label: 'Milestone M1: Story Pipeline & Content Calendar Established (2025 Q2).' }
        ]},
        { name: "Phase 2: Published (2025 Q3)", items: [
            { id: '6.4.5-2', label: 'First multi-format innovation story package published.' },
            { id: '6.4.5-M2', label: 'Milestone M2: First Multi-Format Innovation Story Published (2025 Q3).' }
        ]},
        { name: "Phase 3: Regular (2026)", items: [
            { id: '6.4.5-3', label: 'Innovation stories become a regular feature of JKR public communication.' },
            { id: '6.4.5-M3', label: 'Milestone M3: Innovation Content Becomes a Regular Feature (2026).' }
        ]},
        { name: "Phase 4: impact (2026 Q1)", items: [
            { id: '6.4.5-4', label: 'First annual report on innovation storytelling impact produced.' },
            { id: '6.4.5-M4', label: 'Milestone M4: First Impact Measurement Report Completed (2026 Q1).' }
        ]}
    ],
    '6.4.6': [
        { name: "Phase 1: sites (2026 Q1)", items: [
            { id: '6.4.6-1', label: 'Central framework approved; 12 Division sites selected.' },
            { id: '6.4.6-M1', label: 'Milestone M1: Central Framework & 12 Sites Selected (2026 Q1).' }
        ]},
        { name: "Phase 2: invites (2026 Q3)", items: [
            { id: '6.4.6-2', label: 'All 12 Divisional event plans and school invitations finalized.' },
            { id: '6.4.6-M2', label: 'Milestone M2: All Divisional Plans & School Invites Finalised (2026 Q3).' }
        ]},
        { name: "Phase 3: executed (2026 Q4)", items: [
            { id: '6.4.6-3', label: 'Inaugural Open Site Day successfully held in all 12 divisions.' },
            { id: '6.4.6-M3', label: 'Milestone M3: First Nationwide Open Site Day Executed (2026 Q4).' }
        ]},
        { name: "Phase 4: fixture (2027 Q1)", items: [
            { id: '6.4.6-4', label: 'Feedback gathered and planning for next year begins.' },
            { id: '6.4.6-M4', label: 'Milestone M4: Feedback Gathered & Planning for Next Year Begins (2027 Q1).' }
        ]}
    ],
    '6.4.7': [
        { name: "Phase 1: Charter (2025 Q4)", items: [
            { id: '6.4.7-1', label: 'Programme charter and partner shortlist finalised.' },
            { id: '6.4.7-M1', label: 'Milestone M1: Programme Charter & Partner Shortlist Finalised (2025 Q4).' }
        ]},
        { name: "Phase 2: cohort (2026 Q2)", items: [
            { id: '6.4.7-2', label: 'Programme officially launched with first cohort of partners.' },
            { id: '6.4.7-M2', label: 'Milestone M2: Programme Launched with First Cohort (2026 Q2).' }
        ]},
        { name: "Phase 3: Cadence (2027)", items: [
            { id: '6.4.7-3', label: 'Sustained cadence of exclusive engagements maintained.' },
            { id: '6.4.7-M3', label: 'Milestone M3: Regular Exclusive Engagements Established (2027).' }
        ]},
        { name: "Phase 4: value (2027 Q4)", items: [
            { id: '6.4.7-4', label: 'Programme review confirms positive impact on quality coverage.' },
            { id: '6.4.7-M4', label: 'Milestone M4: Impact Review Confirms Programme Value (2027 Q4).' }
        ]}
    ],
    '6.4.8': [
        { name: "Phase 1: list (2026 Q1)", items: [
            { id: '6.4.8-1', label: 'Spokesperson list and training curriculum approved.' },
            { id: '6.4.8-M1', label: 'Milestone M1: Spokesperson List & Training Curriculum Finalised (2026 Q1).' }
        ]},
        { name: "Phase 2: completes (2026 Q2)", items: [
            { id: '6.4.8-2', label: 'First cohort of officers completes media training.' },
            { id: '6.4.8-M2', label: 'Milestone M2: First Media Training Workshop Completed (2026 Q2).' }
        ]},
        { name: "Phase 3: appearance (2026 Q4)", items: [
            { id: '6.4.8-3', label: 'Trained officers begin actively serving as spokespeople.' },
            { id: '6.4.8-M3', label: 'Milestone M3: Trained Officers Begin Media Appearances (2026 Q4).' }
        ]},
        { name: "Phase 4: institutional (2027)", items: [
            { id: '6.4.8-4', label: 'Media training becomes an annual institutionalised program.' },
            { id: '6.4.8-M4', label: 'Milestone M4: Annual Refresher Training Cycle Established (2027).' }
        ]}
    ],
    '6.4.9': [
        { name: "Phase 1: toolkit (2026 Q1)", items: [
            { id: '6.4.9-1', label: 'Annual theme and divisional toolkit issued.' },
            { id: '6.4.9-M1', label: 'Milestone M1: Annual Theme & Event Toolkit Issued to Divisions (2026 Q1).' }
        ]},
        { name: "Phase 2: promoted (2026 Q3)", items: [
            { id: '6.4.9-2', label: 'All 12 Divisions have finalised, promoted event plans.' },
            { id: '6.4.9-M2', label: 'Milestone M2: All Divisional Event Plans Finalised & Promoted (2026 Q3).' }
        ]},
        { name: "Phase 3: captured (2026 Q4)", items: [
            { id: '6.4.9-3', label: 'Events successfully held; public feedback captured.' },
            { id: '6.4.9-M3', label: 'Milestone M3: Nationwide "Hari Bersama Pelanggan" Events Held (2026 Q4).' }
        ]},
        { name: "Phase 4: report (2027 Q1)", items: [
            { id: '6.4.9-4', label: 'Public "You Said, We Did" report published.' },
            { id: '6.4.9-M4', label: 'Milestone M4: Public "You Said, We Did" Report Published (2027 Q1).' }
        ]}
    ],
    '6.4.10': [
        { name: "Phase 1: instrument (Annual Q1)", items: [
            { id: '6.4.10-1', label: 'Annual survey instrument and methodology finalised.' },
            { id: '6.4.10-M1', label: 'Milestone M1: Survey Design & Methodology Finalised (Annual Q1).' }
        ]},
        { name: "Phase 2: fieldwork (Annual Q2)", items: [
            { id: '6.4.10-2', label: 'Survey fieldwork completed with significant sample size.' },
            { id: '6.4.10-M2', label: 'Milestone M2: Fieldwork & Data Collection Completed (Annual Q2).' }
        ]},
        { name: "Phase 3: report (Annual Q3)", items: [
            { id: '6.4.10-3', label: 'Annual Satisfaction Survey Report produced.' },
            { id: '6.4.10-M3', label: 'Milestone M3: Analysis Complete & Report Generated (Annual Q3).' }
        ]},
        { name: "Phase 4: Integrated (Annual Q4)", items: [
            { id: '6.4.10-4', label: 'Survey insights formally adopted into planning cycles.' },
            { id: '6.4.10-M4', label: 'Milestone M4: Insights Integrated into Corporate Plans (Annual Q4).' }
        ]}
    ],

    // ==================================================================================
    // PILLAR 7: THE ENABLING ECOSYSTEM
    // ==================================================================================
    '7.1.1': [
        { name: "Phase 1: nomination (2026 Q1)", items: [
            { id: '7.1.1-1', label: 'Change Champion role definition and nomination process open.' },
            { id: '7.1.1-M1', label: 'Milestone M1: Role Definition & Nomination Process Open (2026 Q1).' }
        ]},
        { name: "Phase 2: onboarded (2026 Q2)", items: [
            { id: '7.1.1-2', label: '50 Change Champions selected and onboarded.' },
            { id: '7.1.1-M2', label: 'Milestone M2: 50 Change Champions Selected & Onboarded (2026 Q2).' }
        ]},
        { name: "Phase 3: Activated (2026 Q3)", items: [
            { id: '7.1.1-3', label: 'Champions activated for first major rollout.' },
            { id: '7.1.1-M3', label: 'Milestone M3: Champions Activated for First Major Rollout (2026 Q3).' }
        ]},
        { name: "Phase 4: permanent (2026 Q4)", items: [
            { id: '7.1.1-4', label: 'Network established as permanent part of change framework.' },
            { id: '7.1.1-M4', label: 'Milestone M4: Network Formalized & Recognition Programme Launched (2026 Q4).' }
        ]}
    ],
    '7.1.2': [
        { name: "Phase 1: Campaign (2028 Q1)", items: [
            { id: '7.1.2-1', label: 'Campaign launched; anonymous submission portal open.' },
            { id: '7.1.2-M1', label: 'Milestone M1: Campaign Launched & Submission Portal Open (2028 Q1).' }
        ]},
        { name: "Phase 2: Validation (2028 Q2)", items: [
            { id: '7.1.2-2', label: 'Review panel assessment and final "Kill List" prepared.' },
            { id: '7.1.2-M2', label: 'Milestone M2: Review Panel Completes Assessment & "Kill List" Prepared (2028 Q2).' }
        ]},
        { name: "Phase 3: Abolition (2028 Q3)", items: [
            { id: '7.1.2-3', label: 'SSC approves abolition; official cancellation notices issued.' },
            { id: '7.1.2-M3', label: 'Milestone M3: SSC Approves Abolition; Official Cancellations Issued (2028 Q3).' }
        ]},
        { name: "Phase 4: Embedded (2028 Q4)", items: [
            { id: '7.1.2-4', label: 'Continuous review process embedded into governance.' },
            { id: '7.1.2-M4', label: 'Milestone M4: Continuous Review Process Embedded; Impact Report Published (2028 Q4).' }
        ]}
    ],
    '7.1.3': [
        { name: "Phase 1: Fund (2026 Q1)", items: [
            { id: '7.1.3-1', label: 'Fund established with clear governance and application process.' },
            { id: '7.1.3-M1', label: 'Milestone M1: Fund Governance & Application Process Live (2026 Q1).' }
        ]},
        { name: "Phase 2: Selection (2026 Q2)", items: [
            { id: '7.1.3-2', label: 'First 5 pilot projects selected and granted funding.' },
            { id: '7.1.3-M2', label: 'Milestone M2: First 5 Pilot Projects Selected & Funded (2026 Q2).' }
        ]},
        { name: "Phase 3: Learning (2026 Q4)", items: [
            { id: '7.1.3-3', label: 'All pilots completed with mandatory Learning Reports.' },
            { id: '7.1.3-M3', label: 'Milestone M3: All Pilots Completed with Learning Reports (2026 Q4).' }
        ]},
        { name: "Phase 4: Symposium (2026 Q4)", items: [
            { id: '7.1.3-4', label: 'Knowledge Symposium held and fund renewed for 2027.' },
            { id: '7.1.3-M4', label: 'Milestone M4: Knowledge Symposium Held; Fund Renewed (2026 Q4).' }
        ]}
    ],
    '7.2.1': [
        { name: "Phase 1: Design (2026 H2)", items: [
            { id: '7.2.1-1', label: 'First cohort of 20 contractors selected; VDP curriculum finalized.' },
            { id: '7.2.1-M1', label: 'Milestone M1: First Cohort Selected & Curriculum Finalised (2026 H2).' }
        ]},
        { name: "Phase 2: Delivery (2027)", items: [
            { id: '7.2.1-2', label: 'All 20 contractors complete the core training curriculum.' },
            { id: '7.2.1-M2', label: 'Milestone M2: Core Training Programme Delivered to Cohort (2027).' }
        ]},
        { name: "Phase 3: Graduate (2028)", items: [
            { id: '7.2.1-3', label: 'Contractors graduate; first post-VDP projects awarded.' },
            { id: '7.2.1-M3', label: 'Milestone M3: Contractors Graduate & First Projects Awarded (2028).' }
        ]},
        { name: "Phase 4: Validated (2028)", items: [
            { id: '7.2.1-4', label: 'VDP graduate performance confirms improved capability.' },
            { id: '7.2.1-M4', label: 'Milestone M4: Graduate Performance Validated; Planning for Cohort 2 (2028).' }
        ]}
    ],
    '7.2.2': [
        { name: "Phase 1: Platform (2027 Q2)", items: [
            { id: '7.2.2-1', label: 'Marketplace platform built; first 30 suppliers onboarded.' },
            { id: '7.2.2-M1', label: 'Milestone M1: Platform Built & First 30 Suppliers Onboarded (2027 Q2).' }
        ]},
        { name: "Phase 2: Beta (2027 Q3)", items: [
            { id: '7.2.2-2', label: 'Beta marketplace live and being used in pilot tenders.' },
            { id: '7.2.2-M2', label: 'Milestone M2: Beta Launch to JKR & VDP Contractors (2027 Q3).' }
        ]},
        { name: "Phase 3: full (2027 Q4)", items: [
            { id: '7.2.2-3', label: 'Marketplace fully launched with >50 suppliers.' },
            { id: '7.2.2-M3', label: 'Milestone M3: Full Public Launch with >50 Suppliers (2027 Q4).' }
        ]},
        { name: "Phase 4: Impact (2028)", items: [
            { id: '7.2.2-4', label: 'First annual review shows increased green material procurement.' },
            { id: '7.2.2-M4', label: 'Milestone M4: Impact Review Shows Increased Green Procurement (2028).' }
        ]}
    ],
    '7.3.1': [
        { name: "Phase 1: report (Annual Q4)", items: [
            { id: '7.3.1-1', label: '"State of the Strategy" report prepared for SSC review.' },
            { id: '7.3.1-M1', label: 'Milestone M1: "State of the Strategy" Report Prepared (Annual Q4).' }
        ]},
        { name: "Phase 2: decisions (Annual December)", items: [
            { id: '7.3.1-2', label: 'Annual "Kill/Keep/Start" decisions made by SSC.' },
            { id: '7.3.1-M2', label: 'Milestone M2: SSC "Kill/Keep/Start" Decisions Made (Annual Dec).' }
        ]},
        { name: "Phase 3: Playbook (Annual Q1)", items: [
            { id: '7.3.1-3', label: 'Updated Implementation Playbook published and communicated.' },
            { id: '7.3.1-M3', label: 'Milestone M3: Updated Implementation Playbook Published (Annual Q1).' }
        ]},
        { name: "Phase 4: Operational (Annual Q2)", items: [
            { id: '7.3.1-4', label: 'New strategic portfolio operationalized in planning/monitoring.' },
            { id: '7.3.1-M4', label: 'Milestone M4: Refreshed Portfolio Operationalized (Annual Q2).' }
        ]}
    ],
    '7.3.2': [
        { name: "Phase 1: Mapping (2026 Q1)", items: [
            { id: '7.3.2-1', label: 'Set of leading indicators and data source map approved.' },
            { id: '7.3.2-M1', label: 'Milestone M1: Leading Indicators Defined & Data Sources Mapped (2026 Q1).' }
        ]},
        { name: "Phase 2: tested (2026 Q2)", items: [
            { id: '7.3.2-2', label: 'Dashboard module developed and internally tested.' },
            { id: '7.3.2-M2', label: 'Milestone M2: Dashboard Module Developed & Tested (2026 Q2).' }
        ]},
        { name: "Phase 3: Meeting (2026 Q3)", items: [
            { id: '7.3.2-3', label: 'SSC trained and has used the dashboard in a meeting.' },
            { id: '7.3.2-M3', label: 'Milestone M3: SSC Trained & Pilots Dashboard in Meeting (2026 Q3).' }
        ]},
        { name: "Phase 4: institutional (2026 Q4)", items: [
            { id: '7.3.2-4', label: 'Dashboard institutionalized in regular governance meetings.' },
            { id: '7.3.2-M4', label: 'Milestone M4: Dashboard Institutionalized in Governance Meetings (2026 Q4).' }
        ]}
    ]
};

/**
 * GENERATOR ENGINE
 * Ensures all 145 initiatives have a valid, category-aware checklist.
 * Logic is maintained as a fallback if explicit ID data is missing.
 */
export const getChecklistForInitiative = (
  initiativeId: string,
  branch?: string,
  name?: string,
  targetYear?: string
): ChecklistPhase[] => {
  // 1. Return manual workflow if it exists
  if (initiativeWorkflows[initiativeId]) {
    return initiativeWorkflows[initiativeId];
  }

  // 2. Otherwise generate a context-aware roadmap
  const year = targetYear || "2026";
  const startYear = (parseInt(year) > 2025) ? (parseInt(year) - 1).toString() : "2025";
  const lead = branch || "Lead Branch";
  
  const isDigital = initiativeId.startsWith('2.');
  const isRural = initiativeId.startsWith('3.');
  const isESG = initiativeId.startsWith('4.');
  const isTalent = initiativeId.startsWith('5.');
  const isGlobal = initiativeId.startsWith('6.');
  const isEcosystem = initiativeId.startsWith('7.');

  return [
    {
      name: `Phase 1: Strategy & Setup (Q1-Q2 ${startYear})`,
      items: [
        { id: `${initiativeId}-p1-1`, label: `Form Implementation Task Force within ${lead}.` },
        { id: `${initiativeId}-p1-2`, label: isDigital ? 'Define digital interoperability schemas.' : isRural ? 'Conduct site accessibility and community audit.' : 'Verify strategic alignment with PCDS 2030.' },
        { id: `${initiativeId}-M1`, label: `Milestone M1: Project Charter for ${name} approved.` }
      ]
    },
    {
      name: `Phase 2: Design & Procurement (Q3-Q4 ${startYear})`,
      items: [
        { id: `${initiativeId}-p2-1`, label: isESG ? 'Conduct carbon-baseline impact study.' : isTalent ? 'Develop training syllabus and competency matrix.' : 'Draft detailed technical SOPs and specs.' },
        { id: `${initiativeId}-p2-2`, label: 'Secure budget tranches and finalize tender documents.' },
        { id: `${initiativeId}-M2`, label: `Milestone M2: Strategic Implementation Roadmap locked.` }
      ]
    },
    {
      name: `Phase 3: Implementation & Pilot (Q1-Q3 ${year})`,
      items: [
        { id: `${initiativeId}-p3-1`, label: isGlobal ? 'Engage international benchmarking partners.' : 'Execute statewide rollout to selected divisions.' },
        { id: `${initiativeId}-p3-2`, label: 'Integrate real-time progress monitoring into Command Center.' },
        { id: `${initiativeId}-M3`, label: `Milestone M3: Strategic targets for ${year} validated.` }
      ]
    },
    {
      name: `Phase 4: Sustainment & O&M (Q4 ${year} onwards)`,
      items: [
        { id: `${initiativeId}-p4-1`, label: 'Conduct final compliance audit and project post-mortem.' },
        { id: `${initiativeId}-p4-2`, label: isEcosystem ? 'Handover to Change Champions for long-term monitoring.' : 'Formal transition to O&M cadre for lifecycle management.' },
        { id: `${initiativeId}-M4`, label: `Milestone M4: Long-term strategic outcomes verified.` }
      ]
    }
  ];
};
