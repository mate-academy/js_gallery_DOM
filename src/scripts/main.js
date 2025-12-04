'use strict';

const gallery = document.querySelector('.gallery');
const largeImg = document.querySelector('#largeImg');

gallery.addEventListener('click', (e) => {
  const a = e.target.closest('a');

  if (!a) {
    return;
  }

  e.preventDefault();

  largeImg.src = a.href;
});
