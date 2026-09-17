/* Compromissos com o DF · abrir/fechar, rastreador de ações, contadores, compartilhar */
(function () {
  var cards = [].slice.call(document.querySelectorAll('.card'));
  var bars = [].slice.call(document.querySelectorAll('.tracker__bars i'));
  var seenEl = document.getElementById('seen');
  var hint = document.getElementById('hint');
  var tracker = document.getElementById('tracker');
  var seen = {};
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // atraso escalonado dos pontos do Procon
  document.querySelectorAll('.dots i').forEach(function (d, k) { d.style.setProperty('--d', (k * 6) + 'ms'); });

  function trackerOffset() { return tracker.getBoundingClientRect().height + 10; }

  function animateNumber(el, to, from) {
    var start = null, dur = 700;
    function step(t) {
      if (!start) start = t;
      var p = Math.min(1, (t - start) / dur), v = Math.round(from + (to - from) * (1 - Math.pow(1 - p, 3)));
      el.textContent = v;
      if (p < 1) requestAnimationFrame(step);
    }
    reduce ? (el.textContent = to) : requestAnimationFrame(step);
  }

  function markSeen(card) {
    var i = cards.indexOf(card);
    if (seen[i]) return;
    seen[i] = true;
    bars[i].classList.add('on');
    var n = Object.keys(seen).length;
    animateNumber(seenEl, n * 12, (n - 1) * 12);
    if (n === 5) { tracker.classList.add('done'); hint.textContent = 'Você viu tudo'; }
    else hint.textContent = 'Faltam ' + (5 - n);
  }

  function close(card, instant) {
    if (!card.classList.contains('open')) return;
    if (instant) card.classList.add('no-anim');
    card.classList.remove('open');
    card.querySelector('.card__head').setAttribute('aria-expanded', 'false');
    if (instant) { card.offsetHeight; card.classList.remove('no-anim'); }
  }

  function open(card, scroll) {
    // fecha os outros; os que ficam acima fecham na hora para a tela não "pular"
    var idx = cards.indexOf(card);
    cards.forEach(function (c, k) { if (c !== card) close(c, k < idx); });
    card.classList.add('open');
    card.querySelector('.card__head').setAttribute('aria-expanded', 'true');
    markSeen(card);
    if (scroll !== false) {
      var y = card.getBoundingClientRect().top + window.pageYOffset - trackerOffset();
      window.scrollTo({ top: y, behavior: reduce ? 'auto' : 'smooth' });
    }
    if (history.replaceState) history.replaceState(null, '', '#' + card.id);
  }

  cards.forEach(function (card) {
    card.querySelector('.card__head').addEventListener('click', function () {
      if (card.classList.contains('open')) {
        close(card);
        if (history.replaceState) history.replaceState(null, '', location.pathname + location.search);
      } else open(card);
    });
    card.querySelector('[data-close]').addEventListener('click', function () {
      close(card, true);
      var y = card.getBoundingClientRect().top + window.pageYOffset - trackerOffset();
      window.scrollTo({ top: y, behavior: 'auto' });
    });
    var next = card.querySelector('[data-open]');
    if (next) next.addEventListener('click', function (e) {
      e.preventDefault();
      open(document.getElementById(next.dataset.open));
    });
    var end = card.querySelector('[data-end]');
    if (end) end.addEventListener('click', function (e) {
      e.preventDefault();
      close(card, true);
      document.getElementById('fim').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
    });
  });

  // links diretos: michello.com.br/compromissos/#c4
  var target = location.hash && document.getElementById(location.hash.slice(1));
  if (target && target.classList.contains('card')) setTimeout(function () { open(target); }, 250);

  // contadores dos números de destaque quando entram na tela
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        var el = e.target, to = parseFloat(el.dataset.count), dec = el.dataset.fmt === 'dec', start = null;
        function step(t) {
          if (!start) start = t;
          var p = Math.min(1, (t - start) / 1100), v = to * (1 - Math.pow(1 - p, 3));
          el.textContent = dec ? v.toFixed(1).replace('.', ',') : Math.round(v).toLocaleString('pt-BR');
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      });
    }, { threshold: 0.6 });
    document.querySelectorAll('.num[data-count]').forEach(function (n) { io.observe(n); });
  }

  // compartilhar
  document.getElementById('share').addEventListener('click', function () {
    var url = 'https://michello.com.br/compromissos/';
    var text = '5 compromissos. 60 ações. Conheça as propostas do Coronel Michello 20122: ';
    if (navigator.share) navigator.share({ title: 'Compromissos com o DF', text: text, url: url }).catch(function () {});
    else window.open('https://wa.me/?text=' + encodeURIComponent(text + url), '_blank', 'noopener');
  });
})();
