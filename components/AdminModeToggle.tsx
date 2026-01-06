
import React from 'react';
import { LogOut, LogIn } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface AdminModeToggleProps {
  isAdminMode: boolean;
  toggleAdminMode: () => void;
}

export const AdminModeToggle: React.FC<AdminModeToggleProps> = ({ toggleAdminMode }) => {
    const { isAuthenticated } = useAuth();

    return (
        <button
            onClick={toggleAdminMode}
            className={`
                group relative flex items-center gap-2 pl-3 pr-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 border shadow-sm
                ${isAuthenticated 
                    ? 'bg-red-500/10 border-red-500/30 text-red-400 hover:bg-red-600 hover:text-white'
                    : 'bg-surface-light/50 border-white/10 text-text-secondary hover:bg-white/10 hover:text-white'
                }
            `}
            aria-label={isAuthenticated ? "Logout" : "Login"}
            title={isAuthenticated ? "Click to Logout" : "Click to Login"}
        >
            {isAuthenticated ? (
                <>
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                </>
            ) : (
                <>
                    <LogIn className="w-4 h-4" />
                    <span>Login</span>
                </>
            )}
        </button>
    );
};
