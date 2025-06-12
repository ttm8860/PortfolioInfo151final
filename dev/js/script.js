function toggleMenu() {
    document.getElementById("menu").classList.toggle("hidden");
  }
  // Burger menu toggle
const burgerMenu = document.getElementById('burger-menu');
const navLinks = document.getElementById('nav-links');

burgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Scroll-trigger fade-in
const fadeElements = document.querySelectorAll('.fade-in');

const scrollHandler = () => {
  const triggerBottom = window.innerHeight * 0.9;
  fadeElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerBottom) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', scrollHandler);

// Run on load in case some elements are already visible
scrollHandler();
