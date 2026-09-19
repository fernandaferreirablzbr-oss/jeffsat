import Image from "next/image";

export function Purpose() {
  return (
    <section
      className="section purpose purpose-standalone"
      aria-labelledby="purpose-title"
      id="sobre"
    >
      <div className="container purpose-grid">
        <div className="purpose-copy">
          <p className="eyebrow purpose-eyebrow">NOSSO PROPÓSITO</p>
          <span className="purpose-rule" aria-hidden="true" />
          <h2 id="purpose-title">
            <span className="purpose-line">A tecnologia está</span>
            <span className="purpose-line">em tudo.</span>
            <strong>
              <span className="purpose-line">Nós conectamos</span>
              <span className="purpose-line">as partes.</span>
            </strong>
          </h2>
          <p className="muted">
            A JeffSat Tecnologias reúne soluções em energia, segurança e
            conectividade para tornar residências e empresas mais eficientes,
            seguras e preparadas para o que vem pela frente.
          </p>
        </div>
        <div className="purpose-image">
          <Image
            src="/images/purpose.webp"
            alt="Paisagem de colinas ao entardecer, representando um futuro mais tranquilo"
            fill
            sizes="(max-width: 767px) 90vw, 34vw"
          />
        </div>
        <div className="manifesto">
          <p>
            Mais tecnologia
            <br />
            para um futuro
            <br />
            mais tranquilo.
          </p>
          <span className="orange-rule" />
          <p className="muted">
            Da energia que você produz à conexão que você precisa. Tudo em um só
            parceiro.
          </p>
        </div>
      </div>
    </section>
  );
}
