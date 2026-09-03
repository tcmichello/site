/* ============================================================
   CORONEL MICHELLO 20122 — app.js
   Sem dependências externas. Tudo vanilla.
   ============================================================ */
(function () {
  "use strict";

  var D = window.DADOS || {};
  var CFG = D.config || {};
  var NUMERO = CFG.numero || "20122";
  var $ = function (s, ctx) { return (ctx || document).querySelector(s); };
  var $$ = function (s, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(s)); };
  var reduzido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ==========================================================
     1. CARREGAMENTO
     ========================================================== */
  window.addEventListener("load", function () {
    document.body.classList.add("carregado");
  });
  // fallback: se load demorar (fontes), libera em 1.2s
  setTimeout(function () { document.body.classList.add("carregado"); }, 1200);

  /* ==========================================================
     2. NAVEGAÇÃO
     ========================================================== */
  var nav = $("#nav");
  var btnTopo = $("#btnTopo");

  function aoRolar() {
    var y = window.scrollY;
    nav.classList.toggle("fixo", y > 80);
    if (btnTopo) btnTopo.hidden = y < 700;
  }
  window.addEventListener("scroll", aoRolar, { passive: true });
  aoRolar();

  if (btnTopo) {
    btnTopo.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reduzido ? "auto" : "smooth" });
    });
  }

  // menu mobile
  var btnMenu = $("#btnMenu"), menuMobile = $("#menuMobile");
  if (btnMenu && menuMobile) {
    btnMenu.addEventListener("click", function () {
      var aberto = btnMenu.getAttribute("aria-expanded") === "true";
      btnMenu.setAttribute("aria-expanded", String(!aberto));
      btnMenu.setAttribute("aria-label", aberto ? "Abrir menu" : "Fechar menu");
      menuMobile.hidden = aberto;
    });
    $$("a", menuMobile).forEach(function (a) {
      a.addEventListener("click", function () {
        btnMenu.setAttribute("aria-expanded", "false");
        menuMobile.hidden = true;
      });
    });
  }

  // link ativo conforme a seção visível
  var secoes = $$("main section[id]");
  var linksNav = $$(".nav__links a");
  if ("IntersectionObserver" in window && secoes.length) {
    var obsSec = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) {
        if (!e.isIntersecting) return;
        var id = e.target.id;
        linksNav.forEach(function (a) {
          a.classList.toggle("ativo", a.getAttribute("href") === "#" + id);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    secoes.forEach(function (s) { obsSec.observe(s); });
  }

  /* ==========================================================
     3. REVELAR AO ROLAR
     ========================================================== */
  function ligarReveal(raiz) {
    var alvos = $$("[data-reveal]", raiz || document).filter(function (el) {
      return !el.classList.contains("visivel");
    });
    if (reduzido || !("IntersectionObserver" in window)) {
      alvos.forEach(function (el) { el.classList.add("visivel"); });
      return;
    }
    var obs = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e, i) {
        if (!e.isIntersecting) return;
        var atraso = Math.min(i * 70, 280);
        setTimeout(function () { e.target.classList.add("visivel"); }, atraso);
        obs.unobserve(e.target);
      });
    }, { rootMargin: "0px 0px -12% 0px", threshold: 0.08 });
    alvos.forEach(function (el) { obs.observe(el); });
  }
  ligarReveal();

  /* ==========================================================
     4. CONTADORES
     ========================================================== */
  $$("[data-contador]").forEach(function (el) {
    var alvo = parseFloat(el.getAttribute("data-contador"));
    var sufixo = el.getAttribute("data-sufixo") || "";
    if (reduzido || !("IntersectionObserver" in window)) {
      el.textContent = alvo + sufixo;
      return;
    }
    var obs = new IntersectionObserver(function (ents) {
      ents.forEach(function (e) {
        if (!e.isIntersecting) return;
        obs.unobserve(el);
        var ini = null, dur = 1200;
        function passo(t) {
          if (!ini) ini = t;
          var p = Math.min((t - ini) / dur, 1);
          var suave = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(alvo * suave) + sufixo;
          if (p < 1) requestAnimationFrame(passo);
        }
        requestAnimationFrame(passo);
      });
    }, { threshold: 0.4 });
    obs.observe(el);
  });

  /* ==========================================================
     5. URNA — elemento-assinatura
     ========================================================== */
  (function urna() {
    var raiz = $("#urnaApp");
    if (!raiz) return;

    var caixas   = $$(".digito", raiz);
    var aviso    = $("#urnaAviso");
    var ficha    = $("#urnaFicha");
    var foto     = $("#urnaFoto");
    var sucesso  = $("#urnaSucesso");
    var btnAuto  = $("#urnaAuto");
    var btnShare = $("#urnaCompartilhar");
    var teclaConfirma = $(".tecla--confirma", raiz);

    var digitos = "";
    var branco = false;
    var somLigado = false;
    var ctxAudio = null;

    // botão de som injetado (mantém o HTML enxuto)
    var dica = $(".urna__dica", raiz);
    var btnSom = document.createElement("button");
    btnSom.type = "button";
    btnSom.className = "mini";
    btnSom.style.marginLeft = ".7rem";
    btnSom.textContent = "Ativar som da urna";
    btnSom.setAttribute("aria-pressed", "false");
    btnSom.addEventListener("click", function () {
      somLigado = !somLigado;
      btnSom.textContent = somLigado ? "Desativar som da urna" : "Ativar som da urna";
      btnSom.setAttribute("aria-pressed", String(somLigado));
      if (somLigado) bip(880, 0.06);
    });
    if (dica) dica.appendChild(btnSom);

    function bip(freq, dur) {
      if (!somLigado) return;
      try {
        ctxAudio = ctxAudio || new (window.AudioContext || window.webkitAudioContext)();
        var o = ctxAudio.createOscillator(), g = ctxAudio.createGain();
        o.type = "square"; o.frequency.value = freq;
        g.gain.setValueAtTime(0.045, ctxAudio.currentTime);
        g.gain.exponentialRampToValueAtTime(0.0001, ctxAudio.currentTime + dur);
        o.connect(g); g.connect(ctxAudio.destination);
        o.start(); o.stop(ctxAudio.currentTime + dur);
      } catch (e) { /* sem áudio, sem problema */ }
    }

    function pintar() {
      caixas.forEach(function (c, i) {
        var v = digitos[i] || "";
        if (c.textContent !== v) {
          c.textContent = v;
          if (v) { c.classList.add("cheio"); }
          else { c.classList.remove("cheio"); }
        }
      });
    }

    function avaliar() {
      aviso.classList.remove("erro");
      teclaConfirma.classList.remove("pronto");

      if (branco) {
        aviso.textContent = "Voto em branco. Aperte CONFIRMA para confirmar.";
        teclaConfirma.classList.add("pronto");
        return;
      }
      if (digitos.length < 5) {
        ficha.hidden = true; foto.hidden = true;
        aviso.textContent = digitos.length === 0
          ? "Digite o número do candidato"
          : "Faltam " + (5 - digitos.length) + " número(s)";
        return;
      }
      if (digitos === NUMERO) {
        ficha.hidden = false; foto.hidden = false;
        aviso.textContent = "Confira o nome e a foto. Aperte CONFIRMA.";
        teclaConfirma.classList.add("pronto");
        bip(1320, 0.09);
      } else {
        ficha.hidden = true; foto.hidden = true;
        aviso.textContent = "Este não é o número do Coronel Michello. Aperte CORRIGE e tente " + NUMERO + ".";
        aviso.classList.add("erro");
        bip(220, 0.22);
      }
    }

    function digitar(n) {
      if (branco) return;
      if (digitos.length >= 5) return;
      digitos += n;
      bip(660, 0.05);
      pintar();
      avaliar();
    }

    function corrigir() {
      digitos = ""; branco = false;
      sucesso.hidden = true;
      bip(440, 0.08);
      pintar();
      avaliar();
    }

    function votarBranco() {
      digitos = ""; branco = true;
      pintar();
      avaliar();
    }

    function confirmar() {
      if (branco) {
        aviso.textContent = "Voto em branco não elege ninguém. Aperte CORRIGE e treine o " + NUMERO + ".";
        aviso.classList.add("erro");
        branco = false;
        return;
      }
      if (digitos !== NUMERO) {
        aviso.textContent = "Digite " + NUMERO + " para concluir o treino.";
        aviso.classList.add("erro");
        bip(220, 0.22);
        return;
      }
      sucesso.hidden = false;
      bip(1046, 0.14);
      setTimeout(function () { bip(1568, 0.22); }, 150);
      if (!reduzido) {
        sucesso.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }

    raiz.addEventListener("click", function (ev) {
      var b = ev.target.closest("button");
      if (!b) return;
      b.classList.add("apertada");
      setTimeout(function () { b.classList.remove("apertada"); }, 110);

      if (b.dataset.num) return digitar(b.dataset.num);
      switch (b.dataset.acao) {
        case "corrige":   return corrigir();
        case "branco":    return votarBranco();
        case "confirma":  return confirmar();
        case "reiniciar": return corrigir();
      }
    });

    // teclado físico, só quando a urna está na tela
    var urnaVisivel = false;
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (e) {
        urnaVisivel = e[0].isIntersecting;
      }, { threshold: 0.25 }).observe(raiz);
    }
    document.addEventListener("keydown", function (ev) {
      if (!urnaVisivel) return;
      var alvo = ev.target.tagName;
      if (alvo === "INPUT" || alvo === "TEXTAREA") return;
      if (/^[0-9]$/.test(ev.key)) { ev.preventDefault(); digitar(ev.key); }
      else if (ev.key === "Backspace") { ev.preventDefault(); corrigir(); }
      else if (ev.key === "Enter" && document.activeElement === document.body) { ev.preventDefault(); confirmar(); }
    });

    if (btnAuto) {
      btnAuto.addEventListener("click", function () {
        corrigir();
        NUMERO.split("").forEach(function (n, i) {
          setTimeout(function () { digitar(n); }, reduzido ? 0 : 160 * (i + 1));
        });
      });
    }

    if (btnShare) {
      btnShare.addEventListener("click", async function () {
        var txt = "Meu voto para deputado distrital é " + NUMERO + " — Coronel Michello. Ordem sem medo. Uma vida dedicada a servir.";
        var url = CFG.urlSite || location.href;
        if (navigator.share) {
          try { await navigator.share({ title: "Coronel Michello " + NUMERO, text: txt, url: url }); return; }
          catch (e) { /* usuário cancelou */ }
        }
        try {
          await navigator.clipboard.writeText(txt + " " + url);
          btnShare.textContent = "Texto copiado!";
          setTimeout(function () { btnShare.textContent = "Compartilhar o número"; }, 2200);
        } catch (e) {
          window.open("https://wa.me/?text=" + encodeURIComponent(txt + " " + url), "_blank", "noopener");
        }
      });
    }

    pintar();
    avaliar();
  })();

  /* ==========================================================
     6. VÍDEOS
     ========================================================== */
  (function videos() {
    var grade = $("#gradeVideos");
    var barra = $("#filtrosVideo");
    if (!grade) return;
    var lista = D.videos || [];
    if (!lista.length) { grade.innerHTML = ""; return; }

    var cats = ["Todos"].concat(lista.map(function (v) { return v.categoria; })
      .filter(function (c, i, a) { return c && a.indexOf(c) === i; }));

    barra.innerHTML = cats.map(function (c, i) {
      return '<button type="button" class="filtro' + (i === 0 ? " ativo" : "") +
             '" data-cat="' + c + '" aria-pressed="' + (i === 0) + '">' + c + "</button>";
    }).join("");

    function capaDe(v) {
      if (v.capa) return v.capa;
      if (v.tipo === "youtube" && v.id) return "https://i.ytimg.com/vi/" + v.id + "/hqdefault.jpg";
      return null;
    }

    function desenhar(cat) {
      var itens = cat && cat !== "Todos"
        ? lista.filter(function (v) { return v.categoria === cat; })
        : lista;

      grade.innerHTML = itens.map(function (v, i) {
        var capa = capaDe(v);
        var jogavel = !!v.id;
        var tag = jogavel ? "button" : (v.link ? "a" : "div");
        var attrs = jogavel
          ? 'type="button" data-i="' + lista.indexOf(v) + '"'
          : (v.link ? 'href="' + v.link + '" target="_blank" rel="noopener"' : "");
        var miolo = capa
          ? '<img src="' + capa + '" alt="" loading="lazy"><span class="vcard__play"><span></span></span>'
          : '<span class="vcard__vazio">' + (v.link ? "Abrir no perfil ↗" : "Aguardando publicação") + "</span>";

        return '<' + tag + ' class="vcard" ' + attrs + ' data-reveal>' +
                 '<span class="vcard__capa">' + miolo + '</span>' +
                 '<span class="vcard__txt">' +
                   '<span class="vcard__tag">' + (v.categoria || "") + "</span>" +
                   '<span class="vcard__tit">' + v.titulo + "</span>" +
                   '<span class="vcard__desc">' + (v.descricao || "") + "</span>" +
                 "</span>" +
               "</" + tag + ">";
      }).join("");

      ligarReveal(grade);
    }

    barra.addEventListener("click", function (ev) {
      var b = ev.target.closest(".filtro");
      if (!b) return;
      $$(".filtro", barra).forEach(function (f) {
        f.classList.toggle("ativo", f === b);
        f.setAttribute("aria-pressed", String(f === b));
      });
      desenhar(b.dataset.cat);
    });

    // modal
    var modal = $("#modalVideo"), player = $("#modalPlayer"), ultimoFoco = null;

    function abrir(v) {
      var src = v.tipo === "vimeo"
        ? "https://player.vimeo.com/video/" + v.id + "?autoplay=1"
        : "https://www.youtube-nocookie.com/embed/" + v.id + "?autoplay=1&rel=0";
      player.innerHTML = '<iframe src="' + src + '" title="' + v.titulo +
        '" allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture" allowfullscreen></iframe>';
      ultimoFoco = document.activeElement;
      modal.hidden = false;
      document.body.style.overflow = "hidden";
      $(".modal__x", modal).focus();
    }
    function fechar() {
      modal.hidden = true;
      player.innerHTML = "";
      document.body.style.overflow = "";
      if (ultimoFoco) ultimoFoco.focus();
    }
    grade.addEventListener("click", function (ev) {
      var c = ev.target.closest(".vcard[data-i]");
      if (!c) return;
      abrir(lista[+c.dataset.i]);
    });
    modal.addEventListener("click", function (ev) {
      if (ev.target.closest("[data-fechar]")) fechar();
    });
    document.addEventListener("keydown", function (ev) {
      if (ev.key === "Escape" && !modal.hidden) fechar();
    });

    desenhar("Todos");
  })();

  /* ==========================================================
     7. NA MÍDIA
     ========================================================== */
  (function midia() {
    var grade = $("#gradeMidia");
    if (!grade) return;
    grade.innerHTML = (D.midia || []).map(function (m) {
      return '<a class="mcard" href="' + m.link + '" target="_blank" rel="noopener" data-reveal>' +
        '<span class="mcard__topo"><span class="mcard__veic">' + m.veiculo + "</span>" +
        '<span class="mcard__data">' + m.data + "</span></span>" +
        '<span class="mcard__tit">' + m.titulo + "</span>" +
        '<span class="mcard__res">' + m.resumo + "</span>" +
        '<span class="mcard__ler">Ler a matéria ↗</span></a>';
    }).join("");
    ligarReveal(grade);
  })();

  /* ==========================================================
     8. DEPOIMENTOS
     ========================================================== */
  (function depoimentos() {
    var trilho = $("#trilhoDep"), pontos = $("#pontosDep");
    if (!trilho) return;
    var lista = D.depoimentos || [];
    if (!lista.length) return;

    function iniciais(nome) {
      return (nome || "?").split(" ").filter(Boolean).slice(0, 2)
        .map(function (p) { return p[0]; }).join("").toUpperCase();
    }

    trilho.innerHTML = lista.map(function (d) {
      return '<article class="dcard' + (d.exemplo ? " dcard--exemplo" : "") + '">' +
        (d.exemplo ? '<span class="dcard__aviso">Exemplo — substituir</span>' : "") +
        '<p class="dcard__aspas" aria-hidden="true">&ldquo;</p>' +
        '<p class="dcard__txt">' + d.texto + "</p>" +
        '<div class="dcard__quem"><span class="dcard__ini" aria-hidden="true">' + iniciais(d.nome) + "</span>" +
        '<span><b class="dcard__nome">' + d.nome + '</b><span class="dcard__papel">' + d.papel + "</span></span></div>" +
        "</article>";
    }).join("");

    var cards = $$(".dcard", trilho);
    pontos.innerHTML = cards.map(function (_, i) {
      return '<button type="button" class="dep__ponto' + (i === 0 ? " ativo" : "") +
             '" role="tab" aria-label="Depoimento ' + (i + 1) + '"></button>';
    }).join("");
    var bolinhas = $$(".dep__ponto", pontos);

    function irPara(i) {
      var c = cards[Math.max(0, Math.min(i, cards.length - 1))];
      if (c) trilho.scrollTo({ left: c.offsetLeft - trilho.offsetLeft, behavior: reduzido ? "auto" : "smooth" });
    }
    function atual() {
      var meio = trilho.scrollLeft + trilho.clientWidth / 2;
      var idx = 0, melhor = Infinity;
      cards.forEach(function (c, i) {
        var d = Math.abs((c.offsetLeft - trilho.offsetLeft) + c.offsetWidth / 2 - meio);
        if (d < melhor) { melhor = d; idx = i; }
      });
      return idx;
    }
    trilho.addEventListener("scroll", function () {
      var i = atual();
      bolinhas.forEach(function (b, j) { b.classList.toggle("ativo", j === i); });
    }, { passive: true });

    bolinhas.forEach(function (b, i) { b.addEventListener("click", function () { irPara(i); }); });
    var ant = $("#depAnt"), prox = $("#depProx");
    if (ant)  ant.addEventListener("click", function () { irPara(atual() - 1); });
    if (prox) prox.addEventListener("click", function () { irPara(atual() + 1); });
  })();

  /* ==========================================================
     9. FORMULÁRIO -> WHATSAPP
     ========================================================== */
  (function form() {
    var f = $("#formParticipe");
    if (!f) return;
    var erro = $("#formErro");

    f.addEventListener("submit", function (ev) {
      ev.preventDefault();
      erro.hidden = true;

      var obrig = ["nome", "fone", "regiao"];
      var faltou = false;
      obrig.forEach(function (n) {
        var el = f.elements[n];
        var vazio = !el.value.trim();
        el.classList.toggle("invalido", vazio);
        if (vazio && !faltou) { el.focus(); faltou = true; }
      });
      if (faltou) {
        erro.textContent = "Preencha nome, WhatsApp e região para continuar.";
        erro.hidden = false;
        return;
      }

      var ajudas = $$('input[name="ajuda"]:checked', f).map(function (i) { return i.value; });
      var linhas = [
        "Olá! Quero fazer parte da campanha do Coronel Michello " + NUMERO + ".",
        "",
        "Nome: " + f.elements.nome.value.trim(),
        "WhatsApp: " + f.elements.fone.value.trim(),
        "Região: " + f.elements.regiao.value.trim()
      ];
      if (ajudas.length) linhas.push("Quero: " + ajudas.join("; "));
      if (f.elements.msg.value.trim()) linhas.push("Recado: " + f.elements.msg.value.trim());

      window.open(
        "https://wa.me/" + (CFG.whatsapp || "5561986152185") + "?text=" + encodeURIComponent(linhas.join("\n")),
        "_blank", "noopener"
      );
    });

    $$("input, textarea", f).forEach(function (el) {
      el.addEventListener("input", function () { el.classList.remove("invalido"); });
    });
  })();

  /* ==========================================================
     10. CANAIS OFICIAIS
     ========================================================== */
  (function canais() {
    var ul = $("#canais");
    if (!ul) return;
    var L = D.links || {};
    var itens = [
      { ico: "$",  nome: "Apoiar a campanha",  desc: "Vaquinha eleitoral no QueroApoiar, homologada pelo TSE", url: L.vaquinha,  destaque: true },
      { ico: "AR", nome: "Filtro oficial",     desc: "Use nos seus stories e mostre o 20122",                  url: L.filtro },
      { ico: "+",  nome: "Seja meu amigo",     desc: "Cadastro para receber as novidades da campanha",         url: L.amigos },
      { ico: "IG", nome: "@tc_michello",       desc: "Instagram — o dia a dia da campanha",                    url: L.instagram },
      { ico: "TT", nome: "@tc.michello",       desc: "TikTok — vídeos curtos e bastidores",                    url: L.tiktok },
      { ico: "WA", nome: "(61) 99562-3696",    desc: "Falar direto com a equipe no WhatsApp",                  url: L.whatsapp }
    ].filter(function (i) { return !!i.url; });

    ul.innerHTML = itens.map(function (i) {
      return '<li><a class="canal' + (i.destaque ? " canal--destaque" : "") + '" href="' + i.url +
        '" target="_blank" rel="noopener">' +
        '<span class="canal__ico" aria-hidden="true">' + i.ico + "</span>" +
        '<span class="canal__txt"><span class="canal__nome">' + i.nome + "</span>" +
        '<span class="canal__desc">' + i.desc + "</span></span>" +
        '<span class="canal__seta" aria-hidden="true">↗</span></a></li>';
    }).join("");
  })();

  /* ==========================================================
     11. VAQUINHA
     ========================================================== */
  (function vaquinha() {
    var barra = $("#metaPreenche");
    if (!barra) return;
    var V = D.vaquinha || {};
    var arrecadado = Number(V.arrecadado) || 0;
    var meta = Number(V.meta) || 0;
    if (!meta) return;

    var pct = Math.max(0, Math.min(100, (arrecadado / meta) * 100));
    var brl = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

    $("#metaArrecadado").textContent = brl.format(arrecadado);
    $("#metaAlvo").textContent = brl.format(meta);
    $("#metaTexto").innerHTML = "<b>" + pct.toFixed(1).replace(".", ",") +
      "%</b> da meta alcançada. Valor conferido em " + (V.atualizadoEm || "—") +
      " na plataforma " + (V.plataforma || "de vaquinha") + ".";

    var btn = $("#metaBtn");
    if (btn && V.link) btn.href = V.link;

    function preencher() { barra.style.width = pct + "%"; }
    if (reduzido || !("IntersectionObserver" in window)) { preencher(); return; }
    var obs = new IntersectionObserver(function (ents) {
      ents.forEach(function (e) {
        if (!e.isIntersecting) return;
        obs.unobserve(barra);
        setTimeout(preencher, 150);
      });
    }, { threshold: 0.4 });
    obs.observe(barra);
  })();

  /* ==========================================================
     12. QR CODE
     ========================================================== */
  (function qr() {
    var box = $("#qrBox");
    if (!box) return;
    var img = new Image();
    img.alt = "QR code para falar com a campanha no WhatsApp";
    img.src = "assets/img/qrcode.png";
    img.onload = function () { box.appendChild(img); box.removeAttribute("aria-hidden"); };
    img.onerror = function () {
      box.innerHTML = '<span style="font-family:Archivo,sans-serif;font-weight:900;font-style:italic;' +
        'color:#0F2848;font-size:1.35rem;line-height:1;text-align:center">' + NUMERO + "</span>";
    };
  })();

})();
