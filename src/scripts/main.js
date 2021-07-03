'use strict';

const gallery = document.querySelector('.gallery');
const largeImg = document.getElementById('largeImg');

gallery.addEventListener('click', (e) => {
  if (e.target.tagName !== 'IMG' && e.target.tagName !== 'A') {
    return;
  }

  e.preventDefault();
  largeImg.src = e.target.closest('.list-item__link').href;
});
