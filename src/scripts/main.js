'use strict';

const bigImage = document.querySelector('#largeImg');
const smallImages = document.querySelectorAll('.gallery__thumb');

const callback = (e) => {
  const item = e.target.closest('.list-item__link');

  e.preventDefault();

  bigImage.src = item.href;
};

smallImages.forEach(image => image
  .addEventListener('click', callback));
