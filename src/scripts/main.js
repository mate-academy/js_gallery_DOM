'use strict';

const gallery = document.querySelector('.gallery');
const largeImg = document.getElementById('largeImg');

gallery.addEventListener('click', (e) => {
  const link = e.target.closest('a');

  if (!link) {
    return;
  }
  e.preventDefault();

  largeImg.src = link.href;
});
