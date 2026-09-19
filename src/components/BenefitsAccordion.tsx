import React, { useState } from 'react';
import { DollarSign, Shield, Wifi, Zap } from 'lucide-react';

interface BenefitItemData {
  id: string;
  icon: React.ReactNode;
  title: string;
  bullets: string[];
}

const BENEFIT_ITEMS: BenefitItemData[] = [
  {
    id: 'gerar',
    icon: <DollarSign className="w-4 h-4 text-neutral-900" />,
    title: 'Gerar — Energia Solar',
    bullets: [
      'Projeto e instalação de sistemas fotovoltaicos para redução de custos com energia elétrica.',
      'Economia a longo prazo e autonomia energética para residências e empresas.',
    ],
  },
  {
    id: 'proteger',
    icon: <Shield className="w-4 h-4 text-neutral-900" />,
    title: 'Proteger — Segurança Eletrônica',
    bullets: [
      'Sistemas de monitoramento e controle de acesso para proteção de patrimônio.',
      'Visão remota e segurança ativa do que é seu.',
    ],
  },
  {
    id: 'conectar',
    icon: <Wifi className="w-4 h-4 text-neutral-900" />,
    title: 'Conectar — Conectividade',
    bullets: [
      'Soluções de internet e rede para garantir comunicação estável, incluindo integração Starlink.',
      'Conexão onde quer que esteja.',
    ],
  },
  {
    id: 'mover',
    icon: <Zap className="w-4 h-4 text-neutral-900 fill-neutral-900" />,
    title: 'Mover — Mobilidade Elétrica',
    bullets: [
      'Instalações de carregadores para veículos elétricos.',
      'Recarga conveniente em casa ou na empresa.',
    ],
  },
];

export const BenefitsAccordion: React.FC = () => {
  // 'mover' is active by default
  const [activeId, setActiveId] = useState<string>('mover');

  return (
    <section className="w-full bg-white pt-6 pb-16 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-2.5 w-full">
        {BENEFIT_ITEMS.map((item) => {
          const isActive = item.id === activeId;

          return (
            <div
              key={item.id}
              onClick={() => setActiveId(item.id)}
              className={`group relative w-full min-h-[76px] sm:min-h-[82px] rounded-[8px] px-5 sm:px-7 py-4 sm:py-3.5 flex flex-col md:flex-row md:items-center justify-between transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'bg-[#CFFD42] shadow-[0_4px_16px_rgba(207,253,66,0.25)] z-10'
                  : 'bg-[#FAFFEB] hover:bg-[#f5fae1]'
              }`}
              role="button"
              tabIndex={0}
              aria-expanded={isActive}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveId(item.id);
                }
              }}
            >
              {/* Left Side: Circular Icon + Title */}
              <div className="flex items-center gap-3.5 sm:gap-4 shrink-0">
                {/* Icon Circle */}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    isActive ? 'bg-white/80' : 'bg-white'
                  } border border-neutral-200/60 shadow-xs`}
                >
                  {item.icon}
                </div>

                {/* Section Title */}
                <h3 className="text-xl sm:text-[25px] font-semibold text-neutral-900 tracking-[-0.025em]">
                  {item.title}
                </h3>
              </div>

              {/* Right Side: 3 Compact Bullet Points */}
              <ul className="mt-3 md:mt-0 flex flex-col gap-1 text-[11px] sm:text-[12px] leading-tight md:text-left shrink-0 md:w-[320px]">
                {item.bullets.map((bullet, idx) => (
                  <li
                    key={idx}
                    className={`flex items-start gap-1.5 ${
                      isActive ? 'text-neutral-900 font-medium' : 'text-neutral-600 fontNormal'
                    }`}
                  >
                    <span className="text-neutral-400 select-none">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};