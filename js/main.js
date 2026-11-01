// Mobile menu
const burger = document.getElementById('burger');
const links = document.getElementById('navLinks');
burger.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});
links.addEventListener('click', e => {
  if (e.target.tagName === 'A') { links.classList.remove('open'); burger.setAttribute('aria-expanded', false); }
});

// Statement: words light up as the section scrolls past
const text = document.querySelector('.reveal-text');
text.innerHTML = text.textContent.trim().split(/\s+/).map(w => `<span class="w">${w}</span>`).join(' ');
const words = text.querySelectorAll('.w');
const toTop = document.getElementById('toTop');

function onScroll() {
  const r = text.getBoundingClientRect();
  const h = window.innerHeight;
  const progress = Math.min(1, Math.max(0, (h * 0.85 - r.top) / (r.height + h * 0.35)));
  const lit = Math.round(progress * words.length);
  words.forEach((w, i) => w.classList.toggle('on', i < lit));
  toTop.classList.toggle('show', window.scrollY > h);
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Fade blocks in when they enter the viewport
const io = new IntersectionObserver(entries => entries.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold: 0.12 });
document.querySelectorAll('.now-card, .project, .xp li, .stats-grid > div, .about-text, .form').forEach(el => {
  el.classList.add('fade');
  io.observe(el);
});
