'use strict';

window.onload = () => {
  const largeImg = document.getElementById('largeImg');

  largeImg.height = parseInt(window.getComputedStyle(largeImg).height);

  document.querySelectorAll('.list-item__link').forEach((link) => {
    link.removeAttribute('href');
  });

  document.querySelector('.gallery__list').onclick = (event) => {
    largeImg.src = event.target.src;
  };
};
