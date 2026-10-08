'use strict';

const gallery = document.querySelector('.gallery');
const largeImg = document.getElementById('largeImg');

gallery.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('.list-item__link');

  if (!link) {
    return;
  }

  largeImg.src = link.href;
});
