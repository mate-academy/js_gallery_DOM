'use strict';

const image = document.querySelector('.gallery__img');
const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', link => {
  link.preventDefault();

  const img = link.target.closest('.list-item__link');

  image.src = img;
});
