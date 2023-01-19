'use strict';

const bigImage = document.querySelector('.gallery__large-img');
const imageList = document.querySelector('.gallery__list');

imageList.addEventListener('click', (ev) => {
  const image = ev.target.closest('.list-item__link');

  if (!image) {
    return;
  };

  ev.preventDefault();

  bigImage.src = image.href;
});
