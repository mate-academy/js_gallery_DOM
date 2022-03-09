'use strict';

const largeImg = document.querySelector('.gallery__large-img');
const gallery = document.querySelector('.gallery__list');

gallery.addEventListener('click', events => {
  events.preventDefault();

  const image = events.target.closest('.list-item__link').href;

  largeImg.src = image;
});
