// Shared chrome (nav, footer, transitions) + page renderers.
// To use real imagery: give a project `img:'path.jpg'` and art() will render it instead of the poster placeholder.
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const page = document.body.dataset.page;

// Real images come from assets/work/<slug>/ via manifest.js (see scripts/build-images.py).
if (typeof IMAGES !== 'undefined') PROJECTS.forEach(p => { const m = IMAGES[p.slug]; if (m) { p.img = m.cover; p.gallery = m.gallery; } });

const pic = (src, alt) => `<img src="${src}" alt="${alt}" loading="lazy" decoding="async" style="width:100%;height:100%;object-fit:cover">`;
const art = p => p.img
  ? `<div class="art">${pic(p.img, p.title)}</div>`
  : `<div class="art ${p.art}"><b>${p.word}</b></div>`;

const card = p => `<a class="card reveal" data-c="${p.cat}" href="project.html?p=${p.slug}">${art(p)}
  <div class="meta"><div><span class="label">${CATS[p.cat]}${p.tag ? ` / ${p.tag}` : ''} / ${p.scope[0]}</span><h3 class="w">${p.title}</h3></div><span class="label">${p.year}</span></div></a>`;

// ── chrome
document.body.insertAdjacentHTML('afterbegin', `
<div id="curtain"><svg viewBox="0 0 495.66 147.97" fill="currentColor" aria-label="Jungle" style="height:clamp(48px,8vw,110px);display:block"> <g> <path d="M18.28,112.04c-5.78-2.94-10.27-7.04-13.47-12.29C1.6,94.5,0,88.51,0,81.79,0,76.96.84,71.81,2.52,66.35l18.44,3.31c-1.05,3.57-1.58,7.14-1.58,10.71,0,5.67,1.55,10.11,4.65,13.32s7.54,4.81,13.32,4.81,10.13-1.71,13.08-5.12c2.94-3.41,4.41-8.53,4.41-15.36,0-3.15-.16-6.25-.47-9.3s-.69-6.51-1.11-10.4c-.42-3.15-.79-6.41-1.1-9.77-.31-3.36-.47-6.41-.47-9.14,0-5.15.6-9.22,1.81-12.21,1.21-3,3.07-5.07,5.59-6.22v-.95h-30.09c-2.42,0-4.15.63-5.2,1.89-1.05,1.26-1.57,3.31-1.57,6.15,0,3.89.21,8.25.63,13.08H3.94c.73-5.46,1.11-11.03,1.11-16.7,0-6.51-.42-13.18-1.26-20.01h81.78v14.02h-2.68c-3.26,0-5.65,1.26-7.17,3.78-1.53,2.52-2.28,6.51-2.28,11.98,0,2.63.15,5.73.47,9.3.31,3.57.68,7.09,1.1,10.56.53,4.62.97,9.06,1.34,13.31.37,4.25.55,8.38.55,12.37,0,7.25-1.63,13.63-4.89,19.15-3.26,5.52-7.85,9.82-13.79,12.92-5.94,3.1-12.74,4.65-20.41,4.65-7.25,0-13.76-1.47-19.54-4.41v-.03Z"/> <path d="M104.63,112.9c-3.68-2.26-6.49-5.52-8.43-9.77-1.95-4.26-2.86-9.27-2.76-15.05,0-3.78.05-6.96.15-9.53.11-2.57.21-5.7.32-9.38.21-3.78.31-7.3.31-10.56.1-2.21.05-3.89-.16-5.04s-.73-2.05-1.57-2.68-2.21-.95-4.1-.95h-3.78v-14.02h30.73c-.21,6.09-.53,13.13-.95,21.12-.42,9.67-.73,17.96-.95,24.9-.11,5.36.89,9.45,2.99,12.29,2.1,2.84,5.2,4.26,9.3,4.26,3.25,0,6.09-.65,8.51-1.97,2.41-1.31,4.31-3.23,5.67-5.75,1.37-2.52,2.05-5.41,2.05-8.67v-23.79c0-3.15-.44-5.33-1.34-6.54-.89-1.21-2.5-1.81-4.81-1.81h-4.57v-14.02h32.46c-.74,6.3-1.24,11.79-1.5,16.47-.27,4.68-.34,9.85-.24,15.52v24.42c0,3.15.44,5.33,1.34,6.54.89,1.21,2.44,1.81,4.65,1.81h7.94v14.02h-32.67v-13.08h-.79c-1.79,4.41-4.94,7.96-9.45,10.64-4.52,2.68-9.61,4.02-15.28,4.02-5.04,0-9.4-1.13-13.08-3.39h0Z"/> <path d="M190.67,114.72h-15.6v-14.02h4.41c2.31,0,3.91-.6,4.81-1.81.89-1.21,1.34-3.39,1.34-6.54v-34.04c0-3.15-.44-5.33-1.34-6.54-.89-1.21-2.5-1.81-4.81-1.81h-4.41v-14.02h29.47v13.71h.79c1.36-4.73,4.18-8.46,8.43-11.19s9.32-4.1,15.21-4.1c8.3,0,14.84,2.71,19.62,8.11,4.78,5.41,7.17,12.79,7.17,22.14v27.73c0,3.15.42,5.33,1.26,6.54s2.37,1.81,4.57,1.81h4.57v14.02h-40.82v-14.02h4.57c2.21,0,3.73-.6,4.57-1.81.84-1.21,1.26-3.39,1.26-6.54v-22.22c0-5.57-1.32-9.95-3.94-13.16-2.63-3.2-6.2-4.81-10.72-4.81-3.05,0-5.73.69-8.04,2.05-2.31,1.37-4.12,3.31-5.44,5.83-1.31,2.52-1.97,5.41-1.97,8.67v23.64c0,3.15.44,5.33,1.34,6.54.89,1.21,2.44,1.81,4.65,1.81h4.41v14.02h-25.37,0Z"/> <path d="M288.76,144.26c-5.2-2.47-9.33-5.75-12.37-9.85-3.05-4.1-4.57-8.56-4.57-13.4l18.12-3.62c-.11,4.41,1.42,8.04,4.57,10.87,3.15,2.84,7.19,4.26,12.14,4.26s8.96-1.5,12.05-4.49c3.1-3,4.65-6.91,4.65-11.74,0-7.25-.16-12.18-.47-14.81h-.79c-1.68,3.36-4.6,6.07-8.74,8.11-4.15,2.05-8.75,3.07-13.79,3.07-6.1,0-11.53-1.6-16.31-4.81-4.78-3.2-8.51-7.72-11.19-13.55s-4.02-12.47-4.02-19.93,1.47-14.55,4.41-20.64,6.99-10.82,12.14-14.18c5.15-3.36,10.97-5.04,17.49-5.04,5.04,0,9.43,1.13,13.16,3.39s6.22,5.28,7.48,9.06h.79v-11.03h28.68v14.02h-4.57c-2.21,0-3.73.61-4.57,1.81-.84,1.21-1.26,3.39-1.26,6.54v3.15c0,6.62.21,15.08.63,25.37.53,10.82.79,19.28.79,25.37,0,7.35-1.53,13.71-4.57,19.07-3.05,5.36-7.38,9.48-13,12.37s-12.27,4.33-19.93,4.33c-6.1,0-11.74-1.24-16.94-3.7h-.01ZM314.92,94.94c2.57-1.84,4.52-4.49,5.83-7.96s1.97-7.56,1.97-12.29c0-5.04-.66-9.32-1.97-12.84s-3.23-6.22-5.75-8.11-5.57-2.84-9.14-2.84-6.46.97-8.98,2.92c-2.52,1.95-4.44,4.68-5.75,8.19-1.31,3.52-1.97,7.7-1.97,12.53s.66,8.82,1.97,12.29,3.23,6.15,5.75,8.04,5.46,2.84,8.82,2.84c3.57,0,6.64-.92,9.22-2.76h0Z"/> <path d="M364.48,21.59c-.32-1.15-.92-1.97-1.81-2.44-.89-.47-2.12-.71-3.7-.71h-4.57V4.41l30.57-4.41v31.83-6.46,66.97c0,3.15.44,5.33,1.34,6.54.89,1.21,2.44,1.81,4.64,1.81h4.41v14.02h-40.97v-14.02h4.41c2.31,0,3.91-.6,4.81-1.81.89-1.21,1.34-3.39,1.34-6.54V26.63c0-2.21-.16-3.88-.47-5.04Z"/> <path d="M447.91,96.52c3.1-2.68,5.28-6.49,6.54-11.42l16.07,5.04c-2.21,8.19-6.49,14.63-12.85,19.3-6.36,4.68-14.05,7.01-23.08,7.01-7.67,0-14.42-1.68-20.25-5.04s-10.35-8.19-13.55-14.5c-3.21-6.3-4.81-13.6-4.81-21.9s1.6-15.52,4.81-21.67c3.2-6.15,7.74-10.87,13.63-14.18,5.88-3.31,12.82-4.96,20.8-4.96,6.93,0,13.1,1.42,18.51,4.25,5.41,2.84,9.61,6.83,12.61,11.98,2.99,5.15,4.49,11.09,4.49,17.81,0,3.68-.53,7.41-1.57,11.19h-60.2v-11.03h49.79l-7.72,4.73c.52-2.42.79-4.57.79-6.46,0-5.04-1.55-9.06-4.65-12.05-3.1-2.99-7.12-4.49-12.05-4.49-5.88,0-10.4,2.13-13.55,6.38s-4.73,10.22-4.73,17.88v1.58c0,7.88,1.71,13.95,5.12,18.2,3.41,4.26,8.22,6.38,14.42,6.38,4.51,0,8.32-1.34,11.43-4.02h0Z"/> </g> <circle cx="486.34" cy="107.21" r="9.32"/></svg></div>
<nav><a class="logo" href="index.html"><svg viewBox="0 0 495.66 147.97" fill="currentColor" aria-label="Jungle" style="height:26px;display:block"> <g> <path d="M18.28,112.04c-5.78-2.94-10.27-7.04-13.47-12.29C1.6,94.5,0,88.51,0,81.79,0,76.96.84,71.81,2.52,66.35l18.44,3.31c-1.05,3.57-1.58,7.14-1.58,10.71,0,5.67,1.55,10.11,4.65,13.32s7.54,4.81,13.32,4.81,10.13-1.71,13.08-5.12c2.94-3.41,4.41-8.53,4.41-15.36,0-3.15-.16-6.25-.47-9.3s-.69-6.51-1.11-10.4c-.42-3.15-.79-6.41-1.1-9.77-.31-3.36-.47-6.41-.47-9.14,0-5.15.6-9.22,1.81-12.21,1.21-3,3.07-5.07,5.59-6.22v-.95h-30.09c-2.42,0-4.15.63-5.2,1.89-1.05,1.26-1.57,3.31-1.57,6.15,0,3.89.21,8.25.63,13.08H3.94c.73-5.46,1.11-11.03,1.11-16.7,0-6.51-.42-13.18-1.26-20.01h81.78v14.02h-2.68c-3.26,0-5.65,1.26-7.17,3.78-1.53,2.52-2.28,6.51-2.28,11.98,0,2.63.15,5.73.47,9.3.31,3.57.68,7.09,1.1,10.56.53,4.62.97,9.06,1.34,13.31.37,4.25.55,8.38.55,12.37,0,7.25-1.63,13.63-4.89,19.15-3.26,5.52-7.85,9.82-13.79,12.92-5.94,3.1-12.74,4.65-20.41,4.65-7.25,0-13.76-1.47-19.54-4.41v-.03Z"/> <path d="M104.63,112.9c-3.68-2.26-6.49-5.52-8.43-9.77-1.95-4.26-2.86-9.27-2.76-15.05,0-3.78.05-6.96.15-9.53.11-2.57.21-5.7.32-9.38.21-3.78.31-7.3.31-10.56.1-2.21.05-3.89-.16-5.04s-.73-2.05-1.57-2.68-2.21-.95-4.1-.95h-3.78v-14.02h30.73c-.21,6.09-.53,13.13-.95,21.12-.42,9.67-.73,17.96-.95,24.9-.11,5.36.89,9.45,2.99,12.29,2.1,2.84,5.2,4.26,9.3,4.26,3.25,0,6.09-.65,8.51-1.97,2.41-1.31,4.31-3.23,5.67-5.75,1.37-2.52,2.05-5.41,2.05-8.67v-23.79c0-3.15-.44-5.33-1.34-6.54-.89-1.21-2.5-1.81-4.81-1.81h-4.57v-14.02h32.46c-.74,6.3-1.24,11.79-1.5,16.47-.27,4.68-.34,9.85-.24,15.52v24.42c0,3.15.44,5.33,1.34,6.54.89,1.21,2.44,1.81,4.65,1.81h7.94v14.02h-32.67v-13.08h-.79c-1.79,4.41-4.94,7.96-9.45,10.64-4.52,2.68-9.61,4.02-15.28,4.02-5.04,0-9.4-1.13-13.08-3.39h0Z"/> <path d="M190.67,114.72h-15.6v-14.02h4.41c2.31,0,3.91-.6,4.81-1.81.89-1.21,1.34-3.39,1.34-6.54v-34.04c0-3.15-.44-5.33-1.34-6.54-.89-1.21-2.5-1.81-4.81-1.81h-4.41v-14.02h29.47v13.71h.79c1.36-4.73,4.18-8.46,8.43-11.19s9.32-4.1,15.21-4.1c8.3,0,14.84,2.71,19.62,8.11,4.78,5.41,7.17,12.79,7.17,22.14v27.73c0,3.15.42,5.33,1.26,6.54s2.37,1.81,4.57,1.81h4.57v14.02h-40.82v-14.02h4.57c2.21,0,3.73-.6,4.57-1.81.84-1.21,1.26-3.39,1.26-6.54v-22.22c0-5.57-1.32-9.95-3.94-13.16-2.63-3.2-6.2-4.81-10.72-4.81-3.05,0-5.73.69-8.04,2.05-2.31,1.37-4.12,3.31-5.44,5.83-1.31,2.52-1.97,5.41-1.97,8.67v23.64c0,3.15.44,5.33,1.34,6.54.89,1.21,2.44,1.81,4.65,1.81h4.41v14.02h-25.37,0Z"/> <path d="M288.76,144.26c-5.2-2.47-9.33-5.75-12.37-9.85-3.05-4.1-4.57-8.56-4.57-13.4l18.12-3.62c-.11,4.41,1.42,8.04,4.57,10.87,3.15,2.84,7.19,4.26,12.14,4.26s8.96-1.5,12.05-4.49c3.1-3,4.65-6.91,4.65-11.74,0-7.25-.16-12.18-.47-14.81h-.79c-1.68,3.36-4.6,6.07-8.74,8.11-4.15,2.05-8.75,3.07-13.79,3.07-6.1,0-11.53-1.6-16.31-4.81-4.78-3.2-8.51-7.72-11.19-13.55s-4.02-12.47-4.02-19.93,1.47-14.55,4.41-20.64,6.99-10.82,12.14-14.18c5.15-3.36,10.97-5.04,17.49-5.04,5.04,0,9.43,1.13,13.16,3.39s6.22,5.28,7.48,9.06h.79v-11.03h28.68v14.02h-4.57c-2.21,0-3.73.61-4.57,1.81-.84,1.21-1.26,3.39-1.26,6.54v3.15c0,6.62.21,15.08.63,25.37.53,10.82.79,19.28.79,25.37,0,7.35-1.53,13.71-4.57,19.07-3.05,5.36-7.38,9.48-13,12.37s-12.27,4.33-19.93,4.33c-6.1,0-11.74-1.24-16.94-3.7h-.01ZM314.92,94.94c2.57-1.84,4.52-4.49,5.83-7.96s1.97-7.56,1.97-12.29c0-5.04-.66-9.32-1.97-12.84s-3.23-6.22-5.75-8.11-5.57-2.84-9.14-2.84-6.46.97-8.98,2.92c-2.52,1.95-4.44,4.68-5.75,8.19-1.31,3.52-1.97,7.7-1.97,12.53s.66,8.82,1.97,12.29,3.23,6.15,5.75,8.04,5.46,2.84,8.82,2.84c3.57,0,6.64-.92,9.22-2.76h0Z"/> <path d="M364.48,21.59c-.32-1.15-.92-1.97-1.81-2.44-.89-.47-2.12-.71-3.7-.71h-4.57V4.41l30.57-4.41v31.83-6.46,66.97c0,3.15.44,5.33,1.34,6.54.89,1.21,2.44,1.81,4.64,1.81h4.41v14.02h-40.97v-14.02h4.41c2.31,0,3.91-.6,4.81-1.81.89-1.21,1.34-3.39,1.34-6.54V26.63c0-2.21-.16-3.88-.47-5.04Z"/> <path d="M447.91,96.52c3.1-2.68,5.28-6.49,6.54-11.42l16.07,5.04c-2.21,8.19-6.49,14.63-12.85,19.3-6.36,4.68-14.05,7.01-23.08,7.01-7.67,0-14.42-1.68-20.25-5.04s-10.35-8.19-13.55-14.5c-3.21-6.3-4.81-13.6-4.81-21.9s1.6-15.52,4.81-21.67c3.2-6.15,7.74-10.87,13.63-14.18,5.88-3.31,12.82-4.96,20.8-4.96,6.93,0,13.1,1.42,18.51,4.25,5.41,2.84,9.61,6.83,12.61,11.98,2.99,5.15,4.49,11.09,4.49,17.81,0,3.68-.53,7.41-1.57,11.19h-60.2v-11.03h49.79l-7.72,4.73c.52-2.42.79-4.57.79-6.46,0-5.04-1.55-9.06-4.65-12.05-3.1-2.99-7.12-4.49-12.05-4.49-5.88,0-10.4,2.13-13.55,6.38s-4.73,10.22-4.73,17.88v1.58c0,7.88,1.71,13.95,5.12,18.2,3.41,4.26,8.22,6.38,14.42,6.38,4.51,0,8.32-1.34,11.43-4.02h0Z"/> </g> <circle cx="486.34" cy="107.21" r="9.32"/></svg></a>
  <button class="menu label">Menu</button>
  <div class="links label">
    <a href="work.html" data-p="work">Work</a><a href="services.html" data-p="services">Services</a>
    <a href="contact.html" data-p="contact">Contact</a></div></nav>`);
document.body.insertAdjacentHTML('beforeend', `
<section class="cta">${page === 'contact' ? '' : `
  <p class="cta-q">Got a launch, a tour or a season coming up?</p>
  <a class="big x" href="contact.html"><span>Start a project →</span></a>`}
  <div class="foot label">
    <div><a href="work.html">Work</a><a href="services.html">Services</a><a href="contact.html">Contact</a></div>
    <div><a href="#">Instagram</a><a href="#">Behance</a><a href="#">LinkedIn</a><a href="#">Dribbble</a></div>
    <div><a href="mailto:hello@jungle.studio">hello@jungle.studio</a><a href="#">+00 000 000 000</a></div>
    <div><span style="opacity:.6">© 2026 Jungle<br>Black. White. Loud.</span></div>
  </div></section>`);
$$(`nav [data-p="${page}"]`).forEach(a => a.classList.add('cur'));
$('nav .menu').onclick = () => $('nav').classList.toggle('open');


// ── page transitions
setTimeout(() => document.body.classList.add('ready'), 60);

// ── 'go' starts above-the-fold entrance animations (after the preloader, if it runs)
function go() { setTimeout(() => document.body.classList.add('go'), 80); }

// ── preloader: first visit per session only
let seen = false; try { seen = sessionStorage.getItem('jg-pre'); sessionStorage.setItem('jg-pre', 1); } catch (e) {}
if (!seen && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const logo = $('nav .logo svg').cloneNode(true); logo.removeAttribute('style');
  $$('path', logo).forEach((p, i) => { p.setAttribute('pathLength', 1); p.style.setProperty('--i', i); });
  const pre = document.createElement('div'); pre.id = 'pre';
  pre.innerHTML = '<span class="count">0</span><span class="tag label">Digital · Events · Sports</span><span class="bar"></span>';
  pre.prepend(logo); document.body.prepend(pre); document.body.classList.add('preloading');
  const cnt = $('.count', pre), t0 = performance.now(), D = 2100;
  (function step(t) { const k = Math.min(1, (t - t0) / D); cnt.textContent = Math.round(100 * (1 - Math.pow(1 - k, 3)));
    k < 1 ? requestAnimationFrame(step) : setTimeout(() => { pre.classList.add('done'); document.body.classList.remove('preloading');
      setTimeout(() => pre.remove(), 1100); go(); }, 250); })(t0);
} else go();

// ── liquid glass: pointer-following highlight
document.addEventListener('pointermove', e => {
  const el = e.target.closest('nav,.meta,.chip,.btn') || (e.target.closest('.card') && $('.meta', e.target.closest('.card')));
  if (!el) return; const r = el.getBoundingClientRect();
  el.style.setProperty('--mx', (e.clientX - r.left) + 'px'); el.style.setProperty('--my', (e.clientY - r.top) + 'px');
});
addEventListener('pageshow', e => e.persisted && document.body.classList.replace('leaving', 'ready'));
document.addEventListener('click', e => {
  const a = e.target.closest('a'); if (!a) return;
  const h = a.getAttribute('href');
  if (!h || h.startsWith('#') || h.startsWith('mailto') || a.target || e.metaKey || e.ctrlKey) return;
  e.preventDefault(); document.body.classList.replace('ready', 'leaving'); setTimeout(() => location.href = h, 450);
});

// ── page renderers
if (page === 'home') {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Hero reel: a shuffling stack of the latest work, so the first screen is the portfolio.
  const feat = PROJECTS.slice(0, 6), reel = $('#reel');
  $('.reel-stage', reel).insertAdjacentHTML('afterbegin', feat.map((p, i) =>
    `<a class="rc" href="project.html?p=${p.slug}" aria-label="${p.title}" data-i="${i}">${art(p)}</a>`).join(''));
  const rcs = $$('.rc', reel), cap = $('.reel-cap h3', reel), capm = $('.reel-cap .label', reel);
  let k = 0, timer;
  const show = n => {
    k = (n + feat.length) % feat.length;
    rcs.forEach((c, i) => { const pos = (i - k + feat.length) % feat.length; c.dataset.pos = pos > 3 ? (pos === feat.length - 1 ? 'out' : 'hid') : pos; c.tabIndex = pos ? -1 : 0; });
    cap.textContent = feat[k].title; capm.textContent = `${CATS[feat[k].cat]}${feat[k].tag ? ` / ${feat[k].tag}` : ''} / ${feat[k].year}`;
  };
  const auto = () => { clearInterval(timer); if (!reduce) timer = setInterval(() => show(k + 1), 3200); };
  $('[data-go="next"]', reel).onclick = () => { show(k + 1); auto(); };
  $('[data-go="prev"]', reel).onclick = () => { show(k - 1); auto(); };
  reel.onmouseenter = () => clearInterval(timer); reel.onmouseleave = auto;
  show(0); auto();

  // Client marks (invented clients get simple generated monograms, not text wordmarks).
  const shapes = ['<circle cx="24" cy="24" r="22"/>', '<rect x="3" y="3" width="42" height="42" rx="6"/>', '<path d="M24 2 46 24 24 46 2 24Z"/>', '<rect x="2" y="10" width="44" height="28" rx="14"/>'];
  const mark = (n, i) => { const ini = n.split(' ').map(w => w[0]).join('').slice(0, 2);
    return `<span class="mark" role="img" aria-label="${n}"><svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2">${shapes[i % 4]}<text x="24" y="30.5" text-anchor="middle" fill="currentColor" stroke="none" font-family="New Kansas,serif" font-size="17">${ini}</text></svg>${n}</span>`; };
  const clients = PROJECTS.map(p => p.client.replace(/ (Live|Festival|Football Club|Streetwear|Records|Boxing Promotions|Network)$/, ''));
  const row = clients.map(mark).join('');
  $('#logos').innerHTML = row + row;

  // Horizontal pan: CSS scroll-driven animation; JS only measures the travel distance.
  const pan = $('#pan');
  pan.insertAdjacentHTML('beforeend', feat.map(p => `<a class="pan-card" href="project.html?p=${p.slug}">
    <div class="pan-img">${art(p)}</div>
    <div class="cap"><h3 class="w">${p.title}</h3><span class="label">${CATS[p.cat]}${p.tag ? ` / ${p.tag}` : ''} / ${p.year}</span></div></a>`).join('') +
    `<a class="pan-end" href="work.html"><span class="x">All ${PROJECTS.length} projects</span><span class="label">Open the archive →</span></a>`);
  const measure = () => { const d = Math.max(0, pan.scrollWidth - innerWidth);
    pan.style.setProperty('--dist', d + 'px'); $('.pan').style.setProperty('--len', d + 'px'); };
  measure(); addEventListener('resize', measure); document.fonts && document.fonts.ready.then(measure);

  // Disciplines: expanding panels.
  const arenas = [
    ['digital', 'Digital Marketing', 'Campaigns, ads and content systems built for the feed.', ['Social campaigns', 'Paid creative', 'Motion', 'Content systems']],
    ['event', 'Events & Concerts', 'Tour identities and key art, from announce poster to encore.', ['Key art', 'Line-up posters', 'Stage visuals', 'Merch']],
    ['sport', 'Sports', 'Kits, matchday graphics and fight nights fans will defend.', ['Kit launches', 'Matchday', 'Club identity', 'Athlete campaigns']],
  ];
  const acc = $('#acc');
  acc.innerHTML = arenas.map(([c, t, d, tags], i) => { const p = PROJECTS.find(x => x.cat === c);
    return `<a class="panel${i === 1 ? ' open' : ''}" href="work.html?f=${c}">${art(p)}
      <div class="panel-body"><h3 class="x">${t}</h3><div class="panel-more"><p>${d}</p>
      <div class="tags">${tags.map(x => `<span>${x}</span>`).join('')}</div><span class="label">See ${t.split(' ')[0].toLowerCase()} work →</span></div></div></a>`; }).join('');
  $$('.panel', acc).forEach(p => {
    const open = () => $$('.panel', acc).forEach(x => x.classList.toggle('open', x === p));
    p.onmouseenter = open; p.onfocus = open;
  });
}

if (page === 'work') {
  const grid = $('#grid'), list = $('#list');
  grid.innerHTML = PROJECTS.map(card).join('');
  list.innerHTML = PROJECTS.map((p, i) => `<a href="project.html?p=${p.slug}" data-c="${p.cat}" data-i="${i}">
    <span class="label">${String(i + 1).padStart(2, '0')}</span><h3 class="x">${p.title}</h3>
    <span class="label">${CATS[p.cat]}${p.tag ? ` / ${p.tag}` : ''}</span><span class="label">${p.scope.slice(0, 2).join(' · ')}</span><span class="label">${p.year}</span></a>`).join('');
  const counts = { all: PROJECTS.length }; PROJECTS.forEach(p => counts[p.cat] = (counts[p.cat] || 0) + 1);
  $$('[data-f]').forEach(b => b.insertAdjacentHTML('beforeend', `<sup>${counts[b.dataset.f]}</sup>`));
  const f0 = new URLSearchParams(location.search).get('f');
  const apply = f => {
    $$('[data-f]').forEach(x => x.classList.toggle('on', x.dataset.f === f));
    $$('#grid .card, #list a').forEach(c => c.classList.toggle('hide', f !== 'all' && c.dataset.c !== f));
    $$('#list a').forEach(c => c.style.display = c.classList.contains('hide') ? 'none' : '');
  };
  $$('[data-f]').forEach(b => b.onclick = () => apply(b.dataset.f));
  apply(f0 && CATS[f0] ? f0 : 'all');
  $$('[data-v]').forEach(b => b.onclick = () => {
    $$('[data-v]').forEach(x => x.classList.toggle('on', x === b));
    grid.style.display = b.dataset.v === 'grid' ? '' : 'none'; list.style.display = b.dataset.v === 'list' ? '' : 'none';
  });
  // hover preview on list rows
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
  document.title = `${p.title} | Jungle`;
  const alt = ['a1', 'a2', 'a3', 'a4', 'a5', 'a7', 'a8', 'a9'].filter(a => a !== p.art);
  const g = n => `<div class="g reveal">${p.gallery && p.gallery[n] ? `<div class="art">${pic(p.gallery[n], `${p.title}, image ${n + 1}`)}</div>` : art({ ...p, img: null, art: alt[(i + n) % alt.length] })}</div>`;
  const nG = p.gallery && p.gallery.length ? p.gallery.length : 5;
  $('#cs').innerHTML = `
  <header class="ph"><span class="label">${CATS[p.cat]}${p.tag ? ` / ${p.tag}` : ''} / ${p.year}</span><h1 class="x">${p.title}</h1></header>
  <div class="cs-hero${p.img ? ' real' : ''}">${p.img ? `<div class="blur" style="background-image:url('${p.img}')"></div><img src="${p.img}" alt="${p.title}">` : art(p)}</div>
  <div class="facts label">
    <div><span>Client</span>${p.client}</div><div><span>Sector</span>${CATS[p.cat]}${p.tag ? ` / ${p.tag}` : ''}</div>
    <div><span>Year</span>${p.year}</div><div><span>Deliverables</span>${p.scope.length} outputs</div></div>
  <div class="pad sec">
    <div class="split rule reveal"><span class="label">The brief</span><p class="quote">${p.brief}</p></div>
    <div class="split rule reveal"><span class="label">The idea</span><div><p style="font-size:var(--sub);line-height:1.2;font-weight:500">${p.idea}</p></div></div>
  </div>
  <div class="gallery${p.gallery && p.gallery.length ? ' real' : ''}">${[...Array(nG).keys()].map(g).join('')}</div>
  <div class="pad sec"><div class="split reveal"><span class="label">The result</span><p class="quote">${p.result}</p></div></div>
  <a class="next" href="project.html?p=${nx.slug}"><span class="label">Next project / ${CATS[nx.cat]}</span><b class="x">${nx.title} →</b></a>`;
}

// ── shared motion: reveal, counters, scroll-lit text
const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return; e.target.classList.add('in');
  const n = e.target.dataset.n;
  if (n) { let k = 0; const t = setInterval(() => { e.target.textContent = Math.round(n * (++k / 40)) + (k >= 40 ? (e.target.dataset.s || '') : ''); if (k >= 40) clearInterval(t); }, 25); }
  io.unobserve(e.target);
}), { threshold: .12 });
$$('.reveal,[data-n]').forEach(el => io.observe(el));

$$('.say').forEach(say => {
  say.innerHTML = say.textContent.trim().split(/\s+/).map(w => `<span>${w}</span>`).join(' ');
});

// contact form → opens mail client (no backend)
const form = $('#brief');
if (form) form.onsubmit = e => {
  e.preventDefault(); const d = new FormData(form);
  const body = [...d].map(([k, v]) => `${k}: ${v}`).join('\n');
  location.href = `mailto:hello@jungle.studio?subject=${encodeURIComponent('New brief: ' + (d.get('Company') || ''))}&body=${encodeURIComponent(body)}`;
};
