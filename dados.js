/* ============================================================
   DADOS DO SITE, Coronel Michello 20122
   ------------------------------------------------------------
   ESTE É O ÚNICO ARQUIVO QUE A EQUIPE DE CAMPANHA PRECISA EDITAR
   NO DIA A DIA. Nada aqui exige conhecimento de programação:
   é só trocar o texto entre aspas.

   Regras de ouro:
   1. Nunca publique depoimento sem autorização por escrito da
      pessoa (nome + imagem). Enquanto o item tiver `exemplo: true`
      ele aparece com uma tarja laranja de AVISO no site.
   2. Só entre com números e conquistas que tenham fonte pública.
   3. Vídeo sem `id` aparece com moldura "aguardando publicação", isso é proposital, para o site nunca ficar quebrado.
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
    slogan:      "Ordem sem medo",
    tema:        "Ordem sem medo",

    whatsapp:    "5561995623696",              // só números, com 55 na frente
    instagram:   "tc_michello",

    // >>> CONFERIR COM O JURÍDICO <<<
    // A landing oficial (tcmichello.github.io/ordemsemmedo) informa este CNPJ de campanha.
    // O material impresso que a equipe enviou traz outro: 20.329.974/0001-20.
    // Confirme qual é o correto ANTES de publicar, é exigência do TSE.
    cnpj:        "20.329.974/0001-20",

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
    whatsapp:  "https://wa.me/5561995623696",
    formulario:"https://docs.google.com/forms/d/e/1FAIpQLScAlYDu-X0psfz8Ag7cbCkgTQwkevOfA6ScmFfhBeKpEHUvGw/viewform"
  },

  /* ----------------------------------------------------------
     FINANCIAMENTO COLETIVO
     ------------------------------------------------------------
     O valor NÃO é atualizado sozinho. Consulte o total na
     plataforma QueroApoiar e edite `arrecadado` aqui.

     Escreva só números: sete mil e seiscentos vira 7600.
     Nada de "R$", nada de ponto, nada de vírgula.

     `doadores` é a quantidade de pessoas que já doaram. Aparece
     ao lado do valor e é a prova social mais forte da seção.

     A barra de progresso e a porcentagem se recalculam sozinhas.
     O site não mostra data de atualização, então ninguém vê que
     o número está velho. Combine uma rotina mesmo assim.
     ---------------------------------------------------------- */
  vaquinha: {
    arrecadado:   9765,
    doadores:     59,
    meta:         150000,
    link:         "https://tcmichello.com.br"
  },


  /* ----------------------------------------------------------
     PROPOSTAS
     Conteúdo integral dos 5 folhetos oficiais "Ordem sem medo".
     Cada compromisso tem diagnóstico, frase de campanha e as
     12 ações concretas. Não invente ação: tudo aqui saiu do
     material impresso aprovado pela campanha.
     ---------------------------------------------------------- */
  propostas: [
    {
      n: 1,
      titulo: "Ordem e dignidade nas ruas",
      resumo: "Acolher, tratar e reinserir, com ordem, regra clara e resultado medido.",
      frase: "Rua não é lugar de morar. E também não pode virar terra de ninguém.",
      diagnostico: "O primeiro censo distrital contou 2.938 pessoas em situação de rua em 2022. O levantamento referente a 2025 chegou a 3.521. A nova política de acolhimento entrou em vigor em 2026 e ninguém está cobrando se ela funciona.",
      acoes: [
        ["Lei de Metas de Reinserção","o GDF passa a publicar a cada três meses quantas pessoas saíram da rua, por região administrativa."],
        ["Porta de entrada 24 horas","vaga de acolhimento imediata, sem agendamento, nas regiões de maior concentração."],
        ["Triplicar as vagas","em comunidades terapêuticas conveniadas, incluindo vagas femininas e para mães com filhos."],
        ["Contrato de Reinserção","auxílio de transição vinculado a tratamento, capacitação e documentação."],
        ["Protocolo único de zeladoria","aviso prévio, oferta de vaga antes da retirada e guarda dos pertences por 30 dias."],
        ["Acolhimento que a pessoa aceita","vagas para casais, para quem tem animal de estimação e com guarda segura de pertences."],
        ["Documento na mão","mutirão permanente de RG, CPF e carteira de trabalho para quem está em acolhimento."],
        ["Passe de Retorno","reencontro familiar com passagem custeada e acompanhamento por seis meses."],
        ["Casa de Transição","moradia assistida por até 18 meses para quem concluiu o tratamento e já está trabalhando."],
        ["Saúde que vai até a pessoa","mais equipes de Consultório na Rua e CAPS AD abertos 24 horas."],
        ["Espaço Higiene","banho, barbearia e lavanderia social junto aos restaurantes comunitários."],
        ["Ronda da Dignidade","mutirão noturno mensal, com vaga garantida antes de qualquer abordagem."]
      ]
    },
    {
      n: 2,
      titulo: "Espaços públicos seguros",
      resumo: "Luz, câmera e zeladoria são política de segurança.",
      frase: "Onde tem luz e câmera, o crime não trabalha.",
      diagnostico: "O DF tem cerca de 324 mil luminárias sob um contrato de concessão de 30 anos, com meta de 100% de LED. Contrato longo sem fiscal permanente vira promessa. E o roubo a pedestre voltou a subir em 2026.",
      acoes: [
        ["Lei do Mapa da Luz","painel público com todo ponto apagado, prazo de reparo e responsável pelo conserto."],
        ["Fila decidida por risco","prioridade de luz e câmera onde há registro de crime, e não onde há pressão política."],
        ["Luz onde a rede não chega","iluminação de becos, vielas e áreas em processo de regularização."],
        ["Câmeras em praças e parques","com integração obrigatória à central. Câmera que não conversa com o sistema é enfeite."],
        ["Câmera Amiga","incentivo para morador e comércio integrarem suas câmeras à rede pública de segurança."],
        ["Padrão mínimo de iluminação","em paradas, passarelas, passagens subterrâneas e no entorno de escolas."],
        ["Praça Segura","prevenção pelo desenho urbano em toda praça nova ou reformada: visibilidade e nenhum esconderijo."],
        ["Botão de emergência","totens SOS ligados à central em terminais, estações e praças centrais."],
        ["Postes solares","solução rápida para trechos rurais, ciclovias e ligações sem rede elétrica."],
        ["Poste identificado","QR Code em cada poste: você fotografa e a reclamação abre com protocolo."],
        ["Vistoria noturna mensal","fiscalização do contrato de iluminação com relatório público por região."],
        ["Canal Acende DF","você manda a foto do ponto escuro e é avisado quando ele acender."]
      ]
    },
    {
      n: 3,
      titulo: "Vizinhos protegidos",
      resumo: "O programa mais querido do DF precisa virar lei.",
      frase: "Ninguém protege melhor a sua rua do que quem mora nela.",
      diagnostico: "A Rede de Vizinhos Protegidos existe desde 2017, funciona e nunca virou lei distrital. Hoje até a placa da esquina é paga por vaquinha entre vizinhos. Trocou o comando, o programa pode acabar.",
      acoes: [
        ["Lei da Rede de Vizinhos Protegidos","o programa vira política pública permanente do DF, com orçamento e meta de expansão."],
        ["Kit pago pelo poder público","placa e sinalização não podem depender de vaquinha entre moradores."],
        ["Meta: as 35 regiões","levar o programa a todas as regiões administrativas, urbanas e rurais."],
        ["Alerta comunitário oficial","canal verificado ligado à central, para acabar com boato em grupo informal."],
        ["CONSEGs fortalecidos","calendário de reuniões, ata pública e resposta obrigatória dos órgãos."],
        ["Guardião Rural em lei","proteção para núcleos rurais, chácaras e produtores do DF."],
        ["Comércio Protegido","rede de alerta e câmeras integradas para o comerciante e o feirante."],
        ["Condomínio Protegido","treinamento de síndicos e porteiros e canal direto com o batalhão."],
        ["Vizinho Idoso Protegido","cadastro, visita periódica e botão de emergência para quem mora sozinho."],
        ["Educação contra golpes","oficinas em escolas e centros de convivência sobre golpe por Pix e falso funcionário de banco."],
        ["Dado aberto por quadra","indicadores criminais publicados todo mês, por setor, para a própria comunidade acompanhar."],
        ["Caravana Sua Quadra Protegida","uma quadra por semana, com a meta de mil novos grupos formados."]
      ]
    },
    {
      n: 4,
      titulo: "Preços justos",
      resumo: "Transparência, fiscal na rua e multa cobrada.",
      frase: "Você não pode pagar mais caro só porque ninguém está fiscalizando.",
      diagnostico: "A irregularidade mais autuada nos postos do DF não é o valor cobrado: é a forma de divulgar o preço, com a diferença escondida entre à vista e cartão. Isso é competência distrital, dá para resolver aqui.",
      acoes: [
        ["Lei do Preço na Cara","preço à vista, preço no cartão e regra de fidelidade no mesmo tamanho e no mesmo lugar."],
        ["Painel Distrital de Preços","aplicativo oficial comparando combustível, gás e cesta básica por região administrativa."],
        ["Preço por quilo e por litro","obrigatório na gôndola e também nos aplicativos de entrega."],
        ["Lei da Embalagem Honesta","reduziu a quantidade mantendo o preço? Avisa em destaque no ponto de venda por seis meses."],
        ["Bomba e balança aferidas","laboratório móvel de metrologia e operações conjuntas de fiscalização."],
        ["Multa que volta para fiscalizar","o produto das multas ao consumidor financia mais fiscalização e educação."],
        ["Procon perto de casa","postos de atendimento nas regiões administrativas e unidade itinerante em feiras."],
        ["Caça ao cartel","representação formal sempre que houver alinhamento suspeito de preços no DF."],
        ["Fiscal do Repasse","redução de imposto só vale se chegar ao preço final do consumidor."],
        ["Escola sem surpresa","transparência no reajuste da mensalidade e na lista de material."],
        ["Feirão do devedor","mutirões de renegociação descentralizados, nas regiões e não só no centro."],
        ["Observatório do Preço Justo","pesquisa mensal de preços por região, publicada pelo mandato."]
      ]
    },
    {
      n: 5,
      titulo: "Esporte e futuro",
      resumo: "Esporte aqui não é lazer: é prevenção.",
      frase: "Todo jovem dentro do time é um jovem a menos na mão do crime.",
      diagnostico: "São 12 Centros Olímpicos e Paralímpicos para 35 regiões administrativas, com pouco mais de 12 mil vagas. Fora deles sobra quadra de bairro sem luz, sem manutenção e sem professor.",
      acoes: [
        ["Esporte à Noite","quadra aberta e iluminada das 18h às 23h, com monitor, nas regiões de maior violência juvenil."],
        ["Quadra Aberta","escolas públicas com quadra funcionando aos sábados e domingos, com responsável."],
        ["Novos Centros Olímpicos","começando pelas regiões com maior população jovem e nenhuma unidade."],
        ["Meta anual de quadras","reformadas, cobertas e iluminadas, com prazo, placa e data de entrega."],
        ["Bolsa Atleta de Base","apoio para quem está começando, e não só para quem já chegou."],
        ["Mais incentivo ao esporte","ampliação da lei distrital, com reserva mínima para projetos na periferia."],
        ["Tatame Cidadão","judô, boxe, jiu-jitsu, karatê e capoeira em escolas e centros comunitários."],
        ["Bolsa para o professor","apoio a quem toca projeto social de bairro. Quadra sem professor vira quadra vazia."],
        ["Passe do Atleta","transporte garantido para treino e competição. Ninguém desiste por causa da passagem."],
        ["Esporte + Trabalho","prioridade em aprendizagem e primeiro emprego para quem tem frequência no projeto."],
        ["Jogos das Cidades","olimpíada distrital anual entre as 35 regiões administrativas."],
        ["Padrinho do Time","policiais e bombeiros voluntários como mentores e técnicos nos projetos de bairro."]
      ]
    }
  ],

  /* ----------------------------------------------------------
     REGIÕES
     `comandou` = true quando a região está sob um dos batalhões
     que ele comandou (7º BPM ou 3º BPM).
     ---------------------------------------------------------- */
  regioes: [
    { nome:"Asa Norte", comandou:true, batalhao:"3º BPM", desde:"julho de 2025",
      frase:"Eu comandei o batalhão daqui.",
      texto:"Ocupações irregulares de moradores de rua, furtos e roubos em áreas mal iluminadas, manuseio inadequado do lixo e espaços de convivência degradados. O comércio local não pode ficar desamparado.",
      feito:"Assumi o comando do 3º Batalhão em julho de 2025, responsável pela Asa Norte, Noroeste e SAAN. Foi também aqui que, de folga em junho de 2024, entrei num prédio em chamas e ajudei a retirar uma senhora de 91 anos.",
      fonte:{ texto:"Portal da PMDF", url:"https://portal.pm.df.gov.br/?post_type=noticias-institucion&p=15748" } },

    { nome:"Asa Sul", comandou:false,
      frase:"A entrequadra é sua.",
      texto:"Nove da noite não deveria ser tarde demais para caminhar na própria quadra. Pilotis livres, comércio local vivo e gente caminhando de dia e de noite sem medo.",
      feito:null },

    { nome:"Cruzeiro", comandou:true, batalhao:"7º BPM", desde:"agosto de 2024",
      frase:"Comunidade de verdade merece proteção.",
      texto:"Do HFA ao Cruzeiro Center, o Cruzeiro é comunidade de verdade. O que falta não é promessa: é segurança nos espaços comuns e comerciais.",
      feito:"Comandei o 7º Batalhão, responsável por Cruzeiro, Sudoeste e Octogonal, de agosto de 2024 a julho de 2025. Quando saí, moradores e comerciantes se mobilizaram publicamente pedindo que eu ficasse.",
      fonte:{ texto:"Jornal de Brasília", url:"https://jornaldebrasilia.com.br/brasilia/comunidade-reage-contra-saida-de-tenente-coronel-do-comando-do-7o-batalhao-da-pmdf/" } },

    { nome:"Sudoeste", comandou:true, batalhao:"7º BPM", desde:"agosto de 2024",
      frase:"Quem volta tarde conhece essa rotina.",
      texto:"Procurar vaga, caminhar mais e ainda se preocupar com a segurança até chegar em casa. Segurança também é fazer esse trajeto sem medo.",
      feito:"Respondi pela segurança do Sudoeste à frente do 7º BPM. A saída do comando virou notícia local justamente porque a comunidade não queria a troca: o movimento ganhou nome próprio, \"Fica, Michello\".",
      fonte:{ texto:"Radar Sudoeste", url:"https://radarsudoeste.com.br/fica-michello-comunidade-lamenta-saida-de-comandante-do-7o-bpm/" } },

    { nome:"Octogonal", comandou:true, batalhao:"7º BPM", desde:"agosto de 2024",
      frase:"A segurança não pode terminar no condomínio.",
      texto:"Dentro do Octogonal, a vizinhança se conhece e se protege. Do lado de fora, é dever do poder público cuidar, prevenir e estar presente.",
      feito:"A Octogonal esteve sob o 7º Batalhão durante todo o meu comando, de agosto de 2024 a julho de 2025, ao lado do Cruzeiro e do Sudoeste.",
      fonte:{ texto:"Jornal de Brasília", url:"https://jornaldebrasilia.com.br/brasilia/major-michello-assume-comando-do-7o-bpm/" } },

    { nome:"Noroeste", comandou:true, batalhao:"3º BPM", desde:"julho de 2025",
      frase:"Devolver o Burle Marx às famílias.",
      texto:"Famílias e crianças ocupando o parque, espaço público cuidado e presença permanente do poder público. Espaço público cuidado é espaço público mais seguro.",
      feito:"O Noroeste está sob o 3º Batalhão, que comando desde julho de 2025. O levantamento local do ano registrou a queda das ocorrências no bairro, que quase zerou os registros em 2025.",
      fonte:{ texto:"DF Noroeste", url:"https://dfnoroeste.com.br/bairro-mais-seguro-noroeste-quase-zera-ocorrencias-em-2025/" } },

    { nome:"Lago Norte", comandou:false,
      frase:"Do Taquari à Península, a mesma regra.",
      texto:"Ocupação com critério, drenagem que aguente a chuva, iluminação nas vias e presença na orla. Ordem também é prevenção.",
      feito:null },

    { nome:"Lago Sul", comandou:false,
      frase:"Sua casa é sua fortaleza. A rua também precisa ser.",
      texto:"Comércio seguro à noite, calçadas cuidadas, iluminação e presença para quem vive e circula pela região.",
      feito:null },

    { nome:"Vila Planalto", comandou:false,
      frase:"História não combina com medo.",
      texto:"Lugar histórico e acolhedor merece vida em paz, sem o medo que a ocupação irregular de moradores em situação de rua tem trazido para quem vive aqui.",
      feito:null }
  ],

  /* texto usado quando a região não esteve sob o comando dele */
  semComando: "Não comandei o batalhão daqui, e não vou dizer que comandei. O que eu trago é o método que funcionou nas seis regiões onde comandei: presença fixa, dado aberto por quadra e resposta com prazo.",

  /* a promessa de escala, exibida em toda região */
  ampliar: "Seis regiões foram a minha responsabilidade direta como comandante. O Distrito Federal tem 35. É esse método que eu quero levar para todas elas na Câmara Legislativa.",


  /* dado do 2º Censo Distrital da População em Situação de Rua */
  dadoRua: {
    destaque:"1 em cada 4",
    texto:"pessoas em situação de rua do DF está no Plano Piloto, número que cresceu quase <b>20% em três anos</b>.",
    fonte:"2º Censo Distrital da População em Situação de Rua, IPEDF, 2025."
  },

  /* ----------------------------------------------------------
     VÍDEOS
     ------------------------------------------------------------
     tipo:  "youtube"   -> id = código depois de "watch?v="
            "instagram" -> id = null, use `link` (abre em nova aba)
            "vimeo"     -> id = número do vídeo
     Deixe `id: null` enquanto o vídeo não estiver publicado.
     `capa`: caminho da imagem (ex.: "capa-entrevista.jpg").
             No YouTube, se deixar null, a capa é buscada automaticamente.
     ---------------------------------------------------------- */
  videos: [
    {
      tipo: "externo",
      id: null,
      titulo: "Ele conta como ajudou a salvar uma idosa de um prédio em chamas",
      descricao: "Reportagem do Balanço Geral DF sobre o resgate na Asa Norte, com o relato dele.",
      veiculo: "R7 · Balanço Geral DF",
      data: "Jun/2024",
      categoria: "Na TV",
      capa: "capa-r7-resgate.jpg",
      link: "https://noticias.r7.com/brasilia/balanco-geral-df/video/major-da-policia-militar-conta-como-ajudou-a-salvar-idosa-de-predio-em-chamas-na-asa-norte-18062024/"
    },
    {
      tipo: "externo",
      id: null,
      titulo: "Assume o comando do 7º Batalhão da PMDF",
      descricao: "Cobertura do Cidade Alerta DF na solenidade no Ginásio do Cruzeiro.",
      veiculo: "R7 · Cidade Alerta DF",
      data: "Ago/2024",
      categoria: "Na TV",
      capa: "capa-r7-7bpm.jpg",
      link: "https://noticias.r7.com/brasilia/cidade-alerta-df/video/major-michello-bueno-assume-comando-do-7-batalhao-da-pmdf-31082024/"
    },
    {
      tipo: "youtube",
      id: "VXhEg0VH2ss",
      titulo: "Assume o comando do 3º Batalhão, na Asa Norte",
      descricao: "Reportagem sobre a troca de comando e os desafios de segurança da região.",
      veiculo: "DF Record",
      data: "Jul/2025",
      categoria: "Comando",
      destaque: true,
      capa: null,
      link: "https://www.youtube.com/watch?v=VXhEg0VH2ss"
    },
    {
      tipo: "youtube",
      id: "6bToYPTklMc",
      titulo: "Tenente-Coronel Michello Bueno assume o 3º BPM",
      descricao: "Cobertura da solenidade de passagem de comando, com a tropa e os veteranos.",
      veiculo: "DF Alerta",
      data: "Jul/2025",
      categoria: "Comando",
      capa: null,
      link: "https://www.youtube.com/watch?v=6bToYPTklMc"
    },
    {
      tipo: "youtube",
      id: "ojEXoG3gfSI",
      titulo: "A carreira de um oficial da Polícia Militar do DF",
      descricao: "Entrevista sobre a profissão, a rotina da corporação e o que espera quem entra na PMDF.",
      veiculo: "Entrevista",
      data: "2016",
      categoria: "Trajetória",
      capa: null,
      link: "https://www.youtube.com/watch?v=ojEXoG3gfSI"
    },
    {
      tipo: "youtube",
      id: "G7KOGeza5qw",
      titulo: "Como foi a escolha da carreira policial",
      descricao: "Ele conta o momento em que decidiu vestir a farda.",
      veiculo: "Deu Liga",
      data: "Jun/2025",
      categoria: "Trajetória",
      vertical: true,
      capa: null,
      link: "https://www.youtube.com/shorts/G7KOGeza5qw"
    },
    {
      tipo: "externo",
      id: null,
      titulo: "Podcast Política do Bem, entrevista completa",
      descricao: "Com Dedé Roriz: demandas da Asa Norte, estratégias do batalhão e a projeção para 2026.",
      veiculo: "Rádio Corredor",
      data: "Ago/2025",
      categoria: "Entrevistas",
      capa: "capa-podcast.jpg",
      link: "https://radiocorredor.com.br/um-passarinho-me-contou/novo-comandante-do-3o-batalhao-michello-bueno-projeta-2026/"
    },
    {
      tipo: "instagram",
      id: null,
      titulo: "Bastidores do batalhão",
      descricao: "Reel publicado no perfil dele durante o comando do 7º BPM.",
      veiculo: "@tc_michello",
      data: "2024",
      categoria: "Nas redes",
      vertical: true,
      capa: "capa-instagram.jpg",
      link: "https://www.instagram.com/tc_michello/reel/DC61h0wA6AE/"
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
      veiculo: "GPS Brasília",
      data: "Jun/2024",
      titulo: "Porta-voz da PMDF salva idosa de incêndio na Asa Norte",
      resumo: "De folga em casa, entrou no prédio em chamas, subiu ao segundo andar tomado por fumaça e retirou uma idosa em segurança, depois voltou para procurar o gato dela.",
      link: "https://gpsbrasilia.com.br/porta-voz-da-pmdf-major-michello-bueno-salva-idosa-de-incendio-na-asa-norte/"
    },
    {
      veiculo: "R7 · Balanço Geral DF",
      data: "Jun/2024",
      titulo: "Major da PM conta como ajudou a salvar idosa de prédio em chamas na Asa Norte",
      resumo: "Reportagem em vídeo do Balanço Geral DF, com o relato dele sobre a entrada no prédio e o resgate.",
      link: "https://noticias.r7.com/brasilia/balanco-geral-df/video/major-da-policia-militar-conta-como-ajudou-a-salvar-idosa-de-predio-em-chamas-na-asa-norte-18062024/"
    },
    {
      veiculo: "Jornal Regional",
      data: "2026",
      titulo: "Ex-porta-voz da PM-DF é candidato a distrital com foco em segurança pública e ordem urbana",
      resumo: "Reportagem sobre a candidatura de 2026 e as bandeiras de segurança e ordem urbana.",
      link: "https://jornalregional.com.br/post/220000/ex-porta-voz-da-pm-df-e-candidato-a-distrital-com-foco-em-seguranca-publica-e-ordem-urbana"
    },
    {
      veiculo: "Radar Sudoeste",
      data: "2025",
      titulo: "Fica, Michello: comunidade lamenta a saída do comandante do 7º BPM",
      resumo: "Moradores do Sudoeste, Cruzeiro e Octogonal se mobilizam contra a transferência dele do batalhão.",
      link: "https://radarsudoeste.com.br/fica-michello-comunidade-lamenta-saida-de-comandante-do-7o-bpm/"
    },
    {
      veiculo: "Jornal de Brasília",
      data: "2025",
      titulo: "Comunidade reage contra a saída do tenente-coronel do comando do 7º Batalhão",
      resumo: "A repercussão da mudança de comando entre moradores e comerciantes das regiões atendidas.",
      link: "https://jornaldebrasilia.com.br/brasilia/comunidade-reage-contra-saida-de-tenente-coronel-do-comando-do-7o-batalhao-da-pmdf/"
    },
    {
      veiculo: "DF Noroeste",
      data: "2025",
      titulo: "Bairro mais seguro: Noroeste quase zera ocorrências em 2025",
      resumo: "Levantamento sobre a queda de ocorrências no Noroeste, região sob responsabilidade do 3º BPM.",
      link: "https://dfnoroeste.com.br/bairro-mais-seguro-noroeste-quase-zera-ocorrencias-em-2025/"
    },
    {
      veiculo: "Só Notícia Boa",
      data: "Jun/2024",
      titulo: "Policial de folga salva idosa de 91 anos em incêndio em Brasília",
      resumo: "O resgate na Asa Norte contado em detalhe, do alerta do incêndio à retirada da moradora.",
      link: "https://www.sonoticiaboa.com.br/2024/06/20/policial-folga-salva-idosa-91-anos-incendio-brasilia"
    },
    {
      veiculo: "Plural",
      data: "2026",
      titulo: "Perfil do candidato Michello Bueno Gonçalves Oliveira",
      resumo: "Ficha pública com dados da candidatura de 2026 à Câmara Legislativa do Distrito Federal.",
      link: "https://www.plural.jor.br/michello-bueno-goncalves-oliveira"
    },
    {
      veiculo: "Metrópoles",
      data: "Jul/2024",
      titulo: "Porta-voz da PMDF deixa a assessoria para assumir o 7º BPM",
      resumo: "Depois de quase dez anos como porta-voz da corporação, Michello Bueno passa a comandar o batalhão do Cruzeiro, Octogonal e Sudoeste. A reportagem recupera sua passagem por instrutoria de tiro, Força Nacional e negociação de crises.",
      link: "https://www.metropoles.com/distrito-federal/na-mira/porta-voz-da-pmdf-deixa-assessoria-da-corporacao-para-assumir-7o-bpm"
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
