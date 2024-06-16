'use strict';

const homePage = document.querySelector('#largeImg');
const list = document.querySelectorAll('.list-item__link');

list.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    homePage.src = link.href;
  });
});
