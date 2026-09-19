import React, { useState } from 'react';
import { ShieldCheck, Video, HardDrive, Cpu, Check, ArrowRight, CheckCircle2 } from 'lucide-react';

export const SecurityQuoteCalculator: React.FC = () => {
  const [propertyType, setPropertyType] = useState('Comercial / Usina Solar');
  const [industry, setIndustry] = useState('Energia Limpa & Agronegócio');
  const [systemSize, setSystemSize] = useState('Padrão (4 a 8 Câmeras)');
  const [ownership, setOwnership] = useState('Proprietário / Gestor');

  // Checkboxes for Systems of Interest
  const [interests, setInterests] = useState<{ [key: string]: boolean }>({
    videoSurveillance: true,
    intrusionDetection: true,
    centralMonitoring: true,
    systemIntegration: false,
    fireDetection: false,
    accessControl: false,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');

  const toggleInterest = (key: string) => {
    setInterests((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Dynamic monthly price calculation in BRL (R$)
  const calculatePrice = () => {
    let base = 289;
    if (systemSize.includes('4 a 8')) base += 110;
    if (systemSize.includes('9 a 16')) base += 220;
    if (systemSize.includes('16+')) base += 390;
    if (interests.fireDetection) base += 80;
    if (interests.accessControl) base += 75;
    if (interests.systemIntegration) base += 60;
    return base;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="quote-builder" className="w-full bg-[#f8faf6] py-16 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Top Header */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider block mb-1">
            Engenharia de Segurança Sob Medida
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-[-0.03em]">
            Monte Sua Solução Personalizada de Segurança
          </h2>
          <p className="text-xs text-neutral-500 mt-2">
            Selecione os requisitos do seu imóvel abaixo para gerar uma estimativa imediata de projeto e valores promocionais.
          </p>
        </div>

        {/* Outer Green Promotional Wrapper */}
        <div className="bg-gradient-to-br from-[#85be39] via-[#65a324] to-[#4c7c1b] p-3 sm:p-5 lg:p-7 rounded-[16px] shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            
            {/* Left Column: Interactive Request A Quote Form */}
            <div className="lg:col-span-7 bg-white rounded-[12px] p-5 sm:p-7 shadow-md flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-neutral-900 mb-1">
                  Solicitar Orçamento
                </h3>
                <p className="text-xs text-neutral-500 mb-5 leading-relaxed">
                  Preencha o formulário abaixo para receber um orçamento detalhado de engenharia. Nossa equipe de especialistas entrará em contato rapidamente.
                </p>

                {formSubmitted ? (
                  <div className="bg-[#FAFFEB] border border-[#CFFD42] rounded-[10px] p-6 text-center my-6">
                    <div className="w-12 h-12 rounded-full bg-[#CFFD42] flex items-center justify-center mx-auto mb-3">
                      <CheckCircle2 className="w-6 h-6 text-black" />
                    </div>
                    <h4 className="text-base font-bold text-neutral-900 mb-1">
                      Solicitação de Orçamento Recebida!
                    </h4>
                    <p className="text-xs text-neutral-600 mb-4">
                      Obrigado, <span className="font-semibold">{contactName || 'Prezado(a) Cliente'}</span>. Um especialista em engenharia analisará o layout da sua propriedade e entrará em contato pelo{' '}
                      <span className="font-semibold">{contactEmail || contactPhone || 'seu contato informado'}</span> com a proposta comercial completa.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs font-semibold underline text-neutral-800 hover:text-black cursor-pointer"
                    >
                      Configurar Outro Sistema
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                    {/* Row 1: Property Type & Industry */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block font-medium text-neutral-700 mb-1">
                          Tipo de Propriedade
                        </label>
                        <select
                          value={propertyType}
                          onChange={(e) => setPropertyType(e.target.value)}
                          className="w-full p-2.5 bg-neutral-50 border border-neutral-200 rounded-[6px] text-neutral-800 focus:outline-none focus:border-[#85be39]"
                        >
                          <option>Comercial / Usina Solar</option>
                          <option>Propriedade Rural / Fazenda</option>
                          <option>Condomínio Residencial</option>
                          <option>Galpão Logístico / Indústria</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-medium text-neutral-700 mb-1">
                          Segmento de Atuação
                        </label>
                        <select
                          value={industry}
                          onChange={(e) => setIndustry(e.target.value)}
                          className="w-full p-2.5 bg-neutral-50 border border-neutral-200 rounded-[6px] text-neutral-800 focus:outline-none focus:border-[#85be39]"
                        >
                          <option>Energia Limpa & Agronegócio</option>
                          <option>Edifícios Comerciais & Escritórios</option>
                          <option>Manufatura, Logística & Cargas</option>
                          <option>Saúde, Educação & Institucional</option>
                        </select>
                      </div>
                    </div>

                    {/* Row 2: System Size & Ownership */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block font-medium text-neutral-700 mb-1">
                          Porte do Sistema (Câmeras)
                        </label>
                        <select
                          value={systemSize}
                          onChange={(e) => setSystemSize(e.target.value)}
                          className="w-full p-2.5 bg-neutral-50 border border-neutral-200 rounded-[6px] text-neutral-800 focus:outline-none focus:border-[#85be39]"
                        >
                          <option>Compacto (1 a 3 Câmeras)</option>
                          <option>Padrão (4 a 8 Câmeras)</option>
                          <option>Empresarial (9 a 16 Câmeras)</option>
                          <option>Perímetro Extenso (16+ Câmeras)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-medium text-neutral-700 mb-1">
                          Vínculo com o Imóvel
                        </label>
                        <select
                          value={ownership}
                          onChange={(e) => setOwnership(e.target.value)}
                          className="w-full p-2.5 bg-neutral-50 border border-neutral-200 rounded-[6px] text-neutral-800 focus:outline-none focus:border-[#85be39]"
                        >
                          <option>Proprietário / Gestor</option>
                          <option>Locatário / Ocupante</option>
                          <option>Desenvolvedor Imobiliário / Construtora</option>
                        </select>
                      </div>
                    </div>

                    {/* Row 3: Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block font-medium text-neutral-700 mb-1">
                          Nome Completo
                        </label>
                        <input
                          required
                          type="text"
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          placeholder="Seu nome completo"
                          className="w-full p-2.5 bg-neutral-50 border border-neutral-200 rounded-[6px] focus:outline-none focus:border-[#85be39]"
                        />
                      </div>

                      <div>
                        <label className="block font-medium text-neutral-700 mb-1">
                          Telefone / WhatsApp (com DDD)
                        </label>
                        <input
                          required
                          type="tel"
                          value={contactPhone}
                          onChange={(e) => setContactPhone(e.target.value)}
                          placeholder="(11) 98765-4321"
                          className="w-full p-2.5 bg-neutral-50 border border-neutral-200 rounded-[6px] focus:outline-none focus:border-[#85be39]"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block font-medium text-neutral-700 mb-1">
                        E-mail Corporativo ou Pessoal
                      </label>
                      <input
                        required
                        type="email"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        placeholder="seuemail@empresa.com.br"
                        className="w-full p-2.5 bg-neutral-50 border border-neutral-200 rounded-[6px] focus:outline-none focus:border-[#85be39]"
                      />
                    </div>

                    {/* Checkboxes: System Of Interest */}
                    <div className="pt-2">
                      <label className="block font-semibold text-neutral-800 mb-2">
                        Sistemas de Interesse:
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px]">
                        {[
                          { key: 'videoSurveillance', label: 'Videomonitoramento (CFTV)' },
                          { key: 'intrusionDetection', label: 'Alarmes Perimetrais' },
                          { key: 'centralMonitoring', label: 'Monitoramento 24/7' },
                          { key: 'systemIntegration', label: 'Integração de Sistemas' },
                          { key: 'fireDetection', label: 'Detecção Térmica & Fogo' },
                          { key: 'accessControl', label: 'Controle de Acesso' },
                        ].map((item) => (
                          <label
                            key={item.key}
                            className="flex items-center gap-1.5 cursor-pointer select-none text-neutral-700 hover:text-black"
                          >
                            <input
                              type="checkbox"
                              checked={interests[item.key] || false}
                              onChange={() => toggleInterest(item.key)}
                              className="accent-[#65a324] w-3.5 h-3.5 rounded"
                            />
                            <span>{item.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-3">
                      <button
                        type="submit"
                        className="w-full sm:w-auto bg-neutral-900 hover:bg-black text-white font-semibold text-xs px-6 py-3 rounded-[6px] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                      >
                        <span>Enviar Solicitação de Orçamento</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Right Column: Security Promotions Card - MELHOR VALOR */}
            <div className="lg:col-span-5 bg-white rounded-[12px] p-5 sm:p-7 shadow-md flex flex-col justify-between relative overflow-hidden">
              {/* Best Value Badge Ribbon */}
              <div className="absolute top-4 right-4 bg-[#CFFD42] text-black text-[10px] font-bold px-2.5 py-1 rounded-[4px] uppercase tracking-wider shadow-xs">
                Melhor Custo-Benefício
              </div>

              <div>
                <h3 className="text-lg font-bold text-neutral-900 mb-1">
                  Condições Especiais de Segurança
                </h3>
                <p className="text-xs text-neutral-500 mb-5 leading-relaxed">
                  Nossos técnicos credenciados realizam a instalação completa e parametrização do sistema. Ensinamos toda a sua equipe a operar o aplicativo e o painel de controle.
                </p>

                {/* 3 Hardware Preview Icons */}
                <div className="grid grid-cols-3 gap-2.5 p-3 rounded-[8px] bg-[#FAFFEB] border border-[#e4f4b8] mb-5">
                  <div className="flex flex-col items-center text-center p-1">
                    <Video className="w-5 h-5 text-neutral-800 mb-1" />
                    <span className="text-[10px] font-semibold text-neutral-700">Óptica 4K</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-1 border-x border-[#e4f4b8]">
                    <HardDrive className="w-5 h-5 text-neutral-800 mb-1" />
                    <span className="text-[10px] font-semibold text-neutral-700">NVR Nuvem</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-1">
                    <Cpu className="w-5 h-5 text-neutral-800 mb-1" />
                    <span className="text-[10px] font-semibold text-neutral-700">Guarda IA</span>
                  </div>
                </div>

                {/* Included Features List */}
                <ul className="space-y-2.5 mb-6 text-xs text-neutral-700">
                  {[
                    'Gravadores Digitais NVR de Alta Capacidade com redundância',
                    'Transmissão ao vivo criptografada em app iOS, Android e Web',
                    'Sistemas em rede com backup em nuvem distribuído',
                    'Software avançado de cerca virtual com detecção inteligente por IA',
                    'Tecnologia de vídeo inteligente com autonomia de baterias solares',
                  ].map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-[#FAFFEB] border border-[#85be39] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-[#65a324] stroke-[3]" />
                      </div>
                      <span className="text-[11.5px] leading-tight text-neutral-800">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Tag & CTA */}
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between gap-3">
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-neutral-900 tracking-tight">
                      R$ {calculatePrice()}
                    </span>
                    <span className="text-xs text-neutral-500 font-medium">/mês</span>
                  </div>
                  <span className="text-[10px] text-neutral-400">Instalação e hardware inclusos</span>
                </div>

                <a
                  href="#quote-builder"
                  className="bg-[#CFFD42] hover:bg-[#D5FF45] text-black font-semibold text-xs px-5 py-2.5 rounded-[7px] transition-all hover:scale-[1.02] shadow-[0_4px_12px_rgba(207,253,66,0.35)] whitespace-nowrap"
                >
                  Contratar Agora
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
