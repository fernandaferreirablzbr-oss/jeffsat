import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { solutions } from "@/lib/site";

export function Projects() {
  return (
    <section id="projetos" className="section projects">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">PROJETOS REAIS</p>
            <h2>
              Tecnologia
              <br />
              <strong>em funcionamento.</strong>
            </h2>
            <p className="muted projects-intro">
              Soluções aplicadas em residências, empresas e propriedades. Cada
              projeto tem um objetivo e uma necessidade diferente.
            </p>
          </div>
          <a href="#galeria-projetos" className="button button-outline-orange">
            VER TODOS OS PROJETOS <ArrowRight size={17} />
          </a>
        </div>
        <p className="project-notice">
          Portfólio em preparação. As imagens abaixo são ilustrativas; fotos e
          informações dos projetos reais serão adicionadas em breve.
        </p>
        <div id="galeria-projetos" className="projects-grid">
          {solutions.map((s) => (
            <article key={s.id}>
              <div className="project-image">
                <Image
                  src={`/images/${s.image}.webp`}
                  alt={`Referência ilustrativa de ${s.name.toLowerCase()}, não representa um projeto executado`}
                  fill
                  sizes="(max-width: 767px) 44vw, 23vw"
                />
                <span>IMAGEM ILUSTRATIVA</span>
              </div>
              <h3>
                {s.name === "Mobilidade Elétrica"
                  ? "Carregamento Veicular"
                  : s.name}
              </h3>
              <p>Projeto real em breve</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
