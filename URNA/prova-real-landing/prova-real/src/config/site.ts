/* =============================================================================
 * CENTRAL DE DADOS COMERCIAIS — MobilizaX / Prova Real
 * =============================================================================
 * TODOS os dados comerciais ainda desconhecidos vivem NESTE arquivo.
 * Nenhum outro arquivo do projeto contém número de telefone, e-mail, preço,
 * URL de contato ou métrica de produto escrita "na mão".
 *
 * Para localizar tudo o que falta preencher, rode:
 *
 *     grep -rn "PENDENTE" src/
 *
 * Enquanto um campo estiver com o valor `PENDENTE`, a interface simplesmente
 * NÃO renderiza aquele item (nada de dado inventado indo ao ar) e, em ambiente
 * de desenvolvimento, o aviso de <DevPendingNotice /> lista as pendências.
 * ========================================================================== */

/** Marcador único de valor não preenchido. Não altere esta string. */
export const PENDENTE = '__PENDENTE__' as const;

export type Pendente = typeof PENDENTE;
export type MaybePending<T> = T | Pendente;

/** `true` quando o valor ainda não foi preenchido pela MobilizaX. */
export function isPendente<T>(value: MaybePending<T>): value is Pendente {
  return value === PENDENTE;
}

/** Devolve o valor apenas se ele já tiver sido preenchido. */
export function filled<T>(value: MaybePending<T>): T | null {
  return isPendente(value) ? null : (value as T);
}

/* -------------------------------------------------------------------------- */
/* 1. Identidade e SEO                                                        */
/* -------------------------------------------------------------------------- */

export const site = {
  product: 'Prova Real',
  company: 'MobilizaX',
  tagline: 'Checagem de fatos em tempo real para debates, entrevistas e discursos.',

  /** PENDENTE: domínio definitivo. Usado em canonical, sitemap, robots e OG. */
  url: PENDENTE as MaybePending<string>,

  /** Fallback usado apenas para o build não quebrar enquanto `url` é PENDENTE. */
  fallbackUrl: 'https://exemplo-provareal.com.br',

  locale: 'pt_BR',
} as const;

/* -------------------------------------------------------------------------- */
/* 2. Contato comercial                                                       */
/* -------------------------------------------------------------------------- */

export const contact = {
  /** PENDENTE: e-mail comercial oficial (ex.: comercial@mobilizax.com.br). */
  email: PENDENTE as MaybePending<string>,

  /** PENDENTE: telefone comercial em formato E.164 (ex.: +5561999999999). */
  phone: PENDENTE as MaybePending<string>,

  /** PENDENTE: número do WhatsApp comercial, só dígitos (ex.: 5561999999999). */
  whatsapp: PENDENTE as MaybePending<string>,

  /** PENDENTE: cidade/UF da sede, exibida no rodapé. */
  address: PENDENTE as MaybePending<string>,

  /** PENDENTE: CNPJ, exigido no rodapé para páginas com captação de leads. */
  cnpj: PENDENTE as MaybePending<string>,
} as const;

/* -------------------------------------------------------------------------- */
/* 3. Redes sociais                                                           */
/* -------------------------------------------------------------------------- */

export const social: ReadonlyArray<{ label: string; href: MaybePending<string> }> = [
  { label: 'Instagram', href: PENDENTE }, // PENDENTE: @ oficial da MobilizaX
  { label: 'LinkedIn', href: PENDENTE }, // PENDENTE: página da empresa
  { label: 'YouTube', href: PENDENTE }, // PENDENTE: canal (opcional)
];

/* -------------------------------------------------------------------------- */
/* 4. Formulário de contato                                                   */
/* -------------------------------------------------------------------------- */

export const leadForm = {
  /**
   * PENDENTE: endpoint que receberá os leads (CRM, RD Station, HubSpot,
   * Formspree, rota interna /api/leads...). Aceita POST com JSON.
   * Enquanto estiver PENDENTE o formulário fica visível, porém desabilitado,
   * com aviso claro em vez de fingir que enviou.
   */
  endpoint: PENDENTE as MaybePending<string>,

  /** PENDENTE: e-mail que recebe cópia dos leads, se o endpoint exigir. */
  notifyTo: PENDENTE as MaybePending<string>,
} as const;

/* -------------------------------------------------------------------------- */
/* 5. Analytics e mídia paga                                                  */
/* -------------------------------------------------------------------------- */

export const analytics = {
  /** PENDENTE: ID do Google Analytics 4 (G-XXXXXXX). */
  ga4: PENDENTE as MaybePending<string>,
  /** PENDENTE: ID do Meta Pixel, para os anúncios de Instagram. */
  metaPixel: PENDENTE as MaybePending<string>,
  /** PENDENTE: ID de conversão do Google Ads (AW-XXXXXXX). */
  googleAds: PENDENTE as MaybePending<string>,
} as const;

/* -------------------------------------------------------------------------- */
/* 6. Provas de produto ainda não divulgadas publicamente                     */
/* -------------------------------------------------------------------------- */

/**
 * Números de performance. Só existe divulgação pública de que o cruzamento
 * acontece "em milésimos de segundo" — qualquer número exato precisa vir da
 * MobilizaX. Nada aqui é estimado ou inventado.
 */
export const metrics: ReadonlyArray<{
  id: string;
  label: string;
  value: MaybePending<string>;
  note: string;
}> = [
  {
    id: 'latencia',
    label: 'Latência média do veredito',
    value: PENDENTE, // PENDENTE: latência medida em produção (ex.: "380 ms")
    note: 'Medida da fala transcrita até o veredito na tela.',
  },
  {
    id: 'bases',
    label: 'Bases de dados conectadas',
    value: PENDENTE, // PENDENTE: quantidade de fontes oficiais integradas
    note: 'Documentos oficiais, bancos públicos e checagens anteriores.',
  },
  {
    id: 'idiomas',
    label: 'Cobertura de transcrição',
    value: PENDENTE, // PENDENTE: ex.: "Português (BR)"
    note: 'Idiomas e sotaques suportados na transcrição ao vivo.',
  },
];

/** PENDENTE: URL do vídeo de demonstração real da ferramenta (MP4/YouTube). */
export const demoVideoUrl: MaybePending<string> = PENDENTE;

/** PENDENTE: veículos/clientes que já usam a ferramenta (logos + nome). */
export const clientLogos: ReadonlyArray<{ name: string; logoSrc: string }> = [];

/** PENDENTE: planos e preços comerciais. Enquanto vazio, a seção não é renderizada. */
export const pricingPlans: ReadonlyArray<{
  name: string;
  price: MaybePending<string>;
  description: string;
  features: string[];
}> = [];

/* -------------------------------------------------------------------------- */
/* 7. Documentos legais                                                       */
/* -------------------------------------------------------------------------- */

export const legal = {
  /** PENDENTE: URL da Política de Privacidade (obrigatória — LGPD). */
  privacyUrl: PENDENTE as MaybePending<string>,
  /** PENDENTE: URL dos Termos de Uso. */
  termsUrl: PENDENTE as MaybePending<string>,
} as const;

/* -------------------------------------------------------------------------- */
/* 8. Navegação                                                               */
/* -------------------------------------------------------------------------- */

export const navLinks = [
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#vereditos', label: 'Vereditos' },
  { href: '#limites', label: 'Limites' },
  { href: '#para-quem', label: 'Para quem é' },
  { href: '#imprensa', label: 'Na imprensa' },
  { href: '#duvidas', label: 'Dúvidas' },
] as const;

/* -------------------------------------------------------------------------- */
/* 9. Inventário de pendências (usado pelo aviso de desenvolvimento)          */
/* -------------------------------------------------------------------------- */

export function listarPendencias(): string[] {
  const pendencias: string[] = [];
  const check = (label: string, value: MaybePending<unknown>) => {
    if (isPendente(value)) pendencias.push(label);
  };

  check('site.url — domínio final', site.url);
  check('contact.email', contact.email);
  check('contact.phone', contact.phone);
  check('contact.whatsapp', contact.whatsapp);
  check('contact.address', contact.address);
  check('contact.cnpj', contact.cnpj);
  check('leadForm.endpoint', leadForm.endpoint);
  check('legal.privacyUrl', legal.privacyUrl);
  check('legal.termsUrl', legal.termsUrl);
  check('demoVideoUrl', demoVideoUrl);
  check('analytics.ga4', analytics.ga4);
  check('analytics.metaPixel', analytics.metaPixel);
  check('analytics.googleAds', analytics.googleAds);

  social.forEach((s) => check(`social.${s.label}`, s.href));
  metrics.forEach((m) => check(`metrics.${m.id} — ${m.label}`, m.value));

  if (clientLogos.length === 0) pendencias.push('clientLogos — nenhum cliente cadastrado');
  if (pricingPlans.length === 0) pendencias.push('pricingPlans — nenhum plano cadastrado');

  return pendencias;
}
