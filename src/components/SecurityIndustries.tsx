import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Download, ShieldCheck } from 'lucide-react';

interface IndustryItem {
  number: string;
  title: string;
  category: string;
  description: string;
  keyProtections: string[];
}

const INDUSTRIES: IndustryItem[] = [
  {
    number: '01',
    title: 'Usinas Solares & Renováveis',
    category: 'Energia Limpa',
    description: 'Detecção perimetral térmica de longo alcance, sensores anti-furto de cabos elétricos e torres de videomonitoramento autônomas com recarga solar e link 4G/Satélite.',
    keyProtections: ['Cercas virtuais a laser', 'Alarme anti-furto de cabos', 'Sensores de temperatura e fogo'],
  },
  {
    number: '02',
    title: 'Agronegócio & Fazendas',
    category: 'Setor Agropecuário',
    description: 'Monitoramento de grandes extensões territoriais, proteção de silos e maquinários pesados, cerca virtual contra invasões de gado e sensores patrimoniais.',
    keyProtections: ['Câmeras wireless de longo alcance', 'Geofencing para tratores e implementos', 'Alarme contra incêndio em silos e galpões'],
  },
  {
    number: '03',
    title: 'Galpões & Centros Logísticos',
    category: 'Logística & Indústria',
    description: 'CFTV 24h em docas de carregamento, controle de acesso de funcionários e visitantes por biometria facial e rastreio de cargas.',
    keyProtections: ['Câmeras em corredores e mezaninos', 'Catracas e torniquetes biométricos', 'Registro automatizado de docas'],
  },
  {
    number: '04',
    title: 'Instituições & Universidades',
    category: 'Educação & Saúde',
    description: 'Totens de emergência integrados, controle automatizado de portarias e catracas, e planos sincronizados de pronta resposta.',
    keyProtections: ['Portarias com biometria facial', 'Botão de pânico e sirenes integradas', 'Leitura automática de placas (LPR)'],
  },
  {
    number: '05',
    title: 'Condomínios & Residências',
    category: 'Propriedades Privadas',
    description: 'Câmeras arquitetônicas discretas, videoporteiro conectado ao smartphone, fechaduras inteligentes e apoio de monitoramento 24h.',
    keyProtections: ['Fechaduras com senha e biometria', 'Sensores de quebra de vidro e vazamento', 'Transmissão criptografada no celular'],
  },
];

export const SecurityIndustries: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(1); // 02 Agronegócio ativo por padrão
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const activeItem = INDUSTRIES[activeIdx];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev > 0 ? prev - 1 : INDUSTRIES.length - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev < INDUSTRIES.length - 1 ? prev + 1 : 0));
  };

  const handleDownloadBrochure = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <section className="w-full bg-[#121913] text-white py-16 px-6 sm:px-10 lg:px-16 relative overflow-hidden">
      {/* Subtle Background Pattern & Soft Glow */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#CFFD42_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#CFFD42]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Content */}
        <div className="max-w-[620px] mb-8">
          <div className="flex items-center gap-2 text-[#CFFD42] text-xs font-semibold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            Proteção Especializada por Setor
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-[34px] font-semibold text-white tracking-[-0.03em] leading-tight mb-3">
            Proteja o que Realmente Importa!
          </h2>
          <p className="text-white/70 text-xs sm:text-[13px] leading-relaxed">
            Além de reduzir drasticamente a probabilidade de crimes e invasões na sua propriedade, contar com sistemas de segurança certificados e homologados reduz custos de apólice de seguro e mitiga riscos operacionais.
          </p>
        </div>

        {/* 5 Numbered Cards Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {INDUSTRIES.map((ind, idx) => {
            const isActive = idx === activeIdx;

            return (
              <div
                key={ind.number}
                onClick={() => setActiveIdx(idx)}
                className={`group rounded-[10px] p-4 transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[160px] ${
                  isActive
                    ? 'bg-[#CFFD42] text-black shadow-[0_8px_24px_rgba(207,253,66,0.3)] scale-[1.02]'
                    : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                }`}
                role="button"
                tabIndex={0}
              >
                <div>
                  <span
                    className={`text-2xl sm:text-3xl font-light tracking-tight block mb-2 ${
                      isActive ? 'text-black font-semibold' : 'text-white/60'
                    }`}
                  >
                    {ind.number}
                  </span>
                  <h3
                    className={`text-[13px] sm:text-[14px] font-semibold leading-snug ${
                      isActive ? 'text-black' : 'text-white'
                    }`}
                  >
                    {ind.title}
                  </h3>
                </div>

                <div className="mt-4 pt-2 border-t border-current/15 flex items-center justify-between text-[11px] font-medium">
                  <span>{isActive ? 'Setor Ativo' : ind.category}</span>
                  <ArrowRight
                    className={`w-3.5 h-3.5 transition-transform ${
                      isActive ? 'translate-x-1 text-black' : 'text-white/50 group-hover:translate-x-1'
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Detail Card for Active Industry */}
        <div className="bg-white/5 border border-white/10 rounded-[12px] p-5 sm:p-6 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-[560px]">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="bg-[#CFFD42] text-black font-bold text-[10px] px-2 py-0.5 rounded">
                Setor {activeItem.number}
              </span>
              <span className="text-white font-medium text-xs sm:text-sm">{activeItem.title}</span>
            </div>
            <p className="text-white/80 text-xs sm:text-[13px] leading-relaxed mb-3">
              {activeItem.description}
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {activeItem.keyProtections.map((p, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 text-[11px] bg-white/10 text-white/90 px-2.5 py-1 rounded-full"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CFFD42]" />
                  {p}
                </span>
              ))}
            </div>
          </div>

          <a
            href="#quote-builder"
            className="shrink-0 bg-[#CFFD42] hover:bg-[#D5FF45] text-black font-semibold text-xs px-5 py-2.5 rounded-[7px] transition-all hover:scale-[1.02] shadow-sm whitespace-nowrap"
          >
            Configurar para {activeItem.title}
          </a>
        </div>

        {/* Carousel Arrows & Download Brochure Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-white/10">
          {/* Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#CFFD42] hover:text-black text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Setor anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#CFFD42] hover:text-black text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Próximo setor"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <span className="text-xs text-white/50 ml-2">
              Mostrando {activeItem.number} de 05 setores
            </span>
          </div>

          {/* Download Brochure */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadBrochure}
              className="flex items-center gap-2 text-xs font-medium text-white/90 hover:text-white bg-white/10 hover:bg-white/20 px-3.5 py-1.5 rounded-[6px] transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-[#CFFD42]" />
              <span>{downloadSuccess ? 'Manual de Segurança Enviado!' : 'Baixar Guia de Segurança 2026'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
