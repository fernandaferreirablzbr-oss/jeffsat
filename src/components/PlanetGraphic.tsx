import React from 'react';

export const PlanetGraphic: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-gradient-to-b from-[#87CEEB] via-[#B0E2FF] to-[#E0F4FF] flex items-center justify-center overflow-hidden">
      {/* Sun & Clouds */}
      <div className="absolute top-4 right-6 w-12 h-12 rounded-full bg-white/70 blur-md" />
      <div className="absolute top-6 left-6 w-16 h-6 bg-white/60 rounded-full blur-[2px]" />
      <div className="absolute top-12 right-12 w-20 h-7 bg-white/70 rounded-full blur-[2px]" />

      {/* Spherical Planet */}
      <div className="relative w-[190px] sm:w-[220px] h-[190px] sm:h-[220px] rounded-full shadow-[inset_-12px_-12px_24px_rgba(0,0,0,0.35),0_20px_35px_rgba(0,0,0,0.18)] mt-16 overflow-visible">
        {/* Planet Grass Surface */}
        <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#1b5e20] via-[#2e7d32] to-[#4caf50] relative overflow-hidden">
          {/* Grass texture & foliage pattern */}
          <div
            className="absolute inset-0 opacity-40 mix-blend-overlay"
            style={{
              backgroundImage: `radial-gradient(#CFFD42 1px, transparent 1px), radial-gradient(#1b5e20 1px, transparent 1px)`,
              backgroundSize: '8px 8px',
              backgroundPosition: '0 0, 4px 4px',
            }}
          />
          {/* Spherical 3D shading highlight */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 via-transparent to-black/40 pointer-events-none" />
        </div>

        {/* Elements sitting on top of the planet */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-10">
          {/* Wind turbines in background */}
          <div className="absolute -left-12 -top-2 flex items-end opacity-90">
            <svg width="28" height="40" viewBox="0 0 24 36" fill="none" className="text-white">
              <line x1="12" y1="12" x2="12" y2="36" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
              <path d="M12 12L8 4M12 12L18 8M12 12L10 20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </div>

          <div className="absolute -right-10 top-0 flex items-end opacity-90">
            <svg width="24" height="34" viewBox="0 0 24 36" fill="none" className="text-white">
              <line x1="12" y1="12" x2="12" y2="36" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
              <path d="M12 12L16 4M12 12L6 8M12 12L14 20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </div>

          {/* Trees on the rim */}
          <div className="absolute -left-6 top-6 w-7 h-9 rounded-full bg-[#1b5e20] shadow-sm" />
          <div className="absolute -left-2 top-4 w-6 h-8 rounded-full bg-[#2e7d32] shadow-sm" />
          <div className="absolute right-3 top-5 w-7 h-9 rounded-full bg-[#1b5e20] shadow-sm" />
          <div className="absolute right-7 top-7 w-6 h-7 rounded-full bg-[#388e3c] shadow-sm" />

          {/* People holding solar panel */}
          <div className="relative flex flex-col items-center">
            {/* Solar Panel held aloft */}
            <div className="w-14 h-9 bg-[#0d223a] border border-[#CFFD42]/80 rounded-[3px] shadow-lg flex flex-col justify-between p-0.5 transform -rotate-1">
              <div className="grid grid-cols-3 grid-rows-2 gap-[1px] w-full h-full">
                <div className="bg-[#1e3a5f] rounded-[1px] border border-white/20" />
                <div className="bg-[#1e3a5f] rounded-[1px] border border-white/20" />
                <div className="bg-[#1e3a5f] rounded-[1px] border border-white/20" />
                <div className="bg-[#1e3a5f] rounded-[1px] border border-white/20" />
                <div className="bg-[#1e3a5f] rounded-[1px] border border-white/20" />
                <div className="bg-[#1e3a5f] rounded-[1px] border border-white/20" />
              </div>
            </div>

            {/* Two figures/people under panel */}
            <div className="flex items-center -space-x-1 mt-0.5">
              {/* Person 1 */}
              <div className="flex flex-col items-center">
                <div className="w-3.5 h-3.5 rounded-full bg-[#ffe0b2] border border-neutral-400" />
                <div className="w-4 h-5 bg-[#ffca28] rounded-t-sm" />
                <div className="w-3 h-4 bg-[#1565c0]" />
              </div>
              {/* Person 2 */}
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-[#f5d0b0] border border-neutral-400" />
                <div className="w-3.5 h-4.5 bg-[#42a5f5] rounded-t-sm" />
                <div className="w-2.5 h-3.5 bg-[#37474f]" />
              </div>
            </div>

            {/* Stand/Platform */}
            <div className="w-6 h-1.5 bg-[#1b5e20] rounded-full mt-[-2px]" />
          </div>
        </div>
      </div>
    </div>
  );
};
