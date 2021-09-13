'use strict';

window.addEventListener('DOMContentLoaded', function () {

  let navMobileIcon = document.querySelector('.nav__mobile');
  let navMenu = document.querySelector('.nav__menu');
  let body = document.querySelector('body');

  function openMobileMenu() {
    navMobileIcon.classList.toggle('has-active');
    navMenu.classList.toggle('has-active');
    body.classList.toggle('has-active');
  };

  navMobileIcon.addEventListener('click', openMobileMenu);

  function closeMobileMenu(e) {
    if (e.target.classList.contains('nav__menu-link')) {
      navMobileIcon.classList.remove('has-active');
      navMenu.classList.remove('has-active');
      body.classList.remove('has-active');
    }
  };

  document.addEventListener('click', closeMobileMenu);
});