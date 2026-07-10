/* ============================================================
   Akash Singh — portfolio scripts
   theme toggle · typing effect · scroll reveal · mobile menu
   skill bars · active nav link · footer year · contact form
   ============================================================ */

/* ---------- Theme toggle (remembers your choice) ---------- */
(function theme() {
  const root = document.documentElement;
  const btn = document.getElementById('themeBtn');
  const saved = localStorage.getItem('theme');
  if (saved) root.setAttribute('data-theme', saved);

  btn.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
})();

/* ---------- Typing effect in the hero ---------- */
(function typing() {
  const el = document.querySelector('.typed');
  if (!el) return;

  const roles = [
    'Data Scientist',
    'ML Engineer',
    'Computer Vision Enthusiast',
    'Python Developer'
  ];

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) { el.textContent = roles[0]; return; }

  let r = 0, i = 0, deleting = false;

  (function tick() {
    const word = roles[r];
    el.textContent = deleting ? word.slice(0, --i) : word.slice(0, ++i);

    let wait = deleting ? 40 : 75;
    if (!deleting && i === word.length) { wait = 1800; deleting = true; }
    else if (deleting && i === 0) { deleting = false; r = (r + 1) % roles.length; wait = 350; }

    setTimeout(tick, wait);
  })();
})();

/* ---------- Scroll reveal + skill bars ---------- */
(function reveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');

      // fill any skill bars inside this block
      e.target.querySelectorAll('.bar i').forEach(bar => {
        bar.style.width = bar.dataset.w + '%';
      });
      io.unobserve(e.target);
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
})();

/* ---------- Sticky nav shadow ---------- */
(function navScroll() {
  const header = document.getElementById('header');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 20);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
})();

/* ---------- Mobile menu ---------- */
(function burger() {
  const btn = document.getElementById('burger');
  const links = document.getElementById('links');

  btn.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => links.classList.remove('open'));
  });
})();

/* ---------- Highlight the section you're reading ---------- */
(function activeLink() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('#links a');

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const id = e.target.id;
      links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + id));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });

  sections.forEach(s => io.observe(s));
})();

/* ---------- Contact form ---------- */
(function contact() {
  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    note.textContent = '✅ Thanks! Connect this form to Formspree to actually receive messages.';
    note.style.color = '#22c55e';
    form.reset();
  });
})();

/* ---------- Footer year ---------- */
document.getElementById('year').textContent = new Date().getFullYear();
