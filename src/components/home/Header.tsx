import Image from "next/image";
import { ArrowUpRight, Menu, Phone, MessageCircle } from "lucide-react";
import { whatsapp } from "@/lib/site";

const links = [
  ["Início", "#inicio"],
  ["Soluções", "#solucoes"],
  ["Para você", "#para-voce"],
  ["Projetos", "#projetos"],
  ["Sobre", "#sobre"],
  ["Contato", "#contato"],
];

export function Header() {
  return (
    <header className="header container">
      <a
        href="#inicio"
        className="brand"
        aria-label="JeffSat Tecnologias — início"
      >
        <Image
          src="/images/logo.webp"
          alt="JeffSat Tecnologias"
          width={200}
          height={65}
          priority
        />
      </a>
      <nav className="desktop-nav" aria-label="Menu principal">
        {links.map(([name, href]) => (
          <a key={href} href={href}>
            {name}
          </a>
        ))}
      </nav>
      <a className="header-phone" href="tel:+5581995206232">
        <Phone size={14} /> (81) 99520-6232
      </a>
      <a className="button button-orange header-quote" href="#orcamento">
        Solicitar orçamento <ArrowUpRight size={17} />
      </a>
      <a
        className="mobile-contact"
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a JeffSat no WhatsApp (nova aba)"
      >
        <MessageCircle size={23} />
      </a>
      <details className="mobile-menu">
        <summary aria-label="Abrir menu de navegação">
          <Menu size={25} />
        </summary>
        <nav aria-label="Menu principal mobile">
          {links.map(([name, href]) => (
            <a key={href} href={href}>
              {name}
            </a>
          ))}
        </nav>
      </details>
    </header>
  );
}
