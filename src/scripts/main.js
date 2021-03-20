'use strict';

const gallery = document.querySelector('.gallery__list');
const largeImg = document.querySelector('.gallery__large-img');

gallery.addEventListener('click', (e) => {
  e.preventDefault();

  const url = e.target.parentElement.getAttribute('href');

  largeImg.setAttribute('src', url);
});
