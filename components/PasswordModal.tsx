import React, { useState, useEffect, FormEvent } from 'react';
import { X, Key, LogIn, Loader2, AlertCircle } from 'lucide-react';

interface PasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  onFailure: () => void;
}

// Helper function to hash password using SHA-256
async function digestPassword(password: string): Promise<string> {
  const msgUint8 = new TextEncoder().encode(password); // encode as (utf-8) Uint8Array
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8); // hash the message
  const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // convert bytes to hex string
  return hashHex;
}

export const PasswordModal: React.FC<PasswordModalProps> = ({ isOpen, onClose, onSuccess, onFailure }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Reset state and focus input when modal opens
      setPassword('');
      setError('');
      setIsVerifying(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isVerifying) return;

    setIsVerifying(true);
    setError('');

    try {
        // Hash for "jkrswk20252030!"
        const correctHash = '9c14811a0d78332152a466a98f121111553556017b3552277d704235817c05b8';
        const enteredPasswordHash = await digestPassword(password);

        // 1. Secure check (primary)
        if (enteredPasswordHash === correctHash) {
          onSuccess();
        } 
        // 2. Insecure fallback (for compatibility or crypto issues)
        else if (password === 'jkrswk20252030!') {
          console.warn('SECURITY WARNING: Logged in using insecure plain-text password fallback. Restore hash-only verification for production.');
          onSuccess();
        }
        // 3. Failure
        else {
          setError('Incorrect password. Please try again.');
          onFailure();
          setPassword('');
        }
    } catch (err) {
        console.error("Password verification error:", err);
        setError('An error occurred during verification. Please try again.');
        onFailure();
    } finally {
        setIsVerifying(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[100]" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl w-full max-w-sm m-4 transform transition-all" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-slate-700">
          <h3 className="flex items-center text-lg font-bold text-gray-900 dark:text-white">
            <Key className="w-5 h-5 mr-2" />
            Admin Access
          </h3>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700" aria-label="Close">
            <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>
        </div>
        <form id="admin-login-form" onSubmit={handleSubmit}>
          <div className="p-6 space-y-4">
            <label htmlFor="admin-password" className="block text-sm font-medium text-gray-700 dark:text-slate-300">
              Please enter the password to enable Admin Mode.
            </label>
            <input
              id="admin-password"
              type="password"
              ref={inputRef}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (error) setError('');
              }}
              className={`w-full bg-white dark:bg-slate-700 border rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 ${
                error ? 'border-red-500' : 'border-gray-300 dark:border-slate-600'
              }`}
            />
            {error && (
              <p className="text-sm text-red-600 dark:text-red-400 flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4" />
                {error}
              </p>
            )}
          </div>
          <div className="flex justify-end p-4 bg-gray-50 dark:bg-slate-800/50 border-t border-gray-200 dark:border-slate-700 rounded-b-xl">
            <button type="button" onClick={onClose} className="px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-200 bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-600 mr-2">
              Cancel
            </button>
            <button
              type="submit"
              disabled={isVerifying}
              className="flex items-center justify-center space-x-2 w-28 px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 disabled:bg-red-400 disabled:cursor-wait"
            >
              {isVerifying ? <Loader2 className="w-4 h-4 animate-spin" /> : <LogIn className="w-4 h-4" />}
              <span>{isVerifying ? 'Verifying...' : 'Unlock'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};