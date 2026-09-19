# JeffSat Tecnologias

Homepage em Next.js (App Router), TypeScript e Tailwind CSS 4, baseada em `src/imagens/modelosite.png`.

## Executar

Requer Node.js 22. Instale as dependências com `npm install`.

```bash
npm run dev         # http://localhost:3000
npm run lint        # ESLint / Next.js / acessibilidade JSX
npm run typecheck   # TypeScript
npm run build       # geração estática da homepage e SEO
npm run start       # servir o build de produção na porta 3000
```

Encerre o servidor atual antes de iniciar outro na mesma porta.

## Arquitetura ativa

- `src/app/`: layout, homepage, estilos, robots e sitemap.
- `src/components/home/`: Header, Hero, Purpose, Solutions, Audience, Process, Projects, QuoteWhatsApp e Footer.
- `src/lib/site.ts`: telefone, soluções e origem pública configurável.
- `public/images/`: imagens WebP locais otimizadas por `next/image`.
- `scripts/prepare-assets.mjs`: preparação dos recortes provisórios a partir do mockup original.

A homepage e suas seções são Server Components. Apenas o orçamento é um Client Component. O menu mobile usa `details` nativo. A fonte Manrope é disponibilizada localmente por `next/font`, sem chamadas ao Google Fonts durante a visita.

Os arquivos anteriores do Vite (`src/App.tsx`, `src/main.tsx`, `src/index.css`, componentes fora de `home/`, `index.html` e `vite.config.ts`) foram preservados como referência da versão anterior; não fazem parte da aplicação Next.js nem do build atual. As credenciais preexistentes em `.env.local` não são utilizadas pela homepage.

## WhatsApp

Destino: `+55 81 99520-6232`. O formulário exige serviço, tipo de imóvel, nome e cidade. Gera uma URL `https://wa.me/5581995206232?text=...` usando `encodeURIComponent`, aberta em outra aba com `noopener,noreferrer`. Não existe envio ao servidor, cadastro, armazenamento local nem integração de CRM nesta etapa. O usuário confirma o envio dentro do WhatsApp.

## SEO e publicação

Defina `SITE_URL` com a origem HTTPS oficial em `.env.local` ou no ambiente de publicação **antes de executar o build**. Isso ativa canonical, URL do Open Graph, logo absoluta no JSON-LD, sitemap e indexação. Sem um domínio confirmado, a prévia fica `noindex` e `/robots.txt` bloqueia indexação; `/sitemap.xml` fica sem entradas. Nenhum domínio foi presumido.

Há apenas um H1; título e descrição seguem o briefing. O JSON-LD LocalBusiness usa somente nome, telefone, endereço e Instagram fornecidos. Não contém avaliações, coordenadas, horários ou certificações.

## Imagens e identidade

- A logo é a original de `src/imagens/logo.png`, convertida proporcionalmente para WebP, sem redesenho. Um pequeno suporte claro no header garante a leitura do cinza original sobre o hero escuro.
- Laranja de destaque: `#FF790A`, com versão mais escura nos textos pequenos sobre fundo claro para garantir contraste.
- As imagens de ambiente e soluções são **recortes ilustrativos de baixa resolução do mockup**, não fotografias de instalações da JeffSat. Substituir por originais de alta resolução antes da publicação definitiva.
- O portfólio identifica cada imagem como ilustrativa e não apresenta localidades ou projetos inventados.
- O bloco de localização é uma representação gráfica, não um mapa geográfico. O link abre uma busca do endereço informado no Google Maps, sem carregar SDK externo.
- Não há animações; a regra `prefers-reduced-motion` já está preparada para a próxima etapa.

## Pendências para publicação definitiva

1. Confirmar domínio oficial e configurar `SITE_URL`.
2. Fornecer imagem hero em alta resolução (idealmente ≥1920 px) e originais de paisagem, soluções e arquitetura.
3. Fornecer fotos autorizadas e informações verificadas dos projetos reais; substituir os placeholders.
4. Validar telefone, endereço e perfil do Instagram fornecidos no briefing.
5. Se disponível, fornecer versão oficial da logo para fundos escuros; não foi criada uma marca substituta.
6. Preparar imagem social de 1200 × 630 px e favicon oficial, caso desejado.

## Verificações

Build de produção, ESLint e TypeScript. QA de navegador nas larguras 375, 430, 768, 1024, 1440 e 1920 px, incluindo imagens, overflow, âncoras, H1 único, menu mobile e formulário. O teste do WhatsApp intercepta a navegação antes de chegar ao serviço: confirma destinatário e mensagem com acentos e `&`, sem enviar mensagens reais.

O CTA “Ver todos os projetos” aponta para a galeria da própria homepage nesta etapa. As soluções e os blocos residencial/empresarial levam a conversas contextualizadas no WhatsApp.
