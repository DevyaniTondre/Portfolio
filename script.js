// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});

// Scroll Reveal
const sections = document.querySelectorAll('.section');
function revealOnScroll() {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (top < windowHeight - 100) {
      section.classList.add('reveal');
    } else {
      section.classList.remove('reveal');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Scroll to Top
const scrollToTop = document.getElementById('scrollToTop');
window.addEventListener('scroll', () => {
  scrollToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});
scrollToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
