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

// Services mega menu (layout after superside.com's nav; Jungle services and copy).
const IC = {
  ad: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/>', social: '<rect x="4" y="4" width="16" height="16" rx="5"/><circle cx="12" cy="12" r="3.5"/><circle cx="16.8" cy="7.2" r=".6"/>',
  pres: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M12 16v4M8 20h8"/>', ill: '<path d="M4 20l4-1L19 8l-3-3L5 16z"/><path d="M14 7l3 3"/>',
  book: '<path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3z"/><path d="M5 17a3 3 0 0 1 3-3h11"/>', print: '<path d="M7 9V4h10v5M7 17H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"/><rect x="7" y="14" width="10" height="6"/>',
  pack: '<path d="M4 8l8-4 8 4v8l-8 4-8-4z"/><path d="M4 8l8 4 8-4M12 12v8"/>', motion: '<circle cx="12" cy="12" r="8"/><path d="M10 9l5 3-5 3z"/>',
  video: '<rect x="3" y="6" width="13" height="12" rx="2"/><path d="M16 10l5-3v10l-5-3"/>', mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  web: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 6.5h.01M10 6.5h.01"/>', sys: '<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><circle cx="16.5" cy="16.5" r="3.5"/>',
  prod: '<rect x="7" y="3" width="10" height="18" rx="2.5"/><path d="M11 18h2"/>', copy: '<path d="M5 6h14M5 10h14M5 14h9M5 18h6"/>', imm: '<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M12 12l8-4.5M12 12v9M12 12L4 7.5"/>',
  ai: '<path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z"/>', chat: '<path d="M5 5h14v10H9l-4 4z"/>', auto: '<path d="M4 12a8 8 0 0 1 14-5.3L20 9M20 4v5h-5M20 12a8 8 0 0 1-14 5.3L4 15M4 20v-5h5"/>',
  camp: '<path d="M4 10v4h3l7 4V6L7 10z"/><path d="M18 9a4 4 0 0 1 0 6"/>',
};
const MENU = [
  [['Creative design services', 'g', 'creative'], [
    ['Ad creative', 'Scroll-stopping ads for every placement', 'ad'], ['Social media creative', 'Posts, stories and carousels that feel like you', 'social'],
    ['Presentation design', 'Decks people actually want to sit through', 'pres'], ['Illustration design', 'Drawn worlds that carry your story', 'ill'],
    ['eBooks and report design', 'Long reads, made easy to read', 'book'], ['Print design', 'Posters, flyers and event materials', 'print'],
    ['Packaging and merchandise design', 'Kits, tees, scarves and everything fans keep', 'pack']]],
  [['Motion and digital services', 'i', 'motion'], [
    ['Motion design', 'Animated type, logos and social motion', 'motion'], ['Video editing', 'Reels, promos, cutdowns and versions', 'video'],
    ['Email creation', 'Emails that get opened and clicked', 'mail'], ['Web design', 'Websites and landing pages built to convert', 'web'],
    ['Design systems', 'Templates and rules that keep work consistent', 'sys', 1], ['Product design', 'Clear, friendly app and product screens', 'prod', 1],
    ['Copywriting', 'Words that sound like you, only sharper', 'copy', 1], ['Immersive experiences', 'Stage visuals, LED screens and 3D moments', 'imm']]],
  [['AI services', 'm', 'ai'], [
    ['AI-powered creative', 'Human craft, sped up with AI', 'ai'], ['AI consulting', 'Help your team work well with AI', 'chat'],
    ['Automation', 'Resizing and versioning on autopilot', 'auto', 1]],
   ['Marketing services', 'p', 'content'], [['Campaign strategy', 'The plan and concept behind the launch', 'camp', 1]]],
];

// ── single service pages (service.html?s=<slug>)
const slugify = t => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const SVC = {
  'Ad creative': [['Static and animated ads', 'Every size for Meta, Google, TikTok and YouTube', 'Fresh variations to test and refresh', 'Built to your brand and your offer'], 'sport'],
  'Social media creative': [['Feed posts, stories and carousels', 'Matchday, launch and event templates', 'A steady weekly content calendar', 'Captions written to match'], 'sport'],
  'Presentation design': [['Pitch and sales decks', 'Company and event profiles', 'Editable templates for your team', 'Charts and data made readable'], ''],
  'Illustration design': [['Custom illustrations and characters', 'Poster and key-art illustration', 'Icons and spot graphics', 'Styles that fit your existing brand'], 'event'],
  'eBooks and report design': [['Annual and impact reports', 'eBooks and guides', 'Long-form layouts that stay readable', 'Print-ready and digital versions'], ''],
  'Print design': [['Posters, flyers and banners', 'Event signage and wayfinding', 'Brochures and menus', 'Print-ready files, checked'], 'event'],
  'Packaging and merchandise design': [['Jerseys and team kits', 'Scarves, tees and fan merch', 'Packaging and labels', 'Mockups before anything is printed'], 'sport'],
  'Motion design': [['Animated posts and reels', 'Kinetic type and logo animation', 'Countdown and announcement loops', 'LED and stage visuals'], 'event'],
  'Video editing': [['Short-form reels and shorts', 'Promo and highlight edits', 'Cutdowns for every platform', 'Subtitles, music and finishing'], 'event'],
  'Email creation': [['Newsletter and campaign emails', 'Reusable email templates', 'Mobile-first layouts', 'Copy and subject lines'], 'digital'],
  'Web design': [['Websites and landing pages', 'Event and ticketing pages', 'Responsive, fast layouts', 'Hand-off ready for developers'], 'digital'],
  'Design systems': [['Template libraries for your team', 'Social and print systems', 'Usage rules that stay simple', 'Files organised to last'], 'sport'],
  'Product design': [['App and product screens', 'Clear user flows', 'Clickable prototypes', 'Specs your developers can use'], 'digital'],
  'Copywriting': [['Headlines and taglines', 'Social captions and scripts', 'Website and email copy', 'Written in your voice'], ''],
  'Immersive experiences': [['Stage and LED screen visuals', '3D scenes and moments', 'Event environments', 'Content timed to the show'], 'event'],
  'AI-powered creative': [['Faster variations and resizes', 'AI-assisted concepts, finished by designers', 'Image generation done with care', 'Human review on everything'], ''],
  'AI consulting': [['Where AI fits in your creative process', 'Tool setup and workflows', 'Team training sessions', 'Guidelines for safe use'], ''],
  'Automation': [['Automatic resizing and versioning', 'Template-driven production', 'Batch exports for every platform', 'More output from the same team'], 'sport'],
  'Campaign strategy': [['Launch and campaign planning', 'Concepts and key messages', 'Channel and content plans', 'Timelines your team can follow'], 'event'],
};
const svgI = k => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${IC[k]}</svg>`;
const mItem = ([t, d, ic, isNew]) => `<li><a href="service.html?s=${slugify(t)}"><span><b>${t}${isNew ? ' <em>New</em>' : ''}</b><small>${d}</small></span>${svgI(ic)}</a></li>`;
const mHead = ([t, c, a]) => `<a class="mh mh-${c}" href="services.html#${a}">${t} <span aria-hidden="true">↗</span></a>`;
const MENU_GROUP = {};
// Services (mirrors superside.com's list, without branding and production services).
const DISCIPLINES = [
  ['Creative Design', 'Design that shows up.', ['Ad creative', 'Social media creative', 'Presentation design', 'Illustration design', 'eBooks and report design', 'Print design', 'Packaging and merchandise design']],
  ['Motion Design', 'Motion that moves.', ['Motion design', 'Video editing']],
  ['Digital Design', 'Built for every screen.', ['Web design', 'Email creation', 'Design systems', 'Product design', 'Immersive experiences']],
  ['Content and Campaigns', 'Words and plans that land.', ['Copywriting', 'Campaign strategy']],
  ['AI Services', 'Faster, with a human eye.', ['AI-powered creative', 'AI consulting', 'Automation']],
];
const SERVICE_COUNT = DISCIPLINES.reduce((n, d) => n + d[2].length, 0);
DISCIPLINES.forEach(([g, , list]) => list.forEach(n => MENU_GROUP[n] = g.split(' ')[0].toLowerCase()));
const MEGA = `<div class="mega" id="mega"><div class="mega-in">${MENU.map(col => { let h = ''; for (let i = 0; i < col.length; i += 2) h += mHead(col[i]) + `<ul>${col[i + 1].map(mItem).join('')}</ul>`; return `<div class="mcol">${h}</div>`; }).join('')}</div></div>`;

// ── chrome
document.body.insertAdjacentHTML('afterbegin', `
<a class="skip" href="#main">Skip to content</a>
<div id="curtain" aria-hidden="true">${LOGO.replace('<svg', '<svg class="jm"')}</div>
<nav><a class="logo" href="index.html" aria-label="Jungle, home">${LOGO_NAV}</a>
  <button class="menu" aria-expanded="false" aria-controls="nav-links">Menu</button>
  <div class="links" id="nav-links">
    <a href="work.html" data-p="work">Work</a><div class="has-mega"><button class="mega-btn" data-p="services" aria-expanded="false" aria-controls="mega">Services <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></button>${MEGA}</div>
    <a href="contact.html" data-p="contact">Contact</a><a class="btn" href="contact.html">Start a project</a></div></nav>`);
document.body.insertAdjacentHTML('beforeend', `
<footer class="cta">${page === 'contact' || page === 'home' ? '' : `
  <p class="cta-line reveal">Good ideas deserve good execution<span class="dot">.</span></p>
  <div class="cta-row"><a class="btn" href="contact.html">Start a project <span aria-hidden="true">→</span></a>
  <a class="chip chip-lg" href="mailto:ronij.jungle@gmail.com">ronij.jungle@gmail.com</a></div>`}
  <div class="foot">
    <div>${LOGO}<small>A design-led creative agency.<br>Design, motion, digital, content and AI services.</small></div>
    <div><span class="label">Site</span><a href="work.html">Work</a><a href="services.html">Services</a><a href="contact.html">Contact</a></div>
    <div><span class="label">Follow</span><a href="https://instagram.com/jungledesigns">Instagram</a><a href="https://designbyjungle.com">designbyjungle.com</a></div>
    <div><span class="label">Say hello</span><a href="mailto:ronij.jungle@gmail.com">ronij.jungle@gmail.com</a><small>© 2026 Jungle.</small></div>
  </div></footer>`);
{ const m = $('main') || $('.ph'); if (m && !m.id) m.id = 'main'; }
// Long-running loops (wall, marquees) get a pause control.
if ($('.wtrack, .logo-track, .wrow')) {
  document.body.insertAdjacentHTML('beforeend', '<button class="motion-toggle" aria-pressed="false">Pause motion</button>');
  const mt = $('.motion-toggle'); mt.onclick = () => { const s = document.body.classList.toggle('still'); mt.setAttribute('aria-pressed', s); mt.textContent = s ? 'Play motion' : 'Pause motion'; };
}
$$(`nav [data-p="${page}"]`).forEach(a => { a.classList.add('cur'); a.setAttribute('aria-current', 'page'); });
const nav = $('nav'), menu = $('nav .menu');
menu.onclick = () => { const o = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', o); menu.textContent = o ? 'Close' : 'Menu'; };
// glass highlight follows the pointer across the bar
nav.addEventListener('pointermove', e => { const r = nav.getBoundingClientRect(); nav.style.setProperty('--gx', (e.clientX - r.left) + 'px'); });
const onScroll = () => nav.classList.toggle('scrolled', scrollY > 40);
addEventListener('scroll', onScroll, { passive: true }); onScroll();
{ // mega menu: hover on desktop, click/tap anywhere, Esc to close
  const hm = $('.has-mega'), mb = $('.mega-btn'), fine = matchMedia('(hover: hover) and (min-width: 761px)');
  let t; const set = o => { clearTimeout(t); hm.classList.toggle('open', o); nav.classList.toggle('mega-open', o && fine.matches); mb.setAttribute('aria-expanded', o); };
  mb.onclick = () => set(!hm.classList.contains('open'));
  hm.onmouseenter = () => fine.matches && set(true);
  hm.onmouseleave = () => { if (fine.matches) t = setTimeout(() => set(false), 160); };
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && hm.classList.contains('open')) { set(false); mb.focus(); } });
  document.addEventListener('click', e => { if (!hm.contains(e.target)) set(false); });
}

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

if (page === 'home') {
  // Section order follows superside.com; every visual is Jungle's own work and brand system.
  const real = PROJECTS.filter(p => p.img), by = slug => PROJECTS.find(p => p.slug === slug) || real[0];
  const gal = (p, n) => (p.gallery && p.gallery[n]) || p.img;
  const img = (src, alt = '') => `<img src="${src}" alt="${alt}" loading="lazy" decoding="async">`;

  // Hero wall (after superside.com): 3 columns drifting ~25px/s, neighbours opposite. Lists are doubled so -50% loops.
  const tiles = PROJECTS.filter(p => p.img).flatMap(p => [p.img, ...(p.gallery || []).slice(0, 3)].map(src => ({ p, src })));
  $('#wall').innerHTML = [0, 1, 2].map(c => {
    const cells = tiles.filter((_, i) => i % 3 === c).map((t, i) =>
      `<a class="tile${i % 3 === 1 ? ' tall' : ''}" href="project.html?p=${t.p.slug}" tabindex="-1">${pic(t.src, '', true)}<span>${t.p.title}</span></a>`).join('');
    return `<div class="wcol${c % 2 ? ' down' : ''}"><div class="wtrack">${cells}${cells}</div></div>`;
  }).join('');
  const speed = () => $$('.wtrack').forEach(t => t.style.animationDuration = (t.scrollHeight / 2 / 25) + 's');
  speed(); addEventListener('load', speed);

  // Clients: real logos, greyscale until hovered.
  const CLIENTS = [['janakpur-bolts', 'Janakpur Bolts'], ['husqvarna', 'Husqvarna'], ['lumbini-all-stars', 'Lumbini All Stars'], ['plo-lubricants', 'PLO Lubricants'], ['ptt', 'PTT'], ['sk-zic', 'SK enmove ZIC']];
  const logoRow = CLIENTS.map(([f, n]) => `<span class="clogo"><img src="assets/clients/${f}.png" alt="${n}" width="120" height="120" loading="lazy"></span>`).join('');
  $('#logos').innerHTML = logoRow.repeat(4);

  // Split media
  $('#m-ai').insertAdjacentHTML('afterbegin', img('assets/stock/h-ai.jpg', 'A designer working at a laptop'));
  $('#m-partner').insertAdjacentHTML('afterbegin', img('assets/stock/h-partner.jpg', 'A marketing team working together around a table') +
    '<a class="play" href="work.html" aria-label="See the work"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 4l13 8-13 8z"/></svg></a>');

  // Ways of working: three small animated scenes that act out each title.
  const SCENES = {
    flex: `<div class="sc sc-flex"><div class="seg"><i></i><span>Project</span><span>Ongoing</span><span>Campaign</span></div>
      <div class="blocks"><b></b><b></b><b></b><b></b></div></div>`,
    team: `<div class="sc sc-team"><svg class="arc" viewBox="0 0 220 90" aria-hidden="true"><path id="arcp" d="M20 80 Q110 -20 200 80" fill="none"/><circle r="5" class="fly"><animateMotion dur="3.2s" repeatCount="indefinite" rotate="auto"><mpath href="#arcp"/></animateMotion></circle></svg>
      <span class="pin pin-a">Nepal</span><span class="pin pin-b">Worldwide</span>
      <div class="avs"><span>D</span><span>M</span><span>E</span></div></div>`,
    owner: `<div class="sc sc-chat"><p class="m in">Need 12 matchday posts by Friday?</p><p class="m typing"><i></i><i></i><i></i></p>
      <p class="m out">On it. I’ll own it end to end.</p><p class="m in done">Delivered <b>✓✓</b></p></div>`,
  };
  const F = [
    ['c-g', 'flex', 'Flexible by design.', 'One project, ongoing support or a full campaign. Change gears as your plans do.'],
    ['c-i', 'team', 'A small, senior team.', 'Designers, motion artists and editors in Nepal, working with clients around the world.'],
    ['c-m', 'owner', 'One point of contact.', 'One person owns your project from brief to final file, so nothing gets lost.'],
  ];
  $('#fcards').innerHTML = F.map(([c, k, t, d]) => `<article class="fcard ${c} reveal" tabindex="0"><div class="fm fg" aria-hidden="true">${SCENES[k]}</div><div class="fb"><h3 class="w">${t}</h3><p>${d}</p></div></article>`).join('');


  // Services flow (after superside.com): pills → beam → J. hub → arrows → teams.
  const thumbs = { 'Ad creative': 'nepathya-auckland', 'Motion design': 'trn-fest', 'Illustration design': '1974-ad-tour', 'Packaging and merchandise design': 'lumbini-all-stars', 'AI-powered creative': 'glory-tour', 'Social media creative': 'janakpur-bolts' };
  const cover = slug => (PROJECTS.find(p => p.slug === slug) || {}).img;
  const all = DISCIPLINES.flatMap(([g, , list]) => list.map(n => [n, g]));
  const tone = [0, 3, 1, 5, 2, 4, 0, 1, 3, 2, 4, 5, 1, 0, 2, 3, 4, 5, 1];
  $('#pills').innerHTML = all.map(([n, g], i) => { const im = null;
    return `<li><a class="pill c${tone[i % tone.length]}${im ? ' t' : ''}" style="--i:${i}" href="services.html#${g.split(' ')[0].toLowerCase()}">${im ? `<img src="${im}" alt="" loading="lazy">` : ''}${n}</a></li>`; }).join('');
  $('.hub .jt').innerHTML = `<span style="display:flex;align-items:flex-end;gap:4%;width:56%">${LOGO_NAV.split('<span')[0].replace('class="lj"', 'style="width:70%;height:auto;color:#fff"')}<i style="width:22%;aspect-ratio:1;border-radius:50%;background:var(--green);margin-bottom:6%"></i></span>`;
  const TEAMS = [ // [label, x%, y%, size, project image, label tone]
    ['Social', 26, 50, 128, 'janakpur-bolts', 'c0'], ['Performance', 30, 14, 84, 'glory-tour', 'c5'], ['Comms', 14, 34, 76, 'trn-fest', 'c1'],
    ['Demand gen', 22, 82, 82, '1974-ad-tour', 'c3'], ['Content', 86, 13, 100, 'nepathya-auckland', 'c1'], ['Product marketing', 62, 18, 74, 'lumbini-all-stars', 'c3'],
    ['Brand and creative', 80, 50, 112, 'lumbini-all-stars', 'c5'], ['Events', 56, 84, 78, 'nepathya-auckland', 'c0'], ['Campaigns', 88, 86, 96, 'trn-fest', 'c1'],
  ];
  const teams = $('#teams');
  teams.insertAdjacentHTML('beforeend', TEAMS.map(([t, x, y, sz, slug, c], i) => {
    const ph = ['social', 'performance', 'comms', 'demand', 'content', 'product', 'brand', 'events', 'campaigns'][i];
    return `<div class="team" style="left:${x}%;top:${y}%;--s:${sz}px;--i:${i}"><span class="tp"><img src="assets/stock/t-${ph}.jpg" alt="" width="160" height="160" loading="lazy"></span><b class="pill c${c.slice(1)}" style="opacity:1;transform:none;height:auto">${t}</b></div>`; }).join(''));
  const drawArrows = () => {
    const svg = $('#arrows'), r = teams.getBoundingClientRect();
    svg.setAttribute('viewBox', `0 0 ${r.width} ${r.height}`);
    svg.innerHTML = TEAMS.slice(0, 9).map(([, x, y], i) => {
      const tx = r.width * x / 100, ty = r.height * y / 100, sx = -20, sy = r.height / 2;
      const ex = sx + (tx - sx) * .78, ey = sy + (ty - sy) * .78, mx = (sx + ex) / 2;
      const d = `M${sx},${sy} C${mx},${sy} ${mx},${ey} ${ex},${ey}`, len = Math.hypot(ex - sx, ey - sy) * 1.3;
      return `<path d="${d}" style="--len:${len};--i:${i}"/>`; }).join('');
  };
  drawArrows(); addEventListener('resize', drawArrows);
  const fio = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); fio.unobserve(e.target); } }), { threshold: .25 });
  fio.observe($('#flow'));

  // Our work: mixed-size grid (big, small, small / small, small, big)
  const W = real.slice(0, 6);
  $('#wgrid').innerHTML = W.map((p, i) => `<a class="wk${i === 0 || i === 5 ? ' big' : ''} reveal" href="project.html?p=${p.slug}"><div class="wm">${img(p.img, p.title)}</div><h3 class="w">${p.title}</h3><p>${p.scope.slice(0, 3).join(', ')}</p></a>`).join('');

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

  // Wins: real results from the work, two rows drifting opposite ways (no invented quotes)
  const win = p => `<a class="win" href="project.html?p=${p.slug}"><div class="who">${p.img ? img(p.img) : `<span class="art ${p.art}" style="position:relative;width:44px;height:44px;border-radius:50%;flex:none;overflow:hidden"></span>`}<div><b>${p.title}</b><span>${p.client.split(',')[0]}</span></div></div><p>${p.result}</p><span class="lnk">${sector(p)}</span></a>`;
  const wr = real.map(win).join(''); $('#wrow1').innerHTML = wr + wr;

  // Bento: typed brief, stepping process, brand collage, tools hub
  const typed = $('#typed'), lines = ['Can you make 12 matchday posts by Friday?', 'We need a 15s reel for the tour launch.', 'Resize our campaign for every format.'];
  let li = 0, ci = 0;
  const type = () => { const l = lines[li]; typed.textContent = l.slice(0, ++ci);
    if (ci < l.length) setTimeout(type, 45); else setTimeout(() => { ci = 0; li = (li + 1) % lines.length; type(); }, 2200); };
  reduce ? typed.textContent = lines[0] : type();
  const st = $$('#steps2 li'); let k = 0;
  const step = () => { st.forEach((x, i) => x.classList.toggle('on', i <= k)); k = (k + 1) % (st.length + 1); };
  step(); if (!reduce) setInterval(step, 1100);
  $('#collage').innerHTML = ['janakpur-bolts', 'lumbini-all-stars', 'husqvarna'].map(f => `<img src="assets/clients/${f}.png" alt="" loading="lazy">`).join('');
  $('#tj').innerHTML = `<span style="display:flex;align-items:flex-end;gap:3px;width:46%">${LOGO_NAV.split('<span')[0].replace('class="lj"', 'style="width:72%;height:auto;color:#fff"')}<i style="width:24%;aspect-ratio:1;border-radius:50%;background:var(--green);margin-bottom:6%"></i></span>`;

}

if (page === 'services') {
  const ex = { 'Creative Design': 'janakpur-bolts', 'Motion Design': 'nepathya-auckland', 'Digital Design': 'trn-fest', 'Content and Campaigns': '1974-ad-tour', 'AI Services': 'lumbini-all-stars' };
  $('#disciplines').innerHTML = DISCIPLINES.map(([t, v, list], i) => { const key = t.split(' ')[0].toLowerCase();
    return `<section class="split rule reveal" id="${key}" style="padding-block:clamp(56px,7vw,112px);align-items:start">
      <div class="card"><div class="thumb"><div class="art"><img src="assets/stock/s-${key}.jpg" alt="" width="900" height="1125" loading="lazy"></div></div></div>
      <div><h2 class="x" style="font-size:var(--t-head)">${t}.</h2><p class="v" style="font-size:var(--t-voice);color:var(--green);margin-top:8px">${v}</p>
      <div class="tags mt">${list.map(x => `<a href="service.html?s=${slugify(x)}">${x}</a>`).join('')}</div></div></section>`; }).join('');
  // headline dots for the injected h2s
  $$('#disciplines h2.x').forEach(h => h.innerHTML = h.innerHTML.replace(/\.$/, '<span class="dot">.</span>'));
}


if (page === 'service') {
  const ALL = MENU.flatMap(col => col.filter((_, i) => i % 2).flat());
  const q = new URLSearchParams(location.search).get('s');
  const it = ALL.find(([t]) => slugify(t) === q) || ALL[0];
  const [t, d, ic] = it, [gets, cat] = SVC[t] || [[], ''];
  const grp = DISCIPLINES.find(([, , l]) => l.includes(t)) || DISCIPLINES[0], gkey = grp[0].split(' ')[0].toLowerCase();
  document.title = `${t} | Jungle.`;
  const real = PROJECTS.filter(p => p.img), work = (cat ? real.filter(p => p.cat === cat) : []).concat(real).filter((p, i, a) => a.indexOf(p) === i).slice(0, 3);
  const others = grp[2].filter(x => x !== t);
  $('#svc').innerHTML = `
  <header class="ph sv-hero">
    <div><p class="sv-crumb"><a href="services.html">Services</a> / <a href="services.html#${gkey}">${grp[0]}</a></p>
      <h1 class="x words">${t}</h1><p class="lead" style="margin-top:20px">${d}. ${grp[1]}</p>
      <div class="hero-ctas" style="margin-top:32px"><a class="btn" href="contact.html">Start a project <span aria-hidden="true">→</span></a><a class="chip chip-lg" href="#sv-work">See related work</a></div></div>
    <figure class="sv-img"><img src="assets/stock/s-${gkey}.jpg" alt="" width="900" height="1125"><span class="sv-ic">${svgI(ic)}</span></figure>
  </header>
  <section class="inv pad sec"><h2 class="x reveal" style="font-size:var(--t-head)">What you get.</h2>
    <div class="sv-gets">${gets.map((g, i) => `<div class="reveal"><b class="n">${String(i + 1).padStart(2, '0')}</b><p>${g}</p></div>`).join('')}</div></section>
  <section class="inv pad sec" style="padding-top:0"><h2 class="x reveal" style="font-size:var(--t-head)">How it works.</h2>
    <div class="steps mt">${[['Brief', 'Tell us what you need and when, in plain words.'], ['Direction', 'We share a route built on your brand.'], ['Production', 'Every format you need, with clear feedback rounds.'], ['Delivery', 'Organised files, on the agreed date.']].map(([a, b], i) => `<div class="step reveal"><b class="n">${i + 1}</b><div><h3 class="w">${a}</h3><p>${b}</p></div></div>`).join('')}</div></section>
  <section class="pad sec" id="sv-work"><h2 class="x reveal" style="font-size:var(--t-head)">Related work.</h2>
    <div class="grid mt" style="padding:0">${work.map(card).join('')}</div></section>
  ${others.length ? `<section class="pad sec" style="padding-top:0"><h2 class="x reveal" style="font-size:var(--t-head)">More in ${grp[0]}.</h2>
    <div class="tags mt">${others.map(x => `<a href="service.html?s=${slugify(x)}">${x}</a>`).join('')}</div></section>` : ''}`;
  $$('#svc h1.x, #svc h2.x').forEach(h => { if (!h.querySelector('.dot')) h.innerHTML = h.innerHTML.replace(/\.?$/, '<span class="dot">.</span>'); });
  $$('#svc .words').forEach(h => { let k = 0; h.innerHTML = h.innerHTML.replace(/(<span class="dot">.*?<\/span>)|([^\s<]+)/g, (m, dd, w) => dd || `<span class="wd" style="--i:${k++}">${w}</span>`); h.classList.add('rise'); });
}

if (page === 'work') {
  // Layout after superside.com/our-work: collage, statement, logos, full-bleed 2-up tiles.
  const real = PROJECTS.filter(p => p.img), list = real.concat(PROJECTS.filter(p => !p.img));
  const pics = real.flatMap(p => [p.img, ...(p.gallery || []).slice(0, 2)]).slice(0, 10);
  $('#reel').innerHTML = pics.map((src, i) => `<span class="r${i}"><img src="${src}" alt="" loading="${i < 5 ? 'eager' : 'lazy'}"></span>`).join('');
  const CL = [['janakpur-bolts', 'Janakpur Bolts'], ['husqvarna', 'Husqvarna'], ['lumbini-all-stars', 'Lumbini All Stars'], ['plo-lubricants', 'PLO Lubricants'], ['ptt', 'PTT'], ['sk-zic', 'SK enmove ZIC']];
  $('#wlogos').innerHTML = CL.map(([f, n]) => `<span class="clogo"><img src="assets/clients/${f}.png" alt="${n}" width="120" height="120"></span>`).join('').repeat(4);
  $('#grid').innerHTML = list.map(p => `<a class="tile2" data-c="${p.cat}" href="project.html?p=${p.slug}">${art(p)}
    <div class="t2-cap"><h2 class="w">${p.title} <span aria-hidden="true">+</span></h2><p>${p.scope.slice(0, 3).join(', ')}</p></div></a>`).join('');
  const apply = f => {
    $$('[data-f]').forEach(x => { x.classList.toggle('on', x.dataset.f === f); x.setAttribute('aria-pressed', x.dataset.f === f); });
    $$('#grid .tile2').forEach(c => c.hidden = f !== 'all' && c.dataset.c !== f);
  };
  $$('[data-f]').forEach(b => b.onclick = () => { apply(b.dataset.f); history.replaceState(null, '', b.dataset.f === 'all' ? 'work.html' : `?f=${b.dataset.f}`); });
  const f0 = new URLSearchParams(location.search).get('f'); apply(f0 && CATS[f0] ? f0 : 'all');
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
