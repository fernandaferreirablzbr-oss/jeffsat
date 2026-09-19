import React from 'react';
import { Zap } from 'lucide-react';
import { Navbar } from './Navbar';
import { AwardWreath } from './AwardWreath';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[640px] lg:min-h-[720px] overflow-hidden flex flex-col justify-between bg-[#1d2b1f]">
      {/* Background Photography Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=2560&q=85"
          alt="Next generation aerial solar power farm in mountains"
          className="w-full h-full object-cover object-center scale-[1.02]"
          referrerPolicy="no-referrer"
        />
        
        {/* Subtle cinematic gradient overlay to guarantee text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/30 pointer-events-none" />
      </div>

      {/* Top Floating Navbar */}
      <Navbar />

      {/* Hero Core Content Layout */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-12 pb-10 sm:pb-14 mt-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-end">
          
          {/* Left Column: Headline, Subtext, CTA */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Main Headline */}
            <h1 className="text-white text-3xl sm:text-4xl md:text-[50px] lg:text-[54px] font-semibold leading-[0.98] tracking-[-0.035em] mb-4">
              TECNOLOGIA QUE GERA. PROTEGE. CONECTA. MOVER
            </h1>

            {/* Subheadline */}
            <p className="text-white/85 text-xs sm:text-[13px] leading-relaxed max-w-[480px] mb-6 font-normal">
              Soluções integradas em energia solar, segurança eletrônica, conectividade e mobilidade elétrica para sua casa ou empresa.
            </p>

            {/* CTAs */}
            <div className="flex gap-3 mb-6">
              <a
                href="#quote"
                className="group bg-[#CFFD42] hover:bg-[#D5FF45] text-black font-semibold text-xs sm:text-[13px] px-5 py-2.5 rounded-[7px] flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_4px_16px_rgba(207,253,66,0.35)]"
              >
                Solicitar Orçamento
                <Zap className="w-3.5 h-3.5 fill-black text-black" />
              </a>
              <a
                href="#contact"
                className="bg-white/20 hover:bg-white/30 text-white font-semibold text-xs sm:text-[13px] px-5 py-2.5 rounded-[7px] flex items-center gap-2 transition-all hover:scale-[1.02] border border-white/30 shadow-[0_4px_16px_rgba(255,255,255,0.1)]"
              >
                Falar com a JeffSat
              </a>
            </div>

            {/* Location */}
            <p className="text-white/70 text-xs sm:text-[12px] font-medium tracking-wider mb-8">
              PALMARES · PERNAMBUCO
            </p>
          </div>

          {/* Right Column: Metric Cards & Awards */}
          <div className="lg:col-span-5 flex flex-col items-end w-full">
            
            {/* Two Frosted Glass Metric Cards */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-[340px] mb-6">
              {/* Metric 1 */}
              <div className="glass-panel rounded-[22px] p-4 flex flex-col justify-between aspect-[1.15/1] shadow-sm">
                <span className="text-white text-3xl sm:text-[38px] font-medium tracking-tight leading-none">
                  4
                </span>
                <span className="text-white/90 text-[11px] leading-snug font-normal mt-2">
                  Territórios da Marca
                </span>
              </div>

              {/* Metric 2 */}
              <div className="glass-panel rounded-[22px] p-4 flex flex-col justify-between aspect-[1.15/1] shadow-sm">
                <span className="text-white text-3xl sm:text-[38px] font-medium tracking-tight leading-none">
                  10+
                </span>
                <span className="text-white/90 text-[11px] leading-snug font-normal mt-2">
                  Anos de Mercado
                </span>
              </div>
            </div>

            {/* Awards Row */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full max-w-[340px] pt-1">
              {/* Keep existing AwardWreath components, they're visual elements */}
              {/* These represent the four brand territories visually */}
              <div className="flex items-center gap-2">
                <span className="text-white/70 text-[10px] font-medium">GERAR</span>
                <AwardWreath multiplier="1X" year="2024" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white/70 text-[10px] font-medium">PROTEGER</span>
                <AwardWreath multiplier="1X" year="2024" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white/70 text-[10px] font-medium">CONECTAR</span>
                <AwardWreath multiplier="1X" year="2024" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white/70 text-[10px] font-medium">MOVER</span>
                <AwardWreath multiplier="1X" year="2024" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
