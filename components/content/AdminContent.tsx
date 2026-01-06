import React, { useState, useMemo } from 'react';
import { Key, Copy, Check, Shield, Palette, RotateCcw } from 'lucide-react';
import { ConfirmActionModal } from '../ConfirmActionModal';

// Helper function to hash password using SHA-256
async function digestPassword(password: string): Promise<string> {
  const msgUint8 = new TextEncoder().encode(password); // encode as (utf-8) Uint8Array
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8); // hash the message
  const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // convert bytes to hex string
  return hashHex;
}

interface AdminContentProps {
    onResetAllColors: () => void;
}

export const AdminContent: React.FC<AdminContentProps> = ({ onResetAllColors }) => {
    const [password, setPassword] = useState('');
    const [generatedHash, setGeneratedHash] = useState('');
    const [isCopied, setIsCopied] = useState(false);
    const [isResetModalOpen, setIsResetModalOpen] = useState(false);

    const passwordStrength = useMemo(() => {
        const pw = password;
        let score = 0;
        if (!pw) return { width: 0, color: '', text: '', textColor: '' };
        
        if (pw.length >= 8) score++;
        if (/[a-z]/.test(pw)) score++;
        if (/[A-Z]/.test(pw)) score++;
        if (/[0-9]/.test(pw)) score++;
        if (/[^a-zA-Z0-9]/.test(pw)) score++;

        switch (score) {
            case 1: return { width: 20, color: 'bg-red-500', text: 'Very Weak', textColor: 'text-red-500' };
            case 2: return { width: 40, color: 'bg-orange-500', text: 'Weak', textColor: 'text-orange-500' };
            case 3: return { width: 60, color: 'bg-yellow-500', text: 'Medium', textColor: 'text-yellow-500' };
            case 4: return { width: 80, color: 'bg-blue-500', text: 'Strong', textColor: 'text-blue-500' };
            case 5: return { width: 100, color: 'bg-green-500', text: 'Very Strong', textColor: 'text-green-500' };
            default: return { width: 0, color: 'bg-border', text: '', textColor: '' };
        }
    }, [password]);
    
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        setGeneratedHash(''); // Clear hash when password changes
        setIsCopied(false);
    };

    const handleGenerateHash = async () => {
        if (!password) {
            setGeneratedHash('');
            return;
        }
        const hash = await digestPassword(password);
        setGeneratedHash(hash);
    };

    const handleCopy = () => {
        if (!generatedHash) return;
        navigator.clipboard.writeText(generatedHash);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    const handleConfirmReset = () => {
        onResetAllColors();
        setIsResetModalOpen(false);
    };

    return (
        <div className="space-y-10">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-text-primary mb-2">Administrator Tools</h2>
                <p className="text-text-secondary max-w-4xl mx-auto">
                    Use these tools to manage and configure your dashboard.
                </p>
            </div>

            <div className="max-w-2xl mx-auto grid grid-cols-1 gap-8">
                <div className="bg-surface p-6 rounded-xl shadow-lg border border-border">
                    <h3 className="text-xl font-bold text-text-primary mb-4 flex items-center">
                        <Palette className="w-6 h-6 mr-3 text-primary"/>
                        Global Color Editor
                    </h3>
                     <p className="text-sm text-text-secondary mb-6">
                        Reset all custom text colors across the application to their original default values. This action cannot be undone.
                    </p>
                    <button
                        onClick={() => setIsResetModalOpen(true)}
                        className="w-full flex items-center justify-center space-x-2 px-4 py-2 text-sm font-semibold text-white bg-yellow-600 rounded-lg hover:bg-yellow-700 transition-colors shadow-sm"
                    >
                        <RotateCcw className="w-4 h-4" />
                        <span>Reset All Text Colors</span>
                    </button>
                </div>
                
                <div className="bg-surface p-6 rounded-xl shadow-lg border border-border">
                    <h3 className="text-xl font-bold text-text-primary mb-4 flex items-center">
                        <Shield className="w-6 h-6 mr-3 text-primary"/>
                        Admin Password Management
                    </h3>
                    <p className="text-sm text-text-secondary mb-6">
                        This tool helps you generate a secure SHA-256 hash for your new admin password. The application does not store your plain-text password.
                    </p>

                    <div className="space-y-4">
                        <div>
                            <label htmlFor="new-password" className="block text-sm font-medium text-text-secondary">
                                1. Enter New Password
                            </label>
                            <input
                                id="new-password"
                                type="password"
                                value={password}
                                onChange={handlePasswordChange}
                                className="mt-1 block w-full bg-background border border-border rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                                placeholder="Enter a strong new password"
                            />
                            {password && (
                                <div className="mt-2">
                                    <div className="h-2 w-full bg-border rounded-full overflow-hidden">
                                        <div 
                                            className={`h-2 rounded-full transition-all duration-300 ${passwordStrength.color}`}
                                            style={{ width: `${passwordStrength.width}%` }}
                                        ></div>
                                    </div>
                                    <p className={`text-xs mt-1 font-medium text-right ${passwordStrength.textColor}`}>{passwordStrength.text}</p>
                                </div>
                            )}
                        </div>
                        
                        <button
                            onClick={handleGenerateHash}
                            disabled={!password}
                            className="w-full flex items-center justify-center space-x-2 px-4 py-2 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primary-hover transition-colors shadow-sm disabled:bg-text-muted disabled:cursor-not-allowed"
                        >
                            <Key className="w-4 h-4" />
                            <span>Generate Secure Hash</span>
                        </button>

                        {generatedHash && (
                            <div className="space-y-4 pt-4 border-t border-border">
                                <div>
                                    <label className="block text-sm font-medium text-text-secondary">
                                        2. Copy Generated Hash
                                    </label>
                                    <div className="mt-1 flex items-center space-x-2">
                                        <input
                                            type="text"
                                            readOnly
                                            value={generatedHash}
                                            className="w-full font-mono text-xs bg-background border border-border rounded-md p-2"
                                        />
                                        <button
                                            onClick={handleCopy}
                                            className="p-2 bg-surface-light rounded-md hover:bg-border"
                                            title="Copy Hash"
                                        >
                                            {isCopied ? <Check className="w-5 h-5 text-green-500"/> : <Copy className="w-5 h-5 text-text-primary"/>}
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-text-secondary">
                                        3. Update Environment Variable
                                    </label>
                                    <div className="mt-1 text-xs text-text-secondary bg-yellow-900/30 p-3 rounded-lg border border-yellow-800">
                                        <p>Copy the hash above and set it as the value for the <code className="font-mono bg-yellow-800/50 p-1 rounded text-yellow-200">ADMIN_PASSWORD_HASH</code> environment variable in your deployment settings.</p>
                                        <p className="mt-2">The application may need to be restarted for the change to take effect.</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
             <ConfirmActionModal 
                isOpen={isResetModalOpen}
                onClose={() => setIsResetModalOpen(false)}
                onConfirm={handleConfirmReset}
                title="Confirm Color Reset"
                confirmText="Yes, Reset All"
                confirmButtonClass="bg-yellow-600 hover:bg-yellow-700"
            >
                <p>Are you sure you want to reset <strong className="font-bold">ALL</strong> custom text colors to their defaults?</p>
                <p className="mt-2 text-sm text-text-muted">This action cannot be undone.</p>
            </ConfirmActionModal>
        </div>
    );
};