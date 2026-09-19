import React, { useState } from 'react';
import { Shield, Video, Bell, Eye, Flame, Smartphone, Play, CheckCircle2, X } from 'lucide-react';

export const SecurityIntro: React.FC = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);

  const checklistItems = [
    { label: 'Instalação de Câmeras CFTV Inteligentes', icon: <Video className="w-3.5 h-3.5 text-neutral-900" /> },
    { label: 'Alarmes e Barreiras Perimetrais', icon: <Bell className="w-3.5 h-3.5 text-neutral-900" /> },
    { label: 'Detecção Térmica & Prevenção de Fogo', icon: <Flame className="w-3.5 h-3.5 text-neutral-900" /> },
    { label: 'IA para Reconhecimento Facial e Veicular', icon: <Eye className="w-3.5 h-3.5 text-neutral-900" /> },
    { label: 'Monitoramento 24/7 pelo Celular', icon: <Smartphone className="w-3.5 h-3.5 text-neutral-900" /> },
    { label: 'Instalação Técnica Certificada (CREA/CFT)', icon: <Shield className="w-3.5 h-3.5 text-neutral-900" /> },
  ];

  return (
    <section id="security" className="w-full bg-white pt-14 pb-16 px-6 sm:px-10 lg:px-16 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto">
        {/* Small Category Eyebrow Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 bg-[#CFFD42] text-black text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            <Shield className="w-3 h-3 text-black fill-black" />
            Segurança & Monitoramento
          </span>
          <span className="text-[12px] text-neutral-400 font-medium">Hardware Inteligente & Instalação Certificada</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading, description, checklist & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <h2 className="text-2xl sm:text-3xl md:text-[36px] font-semibold text-neutral-900 tracking-[-0.03em] leading-[1.1] mb-4">
              Proteção Integral Contra Intrusões, Incêndios e Riscos para Instalações e Fazendas.
            </h2>

            <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed max-w-[540px] mb-6">
              Proteja usinas solares, lavouras agrícolas e galpões comerciais com videomonitoramento inteligente.
              Entregamos a instalação completa com câmeras ópticas 4K, barreiras perimetrais a laser e centrais de alarme 24h customizadas para o layout do seu imóvel.
            </p>

            {/* Checklist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-[560px] mb-7">
              {checklistItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-2.5 rounded-[8px] bg-[#FAFFEB] border border-[#e4f4b8]/50 hover:border-[#CFFD42] transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-[#CFFD42] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-black" />
                  </div>
                  <span className="text-[12px] font-medium text-neutral-800 tracking-tight">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#quote-builder"
                className="bg-[#CFFD42] hover:bg-[#D5FF45] text-black font-semibold text-xs sm:text-[13px] px-5 py-2.5 rounded-[7px] transition-all hover:scale-[1.02] shadow-[0_4px_16px_rgba(207,253,66,0.3)] active:scale-[0.98]"
              >
                Solicitar Orçamento de Instalação
              </a>
              <button
                onClick={() => setShowVideoModal(true)}
                className="bg-neutral-900 hover:bg-neutral-800 text-white font-medium text-xs sm:text-[13px] px-5 py-2.5 rounded-[7px] transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-white text-white" />
                <span>Ver Demonstração ao Vivo</span>
              </button>
            </div>
          </div>

          {/* Right Column: Security Camera Card with Video Preview & Live Tag */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-[0.9/1] rounded-[14px] overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.12)] border border-neutral-200 group">
              {/* Camera Photograph */}
              <img
                src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80"
                alt="Câmera de segurança externa de alta resolução instalada"
                className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />

              {/* Live Recording Badge (Top Left) */}
              <div className="absolute top-3.5 left-3.5 flex items-center gap-2 glass-pill px-2.5 py-1 rounded-full text-white text-[10px] font-medium tracking-wide">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span>AO VIVO 4K • CAM-01 PORTARIA NORTE</span>
              </div>

              {/* AI Recognition Status Pill (Top Right) */}
              <div className="absolute top-3.5 right-3.5 bg-[#CFFD42] text-black font-semibold text-[10px] px-2 py-0.5 rounded-[5px] shadow-xs">
                IA Armada
              </div>

              {/* Center Play Button Overlay */}
              <button
                onClick={() => setShowVideoModal(true)}
                className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-white/90 hover:bg-[#CFFD42] text-neutral-900 flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110 cursor-pointer group/btn"
                aria-label="Reproduzir demonstração do sistema de segurança"
              >
                <Play className="w-5 h-5 ml-0.5 fill-current transition-transform group-hover/btn:translate-x-0.5" />
              </button>

              {/* Bottom Caption Pill Card */}
              <div className="absolute bottom-4 left-4 right-4 glass-panel rounded-[10px] p-3 text-white">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[12px] font-semibold">Domo Óptico + Térmico Duplo</span>
                  <span className="text-[10px] text-[#CFFD42] font-semibold">99.8% de Precisão</span>
                </div>
                <p className="text-[10px] text-white/80 leading-tight">
                  Detecta instantaneamente intrusões não autorizadas e focos de calor em grandes áreas perimetrais rurais e industriais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl bg-neutral-900 rounded-[14px] overflow-hidden border border-neutral-700 shadow-2xl p-6">
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute top-4 right-4 text-white/70 hover:text-white p-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-white text-lg font-semibold mb-2 flex items-center gap-2">
              <Video className="w-5 h-5 text-[#CFFD42]" />
              CFTV Inteligente & Central de Monitoramento em Ação
            </h3>
            <p className="text-neutral-400 text-xs mb-4">
              Transmissão simulada em tempo real exibindo detecção de cerca virtual, identificação veicular e acionamento centralizado.
            </p>

            <div className="relative aspect-video bg-black rounded-[8px] overflow-hidden border border-neutral-800 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=1200&q=80"
                alt="Central de monitoramento ao vivo"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex flex-col justify-between p-4 pointer-events-none">
                <div className="flex justify-between items-center text-[11px] text-[#CFFD42] font-mono">
                  <span>FPS: 60 | TAXA: 12Mbps</span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                    GRAVAÇÃO ATIVA
                  </span>
                </div>
                <div className="bg-black/60 backdrop-blur-md p-3 rounded text-white text-xs max-w-sm">
                  <div className="text-[#CFFD42] font-semibold text-[11px] mb-0.5">ALERTA PERIMETRAL VERIFICADO</div>
                  Presença de colaborador autorizada via biometria/cartão RFID às 03:42. Nenhuma ameaça detectada.
                </div>
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setShowVideoModal(false)}
                className="bg-[#CFFD42] text-black font-semibold text-xs px-4 py-2 rounded-[6px] hover:bg-[#D5FF45]"
              >
                Fechar Demonstração
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
