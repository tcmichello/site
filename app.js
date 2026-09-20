/* ============================================================
   CORONEL MICHELLO 20122 · app.js
   ============================================================ */
(function () {
  "use strict";

  var D = window.DADOS || {};
  var CFG = D.config || {};
  var NUMERO = CFG.numero || "20122";
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var reduzido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  window.addEventListener("load", function () { document.body.classList.add("carregado"); });
  setTimeout(function () { document.body.classList.add("carregado"); }, 1200);

  function ligarReveal(raiz) {
    var alvos = $$("[data-reveal]", raiz || document).filter(function (e) { return !e.classList.contains("visivel"); });
    if (reduzido || !("IntersectionObserver" in window)) {
      alvos.forEach(function (e) { e.classList.add("visivel"); });
      return;
    }
    var obs = new IntersectionObserver(function (ents) {
      ents.forEach(function (e, i) {
        if (!e.isIntersecting) return;
        setTimeout(function () { e.target.classList.add("visivel"); }, Math.min(i * 70, 260));
        obs.unobserve(e.target);
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: .08 });
    alvos.forEach(function (e) { obs.observe(e); });
  }

  /* ========================= NAV ========================= */
  (function nav() {
    var barra = $("#nav"), topo = $("#btnTopo"), tb = document.querySelector(".topbar");
    function aoRolar() {
      var y = window.scrollY;
      barra.classList.toggle("fixo", y > 80);
      if (tb) tb.classList.toggle("oculta", y > 80);
      if (topo) topo.hidden = y < 700;
    }
    window.addEventListener("scroll", aoRolar, { passive: true });
    aoRolar();
    if (topo) topo.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reduzido ? "auto" : "smooth" });
    });

    var btn = $("#btnMenu"), menu = $("#menuMobile");
    if (btn && menu) {
      btn.addEventListener("click", function () {
        var aberto = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", String(!aberto));
        btn.setAttribute("aria-label", aberto ? "Abrir menu" : "Fechar menu");
        menu.hidden = aberto;
      });
      $$("a", menu).forEach(function (a) {
        a.addEventListener("click", function () {
          btn.setAttribute("aria-expanded", "false");
          menu.hidden = true;
        });
      });
    }

    var secoes = $$("main section[id]"), links = $$(".nav__links a");
    if ("IntersectionObserver" in window && secoes.length) {
      var obs = new IntersectionObserver(function (ents) {
        ents.forEach(function (e) {
          if (!e.isIntersecting) return;
          links.forEach(function (a) { a.classList.toggle("ativo", a.getAttribute("href") === "#" + e.target.id); });
        });
      }, { rootMargin: "-45% 0px -50% 0px" });
      secoes.forEach(function (s) { obs.observe(s); });
    }
  })();

  /* ========================= JINGLE ========================= */
  (function jingle() {
    var audio = $("#jingleAudio");
    if (!audio) return;
    var bar = $("#jbar"), btn = $("#jbarPlay");
    var barra = $("#jbarBarra"), prog = $("#jbarProg");
    var atual = $("#jbarAtual"), total = $("#jbarTotal");
    audio.volume = .85;

    function mmss(v) {
      if (!isFinite(v)) return "0:00";
      var m = Math.floor(v / 60), sg = Math.floor(v % 60);
      return m + ":" + (sg < 10 ? "0" : "") + sg;
    }
    function alternar() {
      if (audio.paused) { var pr = audio.play(); if (pr && pr.catch) pr.catch(function () {}); }
      else audio.pause();
    }
    if (btn) btn.addEventListener("click", alternar);

    function pintar() {
      var t = !audio.paused;
      if (bar) bar.classList.toggle("tocando", t);
      if (btn) btn.setAttribute("aria-label", t ? "Pausar o jingle" : "Tocar o jingle");
    }
    audio.addEventListener("play", pintar);
    audio.addEventListener("pause", pintar);
    audio.addEventListener("ended", function () { audio.currentTime = 0; pintar(); });
    audio.addEventListener("loadedmetadata", function () {
      if (total) total.textContent = mmss(audio.duration);
    });
    audio.addEventListener("timeupdate", function () {
      if (!prog) return;
      var pct = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;
      prog.style.width = pct + "%";
      if (atual) atual.textContent = mmss(audio.currentTime);
      if (barra) barra.setAttribute("aria-valuenow", Math.round(pct));
    });
    if (barra) {
      barra.addEventListener("click", function (ev) {
        var r = barra.getBoundingClientRect();
        if (audio.duration) audio.currentTime = Math.max(0, Math.min(1, (ev.clientX - r.left) / r.width)) * audio.duration;
      });
      barra.addEventListener("keydown", function (ev) {
        if (!audio.duration) return;
        if (ev.key === "ArrowRight") { ev.preventDefault(); audio.currentTime = Math.min(audio.duration, audio.currentTime + 5); }
        if (ev.key === "ArrowLeft") { ev.preventDefault(); audio.currentTime = Math.max(0, audio.currentTime - 5); }
        if (ev.key === " " || ev.key === "Enter") { ev.preventDefault(); alternar(); }
      });
    }
    document.addEventListener("click", function (ev) {
      if (ev.target.closest(".urna__teclado") && !audio.paused) audio.pause();
    });
    pintar();
  })();

  /* ========================= PROPOSTAS ========================= */
  (function propostas() {
    var caixa = $("#acc");
    if (!caixa) return;
    var lista = D.propostas || [];
    if (!lista.length) return;

    caixa.innerHTML = lista.map(function (p, i) {
      var acoes = p.acoes.map(function (a, j) {
        var txt = (typeof a === "string") ? a : ("<b>" + a[0] + "</b> " + a[1]);
        return '<li><span class="acc__num">' + (j + 1 < 10 ? "0" : "") + (j + 1) + "</span>" +
               '<span class="acc__acao">' + txt + "</span></li>";
      }).join("");
      return '<article class="acc__item" data-reveal>' +
        '<h3><button type="button" class="acc__cab" aria-expanded="false" aria-controls="acc-p' + i + '">' +
          '<span class="acc__n">' + (p.n < 10 ? "0" : "") + p.n + "</span>" +
          '<span class="acc__tit"><b>' + p.titulo + "</b>" +
            '<span class="acc__res">' + p.resumo + "</span></span>" +
          '<span class="acc__conta">12 ações</span>' +
          '<span class="acc__seta" aria-hidden="true"></span>' +
        "</button></h3>" +
        '<div class="acc__corpo" id="acc-p' + i + '" hidden>' +
          '<div class="acc__miolo">' +
            '<p class="acc__diag">' + p.diagnostico + "</p>" +
            '<p class="acc__frase">&ldquo;' + p.frase + '&rdquo;</p>' +
            '<p class="acc__rot">Pelo que eu vou lutar como deputado distrital</p>' +
            '<ol class="acc__acoes">' + acoes + "</ol>" +
          "</div>" +
        "</div>" +
      "</article>";
    }).join("");

    caixa.addEventListener("click", function (ev) {
      var b = ev.target.closest(".acc__cab");
      if (!b) return;
      var corpo = document.getElementById(b.getAttribute("aria-controls"));
      var aberto = b.getAttribute("aria-expanded") === "true";

      $$(".acc__cab", caixa).forEach(function (o) {
        if (o === b) return;
        o.setAttribute("aria-expanded", "false");
        document.getElementById(o.getAttribute("aria-controls")).hidden = true;
        o.closest(".acc__item").classList.remove("aberto");
      });

      b.setAttribute("aria-expanded", String(!aberto));
      corpo.hidden = aberto;
      b.closest(".acc__item").classList.toggle("aberto", !aberto);

      if (!aberto && !reduzido) {
        setTimeout(function () {
          var r = b.getBoundingClientRect();
          if (r.top < 90) window.scrollBy({ top: r.top - 110, behavior: "smooth" });
        }, 60);
      }
    });

    ligarReveal(caixa);
  })();

  /* ========================= AUTORIDADE ========================= */
  (function autoridade() {
    var lista = $("#pares");
    if (!lista) return;
    var pares = D.pares || [];
    if (!pares.length) return;

    lista.innerHTML = pares.map(function (p, i) {
      return '<li class="par" data-reveal>' +
        '<span class="par__n">' + (i + 1) + "</span>" +
        '<div class="par__lado par__lado--feito">' +
          '<span class="par__tag par__tag--feito">✓ Feito</span>' +
          '<span class="par__onde">' + p.onde + "</span>" +
          "<p>" + p.feito + "</p>" +
          (p.fonte ? '<a class="par__fonte" href="' + p.fonte.url + '" target="_blank" rel="noopener">Conferir em ' + p.fonte.texto + " ↗</a>" : "") +
        "</div>" +
        '<span class="par__seta" aria-hidden="true">→</span>' +
        '<div class="par__lado par__lado--expandir">' +
          '<span class="par__tag par__tag--exp">Vou expandir</span>' +
          '<span class="par__onde par__onde--exp">Para todo o Distrito Federal</span>' +
          "<p>" + p.expandir + "</p>" +
          '<a class="par__prop" href="#propostas">' + p.proposta + " ↑</a>" +
        "</div>" +
      "</li>";
    }).join("");

    var btns = $$(".troca__btn"), caixa = $("#aut");
    btns.forEach(function (b) {
      b.addEventListener("click", function () {
        btns.forEach(function (o) {
          var on = o === b;
          o.classList.toggle("ativo", on);
          o.setAttribute("aria-selected", String(on));
        });
        caixa.setAttribute("data-foco", b.dataset.lado);
      });
    });
    caixa.setAttribute("data-foco", "feito");
    ligarReveal(lista);
  })();

  /* ========================= MAPA ========================= */
  (function mapa() {
    var grade = $("#mapaGrade"), btn = $("#mapaBtn");
    if (!grade) return;
    var ras = D.ras || [];
    if (!ras.length) return;

    grade.innerHTML = ras.map(function (r) {
      return '<span class="ra' + (r.comando ? " ra--on" : "") + '" title="' + r.n + '">' +
             '<span class="ra__ponto" aria-hidden="true"></span>' +
             '<span class="ra__nome">' + r.n + "</span></span>";
    }).join("");

    var conta = $("#mapaConta");
    var base = ras.filter(function (r) { return r.comando; }).length;
    var expandido = false;
    if (conta) conta.textContent = base;

    function contarAte(alvo) {
      var ini = null, de = +conta.textContent, dur = 1100;
      function passo(t) {
        if (!ini) ini = t;
        var pr = Math.min((t - ini) / dur, 1);
        conta.textContent = Math.round(de + (alvo - de) * (1 - Math.pow(1 - pr, 3)));
        if (pr < 1) requestAnimationFrame(passo);
      }
      requestAnimationFrame(passo);
    }

    btn.addEventListener("click", function () {
      expandido = !expandido;
      var itens = $$(".ra", grade);
      if (expandido) {
        itens.forEach(function (el, i) {
          if (el.classList.contains("ra--on")) return;
          setTimeout(function () { el.classList.add("ra--aceso"); }, reduzido ? 0 : i * 26);
        });
        if (reduzido) conta.textContent = ras.length; else contarAte(ras.length);
        btn.textContent = "Voltar ao meu comando";
        grade.classList.add("expandida");
      } else {
        itens.forEach(function (el) { el.classList.remove("ra--aceso"); });
        conta.textContent = base;
        btn.textContent = "Ver a expansão";
        grade.classList.remove("expandida");
      }
    });
  })();

  /* ========================= VÍDEOS ========================= */
  (function videos() {
    var grade = $("#gradeVideos"), palco = $("#videoDestaque");
    if (!grade) return;
    var lista = D.videos || [];
    if (!lista.length) return;

    function capa(v, hd) {
      if (v.capa) return v.capa;
      if (v.tipo === "youtube" && v.id) return "https://i.ytimg.com/vi/" + v.id + "/" + (hd ? "maxresdefault" : "hqdefault") + ".jpg";
      return null;
    }

    var dest = lista.filter(function (v) { return v.destaque; })[0] || lista[0];
    if (palco && dest) {
      var c = capa(dest, true) || capa(dest);
      var jog = !!dest.id;
      palco.innerHTML =
        "<" + (jog ? 'button type="button"' : 'a href="' + dest.link + '" target="_blank" rel="noopener"') +
        ' class="vdest" data-v="' + lista.indexOf(dest) + '">' +
          '<span class="vdest__capa">' +
            (c ? '<img src="' + c + '" alt="" onerror="this.src=\'' + (capa(dest) || "") + '\'">' : '<span class="vcard__vazio">Vídeo</span>') +
            '<span class="vdest__play"><span></span></span>' +
          "</span>" +
          '<span class="vdest__txt">' +
            '<span class="vdest__tag">' + (dest.veiculo || "") + (dest.data ? " · " + dest.data : "") + "</span>" +
            '<span class="vdest__tit">' + dest.titulo + "</span>" +
            '<span class="vdest__desc">' + (dest.descricao || "") + "</span>" +
            '<span class="vdest__cta">Assistir agora</span>' +
          "</span>" +
        "</" + (jog ? "button" : "a") + ">";
    }

    var demais = lista.filter(function (v) { return v !== dest; }).slice(0, 4);
    grade.innerHTML = demais.map(function (v) {
      var c = capa(v);
      var jog = !!v.id;
      var tag = jog ? "button" : "a";
      var attrs = jog ? 'type="button" data-v="' + lista.indexOf(v) + '"'
                      : 'href="' + (v.link || "#") + '" target="_blank" rel="noopener"';
      var miolo = c
        ? '<img src="' + c + '" alt="" loading="lazy"><span class="vcard__play"><span></span></span>'
        : '<span class="vcard__vazio"><b>' + (v.veiculo || "") + "</b><span>" +
          (v.tipo === "instagram" ? "Ver no Instagram ↗" : "Assistir no site ↗") + "</span></span>";
      return "<" + tag + ' class="vcard" ' + attrs + " data-reveal>" +
               '<span class="vcard__capa">' + miolo + "</span>" +
               '<span class="vcard__txt">' +
                 '<span class="vcard__tag">' + (v.veiculo || "") + (v.data ? " · " + v.data : "") + "</span>" +
                 '<span class="vcard__tit">' + v.titulo + "</span>" +
               "</span>" +
             "</" + tag + ">";
    }).join("");

    var modal = $("#modalVideo"), player = $("#modalPlayer"), foco = null;
    function abrir(v) {
      if (!v || !v.id) { if (v && v.link) window.open(v.link, "_blank", "noopener"); return; }
      player.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + v.id +
        '?autoplay=1&rel=0" title="' + v.titulo +
        '" allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture" allowfullscreen></iframe>';
      modal.querySelector(".modal__caixa").classList.toggle("modal__caixa--vert", !!v.vertical);
      foco = document.activeElement;
      modal.hidden = false;
      document.body.style.overflow = "hidden";
      $(".modal__x", modal).focus();
    }
    function fechar() {
      modal.hidden = true; player.innerHTML = "";
      document.body.style.overflow = "";
      if (foco) foco.focus();
    }
    document.addEventListener("click", function (ev) {
      var c = ev.target.closest("[data-v]");
      if (c) return abrir(lista[+c.dataset.v]);
      if (ev.target.closest("[data-fechar]")) fechar();
    });
    document.addEventListener("keydown", function (ev) {
      if (ev.key === "Escape" && !modal.hidden) fechar();
    });

    ligarReveal(grade);
  })();

  /* ========================= IMPRENSA ========================= */
  (function imprensa() {
    var lista = D.midia || [];
    if (!lista.length) return;

    var faixa = $("#faixaVeiculos");
    if (faixa) {
      var nomes = lista.map(function (m) { return m.veiculo; })
        .filter(function (v, i, a) { return a.indexOf(v) === i; });
      var bloco = nomes.map(function (n) {
        return '<span class="imprensa__item">' + n + '</span><span class="imprensa__sep">◆</span>';
      }).join("");
      faixa.innerHTML = bloco + bloco;
    }

    var ol = $("#listaMidia"), btn = $("#btnMidia");
    if (ol) {
      ol.innerHTML = lista.map(function (m) {
        return '<li><a class="pauta__linha" href="' + m.link + '" target="_blank" rel="noopener">' +
          '<span class="pauta__veic">' + m.veiculo + "</span>" +
          '<span class="pauta__meio"><span class="pauta__tit">' + m.titulo + "</span></span>" +
          '<span class="pauta__data">' + m.data + "</span></a></li>";
      }).join("");
    }
    if (btn && ol) {
      btn.addEventListener("click", function () {
        var aberto = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", String(!aberto));
        ol.hidden = aberto;
        btn.textContent = aberto ? "Ver todas as matérias" : "Fechar a lista";
      });
    }
  })();

  /* ========================= VAQUINHA ========================= */
  (function vaquinha() {
    var prog = $("#vaqProg");
    if (!prog) return;
    var V = D.vaquinha || {};
    var arre = Number(V.arrecadado) || 0, meta = Number(V.meta) || 0;
    if (!meta) return;
    var pct = Math.max(0, Math.min(100, (arre / meta) * 100));
    var brl = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

    $("#vaqValor").textContent = brl.format(arre);
    $("#vaqMeta").textContent = brl.format(meta);
    $("#vaqPct").textContent = pct.toFixed(1).replace(".", ",") + "%";

    var box = $("#vaqDoadores");
    if (box && V.doadores) {
      box.innerHTML = "<b>" + V.doadores + "</b> pessoas já doaram";
      box.hidden = false;
    }

    function encher() { prog.style.width = pct + "%"; }
    if (reduzido || !("IntersectionObserver" in window)) return encher();
    var obs = new IntersectionObserver(function (e) {
      if (!e[0].isIntersecting) return;
      obs.unobserve(prog);
      setTimeout(encher, 150);
    }, { threshold: .35 });
    obs.observe(prog);
  })();

  /* ========================= CANAIS ========================= */
  (function canais() {
    var ul = $("#canais");
    if (!ul) return;
    var L = D.links || {};
    var itens = [
      { ico: "WA", nome: "WhatsApp da campanha", desc: "Fale direto com a equipe", url: L.whatsapp },
      { ico: "✚", nome: "Quero ser apoiador", desc: "Formulário da campanha", url: L.formulario },
      { ico: "+", nome: "Seja meu amigo", desc: "Cadastro oficial de apoiador", url: L.amigos },
      { ico: "◉", nome: "Filtro oficial", desc: "Para os seus stories", url: L.filtro }
    ].filter(function (i) { return !!i.url; });

    ul.innerHTML = itens.map(function (i) {
      return '<li><a class="canal" href="' + i.url + '" target="_blank" rel="noopener">' +
        '<span class="canal__ico" aria-hidden="true">' + i.ico + "</span>" +
        '<span class="canal__txt"><span class="canal__nome">' + i.nome + "</span>" +
        '<span class="canal__desc">' + (i.desc || "") + "</span></span>" +
        '<span class="canal__seta" aria-hidden="true">↗</span></a></li>';
    }).join("");
  })();

  /* ========================= FORMULÁRIO ========================= */
  (function form() {
    var f = $("#formParticipe");
    if (!f) return;
    var erro = $("#formErro");

    f.addEventListener("submit", function (ev) {
      ev.preventDefault();
      erro.hidden = true;
      var faltou = false;
      ["nome", "fone", "regiao"].forEach(function (n) {
        var el = f.elements[n], vazio = !el.value.trim();
        el.classList.toggle("invalido", vazio);
        if (vazio && !faltou) { el.focus(); faltou = true; }
      });
      if (faltou) {
        erro.textContent = "Preencha nome, WhatsApp e região.";
        erro.hidden = false;
        return;
      }
      var linhas = [
        "Olá! Quero fazer parte da campanha do Coronel Michello " + NUMERO + ".",
        "",
        "Nome: " + f.elements.nome.value.trim(),
        "WhatsApp: " + f.elements.fone.value.trim(),
        "Região: " + f.elements.regiao.value.trim()
      ];
      window.open("https://wa.me/" + (CFG.whatsapp || "5561995623696") +
        "?text=" + encodeURIComponent(linhas.join("\n")), "_blank", "noopener");
    });

    var btnInsta = $("#enviarInsta");
    if (btnInsta) {
      btnInsta.addEventListener("click", function () {
        var nome = f.elements.nome.value.trim();
        var reg = f.elements.regiao.value.trim();
        var msg = "Olá! Sou " + (nome || "apoiador") + (reg ? ", da " + reg : "") +
                  ". Quero apoiar o Coronel Michello " + NUMERO + ".";
        try { navigator.clipboard.writeText(msg); } catch (e) {}
        btnInsta.textContent = "Mensagem copiada, abrindo o perfil...";
        setTimeout(function () {
          window.open((D.links && D.links.instagram) || "https://www.instagram.com/tc_michello", "_blank", "noopener");
          btnInsta.textContent = "Falar no Instagram";
        }, 900);
      });
    }

    $$("input", f).forEach(function (el) {
      el.addEventListener("input", function () { el.classList.remove("invalido"); });
    });
  })();

  ligarReveal();
})();
