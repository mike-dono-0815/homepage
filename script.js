const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ── MOBILE NAV TOGGLE ──────────────────────────────── */
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

function setNavOpen(open) {
  navLinks.classList.toggle('open', open);
  navToggle.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('nav-open', open);
}

navToggle.addEventListener('click', () => {
  setNavOpen(!navLinks.classList.contains('open'));
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navLinks.classList.contains('open')) {
    setNavOpen(false);
    navToggle.focus();
  }
});

/* ── SMOOTH SCROLL + close mobile nav ──────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    setNavOpen(false);
  });
});

/* ── SCROLL STATE (one rAF-throttled handler) ───────── */
const navbar     = document.getElementById('navbar');
const backToTop  = document.getElementById('backToTop');
const sections   = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

function updateActiveNav() {
  const scrollMid = window.scrollY + window.innerHeight / 3;
  sections.forEach(section => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    if (scrollMid >= top && scrollMid < bottom) {
      navAnchors.forEach(a => a.classList.remove('active'));
      const match = document.querySelector(`.nav-links a[href="#${section.id}"]`);
      if (match) match.classList.add('active');
    }
  });
}

function onScrollFrame() {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  backToTop.classList.toggle('visible', window.scrollY > window.innerHeight);
  updateActiveNav();
}

let scrollTicking = false;
window.addEventListener('scroll', () => {
  if (scrollTicking) return;
  scrollTicking = true;
  requestAnimationFrame(() => {
    onScrollFrame();
    scrollTicking = false;
  });
}, { passive: true });
onScrollFrame();


/* ── SCROLL REVEAL ──────────────────────────────────── */
if ('IntersectionObserver' in window) {
  const style = document.createElement('style');
  style.textContent = reduceMotion
    ? `.reveal { opacity: 0; transition: opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1); }
       .reveal.visible { opacity: 1; }`
    : `.reveal { opacity: 0; transform: translateY(32px); transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1); }
       .reveal.visible { opacity: 1; transform: none; }`;
  document.head.appendChild(style);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  // Apply to major blocks
  document.querySelectorAll(
    '.highlight-card, .timeline-item, .award-card, .blog-card, .repo-card, .contact-card'
  ).forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${(i % 4) * 60}ms`;
    observer.observe(el);
  });
}
