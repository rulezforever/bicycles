(function () {

  var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.main-nav__toggle');
  var page = document.querySelector('.page');

  navMain.classList.remove('main-nav--nojs');
  navMain.classList.remove('main-nav--opened');
  page.classList.remove('page--menu-opened');

  navToggle.addEventListener('click', function () {
    navMain.classList.toggle('main-nav--opened');
    page.classList.toggle('page--menu-opened');
  });


  // slow scroll for links

  const anchors = document.querySelectorAll('.main-nav__list a[href*="#"]');

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute('href').substr(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }


  //--- input validation

  const inputElement = document.querySelector('.promo__input--phone');
  const symbolsPattern = /^[0-9]+$/;

  const checkValidation = () => {
    const value = inputElement.value
    if (!symbolsPattern.test(value)) {
      inputElement.setCustomValidity('Нельзя вводить буквы - введите числа!');
    } else {
      inputElement.setCustomValidity('');
    }
    inputElement.reportValidity();
  }

  inputElement.addEventListener('input', checkValidation);

})();
