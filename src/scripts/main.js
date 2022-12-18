'use strict';

const gallery = document.querySelector('.gallery');
const largeImg = document.querySelector('.gallery__large-img');
const list = document.querySelector('.gallery__list');

gallery.addEventListener('click', (e) => {
  e.preventDefault();

  const item = e.target.closest('.gallery__thumb');

  if (item || list.contains(item)) {
    largeImg.src = e.target.parentElement.href;
  }
});
