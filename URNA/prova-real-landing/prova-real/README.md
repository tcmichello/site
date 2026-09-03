# Prova Real — landing page (MobilizaX)

Landing page de conversão para a **Prova Real**, plataforma de checagem de fatos em tempo real
desenvolvida pela MobilizaX.

## Stack

| Camada | Escolha |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack) |
| Runtime | React 19 |
| Linguagem | TypeScript em modo `strict` |
| Estilo | Tailwind CSS 3.4 com tokens da marca |
| Dependências de produção | apenas `next`, `react`, `react-dom` |

Sem biblioteca de componentes, sem biblioteca de animação, sem cliente HTTP. Todo o movimento é
CSS puro declarado em `tailwind.config.ts`.

## Comandos

```bash
npm install
npm run dev        # desenvolvimento em http://localhost:3000
npm run typecheck  # tsc --noEmit
npm run lint       # eslint (flat config)
npm run build      # build de produção
npm start          # sobe o build
npm test           # typecheck + lint + build em sequência
```

## O que precisa ser preenchido

Todos os dados comerciais ainda desconhecidos estão **em um único arquivo**:

```
src/config/site.ts
```

Para listar tudo de uma vez:

```bash
grep -rn "PENDENTE" src/
```

Enquanto um campo tiver o valor `PENDENTE`:

- o item **não é renderizado** para o visitante (nada de dado inventado no ar);
- o formulário fica desabilitado com aviso explícito, em vez de simular um envio;
- o `robots.txt` bloqueia a indexação enquanto o domínio final não for informado;
- em `npm run dev`, um painel no rodapé lista todas as pendências.

### Lista de pendências

| Grupo | Campos |
| --- | --- |
| Identidade | `site.url` (domínio final — usado em canonical, sitemap, robots e OG) |
| Contato | `contact.email`, `contact.phone`, `contact.whatsapp`, `contact.address`, `contact.cnpj` |
| Redes | `social.Instagram`, `social.LinkedIn`, `social.YouTube` |
| Formulário | `leadForm.endpoint`, `leadForm.notifyTo` |
| Analytics | `analytics.ga4`, `analytics.metaPixel`, `analytics.googleAds` |
| Produto | `metrics.latencia`, `metrics.bases`, `metrics.idiomas`, `demoVideoUrl` |
| Comercial | `clientLogos`, `pricingPlans` |
| Jurídico | `legal.privacyUrl`, `legal.termsUrl` |

Há ainda duas respostas do FAQ marcadas com `pendente: true` em `src/content/faq.ts`
(integração com a redação e preços): elas hoje encaminham ao time comercial.

## Ativando o formulário

1. Preencha `leadForm.endpoint` em `src/config/site.ts` com a URL que recebe os leads
   (CRM, RD Station, HubSpot, Formspree ou uma rota interna).
2. O formulário faz `POST` com JSON contendo: `nome`, `organizacao`, `email`, `telefone`,
   `perfil`, `mensagem`, `consentimento`.

## Ativando analytics

Os IDs já estão previstos em `analytics` (`src/config/site.ts`), mas **nenhum script de
rastreamento foi incluído** — assim a página não carrega terceiros sem consentimento. Ao
preencher os IDs, adicione os scripts com `next/script` (`strategy="afterInteractive"`) no
`src/app/layout.tsx` e conecte ao seu banner de consentimento (LGPD).

## Fontes

As fontes (Archivo + IBM Plex Sans + IBM Plex Mono) são carregadas via Google Fonts com
`preconnect` e `display=swap`. Para eliminar a dependência externa e ganhar alguns pontos de
LCP, baixe os `.woff2` para `public/fonts/` e troque o `<link>` do `layout.tsx` por
`next/font/local`.

## Conteúdo: o que é real e o que é ilustrativo

- **Real e verificável:** descrição do funcionamento, classificações de veredito, limites
  declarados (sem reconhecimento facial, sem leitura de linguagem corporal, sem indicação de
  voto), citação do CEO e as cinco reportagens em `src/content/press.ts` — todas com link para
  a íntegra.
- **Explicitamente ilustrativo:** as falas do cartão de demonstração no topo
  (`demoStatements` em `src/content/product.ts`). São fictícias, não citam pessoas reais e o
  componente exibe o selo "Simulação" mais uma legenda declarando isso. **Não substitua por
  falas reais sem uma checagem real correspondente.**
- **Nenhuma métrica estimada.** Onde não existe número público, a página usa a formulação
  divulgada pela empresa ("milésimos de segundo") em vez de inventar um valor.

## Identidade visual

Os tokens de cor foram extraídos por amostragem de pixel da logo oficial:

| Token | Hex |
| --- | --- |
| `ink` (fundo) | `#04070F` |
| `brand.blue` | `#00ADF9` |
| `brand.aqua` | `#14E9E1` |
| `brand.green` | `#58E45A` |
| `brand.lime` | `#D4FC4C` |

As cores de veredito (`verdict.true/false/unclear/context`) existem porque são o vocabulário
do próprio produto, não decoração.

Assets gerados a partir da logo, em `public/`: `mobilizax-mark.png` (marca com fundo
transparente), `mobilizax-logo.png` (lockup completo), `icon-512.png`, `apple-icon.png` e
`og-image.png` (1200×630).

## Verificações já executadas

Rodadas com Chromium headless contra o build de produção.

### Build e código

- `tsc --noEmit` — sem erros
- `eslint .` — sem erros e sem avisos
- `next build` — 4 rotas, todas pré-renderizadas como estáticas

### Layout

- Sem overflow horizontal em 360 / 390 / 768 / 1440 px (`scrollWidth === clientWidth`)
- `cumulative-layout-shift` = 0
- Um único `H1`, `H2` por seção, `H3` nos itens

### Acessibilidade — Lighthouse 100/100

- Todas as imagens com `alt`, todos os botões com nome acessível, `lang="pt-BR"`
- Skip link, ordem de foco coerente, foco visível
- Accordion opera por teclado (`aria-expanded` alterna com Enter)
- `prefers-reduced-motion` exibe o estado final da demonstração sem animar
- **Contraste**: todo texto passa no WCAG AA. Nenhuma cor de texto usa modificador
  de opacidade — as duas escalas são sólidas e medidas: `paper.muted` (#94A9C2, mínimo
  7.23:1) e `paper.dim` (#7A8DA6, mínimo 5.14:1). O texto do botão primário sobre o
  ponto mais escuro do gradiente dá 8.01:1.

### Performance

| Métrica | Valor |
| --- | --- |
| Lighthouse Performance | **93** |
| Total Blocking Time | 0 ms |
| Cumulative Layout Shift | 0 |
| Largest Contentful Paint | 2.5 s |
| Peso total | 239 KB em 16 requisições (149 KB de JS) |
| Recursos bloqueando renderização | nenhum |

A animação de digitação usa um único `setInterval` e re-renderiza apenas o nó de texto,
não a sequência inteira.

### Dois resultados esperados no relatório

- **SEO 69** — causado por `is-crawlable: 0`, que é intencional: o `robots.txt` bloqueia
  indexação enquanto `site.url` estiver `PENDENTE`. Sobe ao preencher o domínio.
- **Erro 403 no console** — apenas no ambiente de build, cujo proxy bloqueia
  `fonts.gstatic.com`. Não ocorre em produção.

