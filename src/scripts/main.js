'use strict';

const gallery = document.querySelector('.gallery');
const mainImage = document.querySelector('.gallery__img');

if (gallery && mainImage) {
  gallery.addEventListener('click', function (eve) {
    const link = eve.target.closest('a');

    if (link && eve.target !== mainImage) {
      eve.preventDefault();

      mainImage.src = link.href;
    }
  });
}
