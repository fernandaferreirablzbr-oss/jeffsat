import React from 'react';

export const TrustStrip: React.FC = () => {
  return (
    <section className="w-full bg-white py-8 sm:py-10 border-b border-neutral-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <p className="text-center text-[12px] sm:text-[13px] text-neutral-400 font-normal tracking-normal mb-7">
          Confiado por líderes do agronegócio e grandes indústrias no Brasil
        </p>

        {/* Logos Flex Row */}
        <div className="flex items-center justify-between gap-6 sm:gap-8 overflow-x-auto no-scrollbar py-2 opacity-85">
          
          {/* Minty (faded partial edge on left) */}
          <div className="flex items-center gap-1.5 shrink-0 opacity-40 hover:opacity-100 transition-opacity">
            <span className="font-semibold text-neutral-800 text-sm tracking-tight">
              nty
            </span>
          </div>

          {/* Luminous */}
          <div className="flex items-center gap-1.5 shrink-0 hover:opacity-100 transition-opacity">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-neutral-900">
              <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
            </svg>
            <span className="font-semibold text-neutral-900 text-sm tracking-tight">
              luminous
            </span>
          </div>

          {/* Blossom */}
          <div className="flex items-center gap-1.5 shrink-0 hover:opacity-100 transition-opacity">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-neutral-900">
              <path d="M12 4C10 8 7 10 3 12C7 14 10 16 12 20C14 16 17 14 21 12C17 10 14 8 12 4Z" fill="currentColor"/>
            </svg>
            <span className="font-serif font-bold text-neutral-900 text-sm tracking-tight">
              Blossom
            </span>
          </div>

          {/* ICEBERG */}
          <div className="flex items-center gap-1.5 shrink-0 hover:opacity-100 transition-opacity">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="text-neutral-900">
              <path d="M4 20L12 4L20 20H15L12 14L9 20H4Z" fill="currentColor"/>
            </svg>
            <span className="font-extrabold text-neutral-900 text-xs tracking-wider uppercase">
              ICEBERG
            </span>
          </div>

          {/* Leafe */}
          <div className="flex items-center gap-1.5 shrink-0 hover:opacity-100 transition-opacity">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-neutral-900">
              <path d="M20 4C13 4 8 9 8 16C8 18 9 20 11 20C18 20 20 11 20 4Z" fill="currentColor"/>
              <path d="M8 16L4 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
            <span className="font-semibold text-neutral-900 text-sm tracking-tight">
              Leafe
            </span>
          </div>

          {/* Minty */}
          <div className="flex items-center gap-1.5 shrink-0 hover:opacity-100 transition-opacity">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-neutral-900">
              <path d="M12 3C8 3 4 7 4 12C4 17 8 21 12 21C16 21 20 17 20 12C20 7 16 3 12 3Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 7V17M7 12H17" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span className="font-semibold text-neutral-900 text-sm tracking-tight">
              Minty
            </span>
          </div>

          {/* Luminous */}
          <div className="flex items-center gap-1.5 shrink-0 hover:opacity-100 transition-opacity">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-neutral-900">
              <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
            </svg>
            <span className="font-semibold text-neutral-900 text-sm tracking-tight">
              luminous
            </span>
          </div>

          {/* Blossom */}
          <div className="flex items-center gap-1.5 shrink-0 opacity-70 hover:opacity-100 transition-opacity">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-neutral-900">
              <path d="M12 4C10 8 7 10 3 12C7 14 10 16 12 20C14 16 17 14 21 12C17 10 14 8 12 4Z" fill="currentColor"/>
            </svg>
            <span className="font-serif font-bold text-neutral-900 text-sm tracking-tight">
              Blossom
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
