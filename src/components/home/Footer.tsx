import Image from "next/image";
import {
  MapPin,
  Phone,
  MessageCircle,
  Instagram,
  ArrowUpRight,
} from "lucide-react";
import { solutions, whatsapp, contactFor } from "@/lib/site";

const maps =
  "https://maps.app.goo.gl/4xg9Hi3HzsSY3f3N7";
export function Footer() {
  return (
    <>
      <footer id="contato" className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a href="#inicio" aria-label="JeffSat Tecnologias — início">
              <Image
                src="/images/logo.webp"
                alt="JeffSat Tecnologias"
                width={200}
                height={65}
              />
            </a>
            <p>Tecnologia para gerar, proteger, conectar e mover.</p>
          </div>
          <div>
            <h2>SOLUÇÕES</h2>
            <ul>
              {solutions.map((s) => (
                <li key={s.id}>
                  <a
                    href={contactFor(s.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>EMPRESA</h2>
            <ul>
              <li>
                <a href="#sobre">Sobre</a>
              </li>
              <li>
                <a href="#projetos">Projetos</a>
              </li>
              <li>
                <a href="#orcamento">Contato</a>
              </li>
            </ul>
          </div>
          <div className="footer-contact">
            <h2>CONTATO</h2>
            <address>
              <a href={maps} target="_blank" rel="noopener noreferrer">
                <MapPin size={17} />
                <span>
                  R. Cel. Austriclínio, 656
                  <br />
                  Centro, Palmares - PE
                </span>
              </a>
              <a href="tel:+5581995206232">
                <Phone size={16} />
                (81) 99520-6232
              </a>
              <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={17} />
                Falar no WhatsApp
              </a>
              <a
                href="https://www.instagram.com/jeffsat.tecnologias/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={17} />
                @jeffsat.tecnologias
              </a>
            </address>
          </div>
          <a
            className="map-link"
            href={maps}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="map-preview">
              <MapPin size={30} />
              <span>PALMARES · PE</span>
            </div>
            <span>
              VER NO GOOGLE MAPS <ArrowUpRight size={14} />
            </span>
          </a>
        </div>
        <div className="container footer-bottom">
          <p>
            © {new Date().getFullYear()} JeffSat Tecnologias. Todos os direitos
            reservados.
          </p>
          <a href="#inicio">Voltar ao início ↑</a>
        </div>
      </footer>
      <a
        className="floating-whatsapp"
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar com a JeffSat no WhatsApp (abre em nova aba)"
      >
        <MessageCircle size={25} />
      </a>
    </>
  );
}
