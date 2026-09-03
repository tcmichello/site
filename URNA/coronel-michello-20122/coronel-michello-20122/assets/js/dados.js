/* ============================================================
   DADOS DO SITE — Coronel Michello 20122
   ------------------------------------------------------------
   ESTE É O ÚNICO ARQUIVO QUE A EQUIPE DE CAMPANHA PRECISA EDITAR
   NO DIA A DIA. Nada aqui exige conhecimento de programação:
   é só trocar o texto entre aspas.

   Regras de ouro:
   1. Nunca publique depoimento sem autorização por escrito da
      pessoa (nome + imagem). Enquanto o item tiver `exemplo: true`
      ele aparece com uma tarja laranja de AVISO no site.
   2. Só entre com números e conquistas que tenham fonte pública.
   3. Vídeo sem `id` aparece com moldura "aguardando publicação" —
      isso é proposital, para o site nunca ficar quebrado.
   ============================================================ */

window.DADOS = {

  /* ----------------------------------------------------------
     CONFIGURAÇÃO GERAL
     ---------------------------------------------------------- */
  config: {
    nome:        "Coronel Michello",
    nomeCompleto:"Michello Bueno Gonçalves Oliveira",
    numero:      "20122",
    partido:     "PODEMOS",
    cargo:       "Deputado Distrital",
    lema:        "Uma vida dedicada a servir",
    tema:        "Ordem sem medo",

    whatsapp:    "5561995623696",              // só números, com 55 na frente
    instagram:   "tc_michello",
    tiktok:      "tc.michello",

    // >>> CONFERIR COM O JURÍDICO <<<
    // A landing oficial (tcmichello.github.io/ordemsemmedo) informa este CNPJ de campanha.
    // O material impresso que a equipe enviou traz outro: 20.329.974/0001-20.
    // Confirme qual é o correto ANTES de publicar — é exigência do TSE.
    cnpj:        "68.462.311/0001-06",

    urlSite:     "https://tcmichello.com.br"
  },

  /* ----------------------------------------------------------
     LINKS OFICIAIS
     Todos retirados da landing oficial da campanha.
     ---------------------------------------------------------- */
  links: {
    vaquinha:  "https://tcmichello.com.br",
    filtro:    "https://tcmichello.github.io/filtro/",
    amigos:    "https://www.agregamigos.com.br/michello-bueno/link-cadastro",
    instagram: "https://www.instagram.com/tc_michello",
    tiktok:    "https://www.tiktok.com/@tc.michello",
    whatsapp:  "https://wa.me/5561995623696"
  },

  /* ----------------------------------------------------------
     FINANCIAMENTO COLETIVO
     ------------------------------------------------------------
     Os valores NÃO são atualizados sozinhos. Sempre que quiser
     refletir o total real da vaquinha, edite `arrecadado` aqui.
     Consulte o valor na plataforma QueroApoiar.
     `atualizadoEm` aparece no site, para o eleitor saber a data.
     ---------------------------------------------------------- */
  vaquinha: {
    arrecadado:   7605,
    meta:         150000,
    atualizadoEm: "20/08/2026",
    plataforma:   "QueroApoiar",
    link:         "https://tcmichello.com.br"
  },

  /* ----------------------------------------------------------
     VÍDEOS
     ------------------------------------------------------------
     tipo:  "youtube"   -> id = código depois de "watch?v="
            "instagram" -> id = null, use `link` (abre em nova aba)
            "vimeo"     -> id = número do vídeo
     Deixe `id: null` enquanto o vídeo não estiver publicado.
     `capa`: caminho da imagem (ex.: "assets/img/capas/entrevista.jpg").
             No YouTube, se deixar null, a capa é buscada automaticamente.
     ---------------------------------------------------------- */
  videos: [
    {
      tipo: "youtube",
      id: null,
      titulo: "Por que eu decidi ser candidato",
      descricao: "O convite, o chamado e a decisão de sair da farda para a Câmara Legislativa.",
      categoria: "Campanha",
      capa: null,
      link: null
    },
    {
      tipo: "youtube",
      id: null,
      titulo: "10 anos como porta-voz da PMDF",
      descricao: "O que ele aprendeu falando com a imprensa todos os dias por uma década.",
      categoria: "Trajetória",
      capa: null,
      link: null
    },
    {
      tipo: "youtube",
      id: null,
      titulo: "Negociação de crises: como se salva um refém",
      descricao: "A escola que ensinou a ouvir antes de decidir.",
      categoria: "Trajetória",
      capa: null,
      link: null
    },
    {
      tipo: "instagram",
      id: null,
      titulo: "Conversa na quadra — Asa Norte",
      descricao: "Roda de conversa com moradores sobre segurança de proximidade.",
      categoria: "Ruas",
      capa: null,
      link: "https://www.instagram.com/tc_michello/"
    },
    {
      tipo: "youtube",
      id: null,
      titulo: "Podcast Política do Bem — entrevista completa",
      descricao: "Entrevista sobre as demandas de segurança da Asa Norte e a visão de futuro para o DF.",
      categoria: "Entrevistas",
      capa: null,
      link: "https://radiocorredor.com.br/um-passarinho-me-contou/novo-comandante-do-3o-batalhao-michello-bueno-projeta-2026/"
    },
    {
      tipo: "youtube",
      id: null,
      titulo: "Bandeiras em 60 segundos",
      descricao: "As seis frentes do mandato, explicadas em um minuto.",
      categoria: "Campanha",
      capa: null,
      link: null
    }
  ],

  /* ----------------------------------------------------------
     DEPOIMENTOS
     ------------------------------------------------------------
     >>> ATENÇÃO <<<
     Os itens abaixo são MODELOS DE DIAGRAMAÇÃO, não são falas
     reais de pessoas reais. Enquanto tiverem `exemplo: true`,
     o site mostra uma tarja laranja "EXEMPLO — SUBSTITUIR".

     Para publicar de verdade:
       1. grave/colete o depoimento real;
       2. obtenha autorização de uso de nome e imagem;
       3. substitua texto, nome e papel;
       4. APAGUE a linha `exemplo: true`.
     ---------------------------------------------------------- */
  depoimentos: [
    {
      exemplo: true,
      texto: "Espaço reservado para o depoimento de um morador atendido pelo batalhão. Grave em vídeo, transcreva aqui e peça a autorização de imagem antes de publicar.",
      nome: "Nome do morador",
      papel: "Moradora — Asa Norte"
    },
    {
      exemplo: true,
      texto: "Espaço reservado para o depoimento de um colega de farda sobre a atuação dele no comando de batalhão ou na negociação de crises.",
      nome: "Nome do policial",
      papel: "Praça da PMDF — 7º BPM"
    },
    {
      exemplo: true,
      texto: "Espaço reservado para o depoimento de uma liderança comunitária ou presidente de conselho de segurança sobre o trabalho de aproximação com a comunidade.",
      nome: "Nome da liderança",
      papel: "Presidente de CONSEG"
    },
    {
      exemplo: true,
      texto: "Espaço reservado para o depoimento de um comerciante sobre a mudança na sensação de segurança da região.",
      nome: "Nome do comerciante",
      papel: "Comerciante — Cruzeiro"
    }
  ],

  /* ----------------------------------------------------------
     NA MÍDIA
     ------------------------------------------------------------
     Todos os itens abaixo são matérias reais e verificáveis,
     publicadas por veículos independentes. Acrescente novas no
     mesmo formato, sempre com link para a matéria original.
     ---------------------------------------------------------- */
  midia: [
    {
      veiculo: "Metrópoles",
      data: "Jul/2024",
      titulo: "Porta-voz da PMDF deixa a assessoria para assumir o 7º BPM",
      resumo: "Depois de quase dez anos como porta-voz da corporação, Michello Bueno passa a comandar o batalhão do Cruzeiro, Octogonal e Sudoeste. A reportagem recupera sua passagem por instrutoria de tiro, Força Nacional e negociação de crises.",
      link: "https://www.metropoles.com/distrito-federal/na-mira/porta-voz-da-pmdf-deixa-assessoria-da-corporacao-para-assumir-7o-bpm"
    },
    {
      veiculo: "GPS Brasília",
      data: "Jun/2024",
      titulo: "Porta-voz da PMDF salva idosa de incêndio na Asa Norte",
      resumo: "De folga em casa, entrou no prédio em chamas, subiu ao segundo andar tomado por fumaça e retirou uma idosa em segurança — depois voltou para procurar o gato dela.",
      link: "https://gpsbrasilia.com.br/porta-voz-da-pmdf-major-michello-bueno-salva-idosa-de-incendio-na-asa-norte/"
    },
    {
      veiculo: "Jornal de Brasília",
      data: "Jul/2024",
      titulo: "Major Michello assume o comando do 7º BPM",
      resumo: "O veículo destaca a relação de confiança construída com a imprensa do DF ao longo dos anos em que fez a ponte entre a corporação e os jornalistas.",
      link: "https://jornaldebrasilia.com.br/brasilia/major-michello-assume-comando-do-7o-bpm/"
    },
    {
      veiculo: "CABE / PMDF",
      data: "Ago/2024",
      titulo: "Comandante-geral destaca o trabalho dele na troca de comando",
      resumo: "Na cerimônia, a então comandante-geral Coronel Ana Paula Barros afirmou publicamente o quanto foi difícil tirá-lo da assessoria de comunicação e destacou a aproximação que ele construiu entre a PMDF e a imprensa.",
      link: "https://www.cabepmdf.com.br/post/presidente-e-conselheiro-da-cabe-participam-da-troca-de-comando-do-7%C2%BA-bpm"
    },
    {
      veiculo: "Rádio Corredor",
      data: "Ago/2025",
      titulo: "Novo comandante do 3º Batalhão, Michello Bueno projeta 2026",
      resumo: "Em entrevista ao podcast Política do Bem, fala sobre as demandas de segurança da Asa Norte, a experiência eleitoral de 2022 e os convites recebidos para disputar 2026.",
      link: "https://radiocorredor.com.br/um-passarinho-me-contou/novo-comandante-do-3o-batalhao-michello-bueno-projeta-2026/"
    },
    {
      veiculo: "Jornal de Brasília",
      data: "Ago/2022",
      titulo: "A nova missão do major",
      resumo: "Reportagem sobre o lançamento da primeira candidatura, com quase 25 anos de polícia e passagem pela negociação de crises.",
      link: "https://jornaldebrasilia.com.br/brasilia/a-nova-missao-do-major/"
    },
    {
      veiculo: "Câmara Legislativa do DF",
      data: "Out/2022",
      titulo: "Suplentes mais bem votados da CLDF em 2022",
      resumo: "Registro oficial da votação: 5.944 votos na primeira disputa pela Câmara Legislativa do Distrito Federal.",
      link: "https://www.cl.df.gov.br/-/conheca-os-suplentes-da-cldf-mais-bem-votados-conforme-as-coligacoes"
    },
    {
      veiculo: "Metrópoles",
      data: "Ago/2026",
      titulo: "DF tem 32 integrantes das forças de segurança candidatos a distrital",
      resumo: "Levantamento sobre a disputa de 2026 cita o coronel Michello entre os nomes da PMDF que chegaram ao posto de tenente-coronel e atuaram como chefe de imprensa e porta-voz da corporação.",
      link: "https://www.metropoles.com/distrito-federal/df-tem-32-integrantes-das-forcas-de-seguranca-candidatos-a-distrital"
    }
  ]
};
