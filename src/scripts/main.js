'use strict';

const gallery = document.querySelector('.gallery');
const largeImg = document.getElementById('largeImg');

gallery.addEventListener('click', (e) => {
  e.preventDefault();

  const imgLink = e.target.closest('.list-item__link');

  if (!imgLink) {
    return;
  }

  largeImg.src = imgLink.href;
});
