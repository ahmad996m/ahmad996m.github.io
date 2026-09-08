// Small helpers for the portfolio.

// Mobile navigation toggle
const header = document.querySelector('.site-header');
const toggle = document.querySelector('.nav-toggle');

if (header && toggle) {
  toggle.addEventListener('click', () => {
    const isOpen = header.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close the menu when a nav link is clicked (mobile)
  header.querySelectorAll('.nav-group a').forEach((link) => {
    link.addEventListener('click', () => {
      header.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Sound note toggle (decorative for now — hook up an <audio> element later)
const sound = document.querySelector('.sound-toggle');
if (sound) {
  sound.addEventListener('click', () => {
    sound.classList.toggle('muted');
  });
}

// Auto-update footer year
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
