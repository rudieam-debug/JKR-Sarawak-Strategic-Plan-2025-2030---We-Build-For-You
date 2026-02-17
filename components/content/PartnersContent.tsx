
import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, Calendar, Trash2, PlusCircle, Building2, Image as ImageIcon } from 'lucide-react';
import type { Partner } from '../../types';
import { EditableText } from '../EditableText';

const MotionDiv = motion.div as any;
const MotionButton = motion.button as any;

interface PartnersContentProps {
  isAdminMode?: boolean;
  partners: Partner[];
  onUpdatePartner?: (id: number, field: keyof Partner, value: string) => void;
  onDeletePartner?: (id: number) => void;
  onAddPartner?: () => void;
}

export const PartnersContent: React.FC<PartnersContentProps> = ({ 
  isAdminMode = false, 
  partners, 
  onUpdatePartner,
  onDeletePartner,
  onAddPartner
}) => {
  return (
    <div className="space-y-12">
      <div className="text-center">
          <MotionDiv 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-20 h-20 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-500 shadow-[0_0_50px_rgba(59,130,246,0.15)] mx-auto mb-6"
          >
              <Handshake className="w-10 h-10" />
          </MotionDiv>
          <h2 className="text-4xl font-black text-text-primary uppercase tracking-tighter">Strategic Partners</h2>
          <p className="text-text-secondary max-w-2xl mt-3 mx-auto">
            Collaboration is at the heart of our strategy. We partner with leading financial, educational, and digital institutions to drive Sarawak's infrastructure forward.
          </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {partners.map((partner, idx) => (
          <MotionDiv 
            key={partner.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="group relative bg-surface-light/30 backdrop-blur-md rounded-2xl border border-white/5 p-6 flex items-center gap-6 hover:border-blue-500/40 hover:bg-surface-light/50 transition-all duration-300 shadow-lg"
          >
            {/* Partner Logo Container */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-white flex items-center justify-center p-3 shrink-0 shadow-inner group-hover:scale-105 transition-transform duration-500">
                {partner.logoUrl ? (
                    <img 
                        src={partner.logoUrl} 
                        alt={`${partner.name} logo`} 
                        className="max-w-full max-h-full object-contain"
                    />
                ) : (
                    <div className="flex flex-col items-center justify-center text-slate-300">
                        <Building2 className="w-8 h-8 mb-1" />
                        <span className="text-[8px] font-bold uppercase">No Logo</span>
                    </div>
                )}
            </div>

            <div className="flex-grow min-w-0">
                <div className="flex flex-col mb-1">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-[10px] font-mono text-blue-400 font-bold uppercase tracking-widest">
                            {partner.acronym}
                        </span>
                    </div>
                    <EditableText
                        isAdminMode={isAdminMode}
                        initialValue={partner.name}
                        onSave={(val) => onUpdatePartner?.(partner.id, 'name', val)}
                        label="Partner Name"
                        textClassName="text-lg font-bold text-text-primary leading-tight group-hover:text-blue-400 transition-colors"
                        inputClassName="text-sm"
                    />
                </div>
                <div className="flex items-center gap-2 text-xs text-text-secondary mt-3">
                    <Calendar className="w-3.5 h-3.5 text-blue-500/70" />
                    <span className="font-bold uppercase tracking-tighter opacity-60">Established / Signed:</span>
                    <EditableText
                        isAdminMode={isAdminMode}
                        initialValue={partner.date}
                        onSave={(val) => onUpdatePartner?.(partner.id, 'date', val)}
                        label="Establishment Date"
                        textClassName="font-medium text-text-primary/80"
                    />
                </div>
            </div>

            {isAdminMode && (
                <div className="absolute top-4 right-4 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                        onClick={() => {
                            const newUrl = prompt('Enter Logo URL for ' + partner.name, partner.logoUrl || '');
                            if (newUrl !== null) onUpdatePartner?.(partner.id, 'logoUrl', newUrl);
                        }}
                        className="p-1.5 rounded-full bg-blue-500/10 text-blue-400 hover:bg-blue-500 hover:text-white transition-all"
                        title="Change Logo URL"
                    >
                        <ImageIcon className="w-3.5 h-3.5" />
                    </button>
                    <button 
                        onClick={() => onDeletePartner?.(partner.id)}
                        className="p-1.5 rounded-full bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition-all"
                        title="Delete Partner"
                    >
                        <Trash2 className="w-3.5 h-3.5" />
                    </button>
                </div>
            )}
          </MotionDiv>
        ))}

        {isAdminMode && (
             <MotionButton 
                onClick={onAddPartner}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="flex items-center justify-center gap-3 bg-surface border-2 border-dashed border-white/5 rounded-2xl p-6 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all text-text-muted hover:text-blue-500 min-h-[140px]"
             >
                <PlusCircle className="w-8 h-8" />
                <span className="font-black text-base uppercase tracking-tighter">Add Strategic Partner</span>
             </MotionButton>
        )}
      </div>
      
      <div className="pt-12 text-center border-t border-white/5">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-text-muted flex items-center justify-center gap-4">
              <span className="w-12 h-px bg-white/5"></span>
              Unity Through Cooperation
              <span className="w-12 h-px bg-white/5"></span>
          </p>
      </div>
    </div>
  );
};
