/* Folder Digital — Coronel Michello 20122
   JS mínimo: barra fixa, indicador do compromisso atual, pontos do Procon, compartilhar. */
(function () {
  var topbar = document.getElementById('topbar');
  var cover = document.getElementById('capa');
  var links = Array.prototype.slice.call(document.querySelectorAll('.topbar__bars a'));
  var sections = links.map(function (a) { return document.getElementById(a.dataset.target); });

  // 1) Grade de 131 postos com 45 autuados (dado do folder)
  var dots = document.getElementById('dots');
  if (dots) {
    var html = '';
    for (var i = 0; i < 131; i++) html += i < 45 ? '<i class="on"></i>' : '<i></i>';
    dots.innerHTML = html;
  }

  if (!('IntersectionObserver' in window)) { topbar.classList.add('is-on'); return; }

  // 2) Barra fixa aparece quando a capa sai da tela
  new IntersectionObserver(function (entries) {
    topbar.classList.toggle('is-on', !entries[0].isIntersecting);
  }, { threshold: 0.08 }).observe(cover);

  // 3) Segmento ativo = seção que cruza a faixa central da tela
  function setActive(id) {
    links.forEach(function (a) { a.classList.toggle('is-active', a.dataset.target === id); });
  }
  var watched = ['compromissos'].concat(sections.map(function (s) { return s.id; })).concat(['fim']);
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) setActive(e.target.id); });
  }, { rootMargin: '-45% 0px -50% 0px' });
  watched.forEach(function (id) { io.observe(document.getElementById(id)); });

  // 4) Compartilhar
  var share = document.getElementById('share');
  if (share) share.addEventListener('click', function () {
    var url = location.href.split('#')[0];
    var text = '5 compromissos. 60 ações. Conheça as propostas do Coronel Michello 20122 no folder digital: ';
    if (navigator.share) {
      navigator.share({ title: 'Compromissos com o DF · Coronel Michello 20122', text: text, url: url }).catch(function () {});
    } else {
      window.open('https://wa.me/?text=' + encodeURIComponent(text + url), '_blank', 'noopener');
    }
  });
})();
