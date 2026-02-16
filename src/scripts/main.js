'use strict';

const mainImage = document.querySelector('.gallery__large-img');
const gallery = document.querySelectorAll('.list-item a');

if (mainImage) {
  gallery.forEach((link) => {
    link.addEventListener('click', (target) => {
      target.preventDefault();
      mainImage.src = target.currentTarget.href;
    });
  });
}
