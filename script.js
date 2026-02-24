/* ── NAVBAR: solid on scroll ─────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ── MOBILE NAV TOGGLE ──────────────────────────────── */
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  navToggle.classList.toggle('open');
});

/* ── SMOOTH SCROLL + close mobile nav ──────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
  });
});

/* ── ACTIVE NAV HIGHLIGHT ───────────────────────────── */
const sections    = document.querySelectorAll('section[id]');
const navAnchors  = document.querySelectorAll('.nav-links a[href^="#"]');

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
window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();

/* ── PUBLICATION FILTER ─────────────────────────────── */
const pubSearch  = document.getElementById('pubSearch');
const filterBtns = document.querySelectorAll('.filter-btn');
const pubItems   = document.querySelectorAll('.pub-item');
const pubGroups  = document.querySelectorAll('.pub-group');
const noResults  = document.getElementById('pubNoResults');

let activeFilter = 'all';
let searchQuery  = '';

function applyPubFilter() {
  pubItems.forEach(item => {
    const decade  = item.getAttribute('data-decade') || '';
    const isAward = item.getAttribute('data-award') === 'true';
    const text    = item.textContent.toLowerCase();

    const decadeOk =
      activeFilter === 'all'  ||
      activeFilter === decade ||
      (activeFilter === 'award' && isAward);

    const searchOk = searchQuery === '' || text.includes(searchQuery);

    item.style.display = decadeOk && searchOk ? '' : 'none';
  });

  // Hide year-group headers when no visible items underneath
  let totalVisible = 0;
  pubGroups.forEach(group => {
    const visible = group.querySelectorAll('.pub-item:not([style*="display: none"])').length;
    group.style.display = visible > 0 ? '' : 'none';
    totalVisible += visible;
  });

  noResults.style.display = totalVisible === 0 ? '' : 'none';
}

pubSearch.addEventListener('input', e => {
  searchQuery = e.target.value.toLowerCase().trim();
  applyPubFilter();
});

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.getAttribute('data-filter');
    applyPubFilter();
  });
});

/* ── SCROLL-REVEAL (CSS-free, minimal) ──────────────── */
if ('IntersectionObserver' in window) {
  const style = document.createElement('style');
  style.textContent = `
    .reveal { opacity: 0; transform: translateY(20px); transition: opacity 0.5s ease, transform 0.5s ease; }
    .reveal.visible { opacity: 1; transform: none; }
  `;
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
