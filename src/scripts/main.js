'use strict';

const gallery = document.querySelector('.gallery__list');
const mainImage = document.querySelector('#largeImg');

gallery.addEventListener('click', (e) => {
  e.preventDefault();

  const thumbnail = e.target.closest('.list-item__link');

  if (thumbnail) {
    const thumbSrc = thumbnail.getAttribute('href');

    mainImage.setAttribute('src', thumbSrc);
  }
});
