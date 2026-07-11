'use strict';

const largeImg = document.querySelector('.gallery__large-img');
const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', (newEvent) => {
  const clickedLink = newEvent.target.closest('.list-item__link');

  newEvent.preventDefault();

  const hrefValue = clickedLink.href;

  largeImg.src = hrefValue;
});
