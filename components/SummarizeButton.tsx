import React from 'react';
import { Bot } from 'lucide-react';

interface SummarizeButtonProps {
  onClick: () => void;
  className?: string;
}

export const SummarizeButton: React.FC<SummarizeButtonProps> = ({ onClick, className }) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation(); // Prevent clicks from bubbling up to parent elements
        onClick();
      }}
      className={`absolute top-1 right-1 p-1.5 rounded-full bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 opacity-0 group-hover:opacity-100 transition-opacity z-10 ${className}`}
      title="Summarize with AI"
    >
      <Bot className="w-4 h-4" />
    </button>
  );
};