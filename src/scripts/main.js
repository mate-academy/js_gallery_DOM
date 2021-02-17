'use strict';

const largeImg = document.querySelector('#largeImg').attributes.src;
const galleryList = document.querySelector('.gallery__list');

galleryList.addEventListener('click', (event) => {
  event.preventDefault();

  largeImg.value = event.target.closest('a').attributes.href.value;
});
