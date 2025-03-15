'use strict';

const images = document.querySelector('.gallery__list');
const largeImg = document.querySelector('.gallery__large-img');

images.addEventListener('click', (e) => {
  e.preventDefault();

  const baseUrl = window.location.origin;
  const link = e.target.closest('.list-item__link');
  const absoluteSrc = new URL(link.getAttribute('href'), baseUrl).href;

  largeImg.setAttribute('src', absoluteSrc);
});
