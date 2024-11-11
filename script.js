// JavaScript для анимации перехода между секциями (добавьте в script.js)
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    // Анимация скроллинга к секции
    targetSection.scrollIntoView({ behavior: 'smooth' }); 
  });
});
