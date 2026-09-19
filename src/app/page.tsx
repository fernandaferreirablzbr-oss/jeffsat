import { Hero } from "@/components/home/Hero";
import { Purpose } from "@/components/home/Purpose";
import { Solutions } from "@/components/home/Solutions";
import { Audience } from "@/components/home/Audience";
import { Process } from "@/components/home/Process";
import { Projects } from "@/components/home/Projects";
import { QuoteWhatsApp } from "@/components/home/QuoteWhatsApp";
import { Footer } from "@/components/home/Footer";
import { siteUrl } from "@/lib/site";

const business = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "JeffSat Tecnologias",
  description:
    "Soluções em energia solar, segurança eletrônica, conectividade e mobilidade elétrica.",
  telephone: "+5581995206232",
  address: {
    "@type": "PostalAddress",
    streetAddress: "R. Cel. Austriclínio, 656, Centro",
    addressLocality: "Palmares",
    addressRegion: "PE",
    addressCountry: "BR",
  },
  sameAs: ["https://www.instagram.com/jeffsat.tecnologias/"],
  ...(siteUrl
    ? {
        url: siteUrl,
        logo: `${siteUrl}/images/logo.webp`,
        image: `${siteUrl}/images/logo.webp`,
      }
    : {}),
};
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(business).replace(/</g, "\\u003c"),
        }}
      />
      <main id="conteudo">
        <Hero />
        <Purpose />
        <Solutions />
        <Audience />
        <Process />
        <Projects />
        <QuoteWhatsApp />
      </main>
      <Footer />
    </>
  );
}
