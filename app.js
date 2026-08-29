/* ============================================================
   CORONEL MICHELLO 20122 · app.js
   Sem dependências. Ordem: nav, reveal, região, jingle,
   urna, vídeos, imprensa, vaquinha, canais, formulário.
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

  /* ---------- reveal ---------- */
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

  /* ==========================================================
     NAVEGAÇÃO
     ========================================================== */
  (function nav() {
    var barra = $("#nav"), topo = $("#btnTopo");
    function aoRolar() {
      var y = window.scrollY;
      barra.classList.toggle("fixo", y > 80);
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

  /* ==========================================================
     SUA REGIÃO
     ========================================================== */
  (function regiao() {
    var chips = $("#chips"), painel = $("#painel");
    if (!chips || !painel) return;
    var lista = D.regioes || [];
    if (!lista.length) return;
    var dado = D.dadoRua || {};

    chips.innerHTML = lista.map(function (r, i) {
      return '<button type="button" class="chip" role="tab" data-i="' + i + '"' +
             (r.comandou ? ' data-comandou="1"' : "") +
             ' aria-selected="false">' + r.nome + "</button>";
    }).join("");

    function pintar(i) {
      var r = lista[i];
      painel.innerHTML =
        '<div class="painel__esq">' +
          (r.comandou
            ? '<span class="painel__selo">★ Ele comandou o ' + r.batalhao + ' daqui</span>'
            : '<span class="painel__selo">Região vizinha ao comando dele</span>') +
          '<p class="painel__nome">' + r.nome + "</p>" +
          '<p class="painel__frase">' + r.frase + "</p>" +
          '<p class="painel__txt">' + r.texto + "</p>" +
        "</div>" +
        '<div class="painel__dir">' +
          '<p class="painel__rot">O problema em número</p>' +
          '<p class="painel__dado"><b>' + (dado.destaque || "") + "</b> " + (dado.texto || "") + "</p>" +
          '<p class="painel__fonte">' + (dado.fonte || "") + "</p>" +
        "</div>";
      painel.classList.remove("trocando");
      void painel.offsetWidth;
      painel.classList.add("trocando");

      $$(".chip", chips).forEach(function (c) {
        var on = +c.dataset.i === i;
        c.classList.toggle("ativo", on);
        c.setAttribute("aria-selected", String(on));
      });
    }

    chips.addEventListener("click", function (ev) {
      var c = ev.target.closest(".chip");
      if (c) pintar(+c.dataset.i);
    });
    chips.addEventListener("keydown", function (ev) {
      if (ev.key !== "ArrowRight" && ev.key !== "ArrowLeft") return;
      var todos = $$(".chip", chips);
      var atual = todos.indexOf(document.activeElement);
      if (atual < 0) return;
      ev.preventDefault();
      var prox = (atual + (ev.key === "ArrowRight" ? 1 : -1) + todos.length) % todos.length;
      todos[prox].focus();
      pintar(+todos[prox].dataset.i);
    });

    pintar(0);
  })();

  /* ==========================================================
     JINGLE
     ========================================================== */
  (function jingle() {
    var audio = $("#jingleAudio");
    if (!audio) return;
    var btnHero = $("#jinglePlay"), rot = $("#jingleRotulo");
    var bar = $("#jbar"), btnBar = $("#jbarPlay");
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
    if (btnHero) btnHero.addEventListener("click", alternar);
    if (btnBar) btnBar.addEventListener("click", alternar);

    function pintar() {
      var t = !audio.paused;
      if (btnHero) {
        btnHero.classList.toggle("tocando", t);
        btnHero.setAttribute("aria-label", t ? "Pausar o jingle" : "Tocar o jingle");
      }
      if (rot) rot.textContent = t ? "Tocando" : "Ouvir o jingle";
      if (bar) bar.classList.toggle("tocando", t);
      if (btnBar) btnBar.setAttribute("aria-label", t ? "Pausar o jingle" : "Tocar o jingle");
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

  /* ==========================================================
     URNA
     ========================================================== */
  (function urna() {
    var raiz = $("#urnaApp");
    if (!raiz) return;
    var caixas = $$(".digito", raiz), aviso = $("#urnaAviso");
    var ficha = $("#urnaFicha"), foto = $("#urnaFoto"), sucesso = $("#urnaSucesso");
    var confirma = $(".tecla--confirma", raiz);
    var digitos = "", branco = false, somLigado = true;

    var SONS = {};
    ["tecla", "confirma", "erro"].forEach(function (n) {
      var a = new Audio("urna-" + n + ".mp3");
      a.preload = "auto";
      a.volume = n === "tecla" ? .5 : .65;
      SONS[n] = a;
    });
    // navegadores só liberam áudio depois de um toque do visitante.
    // aqui a gente destrava tudo no primeiro toque em qualquer lugar da página.
    var destravado = false;
    function destravar() {
      if (destravado) return;
      destravado = true;
      Object.keys(SONS).forEach(function (k) {
        var a = SONS[k], v = a.volume;
        a.volume = 0;
        var pr = a.play();
        if (pr && pr.then) pr.then(function () {
          a.pause(); a.currentTime = 0; a.volume = v;
        }).catch(function () { a.volume = v; });
        else { a.pause(); a.currentTime = 0; a.volume = v; }
      });
    }
    ["pointerdown", "keydown", "touchstart"].forEach(function (ev) {
      document.addEventListener(ev, destravar, { once: true, passive: true });
    });

    function bip(n) {
      if (!somLigado || !SONS[n]) return;
      destravar();
      try {
        var a = SONS[n];
        a.currentTime = 0;
        var p = a.play();
        if (p && p.catch) p.catch(function () {});
      } catch (e) {}
    }

    var dica = $(".urna__dica", raiz);
    var btnSom = document.createElement("button");
    btnSom.type = "button"; btnSom.className = "mini";
    btnSom.style.marginLeft = ".8rem";
    btnSom.textContent = "Desligar o som";
    btnSom.setAttribute("aria-pressed", "true");
    btnSom.addEventListener("click", function () {
      somLigado = !somLigado;
      btnSom.textContent = somLigado ? "Desligar o som" : "Ligar o som";
      btnSom.setAttribute("aria-pressed", String(somLigado));
      if (somLigado) bip("tecla");
    });
    if (dica) dica.appendChild(btnSom);

    function pintar() {
      caixas.forEach(function (c, i) {
        var v = digitos[i] || "";
        if (c.textContent !== v) {
          c.textContent = v;
          c.classList.toggle("cheio", !!v);
        }
      });
    }
    function avaliar() {
      aviso.classList.remove("erro");
      confirma.classList.remove("pronto");
      if (branco) {
        aviso.textContent = "Voto em branco. Aperte CONFIRMA.";
        confirma.classList.add("pronto"); return;
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
        confirma.classList.add("pronto");
        bip("confirma");
      } else {
        ficha.hidden = true; foto.hidden = true;
        aviso.textContent = "Esse não é o número do Coronel Michello. Aperte CORRIGE e tente " + NUMERO + ".";
        aviso.classList.add("erro");
        bip("erro");
      }
    }
    function digitar(n) {
      if (branco || digitos.length >= 5) return;
      digitos += n; bip("tecla"); pintar(); avaliar();
    }
    function corrigir() {
      digitos = ""; branco = false; sucesso.hidden = true;
      bip("tecla"); pintar(); avaliar();
    }
    function confirmar() {
      if (branco) {
        aviso.textContent = "Voto em branco não elege ninguém. Aperte CORRIGE e treine o " + NUMERO + ".";
        aviso.classList.add("erro"); branco = false; return;
      }
      if (digitos !== NUMERO) {
        aviso.textContent = "Digite " + NUMERO + " para concluir o treino.";
        aviso.classList.add("erro"); bip("erro"); return;
      }
      sucesso.hidden = false;
      bip("confirma");
    }

    raiz.addEventListener("click", function (ev) {
      var b = ev.target.closest("button");
      if (!b) return;
      b.classList.add("apertada");
      setTimeout(function () { b.classList.remove("apertada"); }, 110);
      if (b.dataset.num) return digitar(b.dataset.num);
      if (b.dataset.acao === "corrige" || b.dataset.acao === "reiniciar") return corrigir();
      if (b.dataset.acao === "branco") { digitos = ""; branco = true; pintar(); return avaliar(); }
      if (b.dataset.acao === "confirma") return confirmar();
    });

    var visivel = false;
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (e) { visivel = e[0].isIntersecting; }, { threshold: .25 }).observe(raiz);
    }
    document.addEventListener("keydown", function (ev) {
      if (!visivel) return;
      var t = ev.target.tagName;
      if (t === "INPUT" || t === "TEXTAREA") return;
      if (/^[0-9]$/.test(ev.key)) { ev.preventDefault(); digitar(ev.key); }
      else if (ev.key === "Backspace") { ev.preventDefault(); corrigir(); }
    });

    var auto = $("#urnaAuto");
    if (auto) auto.addEventListener("click", function () {
      corrigir();
      NUMERO.split("").forEach(function (n, i) {
        setTimeout(function () { digitar(n); }, reduzido ? 0 : 160 * (i + 1));
      });
    });

    var share = $("#urnaCompartilhar");
    if (share) share.addEventListener("click", async function () {
      var txt = "Meu voto para deputado distrital é " + NUMERO + ", Coronel Michello. Ordem sem medo.";
      var url = CFG.urlSite || location.href;
      if (navigator.share) {
        try { await navigator.share({ title: "Coronel Michello " + NUMERO, text: txt, url: url }); return; } catch (e) {}
      }
      try {
        await navigator.clipboard.writeText(txt + " " + url);
        share.textContent = "Texto copiado!";
        setTimeout(function () { share.textContent = "Mandar para um amigo"; }, 2200);
      } catch (e) {
        window.open("https://wa.me/?text=" + encodeURIComponent(txt + " " + url), "_blank", "noopener");
      }
    });

    pintar(); avaliar();
  })();

  /* ==========================================================
     VÍDEOS
     ========================================================== */
  (function videos() {
    var grade = $("#gradeVideos"), palco = $("#videoDestaque");
    if (!grade) return;
    var lista = (D.videos || []);
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
      var src = "https://www.youtube-nocookie.com/embed/" + v.id + "?autoplay=1&rel=0";
      player.innerHTML = '<iframe src="' + src + '" title="' + v.titulo +
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

  /* ==========================================================
     IMPRENSA
     ========================================================== */
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

  /* ==========================================================
     VAQUINHA
     ========================================================== */
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
      box.innerHTML = '<b>' + V.doadores + "</b> pessoas já doaram";
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

  /* ==========================================================
     CANAIS
     ========================================================== */
  (function canais() {
    var ul = $("#canais");
    if (!ul) return;
    var L = D.links || {};
    var itens = [
      { ico: "TT", nome: "TikTok @tc.michello",        desc: "Vídeos curtos e bastidores", url: L.tiktok },
      { ico: "WA", nome: "WhatsApp da campanha",        desc: "Fale direto com a equipe",   url: L.whatsapp },
      { ico: "+",  nome: "Seja meu amigo",             desc: "Cadastro oficial de apoiador", url: L.amigos },
      { ico: "✚", nome: "Quero ser apoiador",         desc: "Formulário da campanha",     url: L.formulario },
      { ico: "◉",  nome: "Filtro oficial",             desc: "Para os seus stories",       url: L.filtro }
    ].filter(function (i) { return !!i.url; });

    ul.innerHTML = itens.map(function (i) {
      return '<li><a class="canal" href="' + i.url + '" target="_blank" rel="noopener">' +
        '<span class="canal__ico" aria-hidden="true">' + i.ico + "</span>" +
        '<span class="canal__txt"><span class="canal__nome">' + i.nome + "</span>" +
        '<span class="canal__desc">' + (i.desc || "") + "</span></span>" +
        '<span class="canal__seta" aria-hidden="true">↗</span></a></li>';
    }).join("");
  })();

  /* ==========================================================
     FORMULÁRIO
     ========================================================== */
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
        var msg = "Olá! Sou " + (nome || "apoiador") +
          (reg ? ", da " + reg : "") + ". Quero apoiar o Coronel Michello " + NUMERO + ".";
        try { navigator.clipboard.writeText(msg); } catch (e) {}
        btnInsta.textContent = "Mensagem copiada, abrindo o perfil...";
        setTimeout(function () {
          window.open((D.links && D.links.instagram) || "https://www.instagram.com/tc_michello",
                      "_blank", "noopener");
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
