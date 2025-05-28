'use strict';

const buttons = document.querySelectorAll('.list-item__link');

const target = document.querySelector('.gallery__large-img');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    button.getAttribute('href');
  });
});
