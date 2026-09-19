"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  MessageCircle,
  Sun,
  ShieldCheck,
  Wifi,
  Zap,
} from "lucide-react";
import { solutions, whatsapp } from "@/lib/site";

const icons = [Sun, ShieldCheck, Wifi, Zap];
export function QuoteWhatsApp() {
  const [service, setService] = useState("");
  const [place, setPlace] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [status, setStatus] = useState("");
  function onServiceSelected(value: string) { setService(value); }
  function onAudienceSelected(value: string) { setPlace(value); }
  function onQuoteStarted() {}
  function onWhatsAppQuoteClicked() {}
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const submittedName = String(data.get("name") ?? "").trim();
    const submittedCity = String(data.get("city") ?? "").trim();
    if (!service || !place || !submittedName || !submittedCity) {
      setStatus("Preencha seu nome e sua cidade para continuar.");
      return;
    }
    onWhatsAppQuoteClicked();
    const message = `Olá, JeffSat! Vim pelo site. Meu nome é ${submittedName} e gostaria de solicitar um orçamento de ${service} para ${place} em ${submittedCity}.`;
    window.open(
      `${whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setStatus(
      "Sua solicitação está pronta no WhatsApp. Envie a mensagem para iniciar a conversa.",
    );
  }
  return (
    <section id="orcamento" className="section dark quote">
      <div className="container quote-grid">
        <div className="quote-copy">
          <p className="eyebrow">VAMOS CONVERSAR?</p>
          <h2>
            Seu próximo projeto
            <br />
            <strong>começa aqui.</strong>
          </h2>
          <p>
            Conte o que você precisa e fale diretamente com a equipe JeffSat.
          </p>
          <div className="quote-contact">
            <MessageCircle size={24} />
            <div>
              <strong>Uma conversa. Novas possibilidades.</strong>
              <span>Direto com a JeffSat, pelo WhatsApp.</span>
            </div>
          </div>
        </div>
        <form onSubmit={submit} className="quote-form" onFocus={onQuoteStarted}>
          <div className="quote-progress" aria-label="Progresso do orçamento">
            {[service, place, name.trim(), city.trim()].map((value, i, values) => (
              <span key={i} className={value ? "is-complete" : i === values.findIndex((item) => !item) ? "is-current" : ""} />
            ))}
          </div>
          <fieldset>
            <legend>
              <span>01</span> O que você precisa?
            </legend>
            <div className="service-options">
              {solutions.map((s, i) => {
                const Icon = icons[i];
                return (
                  <button className={`choice${service === s.name ? " is-selected" : ""}`} key={s.id} type="button" aria-pressed={service === s.name} onClick={() => onServiceSelected(s.name)}>
                    <Icon size={18} />
                    <span>{s.name}</span>
                    {service === s.name && <span className="choice-check" aria-hidden="true">✓</span>}
                  </button>
                );
              })}
            </div>
          </fieldset>
          <fieldset className={`quote-step${service ? " is-visible" : ""}`} aria-hidden={!service}>
            <legend>
              <span>02</span> Para onde?
            </legend>
            <div className="place-options">
              {["Residência", "Empresa", "Outro"].map((p) => (
                <button className={`choice${place === p ? " is-selected" : ""}`} key={p} type="button" aria-pressed={place === p} onClick={() => onAudienceSelected(p)}>
                  <span>{p}</span>
                  {place === p && <span className="choice-check" aria-hidden="true">✓</span>}
                </button>
              ))}
            </div>
          </fieldset>
          <div className={`form-fields quote-step${place ? " is-visible" : ""}`} aria-hidden={!place}>
            <label htmlFor="quote-name">
              <span className="field-label">
                <span>03</span> Nome
              </span>
              <input
                id="quote-name"
                name="name"
                autoComplete="name"
                placeholder="Como podemos chamar você?"
                required
                maxLength={100}
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </label>
            <label htmlFor="quote-city">
              <span className="field-label">
                <span>04</span> Cidade
              </span>
              <input
                id="quote-city"
                name="city"
                autoComplete="address-level2"
                placeholder="Sua cidade"
                required
                maxLength={100}
                value={city}
                onChange={(event) => setCity(event.target.value)}
              />
            </label>
          </div>
          <button className="button button-orange quote-submit" type="submit" disabled={!service || !place || !name.trim() || !city.trim()}>
            <MessageCircle size={20} />
            SOLICITAR ORÇAMENTO NO WHATSAPP <ArrowRight size={18} />
          </button>
          <p className="form-note">
            Seus dados são usados apenas para montar a mensagem. Nada é enviado
            antes de você confirmar no WhatsApp.
          </p>
          <p role="status" className="form-status">
            {status}
          </p>
        </form>
      </div>
    </section>
  );
}
