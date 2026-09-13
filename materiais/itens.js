/* ============================================================
   BIBLIOTECA DE MATERIAIS · Coronel Michello 20122
   ------------------------------------------------------------
   ESTE É O ÚNICO ARQUIVO QUE VOCÊ PRECISA EDITAR PARA
   ACRESCENTAR MATERIAL NOVO.

   Cada item é um bloco assim:

     {
       titulo:   "Nome que aparece no card",
       descricao:"Uma linha explicando o que é e quando usar",
       categoria:"Identidade",          // veja a lista abaixo
       tipo:     "imagem",              // imagem, video, audio, pdf, link
       arquivo:  "../lockup.png",       // caminho do arquivo OU link externo
       capa:     "../lockup.webp",      // miniatura (opcional)
       formato:  "PNG · fundo transparente",
       tags:     "logo assinatura marca"  // palavras para a busca encontrar
     },

   CATEGORIAS disponíveis (escreva exatamente assim):
     Identidade · Fotos · Vídeos · Áudio · Impressos · Links

   REGRAS:
   1. Arquivo que está no repositório começa com "../"
      Exemplo: "../retrato.webp"
   2. Arquivo grande (vídeo, foto em alta, pasta inteira) NÃO sobe
      para o GitHub. Suba no Google Drive, gere um link de
      compartilhamento e cole aqui como tipo "link".
   3. Vírgula depois de cada bloco }, menos no último.
   ============================================================ */

window.MATERIAIS = [

  /* ---------------- IDENTIDADE VISUAL ---------------- */
  {
    titulo: "Assinatura oficial (lockup)",
    descricao: "Nome, cargo e número. Use sempre esta versão, sem redesenhar.",
    categoria: "Identidade", tipo: "imagem",
    arquivo: "../lockup.png", capa: "../lockup.webp",
    formato: "PNG · fundo transparente · 900px",
    tags: "logo assinatura marca nome numero lockup"
  },
  {
    titulo: "Assinatura em alta resolução",
    descricao: "Para impresso, banner, adesivo e qualquer peça grande.",
    categoria: "Identidade", tipo: "imagem",
    arquivo: "../lockup-alta.png", capa: "../lockup.webp",
    formato: "PNG · alta resolução",
    tags: "logo alta impressao banner adesivo grafica"
  },
  {
    titulo: "Ícone do site (favicon)",
    descricao: "Marca reduzida, usada na aba do navegador e no atalho do celular.",
    categoria: "Identidade", tipo: "imagem",
    arquivo: "../favicon-512.png", capa: "../favicon-512.png",
    formato: "PNG · 512×512",
    tags: "favicon icone app atalho"
  },
  {
    titulo: "Imagem de compartilhamento",
    descricao: "É a prévia que aparece quando alguém manda o link do site no WhatsApp.",
    categoria: "Identidade", tipo: "imagem",
    arquivo: "../og.jpg", capa: "../og.jpg",
    formato: "JPG · 1200×630",
    tags: "og preview whatsapp facebook compartilhar link"
  },
  {
    titulo: "QR Code da campanha",
    descricao: "Aponta para a página de apoio. Bom para folheto, camiseta e banner.",
    categoria: "Identidade", tipo: "imagem",
    arquivo: "../qrcode.png", capa: "../qrcode.png",
    formato: "PNG",
    tags: "qr code qrcode doacao apoio impresso"
  },

  /* ---------------- FOTOS ---------------- */
  {
    titulo: "Recorte sem fundo",
    descricao: "Michello de camisa escura, punho cerrado. A foto principal da campanha.",
    categoria: "Fotos", tipo: "imagem",
    arquivo: "../michello-recorte.png", capa: "../michello-recorte-sm.webp",
    formato: "PNG · fundo transparente",
    tags: "recorte png transparente foto principal camisa"
  },
  {
    titulo: "Recorte em alta resolução",
    descricao: "Mesma foto, tamanho original. Para impresso e peças grandes.",
    categoria: "Fotos", tipo: "imagem",
    arquivo: "../michello-recorte-alta.png", capa: "../michello-recorte-sm.webp",
    formato: "PNG · 1253×2220",
    tags: "recorte alta impressao grafica banner"
  },
  {
    titulo: "Retrato sorrindo",
    descricao: "Enquadramento vertical, fundo azul. Usado na seção Quem sou eu.",
    categoria: "Fotos", tipo: "imagem",
    arquivo: "../retrato.webp", capa: "../retrato.webp",
    formato: "WEBP · vertical",
    tags: "retrato foto sorrindo vertical perfil"
  },
  {
    titulo: "Foto oficial de candidato",
    descricao: "De terno, sério. É a foto que aparece na urna eletrônica.",
    categoria: "Fotos", tipo: "imagem",
    arquivo: "../urna-foto.png", capa: "../urna-foto.webp",
    formato: "PNG · 3:4",
    tags: "urna oficial terno tse candidato serio"
  },
  {
    titulo: "Foto de candidato em alta",
    descricao: "Mesma foto oficial, resolução maior.",
    categoria: "Fotos", tipo: "imagem",
    arquivo: "../urna-foto-alta.png", capa: "../urna-foto.webp",
    formato: "PNG · 900×1200",
    tags: "urna alta oficial terno impressao"
  },

  /* ---------------- VÍDEOS ---------------- */
  {
    titulo: "Assume o comando do 3º Batalhão",
    descricao: "Reportagem do DF Record sobre a troca de comando na Asa Norte.",
    categoria: "Vídeos", tipo: "video",
    arquivo: "https://www.youtube.com/watch?v=VXhEg0VH2ss", capa: "https://i.ytimg.com/vi/VXhEg0VH2ss/hqdefault.jpg",
    formato: "YouTube · DF Record · jul/2025",
    tags: "video reportagem 3 bpm asa norte comando record"
  },
  {
    titulo: "Tenente-Coronel assume o 3º BPM",
    descricao: "Cobertura do DF Alerta na solenidade de passagem de comando.",
    categoria: "Vídeos", tipo: "video",
    arquivo: "https://www.youtube.com/watch?v=6bToYPTklMc", capa: "https://i.ytimg.com/vi/6bToYPTklMc/hqdefault.jpg",
    formato: "YouTube · DF Alerta · jul/2025",
    tags: "video solenidade comando alerta tropa"
  },
  {
    titulo: "A carreira de um oficial da PMDF",
    descricao: "Entrevista sobre a profissão e a rotina da corporação.",
    categoria: "Vídeos", tipo: "video",
    arquivo: "https://www.youtube.com/watch?v=ojEXoG3gfSI", capa: "https://i.ytimg.com/vi/ojEXoG3gfSI/hqdefault.jpg",
    formato: "YouTube · 2016",
    tags: "video entrevista carreira oficial pmdf"
  },
  {
    titulo: "Como foi a escolha da carreira policial",
    descricao: "Short do Deu Liga. Bom para cortar e usar em stories.",
    categoria: "Vídeos", tipo: "video",
    arquivo: "https://www.youtube.com/shorts/G7KOGeza5qw", capa: "https://i.ytimg.com/vi/G7KOGeza5qw/hqdefault.jpg",
    formato: "YouTube Shorts · vertical · jun/2025",
    tags: "video short vertical stories carreira deu liga"
  },
  {
    titulo: "O resgate da idosa no incêndio",
    descricao: "Reportagem do Balanço Geral DF com o relato dele sobre o resgate na Asa Norte.",
    categoria: "Vídeos", tipo: "link",
    arquivo: "https://noticias.r7.com/brasilia/balanco-geral-df/video/major-da-policia-militar-conta-como-ajudou-a-salvar-idosa-de-predio-em-chamas-na-asa-norte-18062024/",
    capa: "../capa-r7-resgate.jpg",
    formato: "R7 · Balanço Geral DF · jun/2024",
    tags: "video resgate incendio idosa r7 heroi bravura"
  },
  {
    titulo: "Assume o comando do 7º Batalhão",
    descricao: "Cobertura do Cidade Alerta DF na solenidade no Ginásio do Cruzeiro.",
    categoria: "Vídeos", tipo: "link",
    arquivo: "https://noticias.r7.com/brasilia/cidade-alerta-df/video/major-michello-bueno-assume-comando-do-7-batalhao-da-pmdf-31082024/",
    capa: "../capa-r7-7bpm.jpg",
    formato: "R7 · Cidade Alerta DF · ago/2024",
    tags: "video 7 bpm cruzeiro comando r7"
  },

  /* ---------------- ÁUDIO ---------------- */
  {
    titulo: "Jingle oficial da campanha",
    descricao: "Versão completa, 2min09. Use em carro de som, stories e rádio.",
    categoria: "Áudio", tipo: "audio",
    arquivo: "../jingle-michello.mp3",
    formato: "MP3 · 128kbps · 2:09",
    tags: "jingle musica audio carro de som radio"
  },
  {
    titulo: "Bipe da urna (tecla)",
    descricao: "Efeito curto usado no treino de voto do site.",
    categoria: "Áudio", tipo: "audio",
    arquivo: "../urna-tecla.mp3",
    formato: "MP3 · efeito curto",
    tags: "som efeito urna tecla bipe"
  },
  {
    titulo: "Som de confirmação da urna",
    descricao: "Aquele som de quando o voto é confirmado.",
    categoria: "Áudio", tipo: "audio",
    arquivo: "../urna-confirma.mp3",
    formato: "MP3 · efeito curto",
    tags: "som efeito urna confirma voto"
  },

  /* ---------------- LINKS E FORMULÁRIOS ---------------- */
  {
    titulo: "Filtro oficial para stories",
    descricao: "Manda para apoiador usar no Instagram. Leva dez segundos.",
    categoria: "Links", tipo: "link",
    arquivo: "https://tcmichello.github.io/filtro/",
    formato: "Página web",
    tags: "filtro stories instagram ar realidade aumentada"
  },
  {
    titulo: "Vaquinha oficial (QueroApoiar)",
    descricao: "Página de doação homologada pelo TSE. Link para divulgar.",
    categoria: "Links", tipo: "link",
    arquivo: "https://tcmichello.com.br",
    formato: "Página web",
    tags: "doacao vaquinha dinheiro apoio queroapoiar financiamento"
  },
  {
    titulo: "Formulário de apoiadores",
    descricao: "Cadastro curto. Use para captar voluntário em evento e panfletagem.",
    categoria: "Links", tipo: "link",
    arquivo: "https://docs.google.com/forms/d/e/1FAIpQLScAlYDu-X0psfz8Ag7cbCkgTQwkevOfA6ScmFfhBeKpEHUvGw/viewform",
    formato: "Google Forms",
    tags: "formulario cadastro apoiador voluntario captacao"
  },
  {
    titulo: "Seja meu amigo (AgregAmigos)",
    descricao: "Cadastro oficial da rede de apoiadores.",
    categoria: "Links", tipo: "link",
    arquivo: "https://www.agregamigos.com.br/michello-bueno/link-cadastro",
    formato: "Página web",
    tags: "agregamigos amigo cadastro rede apoiador"
  },
  {
    titulo: "Instagram @tc_michello",
    descricao: "Perfil oficial. Mais de 200 mil seguidores.",
    categoria: "Links", tipo: "link",
    arquivo: "https://www.instagram.com/tc_michello",
    formato: "Instagram",
    tags: "instagram rede social perfil"
  },
  {
    titulo: "Site da campanha",
    descricao: "Página principal, com propostas, urna de treino e vaquinha.",
    categoria: "Links", tipo: "link",
    arquivo: "../index.html",
    formato: "Página web",
    tags: "site pagina principal home"
  }

  /* ---------------- IMPRESSOS ----------------
     Os folhetos em PDF ainda não estão aqui.
     Suba os arquivos no Google Drive, gere o link de
     compartilhamento e acrescente blocos assim:

  ,{
    titulo: "Folheto 1 · Ordem e dignidade nas ruas",
    descricao: "Frente e verso, com as 12 ações do compromisso.",
    categoria: "Impressos", tipo: "pdf",
    arquivo: "COLE_AQUI_O_LINK_DO_DRIVE",
    formato: "PDF · A4 · frente e verso",
    tags: "folheto impresso rua acolhimento panfleto"
  }
  ------------------------------------------------ */

];
