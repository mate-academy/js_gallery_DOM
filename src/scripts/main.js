'use strict';

const showImage = document.querySelector('.gallery__large-img');
const list = document.querySelector('.gallery__list');

list.addEventListener('click', (photo) => {
  const item = photo.target.closest('.list-item__link');

  photo.preventDefault();

  showImage.src = item.href;
});
