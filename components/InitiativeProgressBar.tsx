
import React from 'react';
import { motion } from 'framer-motion';
import { getInitiativeStatus } from '../utils/analysis';
import type { Initiative } from '../types';

const MotionDiv = motion.div as any;

interface InitiativeProgressBarProps {
  initiative: Initiative;
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const InitiativeProgressBar: React.FC<InitiativeProgressBarProps> = ({ 
  initiative, 
  className = "", 
  showText = true,
  size = 'md' 
}) => {
  const { progressColor, textColor } = getInitiativeStatus(initiative);
  
  const heightClass = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3'
  }[size];

  const fontSizeClass = {
    sm: 'text-[9px]',
    md: 'text-xs',
    lg: 'text-sm'
  }[size];

  return (
    <div className={`w-full ${className}`}>
      {showText && (
        <div className="flex justify-between w-full font-bold mb-1">
          <span className="text-[10px] text-text-muted uppercase tracking-wider">Progress</span>
          <span className={`${fontSizeClass} ${textColor}`}>{initiative.progress}%</span>
        </div>
      )}
      <div className={`w-full ${heightClass} bg-background rounded-full overflow-hidden shadow-inner`}>
        <MotionDiv 
          initial={{ width: 0 }} 
          animate={{ width: `${initiative.progress}%` }} 
          transition={{ duration: 1, ease: "easeOut" }}
          className={`h-full ${progressColor} shadow-[0_0_8px_rgba(255,255,255,0.1)]`}
        />
      </div>
    </div>
  );
};
