'use strict';

const list = document.querySelector('.gallery__list');
const largeImg = document.querySelector('#largeImg');

list.addEventListener('click', (event) => {
  event.preventDefault();

  const link = event.target.closest('.list-item__link');

  largeImg.setAttribute('src', link.getAttribute('href'));
});
