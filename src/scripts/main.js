'use strict';

const gallery = document.querySelector('.gallery__list');
const mainPhoto = document.getElementById('largeImg');

gallery.addEventListener('click', (event) => {
  event.preventDefault();

  const closestLink = event.target.closest('.list-item__link');

  mainPhoto.setAttribute('src', closestLink.href);
});
