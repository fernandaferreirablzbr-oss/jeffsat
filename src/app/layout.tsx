import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});
const title =
  "JeffSat Tecnologias | Energia Solar e Tecnologia em Palmares - PE";
const description =
  "Soluções em energia solar, segurança eletrônica, conectividade e tecnologia para residências e empresas em Palmares - PE. Solicite seu orçamento.";
export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title,
  description,
  alternates: siteUrl ? { canonical: "/" } : undefined,
  openGraph: {
    title,
    description,
    locale: "pt_BR",
    type: "website",
    siteName: "JeffSat Tecnologias",
    ...(siteUrl
      ? {
          url: siteUrl,
          images: [
            {
              url: "/images/logo.webp",
              width: 640,
              height: 210,
              alt: "JeffSat Tecnologias",
            },
          ],
        }
      : {}),
  },
  twitter: { card: "summary", title, description },
  robots: { index: Boolean(siteUrl), follow: Boolean(siteUrl) },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={manrope.variable}>
      <body>
        <a className="skip-link" href="#conteudo">
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
