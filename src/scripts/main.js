'use strict';

const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', (e) => {
  const mainImg = document.querySelector('.gallery__large-img');
  const link = e.target.closest('.gallery__thumb');

  if (link) {
    e.preventDefault();
    mainImg.src = link.src;
  }
});
