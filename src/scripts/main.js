'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const gallery = document.querySelector('.gallery');
  const mainImage = document.querySelector('.main-image img');

  gallery.addEventListener('click', function (e) {
    const target = e.target;

    if (target.tagName === 'IMG') {
      mainImage.src = target.src;
    } else if (target.tagName === 'A' && target.querySelector('img')) {
      mainImage.src = target.querySelector('img').src;
    }
  });
});
