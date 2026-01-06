
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems as allNavItems } from '../assets/strategicData';
import type { NavItem } from '../types';
import { ChevronDown, Zap } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (sectionId: string) => void;
  isAdminMode: boolean;
  logoSrc: string;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
  scrolled: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({ 
  activeSection, 
  setActiveSection, 
  isAdminMode, 
  isMobileMenuOpen, 
  setIsMobileMenuOpen,
  scrolled
}) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const navItems = useMemo(() => 
    allNavItems.filter(item => !item.adminOnly || isAdminMode),
    [isAdminMode]
  );

  // Auto-close menu on selection
  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [activeSection]);

  // Find active parent for high-level highlighting
  const activeParentId = useMemo(() => {
    const activeItem = navItems.find(item => 
      item.id === activeSection || item.children?.some(child => child.id === activeSection)
    );
    return activeItem?.id;
  }, [activeSection, navItems]);

  return (
    <nav className={`sticky z-50 px-4 sm:px-6 lg:px-8 pointer-events-none mt-1 transition-all duration-500 ${scrolled ? 'top-20' : 'top-44'}`}>
      {/* Desktop Navigation: Executive Command Pill */}
      <div className="hidden md:flex justify-center max-w-7xl mx-auto pointer-events-auto">
        <div className="glass-panel rounded-2xl px-3 py-1.5 flex items-center gap-1 shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-white/10">
          {navItems.map((item) => {
            const hasChildren = item.children && item.children.length > 0;
            const isGroupActive = activeParentId === item.id;
            const Icon = item.icon as React.ElementType;

            return (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <button
                  onClick={(e) => {
                    if (!hasChildren) {
                      e.preventDefault();
                      setActiveSection(item.id);
                    }
                  }}
                  className={`
                    relative px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2 group
                    ${isGroupActive ? 'text-white' : 'text-text-secondary hover:text-text-primary'}
                  `}
                >
                  {isGroupActive && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-primary/10 border border-primary/20 rounded-xl shadow-[inset_0_0_12px_rgba(227,24,55,0.1)]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <Icon className={`w-4 h-4 z-10 transition-transform group-hover:scale-110 ${isGroupActive ? 'text-primary' : 'opacity-70'}`} />
                  <span className="relative z-10 uppercase tracking-wider text-[11px]">
                    {item.label}
                  </span>
                  {hasChildren && <ChevronDown className={`w-3 h-3 z-10 transition-transform duration-300 ${hoveredId === item.id ? 'rotate-180' : 'opacity-50'}`} />}
                  
                  {item.badge && (
                    <span className="absolute -top-1 -right-1 flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                  )}
                </button>

                {/* Modern Mega-Dropdown Menu */}
                <AnimatePresence>
                  {hoveredId === item.id && hasChildren && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute left-1/2 -translate-x-1/2 mt-2 w-64 bg-slate-900/95 backdrop-blur-2xl rounded-2xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-white/10 p-2"
                    >
                      <div className="px-3 py-2 mb-1">
                        <p className="text-[9px] font-black text-text-muted uppercase tracking-[0.2em]">{item.label} Modules</p>
                      </div>
                      <div className="grid gap-1">
                        {item.children?.filter(child => !child.adminOnly || isAdminMode).map(child => {
                          const isChildActive = activeSection === child.id;
                          const ChildIcon = child.icon as React.ElementType;
                          return (
                            <button
                              key={child.id}
                              onClick={() => {
                                setActiveSection(child.id);
                                setHoveredId(null);
                              }}
                              className={`
                                flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all w-full text-left group/item
                                ${isChildActive 
                                  ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                                  : 'text-text-secondary hover:text-white hover:bg-white/5'}
                              `}
                            >
                              <div className={`
                                p-1.5 rounded-lg transition-colors
                                ${isChildActive ? 'bg-white/20' : 'bg-white/5 group-hover/item:bg-white/10'}
                              `}>
                                <ChildIcon className={`w-3.5 h-3.5 ${isChildActive ? 'text-white' : 'text-primary'}`} />
                              </div>
                              <span className="flex-grow">{child.label}</span>
                              {child.badge && (
                                <span className="bg-primary/20 text-primary text-[8px] px-1.5 py-0.5 rounded-full border border-primary/20">
                                  {child.badge}
                                </span>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Navigation Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-[55] bg-background/98 backdrop-blur-3xl md:hidden pt-24 px-6 overflow-y-auto flex flex-col pointer-events-auto"
          >
            <div className="flex-grow space-y-8 pb-12">
              {navItems.map(item => {
                const hasChildren = item.children && item.children.length > 0;
                const isGroupActive = activeParentId === item.id;
                const Icon = item.icon as React.ElementType;

                return (
                  <div key={item.id} className="space-y-4">
                    <div 
                      className={`flex items-center gap-3 pb-2 border-b border-white/5 ${isGroupActive ? 'text-primary' : 'text-text-muted'}`}
                      onClick={() => !hasChildren && setActiveSection(item.id)}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-sm font-black uppercase tracking-widest">{item.label}</span>
                    </div>
                    
                    {hasChildren ? (
                      <div className="grid grid-cols-1 gap-2 pl-4">
                        {item.children?.filter(child => !child.adminOnly || isAdminMode).map(child => {
                          const isChildActive = activeSection === child.id;
                          const ChildIcon = child.icon as React.ElementType;
                          return (
                            <button
                              key={child.id}
                              onClick={() => setActiveSection(child.id)}
                              className={`
                                flex items-center gap-4 px-4 py-4 rounded-2xl w-full text-left transition-all
                                ${isChildActive 
                                  ? 'bg-primary text-white shadow-xl shadow-primary/20 scale-[1.02]' 
                                  : 'bg-white/5 text-text-secondary active:bg-white/10'}
                              `}
                            >
                              <ChildIcon className={`w-5 h-5 ${isChildActive ? 'text-white' : 'text-primary'}`} />
                              <span className="text-base font-bold">{child.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    ) : (
                      <button
                        onClick={() => setActiveSection(item.id)}
                        className={`
                          flex items-center gap-4 px-4 py-4 rounded-2xl w-full text-left transition-all
                          ${activeSection === item.id 
                            ? 'bg-primary text-white shadow-xl shadow-primary/20' 
                            : 'bg-white/5 text-text-secondary'}
                        `}
                      >
                        <Icon className={`w-5 h-5 ${activeSection === item.id ? 'text-white' : 'text-primary'}`} />
                        <span className="text-base font-bold">{item.label}</span>
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
            
            <div className="py-8 border-t border-white/10 mt-auto">
               <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-2xl border border-primary/20">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase text-primary">Strategic Pulse</p>
                    <p className="text-sm text-text-primary font-bold">Strategy Implementation 2.0</p>
                  </div>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
