
import React, { useState, useEffect, useMemo } from 'react';
import { X, PlusCircle, Calendar, FileText, User } from 'lucide-react';
import type { Initiative, ProgressUpdate } from '../types';
import { strategicThrusts } from '../assets/strategicData';

interface AddInitiativeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (newInitiativeData: Initiative) => void;
  thrustId: number | null;
  initiatives: Initiative[];
}

// Helper function to format date to DD/MM/YYYY for saving
const formatDate = (date: Date): string => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

// Helper function to format date to YYYY-MM-DD for input[type=date]
const formatDateForInput = (date: Date): string => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
};

export const AddInitiativeModal: React.FC<AddInitiativeModalProps> = ({ isOpen, onClose, onSave, thrustId, initiatives }) => {
  const [localThrustId, setLocalThrustId] = useState<number>(1);
  const [name, setName] = useState('');
  const [lead, setLead] = useState('');
  const [plan_start, setPlanStart] = useState('');
  const [plan_end, setPlanEnd] = useState('');
  const [actual_start, setActualStart] = useState('');
  const [actual_end, setActualEnd] = useState('');
  const [progress, setProgress] = useState(0);
  const [code, setCode] = useState('');
  const [responsibleBranch, setResponsibleBranch] = useState('');
  const [expectedOutcome, setExpectedOutcome] = useState('');
  const [notes, setNotes] = useState('');

  const uniqueBranches = useMemo(() => {
    const branches = new Set(initiatives.map(i => i.responsibleBranch).filter(Boolean) as string[]);
    return Array.from(branches).sort();
  }, [initiatives]);

  const generateNextId = (tid: number) => {
      const thrustInitiatives = initiatives.filter(i => i.thrustId === tid);
      const maxSeq = thrustInitiatives.reduce((max, i) => {
        const parts = i.id.split('.');
        if (parts.length < 2) return max;
        const seq = parseInt(parts[1], 10);
        return !isNaN(seq) && seq > max ? seq : max;
      }, 0);
      return `I-${tid}.${maxSeq + 1}`;
  };

  useEffect(() => {
    if (isOpen) {
      setLocalThrustId(thrustId || 1);
      setName('');
      setLead('');
      const today = new Date();
      const oneYearFromNow = new Date();
      oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
      setPlanStart(formatDateForInput(today));
      setPlanEnd(formatDateForInput(oneYearFromNow));
      setActualStart('');
      setActualEnd('');
      setProgress(0);
      setResponsibleBranch('');
      setExpectedOutcome('');
      setNotes('');
      
      // Generate unique ID based on thrust ID
      if (thrustId) {
          setCode(generateNextId(thrustId));
      } else {
          setCode(generateNextId(1));
      }
    }
  }, [isOpen, thrustId, initiatives]);

  const handleThrustChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const newThrustId = parseInt(e.target.value, 10);
      setLocalThrustId(newThrustId);
      setCode(generateNextId(newThrustId));
  };

  if (!isOpen) {
    return null;
  }

  const handleSave = () => {
    if (!code.trim()) {
        alert("Initiative ID is required.");
        return;
    }
    if (!name.trim() || !plan_start || !plan_end) {
        alert("Please fill in Name and Planned dates.");
        return;
    }

    // Validate ID format relation to Thrust ID
    const prefix = `I-${localThrustId}.`;
    if (!code.startsWith(prefix)) {
        alert(`Initiative ID must start with '${prefix}' to match the selected Thrust.`);
        return;
    }

    // Validate uniqueness
    const exists = initiatives.some(i => i.id === code);
    if (exists) {
        alert(`Initiative ID '${code}' already exists. Please use a unique ID.`);
        return;
    }

    if (new Date(plan_start) >= new Date(plan_end) || (actual_start && actual_end && new Date(actual_start) >= new Date(actual_end))) {
        alert("End dates must be after their corresponding start dates.");
        return;
    }

    const initialHistory: ProgressUpdate[] = [];
    
    const noteDate = actual_start || plan_start || new Date().toISOString().split('T')[0];
    
    // Add initial progress entry if progress > 0
    if (progress > 0) {
        initialHistory.push({
            date: noteDate,
            progress: progress,
            note: 'Initial progress set.'
        });
    }

    onSave({
      id: code,
      thrustId: localThrustId,
      name,
      lead: lead.trim(),
      plan_start: formatDate(new Date(plan_start)),
      plan_end: formatDate(new Date(plan_end)),
      actual_start: actual_start ? formatDate(new Date(actual_start)) : '',
      actual_end: actual_end ? formatDate(new Date(actual_end)) : '',
      progress,
      responsibleBranch,
      expectedOutcome,
      progressHistory: initialHistory,
      notes: notes.trim(),
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-[100]" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="bg-surface border border-border rounded-xl shadow-2xl w-full max-w-lg m-4 transform transition-all" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center p-4 border-b border-border">
          <h3 className="text-lg font-bold text-text-primary">Add New Initiative</h3>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-surface-light text-text-secondary transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-5 max-h-[70vh] overflow-y-auto custom-scrollbar">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
             <div className="col-span-3 sm:col-span-1">
                <label htmlFor="add-thrust-id" className="block text-sm font-medium text-text-secondary">Strategic Thrust</label>
                <select
                    id="add-thrust-id"
                    value={localThrustId}
                    onChange={handleThrustChange}
                    className="mt-1 block w-full bg-background border border-border rounded-md shadow-sm py-2 px-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                >
                    {strategicThrusts.map(t => (
                        <option key={t.id} value={t.id}>T{t.id}</option>
                    ))}
                </select>
            </div>
            <div className="col-span-3 sm:col-span-2">
              <label htmlFor="initiative-code" className="block text-sm font-medium text-text-secondary">Initiative ID</label>
              <input
                id="initiative-code"
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="mt-1 block w-full bg-background border border-border rounded-md shadow-sm py-2 px-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-mono"
                placeholder={`e.g. I-${localThrustId}.x`}
              />
            </div>
          </div>

          <div>
              <label htmlFor="initiative-name" className="block text-sm font-medium text-text-secondary">Initiative Name</label>
              <input
                id="initiative-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full bg-background border border-border rounded-md shadow-sm py-2 px-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                required
                placeholder="Enter initiative name"
              />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
                <label htmlFor="add-responsible-branch" className="block text-sm font-medium text-text-secondary">Responsible Branch</label>
                <select
                    id="add-responsible-branch"
                    value={responsibleBranch}
                    onChange={(e) => setResponsibleBranch(e.target.value)}
                    className="mt-1 block w-full bg-background border border-border rounded-md shadow-sm py-2 px-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                >
                    <option value="">-- Select Branch --</option>
                    {uniqueBranches.map(branch => (
                        <option key={branch} value={branch}>{branch}</option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="add-lead" className="block text-sm font-medium text-text-secondary">Owner (Lead)</label>
                <div className="relative mt-1">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-4 w-4 text-text-muted" />
                    </div>
                    <input
                        id="add-lead"
                        type="text"
                        value={lead}
                        onChange={(e) => setLead(e.target.value)}
                        className="block w-full bg-background border border-border rounded-md shadow-sm py-2 pl-10 pr-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="e.g. John Doe"
                    />
                </div>
            </div>
          </div>
          
          <div>
            <label htmlFor="add-expected-outcome" className="block text-sm font-medium text-text-secondary">Expected Outcome</label>
            <textarea
                id="add-expected-outcome"
                rows={2}
                value={expectedOutcome}
                onChange={(e) => setExpectedOutcome(e.target.value)}
                className="mt-1 block w-full bg-background border border-border rounded-md shadow-sm py-2 px-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="e.g., Sustainable materials adopted in new designs"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
             <div>
                <label htmlFor="plan-start-date" className="block text-sm font-medium text-text-secondary">Plan Start Date</label>
                <input type="date" id="plan-start-date" value={plan_start} onChange={e => setPlanStart(e.target.value)} className="mt-1 w-full bg-background border border-border rounded-md shadow-sm px-3 py-2 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"/>
             </div>
             <div>
                <label htmlFor="plan-end-date" className="block text-sm font-medium text-text-secondary">Plan End Date</label>
                <input type="date" id="plan-end-date" value={plan_end} onChange={e => setPlanEnd(e.target.value)} className="mt-1 w-full bg-background border border-border rounded-md shadow-sm px-3 py-2 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"/>
             </div>
             <div>
                <label htmlFor="actual-start-date" className="block text-sm font-medium text-text-secondary">Actual Start Date</label>
                <input type="date" id="actual-start-date" value={actual_start} onChange={e => setActualStart(e.target.value)} className="mt-1 w-full bg-background border border-border rounded-md shadow-sm px-3 py-2 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"/>
             </div>
             <div>
                <label htmlFor="actual-end-date" className="block text-sm font-medium text-text-secondary">Actual End Date</label>
                <input type="date" id="actual-end-date" value={actual_end} onChange={e => setActualEnd(e.target.value)} className="mt-1 w-full bg-background border border-border rounded-md shadow-sm px-3 py-2 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"/>
             </div>
          </div>
          
          {/* Notes Field */}
          <div>
              <label htmlFor="add-notes" className="block text-sm font-medium text-text-secondary flex items-center gap-2">
                <FileText className="w-4 h-4" /> Notes & Strategic Context
              </label>
              <textarea
                  id="add-notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="mt-1 block w-full bg-background border border-border rounded-md shadow-sm py-2 px-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Enter key notes, strategic risks, or context for this initiative..."
              />
          </div>

          <div>
            <label htmlFor="add-progress-slider" className="block text-sm font-medium text-text-secondary mb-2">
              Initial Progress: <span className="font-bold text-primary">{progress}%</span>
            </label>
            <input
              id="add-progress-slider"
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={(e) => setProgress(Number(e.target.value))}
              className="w-full h-2 bg-surface-light rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>
        </div>

        <div className="flex justify-end p-4 bg-surface-light/30 border-t border-border rounded-b-xl">
          <button onClick={onClose} className="px-4 py-2 text-sm font-semibold text-text-secondary bg-transparent border border-border rounded-lg hover:bg-surface-light hover:text-text-primary mr-2 transition-colors">
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="flex items-center justify-center space-x-2 px-4 py-2 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primary-hover transition-colors shadow-lg shadow-primary/20"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Add Initiative</span>
          </button>
        </div>
      </div>
    </div>
  );
};
    