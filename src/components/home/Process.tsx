"use client";

import {
  ScanLine,
  ClipboardCheck,
  Settings,
  ChartNoAxesColumnIncreasing,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    name: "ENTENDER",
    text: "Conversamos sobre sua necessidade e avaliamos o seu espaço.",
    icon: ScanLine,
  },
  {
    name: "PLANEJAR",
    text: "Definimos a solução adequada para o projeto.",
    icon: ClipboardCheck,
  },
  {
    name: "IMPLEMENTAR",
    text: "Instalamos e configuramos a solução.",
    icon: Settings,
  },
  {
    name: "ACOMPANHAR",
    text: "Orientamos você para aproveitar sua tecnologia.",
    icon: ChartNoAxesColumnIncreasing,
  },
];
export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let frame = 0;
    const updateProgress = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const next = Math.min(1, Math.max(0, (window.innerHeight - rect.top) / (rect.height + window.innerHeight)));
      setProgress(next);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section ref={sectionRef} className="section dark process">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">COMO FUNCIONA</p>
            <h2>
              Do seu objetivo
              <br />
              <strong>à solução.</strong>
            </h2>
          </div>
          <p>
            Um processo simples e transparente para você ter mais tranquilidade
            em cada etapa.
          </p>
        </div>
        <div className="process-progress" aria-hidden="true">
          <span className="process-progress-track" />
          <span className="process-progress-fill" style={{ "--process-progress": progress } as React.CSSProperties} />
          {steps.map((s, i) => <span key={s.name} className={`process-progress-node${progress >= i / (steps.length - 1) ? " is-active" : ""}`} />)}
        </div>
        <ol className="steps">
          {steps.map((s, i) => (
            <li key={s.name} className={progress >= i / (steps.length - 1) ? "is-active" : ""}>
              <div className="step-symbol">
                <span>0{i + 1}</span>
                <s.icon size={32} strokeWidth={1.4} />
              </div>
              <h3>{s.name}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
