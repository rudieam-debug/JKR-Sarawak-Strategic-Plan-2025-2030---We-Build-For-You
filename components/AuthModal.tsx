
import React, { useState } from 'react';
import { X, Mail, Lock, User, Key, LogIn, UserPlus, AlertCircle, ShieldCheck, Edit3, Eye } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import type { UserRole } from '../types';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const { login, register } = useAuth();
  const [mode, setMode] = useState<'login' | 'register'>('login');
  
  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState<UserRole>('viewer');
  const [masterKey, setMasterKey] = useState('');
  
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      if (mode === 'login') {
        const success = await login(email, password);
        if (success) {
          onClose();
        } else {
          setError('Invalid email or password.');
        }
      } else {
        const result = await register(name, email, password, selectedRole, masterKey);
        if (result.success) {
          onClose();
        } else {
          setError(result.message);
        }
      }
    } catch (err) {
      setError('An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  const toggleMode = () => {
    setMode(prev => prev === 'login' ? 'register' : 'login');
    setError('');
    setPassword('');
    setMasterKey('');
    setSelectedRole('viewer');
  };

  const roles: { id: UserRole; label: string; icon: React.ElementType; color: string }[] = [
    { id: 'viewer', label: 'Viewer', icon: Eye, color: 'bg-slate-500' },
    { id: 'editor', label: 'Editor', icon: Edit3, color: 'bg-blue-500' },
    { id: 'super_admin', label: 'Super Admin', icon: ShieldCheck, color: 'bg-red-600' },
  ];

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-[100]" onClick={onClose}>
      <div className="bg-surface border border-white/10 rounded-2xl shadow-2xl w-full max-w-md m-4 overflow-hidden relative" onClick={e => e.stopPropagation()}>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-600"></div>
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-text-primary flex items-center gap-2">
              {mode === 'login' ? <LogIn className="w-6 h-6 text-primary" /> : <UserPlus className="w-6 h-6 text-primary" />}
              {mode === 'login' ? 'Sign In' : 'Create Account'}
            </h2>
            <button onClick={onClose} className="p-1 rounded-full hover:bg-surface-light text-text-secondary transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'register' && (
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                  <input 
                    type="text" 
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="w-full bg-background/50 border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full bg-background/50 border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="name@jkr.gov.my"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                <input 
                  type="password" 
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full bg-background/50 border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {mode === 'register' && (
              <div className="pt-2 space-y-3">
                 <label className="block text-sm font-medium text-text-secondary">Select Role</label>
                 <div className="grid grid-cols-3 gap-2">
                    {roles.map((role) => (
                        <button
                            key={role.id}
                            type="button"
                            onClick={() => setSelectedRole(role.id)}
                            className={`flex flex-col items-center justify-center p-2 rounded-lg border transition-all ${selectedRole === role.id ? `bg-white/10 border-${role.color.replace('bg-', '')} ring-1 ring-${role.color.replace('bg-', '')}` : 'bg-transparent border-white/10 hover:bg-white/5'}`}
                        >
                            <role.icon className={`w-5 h-5 mb-1 ${selectedRole === role.id ? 'text-white' : 'text-text-muted'}`} />
                            <span className={`text-[10px] font-bold ${selectedRole === role.id ? 'text-white' : 'text-text-muted'}`}>{role.label}</span>
                        </button>
                    ))}
                 </div>
                 
                 {(selectedRole === 'super_admin' || selectedRole === 'editor') && (
                   <div className="animate-in fade-in slide-in-from-top-2 duration-300 mt-2">
                      <label className="block text-xs font-medium text-primary mb-1">Department Code Required</label>
                      <div className="relative">
                        <Key className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                        <input 
                          type="password" 
                          value={masterKey}
                          onChange={e => setMasterKey(e.target.value)}
                          className="w-full bg-primary/5 border border-primary/30 rounded-lg py-2.5 pl-10 pr-4 text-text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder-primary/30"
                          placeholder={selectedRole === 'super_admin' ? "Enter Admin Key" : "Enter Editor Key"}
                        />
                      </div>
                   </div>
                 )}
              </div>
            )}

            {error && (
              <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 p-3 rounded-lg border border-red-400/20">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-3 rounded-lg shadow-lg shadow-primary/20 transition-all transform active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed mt-2"
            >
              {isLoading ? 'Processing...' : mode === 'login' ? 'Sign In' : 'Create Account'}
            </button>
          </form>
        </div>

        <div className="bg-surface-light border-t border-white/5 p-4 text-center">
          <p className="text-sm text-text-secondary">
            {mode === 'login' ? "Don't have an account? " : "Already have an account? "}
            <button onClick={toggleMode} className="text-primary hover:underline font-semibold">
              {mode === 'login' ? 'Register Now' : 'Sign In'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};
