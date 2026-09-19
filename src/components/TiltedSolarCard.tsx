import React from 'react';

export const TiltedSolarCard: React.FC = () => {
  return (
    <div
      className="w-[88px] sm:w-[96px] h-[116px] sm:h-[126px] rounded-[10px] p-1.5 shadow-[0_12px_28px_rgba(0,0,0,0.18)] bg-gradient-to-b from-[#1b3d22] to-[#0a180d] border border-white/40 flex flex-col justify-between overflow-hidden relative transform -rotate-[7deg] select-none pointer-events-none transition-transform duration-300"
      style={{
        boxShadow: '0 10px 24px -4px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.4)',
      }}
    >
      {/* Glossy diagonal sheen reflection */}
      <div className="absolute -inset-full top-[-50%] bg-gradient-to-br from-white/35 via-transparent to-transparent rotate-45 pointer-events-none" />

      {/* Solar Cells Grid */}
      <div className="grid grid-cols-3 grid-rows-3 gap-[2px] w-full h-[76%] rounded-[4px] overflow-hidden bg-black/40 p-[2px]">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-[#2a5538] via-[#1b3b24] to-[#12281a] border border-[#CFFD42]/30 relative"
          >
            {/* Busbars / Micro-lines */}
            <div className="absolute inset-x-0 top-1/2 h-[1px] bg-[#CFFD42]/40" />
            <div className="absolute inset-y-0 left-1/2 w-[1px] bg-[#CFFD42]/40" />
          </div>
        ))}
      </div>

      {/* Grass/Landscape base reflection at the bottom */}
      <div className="h-[20%] w-full rounded-[3px] bg-gradient-to-t from-[#4caf50] via-[#2e7d32] to-[#1b5e20] flex items-center justify-center relative overflow-hidden">
        <div className="w-full h-[2px] bg-[#CFFD42]/80 mb-auto" />
      </div>
    </div>
  );
};
