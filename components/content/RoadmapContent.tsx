
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Edit, Trash2, PlusCircle, Check, X, Flag, ChevronDown, ChevronUp } from 'lucide-react';
import type { TierMilestone, Initiative } from '../../types';
import { InitiativeProgressBar } from '../InitiativeProgressBar';

const MotionDiv = motion.div as any;

interface RoadmapContentProps {
  isAdminMode?: boolean;
  milestones: TierMilestone[];
  initiatives: Initiative[];
  onUpdateMilestone?: (tierIndex: number, milestoneIndex: number, newText: string) => void;
  onDeleteMilestone?: (tierIndex: number, milestoneIndex: number) => void;
  onAddMilestone?: (tierIndex: number, newText: string) => void;
}

const MilestoneItem: React.FC<{
  tierIndex: number;
  milestoneIndex: number;
  text: string;
  isAdminMode?: boolean;
  onUpdate: (tierIndex: number, milestoneIndex: number, newText: string) => void;
  onDelete: (tierIndex: number, milestoneIndex: number) => void;
}> = ({ tierIndex, milestoneIndex, text, isAdminMode, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);

  const handleSave = () => {
    if (editText.trim()) {
      onUpdate(tierIndex, milestoneIndex, editText.trim());
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditText(text);
    setIsEditing(false);
  };

  if (isAdminMode && isEditing) {
    return (
      <li className="flex items-center text-base space-x-2">
        <CheckCircle className="w-5 h-5 mr-1 flex-shrink-0" />
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="flex-grow bg-surface-light border border-primary rounded px-2 py-1 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
          autoFocus
          onKeyDown={(e) => e.key === 'Enter' && handleSave()}
        />
        <button onClick={handleSave} className="p-1.5 rounded-full hover:bg-green-900 text-green-500" title="Save">
          <Check className="w-4 h-4" />
        </button>
        <button onClick={handleCancel} className="p-1.5 rounded-full hover:bg-surface-light text-text-muted" title="Cancel">
          <X className="w-4 h-4" />
        </button>
      </li>
    );
  }

  return (
    <li className="flex items-start text-base group">
      <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
      <span className="flex-grow">{text}</span>
      {isAdminMode && (
        <div className="flex items-center space-x-1 ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button onClick={() => setIsEditing(true)} className="p-1.5 rounded-full hover:bg-blue-900 text-blue-500" title="Edit Milestone">
            <Edit className="w-4 h-4" />
          </button>
          <button onClick={() => onDelete(tierIndex, milestoneIndex)} className="p-1.5 rounded-full hover:bg-red-900 text-red-500" title="Delete Milestone">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      )}
    </li>
  );
};

const AddMilestone: React.FC<{
  tierIndex: number;
  onAdd: (tierIndex: number, newText: string) => void;
}> = ({ tierIndex, onAdd }) => {
    const [isAdding, setIsAdding] = useState(false);
    const [newText, setNewText] = useState('');

    const handleSave = () => {
        if (newText.trim()) {
            onAdd(tierIndex, newText.trim());
            setNewText('');
            setIsAdding(false);
        }
    };

    if (!isAdding) {
        return (
            <div className="mt-4 pt-4 border-t border-current border-opacity-30">
                <button onClick={() => setIsAdding(true)} className="w-full flex items-center justify-center space-x-2 px-3 py-2 text-sm font-semibold rounded-lg hover:bg-white/10 transition-colors">
                    <PlusCircle className="w-4 h-4" />
                    <span>Add Milestone</span>
                </button>
            </div>
        );
    }

    return (
        <div className="mt-4 pt-4 border-t border-current border-opacity-30 space-y-2">
            <input
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                className="w-full bg-surface-light border border-primary rounded px-2 py-1 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter new milestone text..."
                autoFocus
                onKeyDown={(e) => e.key === 'Enter' && handleSave()}
            />
             <div className="flex justify-end space-x-2">
                <button onClick={() => setIsAdding(false)} className="px-3 py-1 text-xs font-semibold rounded hover:bg-border">Cancel</button>
                <button onClick={handleSave} className="px-3 py-1 text-xs font-semibold text-white bg-primary rounded hover:bg-primary-hover">Save</button>
            </div>
        </div>
    );
};

export const RoadmapContent: React.FC<RoadmapContentProps> = ({ isAdminMode, milestones, initiatives, onUpdateMilestone, onDeleteMilestone, onAddMilestone }) => {
    const [expandedTiers, setExpandedTiers] = useState<Set<number>>(new Set([0]));

    const toggleTierExpansion = (tierIndex: number) => {
        setExpandedTiers(prev => {
        const newSet = new Set(prev);
        if (newSet.has(tierIndex)) {
            newSet.delete(tierIndex);
        } else {
            newSet.add(tierIndex);
        }
        return newSet;
        });
    };

    return (
    <div className="space-y-10">
        <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-text-primary mb-2 uppercase tracking-tight">Implementation Roadmap: Tier Milestones</h2>
            <p className="text-text-secondary max-w-4xl mx-auto">
                A phased execution strategy ensuring every initiative from 2025-2030 is tracked, transparent, and driven by results.
            </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto py-10">
            <div className="absolute left-4 top-0 h-full w-1 bg-surface-light md:left-1/2 md:-translate-x-1/2 rounded-full"></div>
            
            <div className="relative space-y-12">
                {milestones.map((tier, tierIndex) => {
                    const isExpanded = expandedTiers.has(tierIndex);
                    const isRightSide = tierIndex % 2 !== 0;
                    const tierMatch = tier.tier.match(/Thrust \d|ENABLER/);
                    const tierName = tierMatch ? tierMatch[0] : '';
                    const tierInitiatives = initiatives.filter(init => init.tier === tierName);

                    return (
                        <div key={tierIndex} className="relative">
                            <div className={`z-10 absolute top-0 left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full ${tier.color.replace('bg-', 'border-').replace('/50', '')} border-4 bg-background flex items-center justify-center shadow-lg`}>
                                <div className={`w-3 h-3 rounded-full ${tier.color.replace('/50', '')}`}></div>
                            </div>
                            
                            <MotionDiv 
                                layout
                                className={`
                                ml-14 md:ml-0 md:w-5/12 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${tier.color}
                                ${isRightSide ? 'md:ml-auto' : 'md:mr-auto'}
                                `}
                            >
                                <MotionDiv layout="position" className="font-bold mb-4 pb-3 border-b-2 border-current flex justify-between items-center cursor-pointer" onClick={() => toggleTierExpansion(tierIndex)}>
                                    <h3 className="text-2xl font-black uppercase tracking-tight">{tier.tier}</h3>
                                    {isExpanded ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                                </MotionDiv>
                                
                                <AnimatePresence>
                                {isExpanded && (
                                    <MotionDiv
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="mb-8">
                                            <h4 className="text-sm font-black uppercase tracking-widest mb-4 text-current opacity-80">Core Milestones</h4>
                                            <ul className="space-y-4">
                                                {tier.milestones.map((milestone, milestoneIndex) => (
                                                <MilestoneItem
                                                    key={`${tierIndex}-${milestoneIndex}`}
                                                    tierIndex={tierIndex}
                                                    milestoneIndex={milestoneIndex}
                                                    text={milestone}
                                                    isAdminMode={isAdminMode}
                                                    onUpdate={onUpdateMilestone!}
                                                    onDelete={onDeleteMilestone!}
                                                />
                                                ))}
                                            </ul>
                                            {isAdminMode && onAddMilestone && (
                                                <AddMilestone tierIndex={tierIndex} onAdd={onAddMilestone} />
                                            )}
                                        </div>

                                        {tierInitiatives.length > 0 && (
                                        <div className="mt-6 pt-6 border-t-2 border-current border-opacity-30">
                                            <h4 className="text-sm font-black uppercase tracking-widest mb-4 text-current opacity-80">Portfolio Progress</h4>
                                            <ul className="space-y-6">
                                            {tierInitiatives.map(initiative => (
                                                <li key={initiative.id} className="flex flex-col gap-2">
                                                    <div className="flex items-start">
                                                        <Flag className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5 opacity-70" />
                                                        <span className="text-sm font-bold leading-tight">{initiative.id}: {initiative.name}</span>
                                                    </div>
                                                    <InitiativeProgressBar initiative={initiative} showText={true} size="sm" className="opacity-90" />
                                                </li>
                                            ))}
                                            </ul>
                                        </div>
                                        )}
                                    </MotionDiv>
                                )}
                                </AnimatePresence>
                            </MotionDiv>
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
    );
};
