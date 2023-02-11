'use strict';

const gallery = document.querySelector('.gallery');
const largeImg = document.querySelector('.gallery__large-img');

gallery.addEventListener('click', (e) => {
  const target = e.target.closest('.list-item');
  const src = target.firstElementChild.getAttribute('href');

  if (!target) {
    return;
  }

  e.preventDefault();
  largeImg.setAttribute('src', src);
});
