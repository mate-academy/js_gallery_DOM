'use strict';

const largeImg = document.getElementById('largeImg');
const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('.list-item__link');

  if (!link || !gallery.contains(link)) {
    return;
  }

  largeImg.src = link.href;
});
