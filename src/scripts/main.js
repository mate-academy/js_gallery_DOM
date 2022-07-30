'use strict';

const gallery = document.querySelector('.gallery');
const largeImg = document.getElementById('largeImg');

gallery.addEventListener('click', e => {
  const target = e.target.closest('a');

  if (!target) {
    return;
  }

  largeImg.src = target.href;

  e.preventDefault();
});
