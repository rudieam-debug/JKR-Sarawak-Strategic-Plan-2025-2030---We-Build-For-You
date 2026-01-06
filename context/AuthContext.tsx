
import React, { createContext, useContext, useState, useEffect } from 'react';
import type { User, UserRole } from '../types';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string, role: UserRole, masterKey?: string) => Promise<{ success: boolean; message: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const USERS_KEY = 'jkr_users_db';
const SESSION_KEY = 'jkr_active_session';

// Master Keys for Role Validation
const MASTER_KEYS = {
  super_admin: 'JKR-SUPER-2030',
  editor: 'JKR-EDIT-2025'
};

// Helper: SHA-256 Hashing
async function digestPassword(password: string): Promise<string> {
  const msgUint8 = new TextEncoder().encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Load session on mount
  useEffect(() => {
    const session = localStorage.getItem(SESSION_KEY);
    if (session) {
      try {
        const parsed = JSON.parse(session);
        const now = new Date().getTime();
        // 24 hour session expiry
        if (now - parsed.timestamp < 24 * 60 * 60 * 1000) {
          setUser(parsed.user);
        } else {
          localStorage.removeItem(SESSION_KEY);
        }
      } catch (e) {
        localStorage.removeItem(SESSION_KEY);
      }
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // 1. Get Users DB
    const usersDb = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    
    // 2. Find User
    const existingUser = usersDb.find((u: any) => u.email === email);
    if (!existingUser) return false;

    // 3. Check Password
    const inputHash = await digestPassword(password);
    if (inputHash === existingUser.passwordHash) {
      const userData: User = {
        id: existingUser.id,
        name: existingUser.name,
        email: existingUser.email,
        role: existingUser.role
      };
      setUser(userData);
      localStorage.setItem(SESSION_KEY, JSON.stringify({ user: userData, timestamp: new Date().getTime() }));
      return true;
    }
    return false;
  };

  const register = async (name: string, email: string, password: string, role: UserRole, masterKey?: string): Promise<{ success: boolean; message: string }> => {
    const usersDb = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');

    // 1. Check if email exists
    if (usersDb.some((u: any) => u.email === email)) {
      return { success: false, message: "Email already registered." };
    }

    // 2. Validate Master Key based on Role
    if (role === 'super_admin') {
      if (masterKey !== MASTER_KEYS.super_admin) {
        return { success: false, message: "Invalid Department Code for Super Admin access." };
      }
    } else if (role === 'editor') {
      if (masterKey !== MASTER_KEYS.editor) {
        return { success: false, message: "Invalid Department Code for Editor access." };
      }
    }

    // 3. Create User
    const passwordHash = await digestPassword(password);
    const newUser = {
      id: `user-${Date.now()}`,
      name,
      email,
      passwordHash,
      role
    };

    // 4. Save to DB
    usersDb.push(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(usersDb));

    // 5. Auto Login
    const userSession: User = { id: newUser.id, name: newUser.name, email: newUser.email, role: newUser.role };
    setUser(userSession);
    localStorage.setItem(SESSION_KEY, JSON.stringify({ user: userSession, timestamp: new Date().getTime() }));

    return { success: true, message: `Welcome, ${role.replace('_', ' ')}.` };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(SESSION_KEY);
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated: !!user, 
      login, 
      register, 
      logout 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
