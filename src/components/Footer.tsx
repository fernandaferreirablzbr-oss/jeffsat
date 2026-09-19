import React from 'react';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0a0f0b] text-white pt-16 pb-8 px-6 sm:px-10 lg:px-16 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Quick Contact */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-4 h-4 rounded-full bg-[#CFFD42] flex items-center justify-center p-[2px]">
                <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
              </div>
              <span className="text-white text-base font-semibold tracking-wide">
                Sonar Energia Solar & Segurança
              </span>
            </div>
            
            <p className="text-xs text-white/60 leading-relaxed mb-5 max-w-[280px]">
              Instalações completas de energia solar fotovoltaica combinadas a CFTV de alta resolução, detecção térmica perimetral e infraestrutura de segurança inteligente 24/7.
            </p>

            <div className="space-y-2 text-xs text-white/80">
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#CFFD42]" />
                <span>+55 (11) 3090-4800 / 0800 720 4180</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#CFFD42]" />
                <span>contato@sonar-energia.com.br</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#CFFD42]" />
                <span>Av. Paulista, 1842 - Bela Vista, São Paulo - SP</span>
              </div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Sistemas de Segurança
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li><a href="#security" className="hover:text-[#CFFD42] transition-colors">Câmeras CFTV 4K com IA</a></li>
              <li><a href="#security" className="hover:text-[#CFFD42] transition-colors">Radares e Barreiras Perimetrais</a></li>
              <li><a href="#security" className="hover:text-[#CFFD42] transition-colors">Termografia para Usinas Solares</a></li>
              <li><a href="#security" className="hover:text-[#CFFD42] transition-colors">Detecção Precoce de Incêndios</a></li>
              <li><a href="#security" className="hover:text-[#CFFD42] transition-colors">Controle de Acesso & Cancelas</a></li>
            </ul>
          </div>

          {/* Col 3: Clean Energy Solutions */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Energia Solar
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li><a href="#home" className="hover:text-[#CFFD42] transition-colors">Usinas Fotovoltaicas</a></li>
              <li><a href="#home" className="hover:text-[#CFFD42] transition-colors">Solar no Agronegócio</a></li>
              <li><a href="#home" className="hover:text-[#CFFD42] transition-colors">Sistemas de Baterias (BESS)</a></li>
              <li><a href="#home" className="hover:text-[#CFFD42] transition-colors">Independência Energética</a></li>
            </ul>
          </div>

          {/* Col 4: Have A Project? CTA */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-2">
                Tem um Projeto?
              </h4>
              <p className="text-xs text-white/60 mb-4 leading-relaxed">
                Converse diretamente com um engenheiro solar e especialista em videomonitoramento.
              </p>
            </div>
            
            <a
              href="#quote-builder"
              className="bg-[#CFFD42] hover:bg-[#D5FF45] text-black font-semibold text-xs py-2.5 px-4 rounded-[6px] text-center transition-all hover:scale-[1.02] shadow-sm"
            >
              Solicitar Orçamento Gratuito
            </a>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/50">
          <div>
            © 2026 Sonar Energia & Sistemas de Segurança Ltda. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-4">
            <a href="#terms" className="hover:text-white transition-colors">Termos de Uso</a>
            <span>•</span>
            <a href="#privacy" className="hover:text-white transition-colors">Política de Privacidade</a>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
            >
              <span>Voltar ao Topo</span>
              <ArrowUp className="w-3 h-3 text-[#CFFD42]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
