// Reveal-on-scroll, with fallbacks so content is never left invisible.
// (Before: an element that never intersected - fast scroll, jump link, print,
// headless render - stayed at opacity:0 and the section looked blank.)
const revealTargets = document.querySelectorAll('.project,.coming-grid article,.about,.skills');
const show = el => el.classList.add('visible');
const observer = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) show(e.target); }),
  { threshold: 0, rootMargin: '0px 0px -10% 0px' }
);
revealTargets.forEach(el => { el.classList.add('reveal'); observer.observe(el); });
setTimeout(() => revealTargets.forEach(show), 1200);
window.addEventListener('load', () => setTimeout(() => revealTargets.forEach(show), 600));

document.querySelectorAll('.work-tab').forEach(btn => btn.addEventListener('click', () => {
  const key = btn.dataset.tab;
  document.querySelectorAll('.work-tab').forEach(b => {
    const on = b === btn;
    b.classList.toggle('active', on);
    b.setAttribute('aria-selected', on ? 'true' : 'false');
  });
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.toggle('active', p.dataset.panel === key));
  document.querySelectorAll('.tab-panel.active .project').forEach(show);
}));
