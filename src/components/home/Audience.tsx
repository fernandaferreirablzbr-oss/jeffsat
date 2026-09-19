"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { House, Building2, ArrowRight, Check } from "lucide-react";
import { contactFor } from "@/lib/site";

const audiences = [
  {
    title: "Residências",
    icon: House,
    image: "residence",
    description:
      "Mais conforto, segurança, eficiência energética e conectividade para o dia a dia.",
    items: [
      "Mais conforto e segurança",
      "Economia de energia",
      "Conectividade estável",
      "Infraestrutura preparada para novas tecnologias",
    ],
    cta: "VER SOLUÇÕES RESIDENCIAIS",
  },
  {
    title: "Empresas",
    icon: Building2,
    image: "business",
    description:
      "Infraestrutura tecnológica para empresas que precisam operar com mais eficiência, segurança e conectividade.",
    items: [
      "Operação mais eficiente",
      "Segurança patrimonial",
      "Conectividade para equipes e operações",
      "Infraestrutura tecnológica",
    ],
    cta: "VER SOLUÇÕES EMPRESARIAIS",
  },
];
export function Audience() {
  const cardsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="para-voce" className="section audience">
      <div className="container">
        <p className="eyebrow">PARA QUEM É</p>
        <h2>
          Tecnologia para
          <br />
          <strong>cada realidade.</strong>
        </h2>
        <div className="audience-grid">
          {audiences.map((a, index) => (
            <article key={a.title} className="audience-card" ref={(card) => { cardsRef.current[index] = card; }}>
              <div className="audience-image">
                <Image
                  src={`/images/${a.image}.webp`}
                  alt={`Arquitetura contemporânea para ${a.title.toLowerCase()} — imagem ilustrativa`}
                  fill
                  sizes="(max-width: 767px) 60vw, 25vw"
                />
              </div>
              <div className="audience-content">
                <h3>
                  <a.icon size={27} strokeWidth={1.5} />
                  {a.title}
                </h3>
                <p>{a.description}</p>
                <ul>
                  {a.items.map((item) => (
                    <li key={item}>
                      <Check size={14} />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  className="button button-dark"
                  href={contactFor(a.title.toLowerCase())}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {a.cta}
                  <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
