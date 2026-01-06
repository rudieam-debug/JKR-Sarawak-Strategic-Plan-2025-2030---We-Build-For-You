import React, { useState } from 'react';
import { X, Search, Bot, Loader2, BrainCircuit } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface AISearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSearch: (query: string, useThinkingMode: boolean) => void;
  searchResult: string;
  isLoading: boolean;
  clearResult: () => void;
}

export const AISearchModal: React.FC<AISearchModalProps> = ({ isOpen, onClose, onSearch, searchResult, isLoading, clearResult }) => {
  const [query, setQuery] = useState('');
  const [useThinkingMode, setUseThinkingMode] = useState(false);
  const [thinkingModeWasUsed, setThinkingModeWasUsed] = useState(false);

  if (!isOpen) {
    return null;
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() && !isLoading) {
      setThinkingModeWasUsed(useThinkingMode);
      onSearch(query, useThinkingMode);
    }
  };

  const handleClose = () => {
    setQuery('');
    clearResult();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[110]" role="dialog" aria-modal="true" onClick={handleClose}>
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl w-full max-w-2xl h-[80vh] m-4 flex flex-col transform transition-all" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-slate-700 flex-shrink-0">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Bot className="w-6 h-6 text-red-500" />
            AI Search Assistant
          </h3>
          <button onClick={handleClose} className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700">
            <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        <div className="flex-grow p-6 overflow-y-auto">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              {thinkingModeWasUsed ? (
                <BrainCircuit className="w-12 h-12 animate-pulse text-purple-500 mb-4" />
              ) : (
                <Loader2 className="w-12 h-12 animate-spin text-red-500 mb-4" />
              )}
              <p className="font-semibold text-gray-800 dark:text-slate-200">Analyzing data...</p>
              {thinkingModeWasUsed ? (
                 <p className="text-sm text-purple-500 dark:text-purple-400 mt-1 max-w-md">
                  Thinking Mode is active. This may take longer as the AI performs a deeper analysis.
                </p>
              ) : (
                <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">
                  Your AI assistant is preparing a response.
                </p>
              )}
            </div>
          ) : searchResult ? (
            <div>
              {thinkingModeWasUsed && (
                <div className="mb-4 flex items-center gap-2 text-xs font-semibold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/50 p-2 rounded-md">
                  <BrainCircuit className="w-4 h-4 flex-shrink-0" />
                  <span>Response generated using Thinking Mode.</span>
                </div>
              )}
              <article className="prose dark:prose-invert max-w-none prose-headings:text-gray-800 dark:prose-headings:text-slate-200 prose-a:text-red-600 dark:prose-a:text-red-400 prose-table:border prose-th:p-2 prose-td:p-2 prose-th:border prose-td:border dark:prose-table:border-slate-600 dark:prose-th:border-slate-600 dark:prose-td:border-slate-600">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{searchResult}</ReactMarkdown>
              </article>
            </div>
          ) : (
             <div className="flex flex-col items-center justify-center h-full text-center">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-slate-200">Ask anything about the Strategic Plan.</h4>
                <p className="text-gray-500 dark:text-slate-400 mt-2 max-w-md">
                    Try asking questions like:
                </p>
                <ul className="text-sm text-gray-500 dark:text-slate-400 list-disc list-inside mt-2 bg-gray-50 dark:bg-slate-700/50 p-4 rounded-lg text-left">
                    <li>What are our main goals for sustainability?</li>
                    <li>Summarize the financials for Thrust 3.</li>
                    <li>Which initiatives are at risk?</li>
                </ul>
            </div>
          )}
        </div>

        <div className="flex-shrink-0 p-4 bg-gray-50 dark:bg-slate-800/50 border-t border-gray-200 dark:border-slate-700">
          <form onSubmit={handleSearch} className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
                <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g., Show me projects that are at risk..."
                className={`w-full bg-white dark:bg-slate-700 border rounded-lg shadow-sm px-4 py-2 focus:outline-none focus:ring-2 transition-colors ${useThinkingMode ? 'border-purple-300 dark:border-purple-600 focus:ring-purple-500' : 'border-gray-300 dark:border-slate-600 focus:ring-red-500'}`}
                disabled={isLoading}
                />
                <button
                    type="submit"
                    disabled={isLoading || !query.trim()}
                    className={`flex items-center justify-center space-x-2 px-4 py-2 font-semibold text-white rounded-lg transition-colors shadow-sm disabled:bg-gray-400 disabled:cursor-not-allowed ${useThinkingMode ? 'bg-purple-600 hover:bg-purple-700' : 'bg-red-600 hover:bg-red-700'}`}
                >
                    {useThinkingMode ? <BrainCircuit className="w-5 h-5" /> : <Search className="w-5 h-5" />}
                    <span className="hidden sm:inline">{useThinkingMode ? 'Think' : 'Search'}</span>
                </button>
            </div>
            <label 
              className="flex items-center space-x-2 cursor-pointer text-sm text-gray-600 dark:text-slate-400 self-start group"
              title="Uses a more powerful AI model for deeper analysis of complex questions. Responses may take longer."
            >
                <input
                    type="checkbox"
                    checked={useThinkingMode}
                    onChange={(e) => setUseThinkingMode(e.target.checked)}
                    className="appearance-none h-4 w-4 border-2 border-gray-300 dark:border-slate-600 rounded-sm bg-white dark:bg-slate-700 checked:bg-purple-600 checked:border-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 dark:focus:ring-offset-slate-800 transition duration-200"
                />
                <div className="flex items-center gap-1.5 group-hover:text-gray-800 dark:group-hover:text-slate-200 transition-colors">
                    <BrainCircuit className={`w-4 h-4 transition-colors ${useThinkingMode ? 'text-purple-600 dark:text-purple-400' : ''}`} />
                    <span>Enable Thinking Mode (for complex queries)</span>
                </div>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};