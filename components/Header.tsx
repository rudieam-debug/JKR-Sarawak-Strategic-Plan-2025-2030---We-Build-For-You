import React, { useState, useEffect } from 'react';
import { PDFDownloadButton } from './PDFDownloadButton';
import { AdminModeToggle } from './AdminModeToggle';
import type { HeaderData } from '../types';
import { EditableText } from './EditableText';
import { Edit, Save, X, LibraryBig, Link, CheckCircle, RotateCcw, Search, MessageCircle, Palette, Menu, User, ShieldCheck, Edit3, Command } from 'lucide-react';
import { Logo } from './Logo';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  isAdminMode: boolean;
  toggleAdminMode: () => void;
  data: HeaderData;
  onUpdate: (field: keyof HeaderData, value: string) => void;
  logoSrc: string;
  onOpenMediaLibrary: (callback?: (url: string) => void) => void;
  onUpdateLogo: (src: string) => void;
  onResetLogo: () => void;
  onOpenAiSearch: () => void;
  onOpenChatBot: () => void;
  isColorEditMode: boolean;
  toggleColorEditMode: () => void;
  isMobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
  onLogout: () => void;
  scrolled: boolean;
}

export const Header: React.FC<HeaderProps> = ({ 
  isAdminMode, 
  toggleAdminMode, 
  data, 
  onUpdate, 
  logoSrc, 
  onOpenMediaLibrary,
  onUpdateLogo,
  onResetLogo,
  onOpenAiSearch,
  onOpenChatBot,
  isColorEditMode,
  toggleColorEditMode,
  isMobileMenuOpen,
  onToggleMobileMenu,
  onLogout,
  scrolled
}) => {
  const { user } = useAuth();
  const [confirmationMessage, setConfirmationMessage] = useState<string | null>(null);

  const TITLE_IMAGE_URL = "https://ik.imagekit.io/z7yhsbzej/3d%20jkr%20sarawak%20moving%20forward%20strategy%202025-2030.png";

  const handleLogoUpdate = (src: string) => {
    onUpdateLogo(src);
    setConfirmationMessage("Logo updated!");
    setTimeout(() => setConfirmationMessage(null), 2500);
  };

  const handleLogoEdit = () => {
    onOpenMediaLibrary(handleLogoUpdate);
  };
  
  const getRoleIcon = () => {
      if (user?.role === 'super_admin') return <ShieldCheck className="w-3.5 h-3.5 text-red-400" />;
      if (user?.role === 'editor') return <Edit3 className="w-3.5 h-3.5 text-blue-400" />;
      return <User className="w-3.5 h-3.5" />;
  };

  return (
  <header 
    className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
      scrolled ? 'py-2 px-4' : 'py-6 px-6'
    }`}
  >
    <div className={`
      absolute inset-0 transition-all duration-500
      ${scrolled ? 'bg-background/60 backdrop-blur-xl border-b border-white/5 shadow-2xl' : 'bg-transparent'}
    `}></div>

    <div className="max-w-[1600px] mx-auto relative">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-5 shrink-0 max-w-[70%] md:max-w-none">
          <div className="relative group/logo shrink-0 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <Logo src={logoSrc} className={`w-auto transition-all duration-500 ${scrolled ? 'h-11' : 'h-16 sm:h-24 md:h-28'}`} />
            {isAdminMode && !confirmationMessage && (
              <div className="absolute inset-0 w-full h-full bg-black/60 backdrop-blur-sm flex items-center justify-center gap-2 transition-opacity rounded-xl opacity-0 group-hover/logo:opacity-100">
                <button onClick={(e) => { e.stopPropagation(); handleLogoEdit(); }} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"><Edit className="w-4 h-4 text-white" /></button>
              </div>
            )}
          </div>

          <div className={`hidden sm:flex flex-col justify-center transition-all duration-500`}>
              {/* Desktop 3D Image Title Branding */}
              <div className={`transition-all duration-500 flex items-center ${scrolled ? 'h-6 md:h-8' : 'h-12 md:h-16 lg:h-20'}`}>
                  <img 
                      src={TITLE_IMAGE_URL} 
                      alt={data.mainTitle} 
                      className="h-full w-auto object-contain drop-shadow-lg"
                  />
              </div>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <div 
            onClick={onOpenAiSearch}
            className={`
              hidden xl:flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer group
              ${scrolled ? 'scale-90' : 'scale-100'}
            `}
          >
            <Search className="w-4 h-4 text-text-muted group-hover:text-primary transition-colors" />
            <span className="text-xs font-bold text-text-secondary group-hover:text-text-primary transition-colors">Ask AI Assistant...</span>
            <div className="flex items-center gap-1 ml-4 px-1.5 py-0.5 rounded bg-white/5 border border-white/5 text-[10px] text-text-muted">
              <Command className="w-2.5 h-2.5" />
              <span>K</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
              {user && (
                <div className="hidden sm:flex items-center gap-3 px-4 py-2 bg-white/5 rounded-2xl border border-white/5 group hover:bg-white/10 transition-all cursor-default">
                  <div className={`p-1.5 rounded-xl ${user.role === 'super_admin' ? 'bg-red-500/20 text-red-400' : 'bg-blue-500/20 text-blue-400'}`}>
                      {getRoleIcon()}
                  </div>
                  <div className="flex flex-col">
                      <span className="text-xs font-black text-text-primary leading-tight">{user.name.split(' ')[0]}</span>
                      <span className="text-[9px] uppercase font-bold text-text-muted tracking-tighter">{user.role.replace('_', ' ')}</span>
                  </div>
                </div>
              )}

              <div className="flex items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-1 gap-1">
                  <button
                      onClick={onOpenChatBot}
                      className="p-2.5 rounded-xl text-text-secondary hover:text-primary hover:bg-primary/10 transition-all"
                      title="Live Chat Support"
                  >
                      <MessageCircle className="w-5 h-5" />
                  </button>
                  {isAdminMode && (
                      <>
                          <button
                              onClick={toggleColorEditMode}
                              className={`p-2.5 rounded-xl transition-all ${
                              isColorEditMode ? 'bg-primary text-white shadow-glow-primary' : 'text-text-secondary hover:text-primary hover:bg-primary/10'
                              }`}
                              title="Visual Style Editor"
                          >
                              <Palette className="w-5 h-5" />
                          </button>
                          <button
                              onClick={() => onOpenMediaLibrary()}
                              className="p-2.5 rounded-xl text-text-secondary hover:text-primary hover:bg-primary/10 transition-all"
                              title="Digital Assets Library"
                          >
                              <LibraryBig className="w-5 h-5" />
                          </button>
                      </>
                  )}
              </div>
              
              <div className="hidden sm:block">
                  <PDFDownloadButton />
              </div>

              <AdminModeToggle isAdminMode={isAdminMode} toggleAdminMode={toggleAdminMode} />
              
              <button
                onClick={onToggleMobileMenu}
                className={`
                  md:hidden p-3 rounded-2xl transition-all active:scale-95 border
                  ${isMobileMenuOpen ? 'bg-primary text-white border-primary shadow-glow-primary' : 'bg-white/5 text-text-primary border-white/10'}
                `}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
          </div>
        </div>
      </div>

      {/* Mobile Title Branding (Centered below the banner strip) */}
      <AnimatePresence>
        {!scrolled && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="sm:hidden flex justify-center w-full mt-4 pb-2"
          >
            <img 
              src={TITLE_IMAGE_URL} 
              alt="Strategy Title" 
              className="h-12 w-auto object-contain drop-shadow-md"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </header>
  );
};