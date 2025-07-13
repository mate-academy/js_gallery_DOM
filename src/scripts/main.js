'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.gallery');
  const mainImage = document.querySelector('.gallery__large-img');

  gallery.addEventListener('click', function (e) {
    e.preventDefault();

    let target = e.target;

    if (target.tagName === 'IMG') {
      target = target.parentElement;
    }

    if (target.tagName === 'A') {
      mainImage.setAttribute('src', target.href);
    }
  });
});
