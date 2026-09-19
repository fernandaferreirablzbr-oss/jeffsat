export const phone = "5581995206232";
export const whatsapp = `https://wa.me/${phone}`;
export const siteUrl = process.env.SITE_URL
  ? new URL(process.env.SITE_URL).origin
  : undefined;
export const solutions = [
  {
    id: "energia-solar",
    number: "01",
    verb: "GERAR",
    name: "Energia Solar",
    description: "Mais economia e independência para sua energia.",
    image: "solar",
    alt: "Painéis solares iluminados pelo pôr do sol — imagem ilustrativa",
  },
  {
    id: "seguranca",
    number: "02",
    verb: "PROTEGER",
    name: "Segurança Eletrônica",
    description: "Monitoramento e proteção para o que realmente importa.",
    image: "security",
    alt: "Câmera de segurança instalada na fachada — imagem ilustrativa",
  },
  {
    id: "conectividade",
    number: "03",
    verb: "CONECTAR",
    name: "Conectividade",
    description: "Internet estável onde você precisa.",
    image: "connectivity",
    alt: "Antena de internet em uma paisagem rural — imagem ilustrativa",
  },
  {
    id: "mobilidade",
    number: "04",
    verb: "MOVER",
    name: "Mobilidade Elétrica",
    description: "Energia para novos caminhos.",
    image: "mobility",
    alt: "Carregador de veículo elétrico instalado na parede — imagem ilustrativa",
  },
];

export function contactFor(service: string) {
  return `${whatsapp}?text=${encodeURIComponent(`Olá, JeffSat! Vim pelo site e gostaria de conhecer as soluções de ${service}.`)}`;
}
