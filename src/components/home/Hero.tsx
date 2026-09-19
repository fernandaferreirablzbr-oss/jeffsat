import Image from "next/image";
import {
  ArrowRight,
  MessageCircle,
  Sun,
  ShieldCheck,
  Wifi,
  Zap,
} from "lucide-react";
import { Header } from "./Header";
import { HeroMotion } from "./HeroMotion";
import { whatsapp } from "@/lib/site";

const pillars = [
  { icon: Sun, label: "ENERGIA SOLAR" },
  { icon: ShieldCheck, label: "SEGURANÇA" },
  { icon: Wifi, label: "CONECTIVIDADE" },
  { icon: Zap, label: "MOBILIDADE ELÉTRICA" },
];

export function Hero() {
  return (
    <HeroMotion header={<Header />}>
    <section className="hero dark" aria-label="JeffSat Tecnologias">
      <div className="hero-photo">
<Image
            src="/hero-poster.png"
            alt="Residência contemporânea com iluminação quente e infraestrutura tecnológica — referência ilustrativa"
            fill
            priority
            sizes="100vw"
          />
          <div className="hero-video-layer" data-ready="false" aria-hidden="true">
            <video className="hero-video" autoPlay muted playsInline loop preload="none" poster="/hero-poster.png" tabIndex={-1} aria-hidden="true" />
            <div className="hero-loop-shade" />
          </div>
          <div className="hero-scroll-shade" aria-hidden="true" />
      </div>
      <div className="hero-header-space" aria-hidden="true" />
      <div className="container hero-main">
        <div className="hero-copy">
          <div className="hero-eyebrow-scroll"><p className="eyebrow hero-eyebrow">JEFFSAT TECNOLOGIAS</p></div>
          <h1 className="hero-headline">
            <span className="hero-line-mask hero-prefix-line"><span className="hero-line hero-light">TECNOLOGIA</span></span>{" "}
            <span className="hero-line-mask"><span className="hero-line"><span className="hero-prefix-que">QUE&nbsp;</span><span className="hero-generate">GERA<span className="orange">.</span></span></span></span>{" "}
                <span className="hero-line-mask hero-protect-line"><span className="hero-line">PROTEGE<span className="orange">.</span></span></span>{" "}
                <span className="hero-line-mask hero-connect-line"><span className="hero-line">CONECTA<span className="orange">.</span></span></span>
          </h1>
          <div className="hero-description-scroll">
          <p className="hero-description">
            Soluções tecnológicas para residências e empresas em Palmares e
            região.
          </p>
          </div>
          <div className="hero-actions-scroll">
          <div className="hero-actions">
            <a href="#orcamento" className="button button-orange">
              SOLICITAR ORÇAMENTO <ArrowRight size={18} />
            </a>
            <a
              href={whatsapp}
              className="button button-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              FALAR NO WHATSAPP <MessageCircle size={18} />
            </a>
          </div>
          </div>
        </div>
        <p className="hero-location">
          <strong>PALMARES — PE</strong>
          <span>
            Tecnologia mais
            <br />
            próxima de você.
          </span>
        </p>
      </div>
      <div className="container hero-bottom">
        {pillars.map(({ icon: Icon, label }) => (
          <div key={label}>
            <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
    </HeroMotion>
  );
}
