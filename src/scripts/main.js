'use strict';

const gallery = document.querySelector('.gallery__list');
const bigImage = document.querySelector('.gallery__large-img');

gallery.addEventListener('click', (el) => {
  bigImage.src = el.target.parentNode.href;
  el.preventDefault();
});
