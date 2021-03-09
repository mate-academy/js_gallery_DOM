'use strict';

const galleryImg = document.querySelector('.gallery__large-img');
const list = document.querySelector('.gallery__list');

list.addEventListener('click', () => {
  const item = event.target.closest('.list-item__link');

  event.preventDefault();
  galleryImg.src = item.href;
});
