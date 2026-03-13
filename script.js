// ============================================
//   PORTFOLIO — script.js
//   All interactive behavior
// ============================================

// ── 1. NAVBAR: add border when user scrolls down ──
const nav = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});


// ── 2. FADE-UP ANIMATION on scroll ──
//    Any element with class "fade-up" will animate in
//    when it enters the viewport.
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-up').forEach(el => fadeObserver.observe(el));


// ── 3. SKILL BARS: animate widths when section scrolls into view ──
const skillsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-fill').forEach(fill => {
        fill.classList.add('animated');
      });
      skillsObserver.unobserve(entry.target); // only animate once
    }
  });
}, { threshold: 0.3 });

const skillsBars = document.getElementById('skills-bars');
if (skillsBars) skillsObserver.observe(skillsBars);


// ── 4. STAGGERED FADE-UP for service and testimonial cards ──
//    Each card gets a slight delay so they appear one after another.
document.querySelectorAll('.services-grid, .testimonials-grid').forEach(grid => {
  grid.querySelectorAll(':scope > *').forEach((child, i) => {
    child.style.transitionDelay = `${i * 0.08}s`;
    child.classList.add('fade-up');
    fadeObserver.observe(child);
  });
});