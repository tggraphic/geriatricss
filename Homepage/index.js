let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("open");
  });

  // Slideshow logic here
});


function showSlides() {
  slideIndex++;
  
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }
  
  slides[slideIndex - 1].classList.add('active');
  
  setTimeout(showSlides, 8000);
}

showSlides();
