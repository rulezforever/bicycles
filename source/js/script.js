var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');
navMain.classList.remove('main-nav--opened');

navToggle.addEventListener('click', function() {
  navMain.classList.toggle('main-nav--opened');
});


// slow scroll for links

const anchors = document.querySelectorAll('.main-nav__list a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
  e.preventDefault()

  const blockID = anchor.getAttribute('href').substr(1)

  document.getElementById(blockID).scrollIntoView({
  behavior: 'smooth',
  block: 'start'
  })
  })
}
