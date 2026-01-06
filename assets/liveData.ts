
import { Users, TrendingUp, AlertTriangle, CheckCircle, HardHat, Rss, Milestone, Zap } from 'lucide-react';
import type { LiveMetric, ProjectLocation, LiveProjectUpdate, LiveFeedback } from '../types';

export const liveMetrics: LiveMetric[] = [
  { title: "Active Projects", value: "312", icon: HardHat, color: "blue" },
  { title: "On-Time Delivery", value: "89%", change: "+1.2%", changeType: "increase", icon: CheckCircle, color: "green" },
  { title: "Milestones Today", value: "12", change: "+3", changeType: "increase", icon: Milestone, color: "purple" },
  { title: "New 'At Risk' (24h)", value: "3", change: "+1", changeType: "increase", icon: AlertTriangle, color: "yellow" },
];

export const projectLocations: ProjectLocation[] = [
  { id: 'I-3.1', name: 'Pan Borneo Highway', coordinates: { x: 55, y: 40 }, status: 'on-track' },
  { id: 'I-3.4', name: 'Coastal Road Network', coordinates: { x: 28, y: 25 }, status: 'on-track' },
  { id: 'I-3.2', name: 'Sarawak-Sabah Link Road', coordinates: { x: 88, y: 75 }, status: 'at-risk' },
  { id: 'I-2.7', name: 'Bridge Retrofitting Program', coordinates: { x: 45, y: 65 }, status: 'on-track' },
  { id: 'I-7.5', name: 'Miri Accessibility Project', coordinates: { x: 80, y: 60 }, status: 'completed' },
  { id: 'P-101', name: 'Kuching Flood Mitigation', coordinates: { x: 15, y: 55 }, status: 'overdue' },
  { id: 'P-102', name: 'Bintulu Port Expansion', coordinates: { x: 60, y: 48 }, status: 'on-track' },
];

export const allLiveProjectUpdates: LiveProjectUpdate[] = [
    { id: '0', projectId: 'I-3.3', timestamp: 'Just now', update: '🏆 AWARD ALERT: SSLR2 wins Bentley’s 2025 Going Digital Award in Amsterdam! Congratulations Team JKR.', status: 'Milestone Achieved' },
    { id: '1', projectId: 'I-3.1', timestamp: '2 mins ago', update: 'Pavement works for Section C completed ahead of schedule.', status: 'Milestone Achieved' },
    { id: '2', projectId: 'I-3.2', timestamp: '5 mins ago', update: 'Geotechnical survey reports unexpected soil conditions. Schedule under review.', status: 'Delay Reported' },
    { id: '3', projectId: 'I-7.5', timestamp: '12 mins ago', update: 'Public consultation for Miri Central Park access ramps completed successfully.', status: 'Community Update' },
    { id: '4', projectId: 'I-2.7', timestamp: '28 mins ago', update: 'Structural reinforcement on Batang Lupar bridge is 75% complete.', status: 'On Track' },
    { id: '5', projectId: 'P-101', timestamp: '35 mins ago', update: 'High-tide warning issued. Temporary flood barriers deployed at Kuching Waterfront.', status: 'Safety Alert' },
    { id: '6', projectId: 'P-102', timestamp: '48 mins ago', update: 'First shipment of new cranes arrived at Bintulu Port.', status: 'On Track' },
    { id: '7', projectId: 'I-1.10', timestamp: '1 hour ago', update: 'Draft of Green Procurement Policy submitted for legal review.', status: 'Milestone Achieved' },
    { id: '8', projectId: 'I-4.15', timestamp: '2 hours ago', update: 'IBS component delivery for government complex delayed due to logistics.', status: 'Delay Reported' },
];

export const allLiveFeedbacks: LiveFeedback[] = [
    { id: 'fb1', text: "The new road to my village is a life-changer! Thank you JKR!", source: "MyJKR App" },
    { id: 'fb2', text: "Can we get an update on the pothole reported on Jalan Song?", source: "Social Media" },
    { id: 'fb3', text: "Traffic management during the Pan Borneo construction has been excellent.", source: "Feedback Portal" },
    { id: 'fb4', text: "The new streetlights in our housing area are fantastic. It feels much safer.", source: "MyJKR App" },
    { id: 'fb5', text: "Construction noise near the new bridge project is a bit loud after 10 PM.", source: "Hotline" },
    { id: 'fb6', text: "Impressed with the quick repair of the burst pipe in Tabuan Jaya.", source: "Social Media" },
];

export const performanceHotspots = {
    topMovers: [
        { id: 'I-3.1', name: 'Pan Borneo Highway', change: '+5% this week' },
        { id: 'I-1.10', name: 'Green Procurement Policy', change: 'Phase completed early' },
        { id: 'I-2.7', name: 'Bridge Retrofitting', change: '+3% ahead of schedule' },
    ],
    watchlist: [
        { id: 'P-101', name: 'Kuching Flood Mitigation', reason: 'Now Overdue' },
        { id: 'I-3.2', name: 'Sarawak-Sabah Link Road', reason: 'New Delay Reported' },
        { id: 'I-4.15', name: 'IBS Scoring Project', reason: 'Supply Chain Issue' },
    ]
};

export const resourceUtilization = {
    equipment: 76,
    workforce: 82,
    idleAssets: [
        { id: 'CR-05', name: 'Heavy Crane Unit' },
        { id: 'EX-12', name: 'Excavator' },
    ]
};
