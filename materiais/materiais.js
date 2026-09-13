(function () {
  "use strict";
  var ITENS = window.MATERIAIS || [];
  var $ = function (s) { return document.querySelector(s); };
  var grade = $("#grade"), busca = $("#busca"), conta = $("#conta");
  var filtros = $("#filtros"), vazio = $("#vazio"), aviso = $("#aviso");
  var catAtiva = "Tudo", termo = "";

  var ICONES = { audio: "♪", pdf: "▤", link: "↗", video: "▶", imagem: "▣" };

  /* filtros */
  var cats = ["Tudo"].concat(ITENS.map(function (i) { return i.categoria; })
    .filter(function (c, i, a) { return c && a.indexOf(c) === i; }));
  filtros.innerHTML = cats.map(function (c, i) {
    var n = c === "Tudo" ? ITENS.length : ITENS.filter(function (x) { return x.categoria === c; }).length;
    return '<button type="button" class="filtro' + (i === 0 ? " ativo" : "") +
           '" data-cat="' + c + '">' + c + " (" + n + ")</button>";
  }).join("");

  function normalizar(t) {
    return (t || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  function desenhar() {
    var t = normalizar(termo);
    var lista = ITENS.filter(function (it) {
      if (catAtiva !== "Tudo" && it.categoria !== catAtiva) return false;
      if (!t) return true;
      return normalizar(it.titulo + " " + it.descricao + " " + it.tags + " " +
                        it.categoria + " " + it.formato).indexOf(t) > -1;
    });

    conta.textContent = lista.length + (lista.length === 1 ? " item" : " itens");
    vazio.hidden = lista.length > 0;

    grade.innerHTML = lista.map(function (it, i) {
      var externo = /^https?:/.test(it.arquivo);
      var miolo = it.capa
        ? '<img src="' + it.capa + '" alt="" loading="lazy">'
        : '<span class="card__icone">' + (ICONES[it.tipo] || "▣") + "</span>";

      var baixar = externo
        ? '<a class="card__btn card__btn--1" href="' + it.arquivo + '" target="_blank" rel="noopener">Abrir</a>'
        : '<a class="card__btn card__btn--1" href="' + it.arquivo + '" download>Baixar</a>';

      return '<article class="card card--' + it.tipo + '">' +
        '<span class="card__capa"><span class="card__selo">' + it.categoria + "</span>" + miolo + "</span>" +
        '<span class="card__txt">' +
          '<span class="card__tit">' + it.titulo + "</span>" +
          '<p class="card__desc">' + it.descricao + "</p>" +
          '<span class="card__fmt">' + (it.formato || "") + "</span>" +
          '<span class="card__acoes">' + baixar +
            '<button type="button" class="card__btn card__btn--2" data-copiar="' + i + '">Copiar link</button>' +
          "</span>" +
        "</span>" +
      "</article>";
    }).join("");

    grade._lista = lista;
  }

  filtros.addEventListener("click", function (e) {
    var b = e.target.closest(".filtro");
    if (!b) return;
    Array.prototype.forEach.call(filtros.children, function (o) {
      o.classList.toggle("ativo", o === b);
    });
    catAtiva = b.dataset.cat;
    desenhar();
  });

  busca.addEventListener("input", function () { termo = busca.value; desenhar(); });

  grade.addEventListener("click", function (e) {
    var b = e.target.closest("[data-copiar]");
    if (!b) return;
    var it = grade._lista[+b.dataset.copiar];
    var url = /^https?:/.test(it.arquivo)
      ? it.arquivo
      : new URL(it.arquivo, location.href).href;
    navigator.clipboard.writeText(url).then(function () {
      mostrar("Link copiado");
    }).catch(function () {
      mostrar("Não consegui copiar. Use o botão Baixar.");
    });
  });

  var tempo;
  function mostrar(txt) {
    aviso.textContent = txt;
    aviso.classList.add("on");
    clearTimeout(tempo);
    tempo = setTimeout(function () { aviso.classList.remove("on"); }, 2200);
  }

  desenhar();
})();
