import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { solutions, contactFor } from "@/lib/site";

export function Solutions() {
  return (
    <section id="solucoes" className="section dark">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">NOSSAS SOLUÇÕES</p>
            <h2>
              Um ecossistema.
              <br />
              <strong>Quatro possibilidades.</strong>
            </h2>
          </div>
          <p>
            Diferentes tecnologias, a mesma visão: levar mais eficiência,
            segurança e liberdade para o seu dia a dia.
          </p>
        </div>
        <div className="solutions-grid">
          {solutions.map((s) => (
            <article className="solution-card" id={s.id} key={s.id}>
              <div className="solution-image">
                <Image
                  src={`/images/${s.image}.webp`}
                  alt={s.alt}
                  fill
                  sizes="(max-width: 599px) 90vw, (max-width: 1023px) 45vw, 23vw"
                />
              </div>
              <div className="solution-content">
                <div className="solution-label">
                  <span>{s.verb}</span>
                  <span>{s.number}</span>
                </div>
                <h3>{s.name}</h3>
                <p>{s.description}</p>
                <a
                  className="button button-outline"
                  href={contactFor(s.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Conhecer solução de ${s.name} pelo WhatsApp`}
                >
                  CONHECER SOLUÇÃO <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="solutions-progress" aria-hidden="true">
          <span />
        </div>
      </div>
    </section>
  );
}
