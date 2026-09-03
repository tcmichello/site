/* =============================================================================
 * CONTEÚDO DE PRODUTO
 * =============================================================================
 * Todo o conteúdo descritivo abaixo é derivado do material oficial da MobilizaX
 * (relatório "Prova Real" v2) e da cobertura de imprensa listada em press.ts.
 * Nada aqui é métrica estimada ou benefício inventado.
 * ========================================================================== */

export type VerdictKey = 'true' | 'unclear' | 'false' | 'context';

export const verdictLabels: Record<VerdictKey, string> = {
  true: 'Verdadeiro',
  unclear: 'Impreciso',
  false: 'Falso',
  context: 'Falta contexto',
};

/* -------------------------------------------------------------------------- */
/* Pipeline — esta é uma sequência real, por isso a numeração é informativa    */
/* -------------------------------------------------------------------------- */

export const pipeline = [
  {
    step: '01',
    title: 'Escuta e transcreve',
    body: 'A plataforma acompanha o áudio da fala e transcreve o conteúdo automaticamente, sem esperar o fim do bloco.',
    detail: 'Debates, entrevistas e discursos',
  },
  {
    step: '02',
    title: 'Isola o que é verificável',
    body: 'A IA separa o que é opinião do que é afirmação checável: indicadores econômicos, números, obras públicas e promessas de governo.',
    detail: 'Opinião fica de fora',
  },
  {
    step: '03',
    title: 'Confronta com a base oficial',
    body: 'Cada afirmação é cruzada, em milésimos de segundo, com documentos oficiais, bancos de dados públicos, pesquisas e checagens já publicadas.',
    detail: 'Cruzamento em milésimos de segundo',
  },
  {
    step: '04',
    title: 'Devolve o veredito com a fonte',
    body: 'O resultado sai classificado e sempre acompanhado do documento que o sustenta — quem lê pode conferir a origem do dado.',
    detail: 'Fonte sempre à vista',
  },
] as const;

/* -------------------------------------------------------------------------- */
/* Classificações possíveis                                                   */
/* -------------------------------------------------------------------------- */

export const verdicts: ReadonlyArray<{
  key: VerdictKey;
  label: string;
  body: string;
}> = [
  {
    key: 'true',
    label: verdictLabels.true,
    body: 'A afirmação confere com o dado oficial encontrado na base consultada.',
  },
  {
    key: 'unclear',
    label: verdictLabels.unclear,
    body: 'O dado existe, mas foi apresentado com valor, período ou recorte que não corresponde à fonte.',
  },
  {
    key: 'false',
    label: verdictLabels.false,
    body: 'A afirmação é contrariada pelo documento oficial consultado.',
  },
  {
    key: 'context',
    label: verdictLabels.context,
    body: 'O número está correto, mas isolado ele induz a leitura errada — falta a informação que completa o quadro.',
  },
];

/* -------------------------------------------------------------------------- */
/* Limites declarados publicamente pela MobilizaX                             */
/* -------------------------------------------------------------------------- */

export const limits = [
  {
    title: 'Não usa reconhecimento facial',
    body: 'A análise parte do que foi dito, não de quem disse. Nenhuma imagem de rosto entra na avaliação.',
  },
  {
    title: 'Não lê expressões nem linguagem corporal',
    body: 'A plataforma não tenta deduzir mentira a partir de gestos, tom ou comportamento — esse tipo de inferência não é evidência.',
  },
  {
    title: 'Não sugere voto',
    body: 'O objetivo declarado pela empresa é dar mais elementos ao eleitor, não indicar candidato. A saída é o dado e a fonte.',
  },
  {
    title: 'Não emite veredito sem documento',
    body: 'Toda classificação vem amarrada à fonte que a sustenta. Sem documento localizado, a afirmação não é classificada.',
  },
] as const;

/* -------------------------------------------------------------------------- */
/* Públicos                                                                    */
/* -------------------------------------------------------------------------- */

export const audiences = [
  {
    id: 'imprensa',
    kicker: 'Redações e veículos',
    title: 'A checagem entra no ar junto com a transmissão',
    body: 'A equipe deixa de correr atrás do dado depois do debate. A afirmação chega já transcrita, classificada e com a fonte anexada, pronta para virar tarja, post ou matéria.',
    points: ['Apuração ao vivo com fonte anexada', 'Menos tempo entre a fala e a publicação', 'Registro do que foi dito para reportagem posterior'],
  },
  {
    id: 'analistas',
    kicker: 'Analistas e comunicação política',
    title: 'O discurso do adversário, verificado em tempo real',
    body: 'Acompanhe afirmação por afirmação durante a transmissão e saiba na hora o que se sustenta em documento — e o que vai render correção no dia seguinte.',
    points: ['Monitoramento contínuo de falas públicas', 'Base documental para resposta rápida', 'Histórico do que já foi afirmado'],
  },
  {
    id: 'eleitor',
    kicker: 'Eleitores e sociedade civil',
    title: 'Dá para conferir sem esperar o dia seguinte',
    body: 'Quem está assistindo vê a verificação acontecer junto com o debate, com a fonte à mostra, e decide com base em evidência em vez de boato.',
    points: ['Veredito com origem do dado visível', 'Sem opinião editorial no meio', 'Acompanhamento durante a transmissão'],
  },
] as const;

/* -------------------------------------------------------------------------- */
/* Exemplos ILUSTRATIVOS usados na demonstração do topo da página             */
/* -------------------------------------------------------------------------- */

/**
 * ATENÇÃO: falas fictícias, criadas apenas para demonstrar a interface.
 * Não são checagens reais, não citam candidatos reais e não nomeiam órgãos,
 * bases ou documentos reais — `source` e `base` são descrições genéricas de
 * exemplo. O componente que as exibe é rotulado como simulação. Não substitua
 * por falas reais sem uma checagem real correspondente.
 */
export const demoStatements: ReadonlyArray<{
  speaker: string;
  quote: string;
  verdict: VerdictKey;
  source: string;
  base: string;
  note: string;
}> = [
  {
    speaker: 'Candidato (exemplo)',
    quote: 'Nós dobramos o número de vagas em creche nos últimos quatro anos.',
    verdict: 'unclear',
    source: 'Base pública de matrículas',
    base: 'Série histórica de matrículas',
    note: 'O crescimento existe no período citado, mas está abaixo do dobro.',
  },
  {
    speaker: 'Candidata (exemplo)',
    quote: 'A obra do contorno viário foi entregue dentro do prazo previsto.',
    verdict: 'context',
    source: 'Portal de transparência da obra',
    base: 'Contrato original e aditivos',
    note: 'O prazo cumprido é o do último aditivo, não o do contrato original.',
  },
  {
    speaker: 'Candidato (exemplo)',
    quote: 'O desemprego caiu pelo terceiro trimestre seguido no estado.',
    verdict: 'true',
    source: 'Pesquisa oficial de emprego',
    base: 'Série trimestral de desocupação',
    note: 'A série trimestral confirma três quedas consecutivas.',
  },
];
