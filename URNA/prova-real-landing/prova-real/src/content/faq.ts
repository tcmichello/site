/* =============================================================================
 * PERGUNTAS FREQUENTES
 * =============================================================================
 * As respostas abaixo só afirmam o que já é público sobre a Prova Real.
 * Quando a resposta depende de informação comercial que a MobilizaX ainda não
 * divulgou, o campo `pendente` fica `true`: nesse caso a pergunta continua na
 * página, mas a resposta encaminha para o time em vez de inventar um número.
 * ========================================================================== */

export type FaqItem = {
  q: string;
  a: string;
  /** true = resposta depende de dado comercial ainda não fornecido. */
  pendente?: boolean;
};

export const faq: ReadonlyArray<FaqItem> = [
  {
    q: 'A Prova Real consegue mesmo checar durante a transmissão?',
    a: 'Sim. A plataforma acompanha o áudio, transcreve a fala e identifica as afirmações verificáveis enquanto o discurso acontece. O cruzamento com a base de dados leva milésimos de segundo, então o veredito aparece sem esperar o fim do bloco.',
  },
  {
    q: 'De onde vêm os dados usados na verificação?',
    a: 'De documentos oficiais, bancos de dados públicos, pesquisas e conteúdos que já passaram por checagem. Toda classificação sai acompanhada da fonte consultada, para que qualquer pessoa possa conferir a origem do dado.',
  },
  {
    q: 'A ferramenta analisa o rosto ou o comportamento de quem fala?',
    a: 'Não. A MobilizaX declara publicamente que a Prova Real não usa reconhecimento facial e não analisa expressões ou linguagem corporal. A avaliação recai apenas sobre o conteúdo da declaração, confrontado com informação pública e documentada.',
  },
  {
    q: 'A plataforma toma partido ou indica em quem votar?',
    a: 'Não. A proposta declarada é ampliar o acesso do cidadão à informação confiável sem influenciar a escolha eleitoral: a saída é o dado e a fonte, não uma recomendação.',
  },
  {
    q: 'E quando a IA não encontra base para classificar a afirmação?',
    a: 'A afirmação não recebe veredito. Além de verdadeiro, falso e impreciso, existe a classificação de que falta contexto — usada quando o dado sozinho leva a uma leitura equivocada. Sem documento localizado, nada é afirmado.',
  },
  {
    q: 'Como a Prova Real se conecta à operação de uma redação?',
    a: 'Fale com o time da MobilizaX para receber o detalhamento de integração aplicado ao seu fluxo de transmissão e publicação.',
    pendente: true, // PENDENTE: descrever formatos de entrega (API, overlay, painel web, exportação)
  },
  {
    q: 'Quanto custa e como funciona a contratação?',
    a: 'Os planos são definidos conforme o porte da operação e o volume de cobertura. Peça uma proposta ao time comercial pelo formulário desta página.',
    pendente: true, // PENDENTE: preços, modelo de cobrança e prazo de contrato
  },
];
