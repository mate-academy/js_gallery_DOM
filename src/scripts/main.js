'use strict';

const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('.list-item__link');
  const targetPlace = document.querySelector('.gallery__large-img');

  if (!link) {
    return;
  }

  const targetImg = link.querySelector('.gallery__thumb');

  if (targetImg) {
    targetPlace.setAttribute('src', targetImg.getAttribute('src'));
  }
});
