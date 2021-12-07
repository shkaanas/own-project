//For navbar scrolling
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top = '-97px';
    navbar.style.transition = 'all .6s linear';
  } else {
    navbar.style.top = '0px';
    navbar.style.transition = 'all .6s linear';
  }

  lastScrollTop = scrollTop;
});

//For header slider
const slides = document.querySelectorAll('.slide');

function slidePlug(activeSlide = 0) {
  slides[activeSlide].classList.add('active');

  for (const slide of slides) {
    slide.addEventListener('click', () => {
      clearActiveClasses();
      slide.classList.add('active');
    });
  }

  function clearActiveClasses() {
    slides.forEach((slide) => {
      slide.classList.remove('active');
    });
  }
}

slidePlug();
