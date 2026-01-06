import React from 'react';
import { X, Bot, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface SummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  summaryText: string;
  isLoading: boolean;
}

export const SummaryModal: React.FC<SummaryModalProps> = ({ isOpen, onClose, title, summaryText, isLoading }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[110]" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl w-full max-w-xl m-4 flex flex-col transform transition-all" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-slate-700 flex-shrink-0">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Bot className="w-6 h-6 text-red-500" />
            AI Summary: {title}
          </h3>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700">
            <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        <div className="flex-grow p-6 overflow-y-auto min-h-[200px]">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <Loader2 className="w-10 h-10 animate-spin text-red-500 mb-4" />
              <p className="font-semibold text-gray-800 dark:text-slate-200">Generating summary...</p>
            </div>
          ) : (
            <article className="prose dark:prose-invert max-w-none prose-a:text-red-600 dark:prose-a:text-red-400">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{summaryText}</ReactMarkdown>
            </article>
          )}
        </div>
        
        <div className="flex justify-end p-4 bg-gray-50 dark:bg-slate-800/50 border-t border-gray-200 dark:border-slate-700">
            <button onClick={onClose} className="px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-200 bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-600">
              Close
            </button>
        </div>
      </div>
    </div>
  );
};