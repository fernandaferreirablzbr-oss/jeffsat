import React from 'react';
import { PlanetGraphic } from './PlanetGraphic';

export const WhySection: React.FC = () => {
  return (
    <section className="w-full bg-white pt-12 pb-8 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading Grid: Left H2 + Right Supporting Copy */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start mb-8 sm:mb-10">
          <div className="md:col-span-7">
            <h2 className="text-2xl sm:text-3xl md:text-[36px] font-semibold text-neutral-900 tracking-[-0.03em] leading-[1.05]">
              Tecnologia alinhada ao seu cotidiano
            </h2>
          </div>
          <div className="md:col-span-5 flex md:justify-end">
            <p className="text-[12px] text-neutral-500 leading-relaxed max-w-[340px] font-normal">
              A JeffSat integra energia, segurança e conectividade em projetos desenhados para residências e empresas em Palmares e região. A tecnologia deve resolver necessidades reais, não causar complicações. Atuamos com soluções práticas de energia solar para redução de custos, sistemas de segurança para monitoramento e controle, conexões de internet via Starlink e infraestrutura para carregamento de veículos elétricos. Tudo com acompanhamento técnico do projeto à entrega.
            </p>
          </div>
        </div>

        {/* Three-Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full">
          {/* Card 1: Planet Graphic */}
          <div className="relative aspect-[0.72/1] rounded-[9px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.06)] group">
            <PlanetGraphic />
          </div>

          {/* Card 2: Solar Rows on Farmland */}
          <div className="relative aspect-[0.72/1] rounded-[9px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.06)] bg-[#2e4d2a] group">
            <img
              src="https://images.unsplash.com/photo-1545208942-e1c0c916524b?auto=format&fit=crop&w=900&q=85"
              alt="Linhas diagonais aéreas de painéis solares sobre lavouras e campos agrícolas"
              className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Card 3: Solar Panels in Forest */}
          <div className="relative aspect-[0.72/1] rounded-[9px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.06)] bg-[#1a3823] group">
            <img
              src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=900&q=85"
              alt="Vista aérea de usina fotovoltaica cercada por vegetação nativa preservada"
              className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};