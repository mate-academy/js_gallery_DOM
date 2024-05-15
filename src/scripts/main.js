'use strict';

const list = document.querySelector('ul');

list.addEventListener('click', (e) => {
  e.preventDefault();

  const img = e.target.closest('.gallery__thumb');

  if (!img) {
    return;
  }

  const link = img.closest('a');

  const largeImg = document.getElementById('largeImg');

  largeImg.src = link.href;
});
