'use strict';

const gallery = document.querySelector('.gallery');
const mainImage = document.querySelector('.gallery__large-img');

gallery.addEventListener('click', (e) => {
  const link = e.target.closest('.list-item__link');

  e.preventDefault();

  mainImage.src = link;
});
