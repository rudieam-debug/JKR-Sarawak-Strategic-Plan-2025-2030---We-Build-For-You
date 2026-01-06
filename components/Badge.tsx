
import React from 'react';

interface BadgeProps {
  text: string;
  color: string;
}

export const Badge: React.FC<BadgeProps> = ({ text, color }) => (
  <div className={`${color} text-white/90 px-4 py-2 rounded-full text-xs font-semibold shadow-md`}>
    {text}
  </div>
);