
import React from 'react';
import { Target, Globe, Users, BarChart3, ChevronRight, Edit, ShieldCheck, Cpu, Library, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import { strategicThrusts, foundationThrust } from '../../assets/strategicData';
import type { StrategicDirection, StrategicObjective } from '../../types';
import { EditableText } from '../EditableText';

interface OverviewContentProps {
  isAdminMode?: boolean;
  direction?: StrategicDirection;
  objectives?: StrategicObjective[];
  onUpdateDirection?: (field: keyof StrategicDirection, value: string) => void;
  onUpdateObjective?: (id: number, field: 'title' | 'description' | 'imgSrc', value: string) => void;
  onOpenMediaLibrary: (callback: (url: string) => void) => void;
  onSummarize: (text: string, title: string) => void;
  onNavigateToEcosystem?: () => void;
}

export const OverviewContent: React.FC<OverviewContentProps> = ({ 
  isAdminMode = false, 
  direction, 
  objectives, 
  onUpdateDirection, 
  onSummarize,
  onNavigateToEcosystem
}) => {

  const corePrinciples = [
    "People-Centred Infrastructure",
    "Digital & Data-Driven Decision-Making",
    "Sustainability & ESG Commitment",
    "Engineering Excellence & Compliance",
    "Transparency, Integrity & Accountability",
    "Unity Culture — “JKR in Unity”"
  ];

  const colorMap: Record<string, any> = {
    blue: { border: 'border-blue-500', bg: 'bg-blue-500/10', text: 'text-blue-400' },
    purple: { border: 'border-purple-500', bg: 'bg-purple-500/10', text: 'text-purple-400' },
    green: { border: 'border-green-500', bg: 'bg-green-500/10', text: 'text-green-400' },
    red: { border: 'border-red-500', bg: 'bg-red-500/10', text: 'text-red-400' },
  };

  if (!direction || !objectives) return <div className="text-center p-10 text-text-muted">Loading overview data...</div>;

  return (
    <div className="space-y-12">
      <div className="bg-surface rounded-2xl shadow-xl p-6 sm:p-10 border border-border">
        <h2 className="text-3xl font-bold text-text-primary mb-8 text-center border-b pb-4 border-border uppercase tracking-tight">Strategic Mandate</h2>
        <div className="space-y-8">
          <div className="space-y-4 p-6 border-l-4 border-primary bg-primary/10 rounded-lg">
            <h3 className="text-2xl font-semibold text-primary flex items-center"><Target className="w-6 h-6 mr-3" /> Vision</h3>
            <EditableText isAdminMode={isAdminMode} initialValue={direction.vision} onSave={(newValue) => onUpdateDirection && onUpdateDirection('vision', newValue)} label="Vision Statement" textClassName="text-text-secondary text-lg font-medium" inputClassName="text-lg font-medium" onSummarize={() => onSummarize(direction.vision, 'Vision Statement')} />
          </div>
          <div className="space-y-4 p-6 border-l-4 border-blue-500 bg-blue-500/10 rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-400 flex items-center"><Globe className="w-6 h-6 mr-3" /> Mission</h3>
            <EditableText isAdminMode={isAdminMode} initialValue={direction.mission} onSave={(newValue) => onUpdateDirection && onUpdateDirection('mission', newValue)} label="Mission Statement" isTextarea textClassName="text-text-secondary" onSummarize={() => onSummarize(direction.mission, 'Mission Statement')} />
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-3xl font-bold text-text-primary mb-4 text-center">4 Strategic Objectives</h2>
            <div className="grid md:grid-cols-2 gap-6">
            {objectives.map((obj) => {
                const colors = colorMap[obj.color];
                const Icon = obj.icon as React.ElementType;
                return (
                <div key={obj.id} className="bg-surface p-6 rounded-xl border border-border shadow-lg hover:border-primary/50 transition-all duration-300">
                    <div className="flex items-center mb-3">
                        <div className={`p-3 rounded-lg mr-4 ${colors.bg}`}>
                            <Icon className={`w-7 h-7 ${colors.text}`} />
                        </div>
                        <h3 className="text-lg font-bold text-text-primary leading-tight">{obj.title}</h3>
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed">{obj.description}</p>
                </div>
                )
            })}
            </div>
          </div>
          
          <div className="bg-surface p-6 rounded-xl border border-border shadow-lg">
            <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2"><CheckCircle2 className="text-primary w-6 h-6"/> Core Principles</h2>
            <div className="space-y-4">
                {corePrinciples.map((principle, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors">
                        <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{idx + 1}</div>
                        <span className="text-sm font-medium text-text-secondary leading-tight">{principle}</span>
                    </div>
                ))}
            </div>
          </div>
      </div>

      <div className="bg-surface rounded-2xl shadow-xl p-6 sm:p-10 border border-border">
        <h2 className="text-3xl font-bold text-text-primary mb-8 text-center border-b pb-4 border-border uppercase tracking-tight">The 6 Pillars & 1 Enabling Foundation</h2>
        
        {/* Core Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {strategicThrusts.map(thrust => (
            <div key={thrust.id} className="flex items-start p-4 rounded-xl hover:bg-surface-light transition-all border border-transparent hover:border-white/10">
              <div className={`${thrust.color} w-10 h-10 rounded-lg flex items-center justify-center mr-4 text-white flex-shrink-0 shadow-lg`}>
                <thrust.icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-text-primary text-sm uppercase tracking-wide">Pillar {thrust.id}</h4>
                <p className="font-semibold text-text-secondary text-base leading-tight mb-1">{thrust.title}</p>
                <p className="text-xs text-text-muted line-clamp-2">{thrust.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Enabler Section */}
        <div className="relative p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 overflow-hidden group">
            <div className="absolute -right-8 -bottom-8 opacity-10"><Layers className="w-48 h-48 text-emerald-400" /></div>
            <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-emerald-600 flex items-center justify-center text-white shadow-xl flex-shrink-0">
                    <Layers className="w-8 h-8" />
                </div>
                <div className="text-center md:text-left flex-grow">
                    <h3 className="text-xl font-bold text-emerald-400 uppercase tracking-tighter">Strategic Enabler: {foundationThrust.title}</h3>
                    <p className="text-text-secondary text-sm mt-1">{foundationThrust.description}</p>
                    <p className="text-text-muted text-xs mt-3 uppercase font-bold tracking-widest opacity-60">The Glue that binds implementation together</p>
                </div>
                <button 
                  onClick={onNavigateToEcosystem}
                  className="px-6 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all flex items-center gap-2 shadow-lg shadow-emerald-900/20 active:scale-95"
                >
                  Explore Ecosystem <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};
