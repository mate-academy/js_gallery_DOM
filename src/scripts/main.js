'use strict';

const largeImg = document.querySelector('#largeImg');
const gallery = document.querySelector('.gallery__list');

gallery.addEventListener('click', (event) => {
  const item = event.target;

  largeImg.src = item.parentNode.getAttribute('href');
  event.preventDefault();
});
