import React, { useState } from 'react';
import { Camera, Flame, Home, KeyRound, ArrowUpRight, Check, Calendar, ArrowRight } from 'lucide-react';

interface ServiceItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  ctaText: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: 'business',
    icon: <Camera className="w-5 h-5" />,
    title: 'CFTV Comercial Inteligente',
    description: 'Sistema integrado que une câmeras de segurança, alarmes, iluminação inteligente e travas automáticas para controle total e sem complicação.',
    features: ['Câmeras 4K Ultra HD', 'Cerca virtual inteligente', 'Reconhecimento de placas (LPR)'],
    ctaText: 'Ver Planos de CFTV',
  },
  {
    id: 'fire-life-safety',
    icon: <Flame className="w-5 h-5" />,
    title: 'Detecção de Incêndio & Proteção à Vida',
    description: 'Líderes no projeto e instalação de centrais de alarme de incêndio certificadas segundo normas técnicas ABNT e Corpo de Bombeiros.',
    features: ['Sensores térmicos e de fumaça', 'Monitoramento de fluxo de hidrantes', 'Disparo de alerta imediato'],
    ctaText: 'Ver Sistemas de Incêndio',
  },
  {
    id: 'smart-home',
    icon: <Home className="w-5 h-5" />,
    title: 'Automação & Segurança Residencial',
    description: 'Esteja em casa ou viajando, tenha controle total na ponta dos dedos: visualize câmeras, acione portões e destranque fechaduras pelo celular.',
    features: ['Videoporteiro Wi-Fi com app', 'Fechaduras digitais integradas', 'Sensores de intrusão e vazamento'],
    ctaText: 'Ver Segurança Residencial',
  },
  {
    id: 'access-control',
    icon: <KeyRound className="w-5 h-5" />,
    title: 'Instalação de Controle de Acesso',
    description: 'Sistemas ágeis e seguros para portas, cancelas e catracas, com ampla experiência em engenharia, parametrização e implantação.',
    features: ['Tags e cartões RFID', 'Reconhecimento facial ultrarrápido', 'Cancelas e portões automatizados'],
    ctaText: 'Ver Controle de Acesso',
  },
];

export const SecurityServices: React.FC = () => {
  // 'fire-life-safety' is highlighted in the reference image
  const [selectedService, setSelectedService] = useState<string>('fire-life-safety');
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);
  const [scheduleSuccess, setScheduleSuccess] = useState(false);

  return (
    <section className="w-full bg-[#fdfdfd] py-16 px-6 sm:px-10 lg:px-16 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider block mb-1">
              Tranquilidade com monitoramento inteligente 24h
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-semibold text-neutral-900 tracking-[-0.03em] leading-tight">
              Sistemas de Segurança Inteligentes<br />Que Cabem no Seu Negócio!
            </h2>
          </div>
          <div className="max-w-[380px]">
            <p className="text-neutral-500 text-xs sm:text-[12px] leading-relaxed">
              Porque um sistema de segurança comercial e rural precisa entregar resultados reais, oferecemos o que a maioria não tem: engenharia customizada, técnicos certificados e suporte ágil em todo o Brasil.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {SERVICES.map((srv) => {
            const isHighlight = srv.id === selectedService;

            return (
              <div
                key={srv.id}
                onClick={() => setSelectedService(srv.id)}
                className={`rounded-[12px] p-5 flex flex-col justify-between transition-all duration-300 cursor-pointer border ${
                  isHighlight
                    ? 'bg-[#CFFD42] text-black border-[#bfe835] shadow-[0_8px_24px_rgba(207,253,66,0.25)] scale-[1.02]'
                    : 'bg-white text-neutral-900 border-neutral-200/80 hover:border-neutral-300 hover:shadow-sm'
                }`}
                role="button"
                tabIndex={0}
              >
                <div>
                  {/* Top Icon Badge */}
                  <div
                    className={`w-10 h-10 rounded-[8px] flex items-center justify-center mb-4 transition-colors ${
                      isHighlight ? 'bg-black text-[#CFFD42]' : 'bg-[#FAFFEB] text-neutral-900 border border-[#e4f4b8]'
                    }`}
                  >
                    {srv.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-[16px] font-semibold tracking-tight leading-snug mb-2">
                    {srv.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-[12px] leading-relaxed mb-4 ${
                      isHighlight ? 'text-black/80 font-medium' : 'text-neutral-500'
                    }`}
                  >
                    {srv.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-1.5 mb-6">
                    {srv.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-1.5 text-[11px]">
                        <Check
                          className={`w-3.5 h-3.5 shrink-0 ${
                            isHighlight ? 'text-black stroke-[3]' : 'text-[#84cc16]'
                          }`}
                        />
                        <span className={isHighlight ? 'text-black font-medium' : 'text-neutral-700'}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA Link */}
                <a
                  href="#quote-builder"
                  className={`inline-flex items-center justify-between text-xs font-semibold pt-3 border-t ${
                    isHighlight
                      ? 'border-black/20 text-black hover:opacity-80'
                      : 'border-neutral-100 text-neutral-900 hover:text-black'
                  }`}
                >
                  <span>{srv.ctaText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner with Schedule a Visit / Free Quote */}
        <div className="bg-[#FAFFEB] border border-[#e4f4b8] rounded-[10px] p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#CFFD42] text-black font-bold flex items-center justify-center text-xs shrink-0">
              i
            </div>
            <p className="text-xs sm:text-[13px] text-neutral-800 leading-snug">
              <span className="font-semibold">Precisa de um projeto de segurança personalizado?</span> Como especialistas em usinas solares e fazendas, dimensionamos cada sensor e câmera.{' '}
              <button
                onClick={() => setScheduleModalOpen(true)}
                className="underline font-semibold hover:text-black cursor-pointer"
              >
                Agendar Visita Técnica
              </button>
            </p>
          </div>

          <a
            href="#quote-builder"
            className="shrink-0 bg-white hover:bg-neutral-50 text-neutral-900 font-semibold text-xs px-4 py-2 rounded-[6px] border border-neutral-300 shadow-xs transition-colors"
          >
            Fazer Orçamento Gratuito
          </a>
        </div>
      </div>

      {/* Schedule Modal */}
      {scheduleModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white rounded-[14px] p-6 max-w-md w-full shadow-2xl border border-neutral-200">
            <h3 className="text-base font-bold text-neutral-900 mb-1 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#84cc16]" />
              Agendar Avaliação Técnica no Local
            </h3>
            <p className="text-neutral-500 text-xs mb-4">
              Um engenheiro de segurança inspecionará seu perímetro, tubulações e cobertura de rede.
            </p>

            {scheduleSuccess ? (
              <div className="p-4 bg-[#FAFFEB] border border-[#CFFD42] rounded-lg text-center">
                <p className="text-xs font-semibold text-neutral-900 mb-1">Solicitação Recebida com Sucesso!</p>
                <p className="text-[11px] text-neutral-600">Nossa equipe entrará em contato via telefone ou WhatsApp em até 2 horas para confirmar a data.</p>
                <button
                  onClick={() => {
                    setScheduleSuccess(false);
                    setScheduleModalOpen(false);
                  }}
                  className="mt-3 bg-[#CFFD42] text-black text-xs font-semibold px-4 py-1.5 rounded-[5px]"
                >
                  Concluir
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setScheduleSuccess(true);
                }}
                className="space-y-3 text-xs"
              >
                <div>
                  <label className="block text-neutral-700 font-medium mb-1">Nome Completo</label>
                  <input
                    required
                    type="text"
                    placeholder="Ex: Carlos Eduardo Silva"
                    className="w-full px-3 py-2 border border-neutral-300 rounded-[6px] focus:outline-none focus:border-[#CFFD42]"
                  />
                </div>
                <div>
                  <label className="block text-neutral-700 font-medium mb-1">Telefone / WhatsApp (com DDD)</label>
                  <input
                    required
                    type="tel"
                    placeholder="(11) 98765-4321"
                    className="w-full px-3 py-2 border border-neutral-300 rounded-[6px] focus:outline-none focus:border-[#CFFD42]"
                  />
                </div>
                <div>
                  <label className="block text-neutral-700 font-medium mb-1">Tipo de Instalação</label>
                  <select className="w-full px-3 py-2 border border-neutral-300 rounded-[6px] focus:outline-none focus:border-[#CFFD42]">
                    <option>Usina de Energia Solar / Terreno</option>
                    <option>Fazenda / Propriedade Rural</option>
                    <option>Galpão Comercial / Centro de Distribuição</option>
                    <option>Residência / Condomínio Fechado</option>
                  </select>
                </div>
                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setScheduleModalOpen(false)}
                    className="px-3 py-2 border border-neutral-300 rounded-[6px] text-neutral-600 hover:bg-neutral-100"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#CFFD42] hover:bg-[#D5FF45] text-black font-semibold rounded-[6px] flex items-center gap-1.5"
                  >
                    <span>Confirmar Agendamento</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
