'use strict';

const gallery = document.querySelector('.gallery');
const mainImg = document.querySelector('.gallery__large-img');

gallery.addEventListener('click', (e) => {
  const link = e.target.closest('a');

  if (!link) {
    return;
  }

  e.preventDefault();
  mainImg.src = link.href;
});
