'use strict';

const pictures = document.querySelector('.gallery__list');

const currentImg = document.querySelector('.gallery__large-img');

pictures.addEventListener('click', (picture) => {
  const item = picture.target.closest('.list-item__link');

  picture.preventDefault();

  currentImg.src = item.href;
});
