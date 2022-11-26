'use strict';

const bigImage = document.querySelector('#largeImg');
const smallImages = document.querySelectorAll('.gallery__thumb');

const callback = (event) => {
  const item = event.target.closest('.list-item__link');

  event.preventDefault();

  bigImage.src = item.href;
};

smallImages.forEach(image => image
  .addEventListener('click', callback));