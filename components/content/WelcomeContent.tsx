
import React, { useState } from 'react';
import { Logo } from '../Logo';
import { EditableText } from '../EditableText';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Info, X, Maximize2 } from 'lucide-react';
import type { WelcomePageContent } from '../../types';

interface WelcomeContentProps {
  isAdminMode?: boolean;
  pageContent?: WelcomePageContent;
  onUpdatePageContent?: (field: keyof WelcomePageContent, value: string) => void;
  logoSrc: string;
  onSummarize: (text: string, title: string) => void;
}

export const WelcomeContent: React.FC<WelcomeContentProps> = ({ isAdminMode = false, pageContent, onUpdatePageContent, logoSrc, onSummarize }) => {
  const [showHouseOfPillars, setShowHouseOfPillars] = useState(false);

  if (!pageContent) {
    return <div className="text-center p-10 text-text-muted">Loading content...</div>;
  }

  const HOUSE_OF_PILLARS_URL = "https://ik.imagekit.io/z7yhsbzej/JKR%20SARAWAK%20MOVING%20FORWARD%20STRATEGY%202025-2030%20HOUSE%20OF%20PILLARS%20NEW.png";
  const HERO_BG_URL = "https://ik.imagekit.io/z7yhsbzej/Gemini_Generated_Image_989u9m989u9m989u.png";
  const HERO_LOGO_URL = "https://ik.imagekit.io/z7yhsbzej/jkr%20&%20Sarawak%20logo%20we%20build%20for%20you.png?updatedAt=1765205929982";
  const BENTLEY_BADGE_URL = "https://ik.imagekit.io/z7yhsbzej/bentley%20winner%20logo.png";

  return (
    <div className="relative min-h-[85vh] flex flex-col justify-start items-center w-full overflow-hidden rounded-3xl pt-16 sm:pt-24 md:pt-32">
        {/* Main Hero Background Image */}
        <div className="absolute inset-0 z-0">
            <img 
                src={HERO_BG_URL} 
                alt="Background" 
                className="w-full h-full object-cover opacity-50"
            />
            {/* Dark overlay to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background/80"></div>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow z-0"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow z-0" style={{ animationDelay: '2s' }}></div>

        {/* Bentley Winner Badge */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.5, rotate: 15 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 1, type: "spring" }}
            className="absolute top-6 right-6 sm:top-10 sm:right-10 z-20 w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 pointer-events-none"
        >
            <img 
                src={BENTLEY_BADGE_URL} 
                alt="Bentley 2025 Going Digital Award Winner" 
                className="w-full h-full object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] animate-float"
            />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pb-12">
            <div className="flex flex-col items-center text-center mb-10">
                 <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8 relative"
                 >
                    <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
                    <img 
                        src={HERO_LOGO_URL} 
                        alt="JKR Sarawak Logo" 
                        className="h-40 md:h-64 w-auto relative z-10 drop-shadow-2xl" 
                    />
                 </motion.div>

                 <motion.h1 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-400 mb-8 drop-shadow-lg"
                 >
                    WELCOME
                 </motion.h1>
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="glass-panel p-8 md:p-12 rounded-3xl max-w-4xl mx-auto relative overflow-hidden"
            >
                 {/* Shine effect */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-white/5 pb-4">
                        <EditableText
                            isAdminMode={isAdminMode}
                            initialValue={pageContent.title}
                            onSave={(newValue) => onUpdatePageContent && onUpdatePageContent('title', newValue)}
                            label="Welcome Title"
                            textClassName="text-3xl md:text-4xl font-bold text-text-primary"
                            inputClassName="text-3xl font-bold"
                        />
                        <button onClick={() => onSummarize(pageContent.body, 'Strategic Plan Introduction')} className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-text-secondary hover:text-primary" title="Get AI Summary">
                            <Info className="w-5 h-5" />
                        </button>
                    </div>

                    <EditableText
                        isAdminMode={isAdminMode}
                        initialValue={pageContent.subtitle}
                        onSave={(newValue) => onUpdatePageContent && onUpdatePageContent('subtitle', newValue)}
                        label="Welcome Subtitle"
                        textClassName="text-xl font-medium text-primary/90"
                        inputClassName="text-xl font-medium"
                    />

                    <EditableText
                        isAdminMode={isAdminMode}
                        initialValue={pageContent.body}
                        onSave={(newValue) => onUpdatePageContent && onUpdatePageContent('body', newValue)}
                        label="Welcome Body Text"
                        isTextarea
                        textClassName="text-lg text-text-secondary leading-relaxed"
                    />
                    
                    <div className="pt-6 flex justify-center">
                         <button 
                            onClick={() => setShowHouseOfPillars(true)}
                            className="group flex items-center gap-3 px-8 py-3 bg-primary hover:bg-primary-hover text-white rounded-full font-semibold transition-all shadow-glow-primary active:scale-95"
                         >
                             The House of Pillars <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                         </button>
                    </div>
                </div>
            </motion.div>
        </div>

        {/* House of Pillars Modal */}
        <AnimatePresence>
            {showHouseOfPillars && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-10 bg-background/90 backdrop-blur-xl"
                >
                    <motion.div 
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 20 }}
                        className="relative w-full max-w-6xl h-full flex flex-col items-center justify-center"
                    >
                        <div className="absolute top-0 right-0 p-4 z-50">
                            <button 
                                onClick={() => setShowHouseOfPillars(false)}
                                className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all border border-white/10 shadow-2xl backdrop-blur-md"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        
                        <div className="w-full h-full flex items-center justify-center relative group">
                            <img 
                                src={HOUSE_OF_PILLARS_URL} 
                                alt="JKR Sarawak House of Pillars" 
                                className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl border border-white/5 bg-slate-900/50 p-2"
                            />
                            
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Maximize2 className="w-4 h-4 text-primary" />
                                <span className="text-xs font-bold text-white uppercase tracking-widest">Strategy Framework Diagram</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
  );
};
