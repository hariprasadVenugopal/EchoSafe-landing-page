console.log("EchoSafe script loaded");

document.addEventListener('DOMContentLoaded', () => {
  const ctaButtons = document.querySelectorAll('.cta-button');

  ctaButtons.forEach(button => {
    button.addEventListener('click', () => {
      alert('Thank you for starting your journey with EchoSafe!');
    });
  });

  const slides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.control-dot');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
      dots[i].classList.toggle('active', i === index);
    });
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentSlide = index;
      showSlide(currentSlide);
    });
  });

  setInterval(() => {
    const carousel = document.querySelector('.testimonial-carousel');
    if (carousel && carousel.offsetParent !== null) { 
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  }, 5000);
});
