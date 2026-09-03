import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { DevPendingNotice } from '@/components/DevPendingNotice';
import { buildJsonLd, isDominioPendente, resolveSiteUrl } from '@/lib/seo';

const siteUrl = resolveSiteUrl();

const description =
  'A Prova Real, da MobilizaX, transcreve debates, entrevistas e discursos ao vivo, cruza cada afirmação com bases de dados oficiais em milésimos de segundo e devolve o veredito com a fonte à vista.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Prova Real — checagem de fatos em tempo real | MobilizaX',
    template: '%s | Prova Real',
  },
  description,
  applicationName: 'Prova Real',
  keywords: [
    'checagem de fatos em tempo real',
    'fact-checking com inteligência artificial',
    'IA para debates eleitorais',
    'verificação de discurso político',
    'MobilizaX',
    'Prova Real',
  ],
  authors: [{ name: 'MobilizaX' }],
  creator: 'MobilizaX',
  publisher: 'MobilizaX',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    siteName: 'Prova Real · MobilizaX',
    title: 'Checagem de fatos enquanto o candidato ainda fala',
    description,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Prova Real — MobilizaX' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Checagem de fatos enquanto o candidato ainda fala',
    description,
    images: ['/og-image.png'],
  },
  icons: {
    icon: [{ url: '/icon-512.png', type: 'image/png', sizes: '512x512' }],
    apple: [{ url: '/apple-icon.png', sizes: '180x180' }],
  },
  // Enquanto o domínio definitivo não for informado, evita indexar uma URL errada.
  robots: isDominioPendente()
    ? { index: false, follow: false }
    : { index: true, follow: true, googleBot: { index: true, follow: true } },
};

export const viewport: Viewport = {
  themeColor: '#04070F',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Fontes carregadas do CDN com preconnect + display=swap.
            Para eliminar a dependência externa, baixe os arquivos .woff2 para
            /public/fonts e troque por next/font/local. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* A regra no-page-custom-font existe para o Pages Router, onde a fonte
            declarada fora de _document recarrega a cada página. Aqui estamos no
            layout raiz do App Router, que é o equivalente ao _document: a folha
            de estilo é carregada uma única vez para toda a aplicação. */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&display=swap"
        />
        <script
          type="application/ld+json"
          // JSON-LD gerado a partir do conteúdo real da página (src/lib/seo.ts)
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd()) }}
        />
      </head>
      <body>
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-field focus:bg-brand-aqua focus:px-4 focus:py-2 focus:font-display focus:font-bold focus:text-ink"
        >
          Pular para o conteúdo
        </a>
        <SiteHeader />
        <main id="conteudo">{children}</main>
        <SiteFooter />
        <DevPendingNotice />
      </body>
    </html>
  );
}
