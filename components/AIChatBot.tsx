import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Bot, User, Send, CornerDownLeft, Loader2 } from 'lucide-react';
import type { ChatMessage } from '../types';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface AIChatBotProps {
  isOpen: boolean;
  onClose: () => void;
  onSendMessage: (message: string) => void;
  history: ChatMessage[];
  isLoading: boolean;
}

export const AIChatBot: React.FC<AIChatBotProps> = ({ isOpen, onClose, onSendMessage, history, isLoading }) => {
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history, isLoading]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      onSendMessage(input.trim());
      setInput('');
    }
  };

  const welcomeMessage: ChatMessage = {
    role: 'model',
    parts: [{ text: "Hello! I'm your AI assistant for the JKR Sarawak Strategic Plan. How can I help you today? You can ask me about initiatives, KPIs, or financial data." }],
    timestamp: new Date().toLocaleTimeString(),
  };

  const displayHistory = history.length > 0 ? history : [welcomeMessage];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 w-[calc(100%-2rem)] max-w-md h-[70vh] max-h-[600px] bg-white dark:bg-slate-800 rounded-2xl shadow-2xl flex flex-col z-[120] border border-gray-200 dark:border-slate-700"
          aria-modal="true"
          role="dialog"
        >
          <header className="flex-shrink-0 flex items-center justify-between p-4 border-b border-gray-200 dark:border-slate-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Bot className="w-6 h-6 text-red-500" />
              AI Assistant
            </h3>
            <button
              onClick={onClose}
              className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700"
              aria-label="Close Chat"
            >
              <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>
          </header>

          <main className="flex-grow p-4 overflow-y-auto space-y-6">
            {displayHistory.map((msg, index) => (
              <div key={index} className={`flex items-start gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                {msg.role === 'model' && (
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/50 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-red-500" />
                  </div>
                )}
                <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${
                  msg.role === 'user'
                    ? 'bg-red-600 text-white rounded-br-lg'
                    : 'bg-gray-100 dark:bg-slate-700 text-gray-800 dark:text-slate-200 rounded-bl-lg'
                }`}>
                  <article className="prose dark:prose-invert prose-sm max-w-none prose-p:my-2 prose-headings:my-3">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {msg.parts[0].text}
                    </ReactMarkdown>
                  </article>
                </div>
                {msg.role === 'user' && (
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 dark:bg-slate-600 flex items-center justify-center">
                    <User className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/50 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-red-500" />
                </div>
                <div className="max-w-[80%] rounded-2xl px-4 py-2.5 bg-gray-100 dark:bg-slate-700">
                    <div className="flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin text-gray-500" />
                        <span className="text-sm text-gray-500 dark:text-slate-400">Thinking...</span>
                    </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </main>

          <footer className="flex-shrink-0 p-4 bg-gray-50 dark:bg-slate-800/50 border-t border-gray-200 dark:border-slate-700">
            <form onSubmit={handleSubmit} className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                className="w-full bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-lg shadow-sm px-4 py-2 pr-20 focus:outline-none focus:ring-2 focus:ring-red-500"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center space-x-1.5 px-3 py-1.5 text-sm font-semibold text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors shadow-sm disabled:bg-gray-400 disabled:cursor-not-allowed"
                aria-label="Send Message"
              >
                <Send className="w-4 h-4" />
                <CornerDownLeft className="w-4 h-4 hidden sm:inline" />
              </button>
            </form>
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
};