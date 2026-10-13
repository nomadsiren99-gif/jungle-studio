const LOGO = '<svg viewBox="0 26 455 110" fill="currentColor" aria-hidden="true"><path d="M47.45,34.07v56.76c0,5.39-1.23,9.4-3.65,12.01-2.44,2.61-5.89,3.93-10.34,3.93s-7.6-1.29-9.98-3.86c-2.4-2.57-3.65-6.29-3.74-11.17H0c.1,6.54,1.42,12.26,3.99,17.12,2.57,4.89,6.41,8.65,11.51,11.3,5.1,2.67,11.3,3.99,18.63,3.99,11.4,0,20.13-2.99,26.19-8.94,6.06-5.97,9.08-14.49,9.08-25.56V30.19l-21.95,3.88Z"/><polygon points="76.33 28.95 76.33 49.86 69.39 51.07 47.45 54.95 19.73 59.84 19.73 38.96 47.45 34.07 69.39 30.19 76.33 28.95"/><path d="M152.2,51v71.53s-21.95,0-21.95,0l-.08-9.86c-5.59,8.5-15.24,12.53-25.41,11.56-13.34-1.27-20.61-10.32-21.04-23.72v-49.5s21.83,0,21.83,0l.02,41.53c.49,3.96.67,8.33,3.93,11.06,4.17,3.48,11.15,3.31,15.54.29,3.92-2.7,4.77-7.21,5.17-11.76l.02-41.11h21.96Z"/><path d="M200.61,67.42c-4.3-.24-8.24.71-11.01,3.69-2.46,2.65-3.1,6.11-3.5,9.76l-.02,41.66h-21.94s0-71.53,0-71.53h21.93s.03,10.34.03,10.34c5.91-8.84,15.47-13.15,25.85-12.08,13.23,1.36,20.42,9.96,21.12,23.29v49.99s-21.97,0-21.97,0l.02-41.58c-.07-7.29-2.93-13.11-10.51-13.53Z"/><path d="M293.98,51l-.1,8.66c-3.33-4.19-6.96-7.28-12.04-8.88-16.28-5.11-34.14,1.26-38.71,18.75-2.12,8.09-1.85,16.65,1.18,24.42,5.67,14.53,21.81,19.27,36.39,15.44,5.53-1.46,9.87-4.74,13.15-9.37.17,3.38.27,6.59-.69,9.74-4.19,13.67-33.65,9.77-46.38,2.24l-.02,20.13c15.22,6.73,35.8,7.89,50.33,2.07,7.72-3.08,13.77-8.81,16.68-16.16,1.26-3.11,1.92-6.51,1.95-10.14l.15-31.95.12-24.97h-22ZM279.08,95.01c-8.31,0-15.07-6.73-15.07-15.05s6.76-15.07,15.07-15.07,15.07,6.73,15.07,15.07-6.76,15.05-15.07,15.05Z"/><polygon points="349.62 121.85 349.62 122.54 327.64 122.54 327.64 35.76 337.09 34.08 349.6 31.86 349.6 52.75 349.62 121.85"/><path d="M411.38,95.63c-1.09,4.17-2.91,7.06-5.9,9.74-3.21,2.27-6.81,3.08-10.58,2.89-9.37-.32-13.64-7.38-14.18-16.68l46.95-.02c2.05-18.4-2.07-35.45-20.38-40.95-11.74-2.96-24.15-1.53-33.45,4.69-5.23,3.48-9.47,8.46-12.09,15.05-4.91,12.38-4.22,28.47,3.26,39.72,3.26,4.91,7.82,8.91,13.79,11.25,10.34,4.1,22.25,4.22,32.64.05,8.71-3.5,14.41-11.45,16.7-20.2l-16.75-5.53ZM397.15,63.73c6.64.39,11.25,5.28,11.47,11.92.05,1.41-.3,3.28-2.39,3.28l-25.43.02c.47-9.67,6.46-15.84,16.36-15.22Z"/><path class="d" d="M434.17,111.84c0-5.61,4.09-10.11,10.01-10.11s10.01,4.5,10.01,10.11-4.09,10.11-10.01,10.11-10.01-4.42-10.01-10.11Z"/></svg>';
// Nav logo: J. icon at the top, the rest of the wordmark slides out once you scroll (after dibesu-portfolio).
const LOGO_NAV = '<svg class="lj" viewBox="0 26 78 110" fill="currentColor" aria-hidden="true"><path d="M47.45,34.07v56.76c0,5.39-1.23,9.4-3.65,12.01-2.44,2.61-5.89,3.93-10.34,3.93s-7.6-1.29-9.98-3.86c-2.4-2.57-3.65-6.29-3.74-11.17H0c.1,6.54,1.42,12.26,3.99,17.12,2.57,4.89,6.41,8.65,11.51,11.3,5.1,2.67,11.3,3.99,18.63,3.99,11.4,0,20.13-2.99,26.19-8.94,6.06-5.97,9.08-14.49,9.08-25.56V30.19l-21.95,3.88Z"/><polygon points="76.33 28.95 76.33 49.86 69.39 51.07 47.45 54.95 19.73 59.84 19.73 38.96 47.45 34.07 69.39 30.19 76.33 28.95"/></svg><span class="lrest"><svg viewBox="80 26 350 110" fill="currentColor" aria-hidden="true"><path d="M152.2,51v71.53s-21.95,0-21.95,0l-.08-9.86c-5.59,8.5-15.24,12.53-25.41,11.56-13.34-1.27-20.61-10.32-21.04-23.72v-49.5s21.83,0,21.83,0l.02,41.53c.49,3.96.67,8.33,3.93,11.06,4.17,3.48,11.15,3.31,15.54.29,3.92-2.7,4.77-7.21,5.17-11.76l.02-41.11h21.96Z"/><path d="M200.61,67.42c-4.3-.24-8.24.71-11.01,3.69-2.46,2.65-3.1,6.11-3.5,9.76l-.02,41.66h-21.94s0-71.53,0-71.53h21.93s.03,10.34.03,10.34c5.91-8.84,15.47-13.15,25.85-12.08,13.23,1.36,20.42,9.96,21.12,23.29v49.99s-21.97,0-21.97,0l.02-41.58c-.07-7.29-2.93-13.11-10.51-13.53Z"/><path d="M293.98,51l-.1,8.66c-3.33-4.19-6.96-7.28-12.04-8.88-16.28-5.11-34.14,1.26-38.71,18.75-2.12,8.09-1.85,16.65,1.18,24.42,5.67,14.53,21.81,19.27,36.39,15.44,5.53-1.46,9.87-4.74,13.15-9.37.17,3.38.27,6.59-.69,9.74-4.19,13.67-33.65,9.77-46.38,2.24l-.02,20.13c15.22,6.73,35.8,7.89,50.33,2.07,7.72-3.08,13.77-8.81,16.68-16.16,1.26-3.11,1.92-6.51,1.95-10.14l.15-31.95.12-24.97h-22ZM279.08,95.01c-8.31,0-15.07-6.73-15.07-15.05s6.76-15.07,15.07-15.07,15.07,6.73,15.07,15.07-6.76,15.05-15.07,15.05Z"/><polygon points="349.62 121.85 349.62 122.54 327.64 122.54 327.64 35.76 337.09 34.08 349.6 31.86 349.6 52.75 349.62 121.85"/><path d="M411.38,95.63c-1.09,4.17-2.91,7.06-5.9,9.74-3.21,2.27-6.81,3.08-10.58,2.89-9.37-.32-13.64-7.38-14.18-16.68l46.95-.02c2.05-18.4-2.07-35.45-20.38-40.95-11.74-2.96-24.15-1.53-33.45,4.69-5.23,3.48-9.47,8.46-12.09,15.05-4.91,12.38-4.22,28.47,3.26,39.72,3.26,4.91,7.82,8.91,13.79,11.25,10.34,4.1,22.25,4.22,32.64.05,8.71-3.5,14.41-11.45,16.7-20.2l-16.75-5.53ZM397.15,63.73c6.64.39,11.25,5.28,11.47,11.92.05,1.41-.3,3.28-2.39,3.28l-25.43.02c.47-9.67,6.46-15.84,16.36-15.22Z"/></svg></span><svg class="ld" viewBox="431 26 24 110" aria-hidden="true"><path class="d" d="M434.17,111.84c0-5.61,4.09-10.11,10.01-10.11s10.01,4.5,10.01,10.11-4.09,10.11-10.01,10.11-10.01-4.42-10.01-10.11Z"/></svg>';
// Shared chrome (nav, footer, transitions) + page renderers. Brand rules live in style.css.
// Real imagery comes from assets/work/<slug>/ via manifest.js (run scripts/build-images.py).
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const page = document.body.dataset.page;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
if (typeof IMAGES !== 'undefined') PROJECTS.forEach(p => { const m = IMAGES[p.slug]; if (m) { p.img = m.cover; p.gallery = m.gallery; } });

const pic = (src, alt, eager) => `<img src="${src}" alt="${alt}" ${eager ? '' : 'loading="lazy" '}decoding="async">`;
const art = p => p.img ? `<div class="art">${pic(p.img, p.title)}</div>` : `<div class="art ${p.art}"><b>${p.word}</b></div>`;
const sector = p => `${CATS[p.cat]}${p.tag ? ` / ${p.tag}` : ''}`;
const ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

const card = p => `<a class="card reveal" data-c="${p.cat}" href="project.html?p=${p.slug}">
  <div class="thumb">${art(p)}</div>
  <div class="meta"><div><h3 class="w">${p.title}</h3><p>${sector(p)}</p></div><span class="n">${p.year}</span></div></a>`;

// ── chrome
document.body.insertAdjacentHTML('afterbegin', `
<div id="curtain" aria-hidden="true">${LOGO.replace('<svg', '<svg class="jm"')}</div>
<nav><a class="logo" href="index.html" aria-label="Jungle, home">${LOGO_NAV}</a>
  <button class="menu" aria-expanded="false" aria-controls="nav-links">Menu</button>
  <div class="links" id="nav-links">
    <a href="work.html" data-p="work">Work</a><a href="services.html" data-p="services">Services</a>
    <a href="contact.html" data-p="contact">Contact</a><a class="btn" href="contact.html">Start a project</a></div></nav>`);
document.body.insertAdjacentHTML('beforeend', `
<footer class="cta">${page === 'contact' ? '' : `
  <p class="cta-line reveal">Good ideas deserve good execution<span class="dot">.</span></p>
  <div class="cta-row"><a class="btn" href="contact.html">Start a project <span aria-hidden="true">→</span></a>
  <a class="chip chip-lg" href="mailto:ronij.jungle@gmail.com">ronij.jungle@gmail.com</a></div>`}
  <div class="foot">
    <div>${LOGO}<small>A design-led creative agency.<br>Design, motion, digital, content and AI services.</small></div>
    <div><span class="label">Site</span><a href="work.html">Work</a><a href="services.html">Services</a><a href="contact.html">Contact</a></div>
    <div><span class="label">Follow</span><a href="https://instagram.com/jungledesigns">Instagram</a><a href="https://designbyjungle.com">designbyjungle.com</a></div>
    <div><span class="label">Say hello</span><a href="mailto:ronij.jungle@gmail.com">ronij.jungle@gmail.com</a><small>© 2026 Jungle.</small></div>
  </div></footer>`);
$$(`nav [data-p="${page}"]`).forEach(a => { a.classList.add('cur'); a.setAttribute('aria-current', 'page'); });
const nav = $('nav'), menu = $('nav .menu');
menu.onclick = () => { const o = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', o); menu.textContent = o ? 'Close' : 'Menu'; };
const onScroll = () => nav.classList.toggle('scrolled', scrollY > 40);
addEventListener('scroll', onScroll, { passive: true }); onScroll();

// Every headline ends with the full stop (Brand Book 03 / Graphic language).
$$('h1.x, h2.x, .next .x').forEach(h => {
  if (h.querySelector('.dot')) return;
  h.innerHTML = h.innerHTML.trim().replace(/[.!?]?$/, m => `<span class="dot">${m === '' || m === '.' ? '.' : m}</span>`);
});
// Type builds word by word (hero titles only: one authored moment per page).
$$('.words').forEach(h => {
  let i = 0;
  h.innerHTML = h.innerHTML.replace(/(<span class="dot">.*?<\/span>)|([^\s<]+)/g, (m, dot, w) => dot ? dot : `<span class="wd" style="--i:${i++}">${w}</span>`);
  h.classList.add('rise');
});

// ── transitions
setTimeout(() => document.body.classList.add('ready'), 60);
function go() { setTimeout(() => document.body.classList.add('go'), 60); }
let seen = false; try { seen = sessionStorage.getItem('jg-pre'); sessionStorage.setItem('jg-pre', 1); } catch (e) {}
if (!seen && !reduce) {
  // Preloader: the wordmark builds letter by letter, then the dot lands with one bounce.
  const pre = document.createElement('div'); pre.id = 'pre'; pre.setAttribute('aria-hidden', 'true'); pre.innerHTML = LOGO;
  $$('path', pre).forEach((p, i) => p.style.setProperty('--i', i));
  document.body.prepend(pre); document.body.classList.add('preloading');
  setTimeout(() => { pre.classList.add('done'); document.body.classList.remove('preloading'); go(); setTimeout(() => pre.remove(), 700); }, 1500);
} else go();
addEventListener('pageshow', e => e.persisted && document.body.classList.replace('leaving', 'ready'));
document.addEventListener('click', e => {
  const a = e.target.closest('a'); if (!a || reduce) return;
  const h = a.getAttribute('href');
  if (!h || h.startsWith('#') || /^(mailto|tel|https?):/.test(h) || a.target || e.metaKey || e.ctrlKey || e.shiftKey) return;
  e.preventDefault(); document.body.classList.replace('ready', 'leaving'); setTimeout(() => location.href = h, 420);
});

// ── page renderers
// Services (mirrors superside.com's list, without branding and production services).
const DISCIPLINES = [
  ['Creative Design', 'Design that shows up.', ['Ad creative', 'Social media creative', 'Presentation design', 'Illustration design', 'eBooks and report design', 'Print design', 'Packaging and merchandise design']],
  ['Motion Design', 'Motion that moves.', ['Motion design', 'Video editing']],
  ['Digital Design', 'Built for every screen.', ['Web design', 'Email creation', 'Design systems', 'Product design', 'Immersive experiences']],
  ['Content and Campaigns', 'Words and plans that land.', ['Copywriting', 'Campaign strategy']],
  ['AI Services', 'Faster, with a human eye.', ['AI-powered creative', 'AI consulting', 'Automation']],
];
const SERVICE_COUNT = DISCIPLINES.reduce((n, d) => n + d[2].length, 0);

if (page === 'home') {
  // Hero wall (after superside.com): 3 columns drifting ~25px/s, neighbours opposite. Lists are doubled so -50% loops.
  const tiles = PROJECTS.filter(p => p.img).flatMap(p => [p.img, ...(p.gallery || []).slice(0, 3)].map(src => ({ p, src })));
  $('#wall').innerHTML = [0, 1, 2].map(c => {
    const cells = tiles.filter((_, i) => i % 3 === c).map((t, i) =>
      `<a class="tile${i % 3 === 1 ? ' tall' : ''}" href="project.html?p=${t.p.slug}" tabindex="-1">${pic(t.src, '', true)}<span>${t.p.title}</span></a>`).join('');
    return `<div class="wcol${c % 2 ? ' down' : ''}"><div class="wtrack">${cells}${cells}</div></div>`;
  }).join('');
  const speed = () => $$('.wtrack').forEach(t => t.style.animationDuration = (t.scrollHeight / 2 / 25) + 's');
  speed(); addEventListener('load', speed);

  // Clients: generated monogram marks (replace with real client logos when available).
  const mark = n => `<span class="mark" role="img" aria-label="${n}"><svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="44" height="44" rx="12"/><text x="24" y="30" text-anchor="middle" fill="currentColor" stroke="none" font-family="PP Agrandir,sans-serif" font-size="16">${n.split(' ').map(w => w[0]).join('').slice(0, 2)}</text></svg>${n}</span>`;
  const clients = [...new Set(PROJECTS.map(p => p.client.split(',')[0].replace(/ (Live|Festival|Football Club|Streetwear|Records|Boxing Promotions|Network)$/, '')))];
  $('#logos').innerHTML = clients.map(mark).join('').repeat(2);

  // Selected work: CSS scroll-driven pan; JS only measures the travel distance.
  const feat = PROJECTS.slice(0, 6), pan = $('#pan');
  pan.insertAdjacentHTML('beforeend', feat.map(p => `<a class="pan-card" href="project.html?p=${p.slug}">
    <div class="pan-img">${art(p)}</div><div class="cap"><h3 class="w">${p.title}</h3><p>${sector(p)}</p></div></a>`).join('') +
    `<a class="pan-end" href="work.html"><span class="x">All ${PROJECTS.length} projects</span><span>See the work ${ARROW.replace('<svg', '<svg width="20" height="20" style="vertical-align:middle"')}</span></a>`);
  const measure = () => { const d = Math.max(0, pan.scrollWidth - innerWidth); pan.style.setProperty('--dist', d + 'px'); $('.pan').style.setProperty('--len', d + 'px'); };
  measure(); addEventListener('resize', measure); document.fonts && document.fonts.ready.then(measure);

  $$('[data-count]').forEach(e => e.textContent = SERVICE_COUNT);
  $('#drows').innerHTML = DISCIPLINES.map(([t, v, list]) => `<a class="drow reveal" href="services.html#${t.split(' ')[0].toLowerCase()}">
    <div><h3 class="x">${t}</h3><p class="v">${v}</p></div><ul>${list.map(x => `<li>${x}</li>`).join('')}</ul><span class="go">${ARROW}</span></a>`).join('');

  // Comparison table: Jungle. vs the usual alternatives. Rows rise in; ticks draw themselves.
  const I = {
    hire: '<path d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM2 21v-1a6 6 0 0 1 12 0v1M16 3.5a4 4 0 0 1 0 7.5M22 21v-1a6 6 0 0 0-4-5.6"/>',
    agency: '<path d="M3 21V7l9-4 9 4v14M9 21v-6h6v6M3 21h18"/>',
    free: '<path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21a8 8 0 0 1 16 0"/>',
    ai: '<path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8zM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
  };
  const ico = d => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
  const tick = c => `<svg class="tick" viewBox="0 0 26 26" style="--c:${c}" role="img" aria-label="Yes"><path d="M6 13.5l4.5 4.5L20 8.5"/></svg>`;
  const ROWS = [
    ['Jungle.', 'Designers, motion artists, writers and AI specialists working alongside your team, on your brand, on your dates.', null, [1, 1, 1, 1, 1, 1]],
    ['In-house hire', 'One hire rarely covers design, motion, web and copy, and hiring takes months.', 'hire', [0, 0, 1, 1, 0, 1]],
    ['Big agencies', 'Strong work, but slow, costly and built around rigid process.', 'agency', [0, 0, 1, 1, 0, 0]],
    ['Freelancers', 'Great for one-offs, harder to rely on for steady volume.', 'free', [1, 1, 1, 0, 1, 1]],
    ['AI tools only', 'Fast and cheap, but no judgement, no brand sense, no craft.', 'ai', [1, 1, 0, 0, 1, 0]],
  ];
  const jm = LOGO_NAV.split('<span')[0].replace('class="lj"', 'class="lj" style="width:28px;height:auto;color:var(--paper)"');
  $('#vs-body').innerHTML = ROWS.map(([t, d, ic, v], r) => `<tr class="${r ? '' : 'us'}"><td><div class="who"><span class="ic">${r ? ico(I[ic]) : `<span style="display:flex;align-items:flex-end;gap:2px">${jm}<i style="width:9px;height:9px;border-radius:50%;background:var(--green);margin-bottom:2px"></i></span>`}</span><div><b>${t}</b><p>${d}</p></div></div></td>${v.map((y, c) => `<td>${y ? tick(c) : '<span class="no" role="img" aria-label="No"></span>'}</td>`).join('')}</tr>`).join('');
  const rio = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { setTimeout(() => e.target.classList.add('in'), [...e.target.parentNode.children].indexOf(e.target) * 110); rio.unobserve(e.target); } }), { threshold: .4 });
  $$('#vs-body tr').forEach(tr => reduce ? tr.classList.add('in') : rio.observe(tr));

  // Expanding case cards: hover (or focus) widens one, revealing the result.
  const cases = PROJECTS.filter(p => p.img).slice(0, 4);
  $('#xcards').innerHTML = cases.map((p, i) => `<a class="xcard${i ? '' : ' open'}" href="project.html?p=${p.slug}">${art(p)}
    <div class="xc-body"><p class="xc-tag">${sector(p)}</p><h3 class="w">${p.title}</h3>
    <div class="xc-more"><div><p>${p.result}</p><span>Read the case ${ARROW.replace('<svg', '<svg width="16" height="16"')}</span></div></div></div></a>`).join('');
  $$('.xcard').forEach(c => { const open = () => $$('.xcard').forEach(x => x.classList.toggle('open', x === c)); c.onmouseenter = open; c.onfocus = open; });
}

if (page === 'services') {
  const ex = { 'Creative Design': 'janakpur-bolts', 'Motion Design': 'nepathya-auckland', 'Digital Design': 'trn-fest', 'Content and Campaigns': '1974-ad-tour', 'AI Services': 'lumbini-all-stars' };
  $('#disciplines').innerHTML = DISCIPLINES.map(([t, v, list], i) => { const p = PROJECTS.find(x => x.slug === ex[t]) || PROJECTS[i];
    return `<section class="split rule reveal" id="${t.split(' ')[0].toLowerCase()}" style="padding-block:clamp(56px,7vw,112px);align-items:start">
      <a class="card" href="project.html?p=${p.slug}"><div class="thumb">${art(p)}</div><div class="meta"><div><h3 class="w" style="font-size:17px">${p.title}</h3></div></div></a>
      <div><h2 class="x" style="font-size:var(--t-head)">${t}.</h2><p class="v" style="font-size:var(--t-voice);color:var(--green);margin-top:8px">${v}</p>
      <div class="tags mt">${list.map(x => `<span>${x}</span>`).join('')}</div></div></section>`; }).join('');
  // headline dots for the injected h2s
  $$('#disciplines h2.x').forEach(h => h.innerHTML = h.innerHTML.replace(/\.$/, '<span class="dot">.</span>'));
}

if (page === 'work') {
  const grid = $('#grid'), list = $('#list');
  grid.innerHTML = PROJECTS.map(card).join('');
  list.innerHTML = PROJECTS.map((p, i) => `<a href="project.html?p=${p.slug}" data-c="${p.cat}" data-i="${i}">
    <h3 class="w">${p.title}</h3><span class="muted">${sector(p)}</span><span class="muted">${p.scope.slice(0, 2).join(', ')}</span><span class="n muted">${p.year}</span></a>`).join('');
  const counts = { all: PROJECTS.length }; PROJECTS.forEach(p => counts[p.cat] = (counts[p.cat] || 0) + 1);
  $$('[data-f]').forEach(b => b.insertAdjacentHTML('beforeend', `<sup>${counts[b.dataset.f] || 0}</sup>`));
  const apply = f => {
    $$('[data-f]').forEach(x => { x.classList.toggle('on', x.dataset.f === f); x.setAttribute('aria-pressed', x.dataset.f === f); });
    $$('#grid .card, #list a').forEach(c => c.hidden = f !== 'all' && c.dataset.c !== f);
  };
  $$('[data-f]').forEach(b => b.onclick = () => apply(b.dataset.f));
  const f0 = new URLSearchParams(location.search).get('f'); apply(f0 && CATS[f0] ? f0 : 'all');
  $$('[data-v]').forEach(b => b.onclick = () => {
    $$('[data-v]').forEach(x => { x.classList.toggle('on', x === b); x.setAttribute('aria-pressed', x === b); });
    grid.hidden = b.dataset.v !== 'grid'; list.hidden = b.dataset.v !== 'list';
  });
  const peek = $('#peek');
  list.addEventListener('mousemove', e => { peek.style.left = e.clientX + 'px'; peek.style.top = e.clientY + 'px'; });
  $$('#list a').forEach(a => {
    a.onmouseenter = () => { peek.innerHTML = art(PROJECTS[a.dataset.i]); peek.classList.add('on'); };
    a.onmouseleave = () => peek.classList.remove('on');
  });
}

if (page === 'project') {
  const slug = new URLSearchParams(location.search).get('p');
  const i = Math.max(0, PROJECTS.findIndex(p => p.slug === slug));
  const p = PROJECTS[i], nx = PROJECTS[(i + 1) % PROJECTS.length];
  document.title = `${p.title} | Jungle.`;
  const alt = ['a1', 'a2', 'a3', 'a4', 'a5', 'a7', 'a8', 'a9'].filter(a => a !== p.art);
  const g = n => `<div class="g reveal">${p.gallery && p.gallery[n] ? `<div class="art">${pic(p.gallery[n], `${p.title}, image ${n + 1}`)}</div>` : art({ ...p, img: null, art: alt[(i + n) % alt.length] })}</div>`;
  const nG = p.gallery && p.gallery.length ? p.gallery.length : 5;
  $('#cs').innerHTML = `
  <header class="ph"><h1 class="x words">${p.title}</h1></header>
  <div class="cs-hero${p.img ? ' real' : ''}">${p.img ? `<div class="blur" style="background-image:url('${p.img}')"></div>${pic(p.img, p.title, true)}` : art(p)}</div>
  <div class="facts">
    <div><span>Client</span>${p.client}</div><div><span>Industry</span>${sector(p)}</div>
    <div><span>Year</span>${p.year}</div><div><span>What we made</span>${p.scope.join(', ')}</div></div>
  <div class="pad sec" style="padding-top:clamp(48px,6vw,96px)">
    <div class="split rule reveal"><span class="label">The brief</span><p class="quote">${p.brief}</p></div>
    <div class="split rule reveal"><span class="label">The idea</span><p class="idea">${p.idea}</p></div>
  </div>
  <div class="gallery${p.gallery && p.gallery.length ? ' real' : ''}">${[...Array(nG).keys()].map(g).join('')}</div>
  <div class="pad sec"><div class="split reveal"><span class="label">The result</span><p class="quote">${p.result}</p></div></div>
  <a class="next" href="project.html?p=${nx.slug}"><span class="label">Next project</span><span class="x">${nx.title}</span></a>`;
  $$('#cs h1.x, #cs .next .x').forEach(h => { h.innerHTML += '<span class="dot">.</span>'; });
  $$('#cs .words').forEach(h => { let k = 0; h.innerHTML = h.innerHTML.replace(/(<span class="dot">.*?<\/span>)|([^\s<]+)/g, (m, d, w) => d || `<span class="wd" style="--i:${k++}">${w}</span>`); h.classList.add('rise'); });
}

// ── reveal on scroll + counters
const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return; e.target.classList.add('in');
  const n = e.target.querySelector('[data-n]');
  if (n && !reduce) { const to = +n.dataset.n; let k = 0; const t = setInterval(() => { n.textContent = Math.round(to * (++k / 30)) + (k >= 30 ? (n.dataset.s || '') : ''); if (k >= 30) clearInterval(t); }, 20); }
  else if (n) n.textContent = n.dataset.n + (n.dataset.s || '');
  io.unobserve(e.target);
}), { threshold: .15 });
$$('.reveal').forEach(el => io.observe(el));

// ── contact: validate, then open the visitor's mail app with the brief (no backend)
const form = $('#brief');
if (form) form.onsubmit = e => {
  e.preventDefault(); const d = new FormData(form), err = $('#f-err');
  const ok = (d.get('Name') || '').trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.get('Email') || '');
  err.hidden = !!ok; if (!ok) { (d.get('Name') || '').trim() ? $('#f-mail').focus() : $('#f-name').focus(); return; }
  const body = [...d].map(([k, v]) => `${k}: ${v}`).join('\n');
  location.href = `mailto:ronij.jungle@gmail.com?subject=${encodeURIComponent('New brief: ' + (d.get('Company') || d.get('Name')))}&body=${encodeURIComponent(body)}`;
};
