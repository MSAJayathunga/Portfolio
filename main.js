const hamburger = document.querySelector('.hamburger');
const navlist = document.querySelector('nav ul');

if (hamburger && navlist) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navlist.classList.toggle('active');
    });
}

document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('active');
  });
  
// Typed.js Animation
document.addEventListener("DOMContentLoaded", function() {
    const typed = new Typed('.multiple', {
        strings: ['Front-End Developer', 'Web Developer', 'Project Manager'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
});


    function toggleMenu() {
        const navLinks = document.querySelector('nav ul');
        navLinks.classList.toggle('active'); // Toggles the 'active' class to show/hide the menu
    }



// Scroll Event to Display About Section
window.addEventListener('scroll', function() {
   const aboutSection = document.getElementById('about');
   const aboutPosition = aboutSection.getBoundingClientRect().top;
   const screenPosition = window.innerHeight;

 if (aboutPosition < screenPosition) {
       aboutSection.style.opacity = '1'; // Reveal about section on scroll
    }
});


// Smooth Scroll for Navbar Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();  // Prevent default jump to anchor
       document.querySelector(this.getAttribute('href')).scrollIntoView({
       behavior: 'smooth'  // Smooth scroll to section
      });
      });
});
