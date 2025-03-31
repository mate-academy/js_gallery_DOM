'use strict';

const gallery = document.querySelector('.gallery');
const mainImage = document.querySelector('.gallery__large-img');

gallery.addEventListener('click', (e) => {
  const target = e.target.closest('a');

  if (target) {
    e.preventDefault();
    mainImage.src = target.href;
  }
});
