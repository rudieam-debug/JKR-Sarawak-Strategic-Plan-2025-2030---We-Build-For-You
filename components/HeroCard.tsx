
import React from 'react';
import { LEADERSHIP_PROFILE, STRATEGIC_CONTEXT } from '../constants';

export const HeroCard: React.FC = () => {
  const BRAND_LOGO_URL = "https://ik.imagekit.io/z7yhsbzej/jkr%20&%20Sarawak%20logo%20we%20build%20for%20you.png?updatedAt=1765205929982";
  const SARAWAK_BG_URL = "https://ik.imagekit.io/z7yhsbzej/blue%20sarawak.png";

  return (
    <div className="relative bg-white rounded-[40px] md:rounded-[80px] shadow-2xl border border-slate-100 overflow-hidden group flex flex-col w-full">
      {/* Top Strategic Accent Bar */}
      <div className="absolute top-0 right-0 w-full h-1.5 md:h-2 bg-gradient-to-r from-[#002060] via-[#C09000] to-[#002060] z-50"></div>
      
      {/* 1. Brand Identity Section (Top) */}
      <div className="pt-10 pb-8 md:pt-24 md:pb-16 flex flex-col items-center text-center space-y-6 md:space-y-14 bg-white relative z-10 w-full px-4 md:px-12">
        <div className="relative">
          <div className="absolute -inset-10 md:-inset-16 bg-[#002060]/5 rounded-full blur-[80px] md:blur-[100px] -z-10"></div>
          <img 
            src={BRAND_LOGO_URL} 
            alt="JKR Sarawak & Sarawak Logo" 
            className="h-32 sm:h-64 md:h-84 w-auto object-contain hover:scale-105 transition-transform duration-700 drop-shadow-[0_10px_30px_rgba(0,32,96,0.1)]" 
          />
        </div>
        
        <div className="flex flex-col items-center gap-4 md:gap-10 w-full">
          <h2 className="text-[#002060] font-black tracking-tighter uppercase leading-[1.1] md:leading-[1] drop-shadow-md flex flex-col items-center gap-1 md:gap-3 w-full">
            <span className="text-2xl sm:text-5xl lg:text-7xl xl:text-8xl break-words w-full px-2">JKR SARAWAK</span>
            <span className="text-[#C09000] text-xl sm:text-4xl lg:text-6xl xl:text-7xl break-words w-full px-2">MOVING FORWARD STRATEGY</span>
            <span className="text-2xl sm:text-5xl lg:text-7xl xl:text-8xl break-words w-full px-2">2025-2030</span>
          </h2>
          
          <div className="flex flex-col items-center gap-2 md:gap-4 w-full">
            <div className="flex items-center gap-2 sm:gap-8 w-full max-w-5xl">
              <div className="flex-1 h-[1px] md:h-[2px] bg-gradient-to-r from-transparent to-[#C09000] opacity-30"></div>
              <p className="text-[#C09000] font-black text-[10px] sm:text-xl lg:text-3xl xl:text-4xl tracking-[0.1em] sm:tracking-[0.3em] uppercase text-center break-words max-w-[85%] leading-tight">
                Faster • Smarter • Safer • Greener
              </p>
              <div className="flex-1 h-[1px] md:h-[2px] bg-gradient-to-l from-transparent to-[#C09000] opacity-30"></div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Leadership Visual Section (Middle) */}
      <div className="relative h-[360px] sm:h-[600px] md:h-[750px] bg-[#001540] flex items-center justify-center p-4 md:p-12 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] md:opacity-[0.1] bg-[radial-gradient(#C09000_1px,transparent_1px)] [background-size:24px_24px] md:[background-size:32px_32px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-[#C09000]/5 rounded-full blur-[120px] md:blur-[180px]"></div>
        
        <div className="relative z-10 h-full aspect-[3/3.8] group-hover:scale-[1.015] transition-transform duration-1000 ease-out">
          <div className="absolute -inset-6 md:-inset-10 bg-[#C09000]/10 rounded-[40px] md:rounded-[80px] blur-2xl md:blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          <div className="absolute -inset-3 md:-inset-6 border border-white/5 rounded-[32px] md:rounded-[72px] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.6)] md:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]"></div>
          
          <div className="absolute -inset-1 p-[1px] md:p-[2px] rounded-[30px] md:rounded-[52px] bg-gradient-to-br from-[#C09000] via-white/40 to-[#002060] shadow-xl">
            <div className="w-full h-full rounded-[29px] md:rounded-[50px] bg-[#001b50]"></div>
          </div>
          
          <div className="relative w-full h-full rounded-[28px] md:rounded-[50px] overflow-hidden border border-white/20 bg-[#001b50] shadow-inner">
            <div className="absolute inset-0 bg-cover bg-center opacity-40 md:opacity-60 mix-blend-overlay" style={{ backgroundImage: `url('${SARAWAK_BG_URL}')` }}></div>
            <img 
              src={LEADERSHIP_PROFILE.image} 
              alt={LEADERSHIP_PROFILE.name} 
              className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-[1.03] filter brightness-105 contrast-[1.02] relative z-20" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001540]/90 via-transparent to-transparent z-30 opacity-60"></div>
          </div>

          <div className="absolute -bottom-4 md:-bottom-6 left-1/2 -translate-x-1/2 bg-white px-4 md:px-8 py-2 md:py-3 rounded-xl md:rounded-2xl shadow-2xl border border-slate-100 z-40 whitespace-nowrap">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-[#C09000] animate-pulse"></div>
              <span className="text-[#002060] font-black text-[7px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.4em]">Strategic Commander</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Strategic Intent Section (Bottom) */}
      <div className="p-8 sm:p-16 md:p-32 flex flex-col items-center text-center space-y-10 md:space-y-24 bg-white relative w-full overflow-hidden">
        <div className="space-y-6 md:space-y-12 max-w-5xl px-2">
          <h2 className="text-xl sm:text-5xl md:text-7xl font-black text-[#002060] tracking-tighter leading-none uppercase break-words">Vision for Excellence</h2>
          <p className="text-sm sm:text-3xl md:text-5xl text-slate-800 leading-relaxed md:leading-[1.1] font-black italic tracking-tight break-words px-2">
            "To be a world-class public works organisation that delivers sustainable, safe, digital, and inclusive infrastructure for every community in Sarawak."
          </p>
        </div>

        <div className="w-full max-w-6xl pt-8 md:pt-16 border-t border-slate-100 flex flex-col items-center gap-4 md:gap-8 px-4">
          <div className="flex flex-col items-center gap-2 md:gap-4 w-full text-center overflow-hidden">
            <p 
              className="text-[#002060] font-black uppercase tracking-tighter leading-tight whitespace-nowrap w-full text-center px-4 overflow-hidden"
              style={{ fontSize: 'clamp(7px, 2.5vw, 36px)' }}
            >
              {LEADERSHIP_PROFILE.honorifics}
            </p>
            <p className="text-[#002060] font-black text-lg sm:text-3xl md:text-5xl uppercase tracking-tighter leading-none whitespace-normal md:whitespace-nowrap overflow-visible px-2">
              {LEADERSHIP_PROFILE.name}
            </p>
            <div className="flex items-center justify-center gap-2 md:gap-6 mt-3 md:mt-6 w-full">
              <div className="flex-1 h-[1px] bg-slate-200 hidden md:block"></div>
              <p className="text-slate-400 font-black text-[7px] md:text-sm uppercase tracking-[0.2em] md:tracking-[0.5em] whitespace-normal md:whitespace-nowrap px-2 text-center leading-tight">{LEADERSHIP_PROFILE.title}</p>
              <div className="flex-1 h-[1px] bg-slate-200 hidden md:block"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
