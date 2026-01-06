
import type { Initiative, RiskProfile } from '../types';
import { CheckCircle, AlertTriangle, Calendar, TrendingUp, Zap } from 'lucide-react';

/**
 * Parses a date string in DD/MM/YYYY format to a Date object.
 */
export const parseDate = (dateString: string): Date | null => {
  if (!dateString) return null;
  const parts = dateString.split('/');
  if (parts.length !== 3) return null;
  
  const [day, month, year] = parts.map(Number);
  if (isNaN(day) || isNaN(month) || isNaN(year) || year < 1000 || month < 1 || month > 12 || day < 1 || day > 31) {
    return null;
  }
  return new Date(year, month - 1, day);
};

export const getInitiativeStatus = (initiative: Initiative) => {
    const today = new Date('2026-07-01'); // Deterministic date for the 2025-2030 strategy timeline
    today.setHours(0, 0, 0, 0);

    const planEnd = parseDate(initiative.plan_end);
    const planStart = parseDate(initiative.plan_start);

    if (initiative.progress >= 100) {
        return { 
            status: 'Completed', 
            icon: CheckCircle, 
            textColor: 'text-blue-400', 
            bg: 'bg-blue-500/20', 
            border: 'border-blue-500/30', 
            progressColor: 'bg-blue-500' 
        };
    }

    if (planEnd && planEnd < today) {
        return { 
            status: 'Overdue', 
            icon: AlertTriangle, 
            textColor: 'text-primary', 
            bg: 'bg-primary/20', 
            border: 'border-primary/30', 
            progressColor: 'bg-primary' 
        };
    }

    if (planStart && today < planStart) {
        return { 
            status: 'Not Started', 
            icon: Calendar, 
            textColor: 'text-text-muted', 
            bg: 'bg-surface-light', 
            border: 'border-white/10', 
            progressColor: 'bg-slate-500' 
        };
    }

    if (planStart && planEnd) {
        const totalDuration = planEnd.getTime() - planStart.getTime();
        const elapsedDuration = today.getTime() - planStart.getTime();
        if (totalDuration > 0) {
            const expectedProgress = (elapsedDuration / totalDuration) * 100;
            if (initiative.progress < expectedProgress - 25 || initiative.progress < expectedProgress * 0.5) {
                return { 
                    status: 'At Risk', 
                    icon: AlertTriangle, 
                    textColor: 'text-amber-400', 
                    bg: 'bg-amber-500/20', 
                    border: 'border-amber-500/30', 
                    progressColor: 'bg-amber-500' 
                };
            }
        }
    }

    return { 
        status: 'On Track', 
        icon: TrendingUp, 
        textColor: 'text-green-400', 
        bg: 'bg-green-500/20', 
        border: 'border-green-500/30', 
        progressColor: 'bg-green-500' 
    };
};

/**
 * Calculates the risk profile for a given initiative.
 */
export const calculateRisk = (initiative: Initiative): RiskProfile => {
    const statusData = getInitiativeStatus(initiative);
    
    if (statusData.status === 'Completed') {
        return { level: 'Low', justification: 'Initiative has been successfully completed.' };
    }
    if (statusData.status === 'Overdue') {
        return { level: 'High', justification: 'The planned end date has passed but the initiative is not 100% complete.' };
    }
    if (statusData.status === 'At Risk') {
        return { level: 'High', justification: `Progress (${initiative.progress}%) is significantly behind the expected schedule.` };
    }
    if (statusData.status === 'Not Started') {
        return { level: 'Low', justification: 'Planned start date is in the future.' };
    }
    
    return { level: 'Low', justification: 'Initiative appears to be on track according to its current progress and timeline.' };
};
