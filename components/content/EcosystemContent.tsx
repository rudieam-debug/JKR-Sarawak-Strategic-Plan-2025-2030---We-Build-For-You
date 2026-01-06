
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Layers, Rocket, Users, ShieldAlert, TrendingUp, CheckCircle, AlertTriangle, Calendar, Info, Briefcase, Building } from 'lucide-react';
import type { Initiative } from '../../types';
import { getInitiativeStatus } from '../../utils/analysis';
import { InitiativeProgressBar } from '../InitiativeProgressBar';

interface EcosystemContentProps {
  initiatives: Initiative[];
  isAdminMode?: boolean;
  onEditInitiative?: (initiative: Initiative) => void;
}

export const EcosystemContent: React.FC<EcosystemContentProps> = ({ initiatives, isAdminMode, onEditInitiative }) => {
  const ecosystemInitiatives = useMemo(() => initiatives.filter(i => i.thrustId === 7), [initiatives]);

  const categories = [
    { 
      title: "People & Unity Culture", 
      icon: Users, 
      desc: "Change champions and workforce mindset shift.",
      items: ecosystemInitiatives.filter(i => i.id.startsWith('7.1'))
    },
    { 
      title: "Market & Supply Chain", 
      icon: Building, 
      desc: "Contractor development and material ecosystems.",
      items: ecosystemInitiatives.filter(i => i.id.startsWith('7.2'))
    },
    { 
      title: "Strategic Monitoring", 
      icon: TrendingUp, 
      desc: "Governance tools and the Annual Refresh cycles.",
      items: ecosystemInitiatives.filter(i => i.id.startsWith('7.3'))
    }
  ];

  const renderCard = (initiative: Initiative) => {
      const { status, icon: StatusIcon, textColor, bg, border } = getInitiativeStatus(initiative);
      return (
          <motion.div 
            key={initiative.id} 
            whileHover={{ y: -5 }}
            className="bg-surface rounded-xl p-5 border border-white/5 shadow-lg relative overflow-hidden group"
          >
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 blur-3xl rounded-full -mr-10 -mt-10 group-hover:bg-emerald-500/10 transition-colors"></div>
              
              <div className="flex justify-between items-start mb-3">
                  <span className="text-[10px] font-mono text-emerald-400/70 bg-emerald-500/10 px-1.5 py-0.5 rounded">{initiative.id}</span>
                  <div className={`flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${bg} ${border} ${textColor}`}>
                      <StatusIcon className="w-3 h-3" /> {status}
                  </div>
              </div>

              <h4 className="font-bold text-text-primary mb-2 line-clamp-1 group-hover:text-emerald-400 transition-colors">{initiative.name}</h4>
              <p className="text-xs text-text-secondary line-clamp-2 mb-4 h-8">{initiative.description || "Foundational ecosystem initiative."}</p>

              <InitiativeProgressBar initiative={initiative} showText={true} size="sm" />

              {isAdminMode && (
                  <button 
                    onClick={() => onEditInitiative?.(initiative)}
                    className="mt-4 w-full py-1.5 rounded-lg border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/5 text-[10px] font-bold text-text-secondary hover:text-emerald-400 transition-all uppercase tracking-widest"
                  >
                    Update Status
                  </button>
              )}
          </motion.div>
      );
  };

  return (
    <div className="space-y-12">
      <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-3xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_50px_rgba(16,185,129,0.15)] mb-6">
              <Layers className="w-10 h-10" />
          </div>
          <h2 className="text-4xl font-black text-text-primary uppercase tracking-tighter">The Enabling Ecosystem</h2>
          <p className="text-text-secondary max-w-2xl mt-3 italic">
            "The essential enabler that ensures our strategic machine functions at high velocity through shared culture, vendor readiness, and agile monitoring."
          </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-emerald-600/10 p-6 rounded-2xl border border-emerald-500/20 flex flex-col items-center text-center transition-transform hover:scale-105">
              <Rocket className="w-8 h-8 text-emerald-400 mb-3" />
              <h3 className="font-bold text-text-primary uppercase tracking-wide">Drive Velocity</h3>
              <p className="text-xs text-text-secondary mt-1">Removing friction to accelerate project movement from design to handover.</p>
          </div>
          <div className="bg-blue-600/10 p-6 rounded-2xl border border-blue-500/20 flex flex-col items-center text-center transition-transform hover:scale-105">
              <Users className="w-8 h-8 text-blue-400 mb-3" />
              <h3 className="font-bold text-text-primary uppercase tracking-wide">Change Champions</h3>
              <p className="text-xs text-text-secondary mt-1">Developing a grassroots network of advocates to lead cultural and digital adoption.</p>
          </div>
          <div className="bg-amber-600/10 p-6 rounded-2xl border border-amber-500/20 flex flex-col items-center text-center transition-transform hover:scale-105">
              <ShieldAlert className="w-8 h-8 text-amber-400 mb-3" />
              <h3 className="font-bold text-text-primary uppercase tracking-wide">Agile Governance</h3>
              <p className="text-xs text-text-secondary mt-1">Adaptive oversight that enables JKR to pivot rapidly as conditions change.</p>
          </div>
      </div>

      <div className="space-y-16">
          {categories.map((cat, idx) => (
              <div key={idx} className="space-y-6">
                  <div className="flex items-center gap-4">
                      <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-emerald-400">
                          <cat.icon className="w-6 h-6" />
                      </div>
                      <div>
                          <h3 className="text-xl font-bold text-text-primary uppercase tracking-tight">{cat.title}</h3>
                          <p className="text-sm text-text-secondary">{cat.desc}</p>
                      </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {cat.items.map(item => renderCard(item))}
                      {cat.items.length === 0 && (
                          <div className="col-span-full py-10 border border-dashed border-white/10 rounded-xl text-center text-text-muted text-sm">
                              No active foundational initiatives in this category.
                          </div>
                      )}
                  </div>
              </div>
          ))}
      </div>
    </div>
  );
};
