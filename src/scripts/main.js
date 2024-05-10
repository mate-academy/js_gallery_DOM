'use strict';

const images = document.querySelector('.gallery__list');
const largeImg = document.querySelector('.gallery__large-img');

images.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('.list-item__link');
  const newSrc = link.getAttribute('href');

  largeImg.setAttribute('src', newSrc.slice(1));
});
