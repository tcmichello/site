import { faq } from '@/content/faq';
import { press } from '@/content/press';
import { filled, site } from '@/config/site';

/**
 * URL canônica. Enquanto `site.url` estiver PENDENTE usamos o domínio de
 * exemplo apenas para o build não quebrar — troque em src/config/site.ts.
 */
export function resolveSiteUrl(): string {
  return filled(site.url) ?? site.fallbackUrl;
}

/** `true` quando o domínio real ainda não foi informado (bloqueia indexação). */
export function isDominioPendente(): boolean {
  return filled(site.url) === null;
}

export function buildJsonLd() {
  const url = resolveSiteUrl();

  const organization = {
    '@type': 'Organization',
    '@id': `${url}#organizacao`,
    name: site.company,
    url,
    logo: `${url}/icon-512.png`,
  };

  const software = {
    '@type': 'SoftwareApplication',
    '@id': `${url}#produto`,
    name: site.product,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    inLanguage: 'pt-BR',
    description:
      'Plataforma de inteligência artificial que faz checagem de fatos em tempo real durante debates, entrevistas e discursos políticos, cruzando as afirmações com bases de dados oficiais e indicando a fonte de cada veredito.',
    publisher: { '@id': `${url}#organizacao` },
    subjectOf: press.map((item) => ({
      '@type': 'NewsArticle',
      headline: item.title,
      url: item.url,
      ...(item.date ? { datePublished: item.date } : {}),
      publisher: { '@type': 'Organization', name: item.outlet },
    })),
    // Sem `offers`: os preços ainda são PENDENTE em src/config/site.ts.
  };

  const faqPage = {
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [organization, software, faqPage],
  };
}
