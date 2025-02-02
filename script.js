document.querySelectorAll('a[href^="#home"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
  
      // Find the element with the class "container" within the document
      const target = document.querySelector('.container.home-section');
      
      if (target) {
        // Scroll to the element
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
// Script to handle hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.querySelectorAll('li').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Script to handle dark mode toggle
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
let darkMode = false;

themeToggle.addEventListener('click', () => {
    darkMode = !darkMode;
    document.body.classList.toggle('dark-mode');

    if (darkMode) {
        themeIcon.textContent = '🌙';
    } else {
        themeIcon.textContent = '☀️';
    }
});
