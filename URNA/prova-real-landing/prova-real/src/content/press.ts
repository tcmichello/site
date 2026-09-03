/* =============================================================================
 * COBERTURA DE IMPRENSA — links reais, publicados e verificáveis.
 * =============================================================================
 * Não adicione item nesta lista sem URL pública funcionando: esta seção é a
 * prova social real da página. `date` fica vazia quando a publicação não expõe
 * a data com clareza — melhor omitir do que estimar.
 * ========================================================================== */

export type PressItem = {
  outlet: string;
  title: string;
  url: string;
  /** Formato ISO (AAAA-MM-DD) ou string vazia quando não confirmada. */
  date: string;
  featured?: boolean;
};

export const press: ReadonlyArray<PressItem> = [
  {
    outlet: 'Diário do Poder',
    title: 'Plataforma aposta em IA para combater desinformação nos debates eleitorais',
    url: 'https://diariodopoder.com.br/brasil-e-regioes/e01-brasil/plataforma-aposta-em-ia-para-combater-desinformacao-nos-debates-eleitorais',
    date: '2026-07-16',
    featured: true,
  },
  {
    outlet: 'Conectado ao Poder',
    title: 'Eleições: ferramenta usa IA para checar veracidade de falas em debates políticos',
    url: 'https://conectadoaopoder.com.br/eleicoes-ferramenta-usa-ia-para-checar-veracidade-de-falas-em-debates-politicos/',
    date: '',
  },
  {
    outlet: 'Capital Política',
    title: 'Eleições: ferramenta usa IA para checar veracidade de falas em debates políticos',
    url: 'https://capitalpolitica.com.br/eleicoes-ferramenta-usa-ia-para-checar-veracidade-de-falas-em-debates-politicos/',
    date: '',
  },
  {
    outlet: 'Capital MT',
    title: 'Eleições: ferramenta usa IA para checar veracidade de falas em debates políticos',
    url: 'https://capitalmt.com.br/2026/07/17/eleicoes-ferramenta-usa-ia-para-checar-veracidade-de-falas-em-debates-politicos/',
    date: '2026-07-17',
  },
  {
    outlet: 'MT Política',
    title: 'Eleições: ferramenta usa IA para checar veracidade de falas em debates políticos',
    url: 'https://mtpolitica.com/eleicoes-ferramenta-usa-ia-para-checar-veracidade-de-falas-em-debates-politicos/',
    date: '',
  },
];

/**
 * Declaração pública do CEO da MobilizaX, Renato Monteiro, ao Diário do Poder
 * em 16/07/2026. Trecho curto e atribuído — a íntegra está na reportagem.
 */
export const ceoQuote = {
  text: 'Queremos usar a inteligência artificial para dar mais transparência ao debate público',
  name: 'Renato Monteiro',
  role: 'CEO e arquiteto de software sênior da MobilizaX',
  sourceOutlet: 'Diário do Poder',
  sourceUrl:
    'https://diariodopoder.com.br/brasil-e-regioes/e01-brasil/plataforma-aposta-em-ia-para-combater-desinformacao-nos-debates-eleitorais',
} as const;

export const leadership = [
  { name: 'Renato Monteiro', role: 'CEO · arquiteto de software sênior' },
  { name: 'Douglas Ferreira da Silva', role: 'CTO de Produtos · arquiteto de software' },
] as const;
