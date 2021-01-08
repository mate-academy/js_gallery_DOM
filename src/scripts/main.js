'use strict';

const display = document.querySelector('#largeImg');

document.querySelector('body').addEventListener('click', (e) => {
  e.preventDefault();

  if (e.target.classList.contains('gallery__thumb')) {
    display.src = e.target.parentElement.href;
  }
});
