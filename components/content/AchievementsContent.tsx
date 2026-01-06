
import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Star, ShieldCheck, Globe, Award, Trash2, PlusCircle, Calendar, Briefcase } from 'lucide-react';
import type { Achievement } from '../../types';
import { EditableText } from '../EditableText';

interface AchievementsContentProps {
  isAdminMode?: boolean;
  achievements: Achievement[];
  onUpdateAchievement?: (id: number, field: keyof Achievement, value: string) => void;
  onDeleteAchievement?: (id: number) => void;
  onAddAchievement?: () => void;
  onSummarize: (text: string, title: string) => void;
}

const CategoryIcon = ({ category }: { category: string }) => {
    switch (category) {
        case 'Global': return <Globe className="w-5 h-5 text-blue-400" />;
        case 'National': return <ShieldCheck className="w-5 h-5 text-red-400" />;
        case 'State': return <Star className="w-5 h-5 text-amber-400" />;
        default: return <Award className="w-5 h-5 text-slate-400" />;
    }
};

export const AchievementsContent: React.FC<AchievementsContentProps> = ({ 
  isAdminMode = false, 
  achievements, 
  onUpdateAchievement,
  onDeleteAchievement,
  onAddAchievement,
  onSummarize
}) => {
  return (
    <div className="space-y-12">
      <div className="text-center">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-20 h-20 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 shadow-[0_0_50px_rgba(245,158,11,0.15)] mx-auto mb-6"
          >
              <Trophy className="w-10 h-10" />
          </motion.div>
          <h2 className="text-4xl font-black text-text-primary uppercase tracking-tighter">Strategic Achievements</h2>
          <p className="text-text-secondary max-w-2xl mt-3 mx-auto">
            Celebrating JKR Sarawak's milestones of excellence, from local impact to global recognition. Our commitment to world-class standards reflected in every accolade.
          </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((achievement, idx) => (
          <motion.div 
            key={achievement.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group relative bg-surface rounded-2xl border border-white/5 shadow-xl overflow-hidden hover:border-amber-500/30 transition-all duration-500"
          >
            {/* Visual Header / Image - Fixed to fill card */}
            <div className="h-56 bg-slate-900 flex items-center justify-center relative group-hover:bg-slate-800 transition-colors overflow-hidden">
                {achievement.imgUrl ? (
                    <img 
                      src={achievement.imgUrl} 
                      alt={achievement.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      style={{ objectPosition: 'center 10%' }} 
                    />
                ) : (
                    <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center text-amber-500/50 group-hover:text-amber-500 transition-colors">
                        <Trophy className="w-12 h-12" />
                    </div>
                )}
                
                {/* Status Badges Overlay */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                        <CategoryIcon category={achievement.category} />
                        <span className="text-[10px] font-black uppercase tracking-widest text-white">{achievement.category}</span>
                    </div>
                    {achievement.date.toLowerCase().includes('pending') && (
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/80 backdrop-blur-md border border-white/10">
                            <span className="text-[10px] font-black uppercase tracking-widest text-white">Pending</span>
                        </div>
                    )}
                </div>
                
                {isAdminMode && (
                    <button 
                        onClick={() => onDeleteAchievement?.(achievement.id)}
                        className="absolute top-4 right-4 p-2 rounded-full bg-red-500/10 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500 hover:text-white"
                    >
                        <Trash2 className="w-4 h-4" />
                    </button>
                )}
            </div>

            {/* Content Body */}
            <div className="p-6 space-y-4">
                <div className="space-y-1">
                    <EditableText
                        isAdminMode={isAdminMode}
                        initialValue={achievement.title}
                        onSave={(val) => onUpdateAchievement?.(achievement.id, 'title', val)}
                        label="Achievement Title"
                        textClassName="text-xl font-bold text-text-primary leading-tight group-hover:text-amber-400 transition-colors"
                        inputClassName="text-lg font-bold"
                    />
                    <div className="flex items-center justify-between text-xs text-text-muted font-bold uppercase tracking-wider">
                        <div className="flex items-center gap-1.5 overflow-hidden">
                            <Briefcase className="w-3 h-3 text-amber-500 shrink-0" />
                            <EditableText
                                isAdminMode={isAdminMode}
                                initialValue={achievement.organization}
                                onSave={(val) => onUpdateAchievement?.(achievement.id, 'organization', val)}
                                label="Awarding Body"
                                textClassName="text-text-secondary truncate"
                            />
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0 ml-2">
                            <Calendar className="w-3 h-3 text-amber-500" />
                            <EditableText
                                isAdminMode={isAdminMode}
                                initialValue={achievement.date}
                                onSave={(val) => onUpdateAchievement?.(achievement.id, 'date', val)}
                                label="Award Date"
                                textClassName={`text-text-secondary ${achievement.date.toLowerCase().includes('pending') ? 'text-primary' : ''}`}
                            />
                        </div>
                    </div>
                </div>

                <EditableText
                    isAdminMode={isAdminMode}
                    initialValue={achievement.description}
                    onSave={(val) => onUpdateAchievement?.(achievement.id, 'description', val)}
                    label="Description"
                    isTextarea
                    textClassName="text-sm text-text-secondary leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300"
                    onSummarize={() => onSummarize(achievement.description, achievement.title)}
                />
            </div>

            {/* Glowing Accent */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </motion.div>
        ))}

        {isAdminMode && (
             <motion.button 
                onClick={onAddAchievement}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-col items-center justify-center bg-surface border-2 border-dashed border-white/10 rounded-2xl p-8 hover:border-amber-500/50 hover:bg-amber-500/5 transition-all text-text-muted hover:text-amber-500 h-full min-h-[400px]"
             >
                <PlusCircle className="w-12 h-12 mb-4 opacity-50" />
                <span className="font-black text-lg uppercase tracking-tighter">Add New Achievement</span>
             </motion.button>
        )}
      </div>
      
      {/* Decorative Hall of Fame Footer */}
      <div className="pt-12 text-center border-t border-white/5">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-text-muted">Hall of Excellence • JKR Sarawak</p>
      </div>
    </div>
  );
};
