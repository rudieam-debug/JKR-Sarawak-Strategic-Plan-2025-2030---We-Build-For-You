import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { LiveMetric, ProjectLocation, LiveProjectUpdate, LiveFeedback } from '../../types';
import { GaugeChart } from '../GaugeChart';
import { ArrowUp, ArrowDown, Rss, Zap, TrendingDown, Star, Construction } from 'lucide-react';

interface LiveDashboardContentProps {
    metrics: LiveMetric[];
    locations: ProjectLocation[];
    allUpdates: LiveProjectUpdate[];
    allFeedback: LiveFeedback[];
    performanceHotspots: {
        topMovers: { id: string; name: string; change: string; }[];
        watchlist: { id: string; name: string; reason: string; }[];
    };
    resourceUtilization: {
        equipment: number;
        workforce: number;
        idleAssets: { id: string; name: string; }[];
    };
}

const statusClasses = {
    'on-track': { fill: 'fill-green-500', stroke: 'stroke-green-700', text: 'text-green-500', bg: 'bg-green-500' },
    'at-risk': { fill: 'fill-yellow-500', stroke: 'stroke-yellow-700', text: 'text-yellow-500', bg: 'bg-yellow-500' },
    'overdue': { fill: 'fill-primary', stroke: 'stroke-red-700', text: 'text-primary', bg: 'bg-primary' },
    completed: { fill: 'fill-blue-500', stroke: 'stroke-blue-700', text: 'text-blue-500', bg: 'bg-blue-500' },
};

const updateStatusClasses: Record<LiveProjectUpdate['status'], string> = {
    'Milestone Achieved': 'bg-blue-500/20 text-blue-400',
    'On Track': 'bg-green-500/20 text-green-400',
    'Delay Reported': 'bg-yellow-500/20 text-yellow-400',
    'Community Update': 'bg-purple-500/20 text-purple-400',
    'Safety Alert': 'bg-primary/20 text-primary',
};

const statusFilters: { id: ProjectLocation['status']; label: string }[] = [
    { id: 'on-track', label: 'On Track' },
    { id: 'at-risk', label: 'At Risk' },
    { id: 'overdue', label: 'Overdue' },
    { id: 'completed', label: 'Completed' },
];

export const LiveDashboardContent: React.FC<LiveDashboardContentProps> = ({ metrics, locations, allUpdates, allFeedback, performanceHotspots, resourceUtilization }) => {
    const [activeLocation, setActiveLocation] = useState<ProjectLocation | null>(null);
    const [liveUpdates, setLiveUpdates] = useState<LiveProjectUpdate[]>([]);
    const [feedback, setFeedback] = useState<LiveFeedback[]>([]);
    const [selectedStatuses, setSelectedStatuses] = useState<Set<ProjectLocation['status']>>(
        new Set(['on-track', 'at-risk', 'overdue'])
    );

    // Simulate live data feeds
    useEffect(() => {
        setLiveUpdates(allUpdates.slice(0, 5));
        const updateInterval = setInterval(() => {
            const nextUpdateIndex = Math.floor(Math.random() * allUpdates.length);
            const newUpdate = { ...allUpdates[nextUpdateIndex], id: `update-${Date.now()}` };
            setLiveUpdates(prev => [newUpdate, ...prev.slice(0, 14)]);
        }, 5000);

        return () => clearInterval(updateInterval);
    }, [allUpdates]);
    
    useEffect(() => {
        setFeedback(allFeedback);
    }, [allFeedback]);
    
    const handleStatusToggle = (status: ProjectLocation['status']) => {
        setSelectedStatuses(prev => {
            const newSet = new Set(prev);
            if (newSet.has(status)) newSet.delete(status); else newSet.add(status);
            return newSet;
        });
    };
    
    const filteredLocations = useMemo(() => {
        return locations.filter(loc => selectedStatuses.has(loc.status));
    }, [locations, selectedStatuses]);


    return (
    <div className="space-y-8">
        <div className="text-center">
            <h2 className="text-3xl font-bold text-text-primary mb-2">Live Operations Center</h2>
            <p className="text-text-secondary max-w-4xl mx-auto">
                A real-time, performance-focused overview of our ongoing initiatives, highlighting progress and potential downfalls.
            </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map(metric => {
                const Icon = metric.icon;
                const colorClass = metric.color === 'blue' ? 'text-blue-400' : metric.color === 'green' ? 'text-green-400' : metric.color === 'purple' ? 'text-purple-400' : 'text-yellow-400';
                const bgClass = metric.color === 'blue' ? 'bg-blue-500/20' : metric.color === 'green' ? 'bg-green-500/20' : metric.color === 'purple' ? 'bg-purple-500/20' : 'bg-yellow-500/20';
                return (
                    <motion.div key={metric.title} whileHover={{ y: -5 }} className="bg-surface p-6 rounded-xl shadow-lg border border-border">
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-sm font-medium text-text-secondary">{metric.title}</p>
                                <p className="text-4xl font-bold text-text-primary mt-1">{metric.value}</p>
                                {metric.change && (
                                    <div className={`mt-1 flex items-center text-xs font-semibold ${metric.changeType === 'increase' ? 'text-green-400' : 'text-primary'}`}>
                                        {metric.changeType === 'increase' ? <ArrowUp className="w-3 h-3 mr-1" /> : <ArrowDown className="w-3 h-3 mr-1" />}
                                        {metric.change} in last 24h
                                    </div>
                                )}
                            </div>
                            <div className={`p-3 rounded-full ${bgClass}`}>
                                <Icon className={`w-6 h-6 ${colorClass}`} />
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </div>
        
        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
                <div className="bg-surface p-4 sm:p-6 rounded-xl shadow-lg border border-border">
                    <h3 className="text-xl font-bold text-text-primary mb-4">Live Project Map</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {statusFilters.map(status => {
                            const isSelected = selectedStatuses.has(status.id);
                            return (
                                <button key={status.id} onClick={() => handleStatusToggle(status.id)} className={`px-3 py-1 text-xs font-semibold rounded-full border-2 transition-all duration-200 flex items-center gap-2 ${isSelected ? `${statusClasses[status.id].bg}/20 ${statusClasses[status.id].text.replace('text-','border-')}` : 'border-border text-text-secondary hover:border-text-secondary'}`}>
                                    <span className={`w-2.5 h-2.5 rounded-full ${statusClasses[status.id].bg}`}></span>
                                    {status.label}
                                </button>
                            );
                        })}
                    </div>
                    <div className="relative aspect-[16/10] bg-background rounded-lg overflow-hidden border border-border">
                        <svg viewBox="0 0 400 250" className="w-full h-full"><path d="M12.8 194.2c.4-2 .2-2.3-1-3.6-1-1-1-1.3-1-3.4s.3-2.6 1.2-3c2-1 2.3-1.6 2.3-5 0-3-.5-4-2.8-5.6-3-2-3-2.3-1.2-5.4.8-1.5 2-2.7 2.7-2.7s1.3-1.4 1.3-3.2c0-1.7-.5-3.2-1-3.2s-.6-1.5-1-3.2c-1-3.6-1-3.8.5-6.6 1-1.8 1.4-3.6 1.4-6s-.4-4.2-1.3-6.4c-1.3-3.3-1.3-3.4.2-6.5.8-1.7 1-3.4 1-5.3 0-4-1.3-6.2-4.4-7.4-2.2-.8-2.6-.6-3.7 1.7-.8 1.6-1.7 2-2.7 1.3-1.6-1.2-1.6-1.2 1.3-3.5 2.2-1.7 2.4-1.7 5 .5 1.5 1.3 3 2.7 3.5 3.3.3.4.6.3 1.2-1.4 1-3 2-4 2.3-2.4.6-.7 1-2.4 1-3.8 0-1.6.4-3.2 1-3.6.8-.5 1-1.4 1-2.2 0-.8.6-1.4 1.8-1.7l1.7-.4 1.3 1c.7.6 1.7 1 2.2 1 .5 0 1.5.7 2.2 1.5l1.3 1.5 3.2.3c2.4.2 3.3.6 4.6 2 1.5 1.7 1.6 1.7 4.5.7 2.3-.8 3-1 4.5-1 2.4 0 2.6.2 3.7 3.2.7 1.8 1.5 3.7 1.8 4.2.3.5.8 1.4 1 2 .3.6 1 2 1.5 3 .6 1 1.5 2.5 2 3.3.5.8 1.4 2 2 2.6s1.6 1.6 2.2 2.2c1.4 1.4 1.5 1.4 3 .8 1.3-.5 2.2-1 3.2-1.6 2-1.4 3.7-2 5.5-2 1.3 0 2.6.5 4 1.4 2.8 2 3 2 5.4 1.6 1.3-.2 2.4-.6 3.4-1.2 2.3-1.4 3.3-1.6 5.8-1.6 2.2 0 2.7.2 4.2 1.6 1.5 1.5 1.7 1.5 4 .8 2-.6 2.6-.6 4.8 0 2.2.6 2.7.6 5 0 1.6-.4 3-.8 4.6-1.2 2.4-.4 3.5.5 5.5 2.2 1.3 1.3 2 1.5 2.5.3 1 .8 1.5 2.4.7 1-.5 2-1 2.7-1 .7 0 1.7.5 2.6 1.2 1.3 1 1.7 1 3.3 0 1.2-.7 2.5-1.3 3.6-1.5 2-1 3-1.2 5.6-1.2 2.7 0 3.2.2 5.5 2s4 3 4.6 2.5c.3-.3.8-1.3 1-2.3.3-1.2.6-2.5.8-3 .4-1 .7-1.3 2.3-2.2 1.3-.7 2.2-1.5 2.7-2.2.5-.7 1.3-2 1.8-2.8s1.2-2 1.5-2.8c.3-.8.8-1.8 1-2.2.3-.4 1-1.4 1.5-2.2s1.3-2 1.7-2.8c1-2.3 1.2-2.3 4.2-1 2 .8 2.8 1 4.4 1s2.4-.2 3.4-1c1.5-1.3 1.6-1.3 3.6.3 1.3 1 2.2 1.6 2.8 1.6.7 0 1.5.5 2 1.2.6.7 1.5 1.6 2 2 .5.4 1.4 1 2 1.3.6.3 1.7.8 2.5 1.1 1.4.5 1.6.5 3.3-.4 1.2-.6 2.4-1.3 3.2-1.7.8-.4 2-.8 2.6-1 .6-.2 1.6-.6 2.3-1 .6-.4 1.7-1 2.4-1.4.6-.4 1.8-1 2.6-1.4 1.3-.6 1.7-.6 3.6.4 1.3.7 2.2 1.5 2.7 2.2.5.7 1.4-2-2-2.8s-1.5-2.2-2-3.2c-.5-1-1.4-2.5-2-3.3s-1.4-2.2-2-3.2c-.6-1-1.5-2.5-2-3.3-1-2.3-1-2.4.2-5.5.7-1.7 1-3.4 1-5.3 0-2-.4-4.2-1.4-6.4-1.4-3.3-1.3-3.4.2-6.5.8-1.7 1-3.4 1-5.3 0-2-.4-4.2-1.4-6.4z" className="fill-surface-light" /></svg>
                        <AnimatePresence>
                        {filteredLocations.map(loc => (
                             <motion.g key={loc.id} initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} onClick={() => setActiveLocation(loc)} className="cursor-pointer group/map-pin absolute" style={{ left: `${loc.coordinates.x}%`, top: `${loc.coordinates.y}%` }}>
                                <circle r="6" className={`${statusClasses[loc.status].stroke} ${statusClasses[loc.status].fill} opacity-30 group-hover/map-pin:opacity-50`} />
                                <circle r="3" className={`${statusClasses[loc.status].fill} ${statusClasses[loc.status].stroke} stroke-2`} />
                                {loc.status !== 'completed' && <circle r="3" className={`${statusClasses[loc.status].fill} animate-ping`} />}
                            </motion.g>
                        ))}
                        </AnimatePresence>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-surface p-6 rounded-xl shadow-lg border border-border">
                        <h3 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2"><Star className="text-green-400"/>Top Movers (Progress)</h3>
                        <div className="space-y-3">
                            {performanceHotspots.topMovers.map(p => (
                                <div key={p.id}>
                                    <p className="font-semibold text-sm text-text-primary">{p.id}: {p.name}</p>
                                    <p className="text-xs text-green-400 font-medium">{p.change}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-surface p-6 rounded-xl shadow-lg border border-border">
                        <h3 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2"><TrendingDown className="text-primary"/>Performance Watchlist (Downfall)</h3>
                        <div className="space-y-3">
                            {performanceHotspots.watchlist.map(p => (
                                <div key={p.id}>
                                    <p className="font-semibold text-sm text-text-primary">{p.id}: {p.name}</p>
                                    <p className="text-xs text-primary font-medium">{p.reason}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
                <div className="bg-surface p-4 rounded-xl shadow-lg border border-border">
                    <h3 className="text-xl font-bold text-text-primary mb-3">Live Performance Feed</h3>
                    <div className="space-y-3 h-[28rem] overflow-y-auto pr-2">
                        <AnimatePresence initial={false}>
                        {liveUpdates.map(update => (
                            <motion.div key={update.id} layout initial={{ opacity: 0, y: -20, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, x: 20, scale: 0.9 }} transition={{ duration: 0.5 }} className="text-sm p-3 bg-surface-light rounded-lg">
                                <div className="flex justify-between items-start"><p className="font-semibold text-text-primary">{update.projectId}</p><span className="text-xs text-text-muted">{update.timestamp}</span></div>
                                <p className="text-text-secondary my-1">{update.update}</p>
                                <span className={`text-xs font-bold px-2 py-0.5 rounded-full inline-block ${updateStatusClasses[update.status]}`}>{update.status}</span>
                            </motion.div>
                        ))}
                        </AnimatePresence>
                    </div>
                </div>
                <div className="bg-surface p-6 rounded-xl shadow-lg border border-border">
                    <h3 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2"><Construction />Performance Drivers</h3>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <GaugeChart percentage={resourceUtilization.equipment} label="Equipment Utilization" />
                        <GaugeChart percentage={resourceUtilization.workforce} label="Workforce Deployment" />
                    </div>
                     <h4 className="text-sm font-semibold text-text-secondary mt-6 mb-2">Idle High-Value Assets</h4>
                     <div className="space-y-2">
                        {resourceUtilization.idleAssets.map(asset => (
                            <div key={asset.id} className="text-xs p-2 bg-surface-light rounded-md flex justify-between items-center">
                                <span className="font-medium text-text-primary">{asset.name}</span>
                                <span className="font-mono text-text-muted">{asset.id}</span>
                            </div>
                        ))}
                     </div>
                </div>
            </div>
        </div>
        
        {/* Feedback Ticker */}
        <div className="bg-surface-light rounded-xl shadow-lg p-3 flex items-center overflow-hidden border border-border">
            <div className="flex-shrink-0 flex items-center mr-4">
                <Rss className="w-5 h-5 text-primary" />
                <span className="ml-2 font-bold text-sm uppercase text-text-primary">Public Feedback</span>
            </div>
            <div className="flex-grow relative h-6 overflow-hidden">
                <div className="absolute flex animate-marquee whitespace-nowrap">
                    {feedback.concat(feedback).map((fb, index) => (
                         <p key={`${fb.id}-${index}`} className="mx-6 text-sm text-text-secondary">
                           <span className="font-semibold text-text-primary">{fb.source}:</span> "{fb.text}"
                         </p>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
};