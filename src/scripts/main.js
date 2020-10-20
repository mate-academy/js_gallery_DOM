'use strict';

const mainImage = document.querySelector('.gallery__large-img');
const imageList = document.querySelector('.gallery__list');

imageList.addEventListener('click', (event) => {
  event.preventDefault();

  const image = event.target.closest('.list-item');

  if (!image || !imageList.contains(image)) {
    return;
  };

  mainImage.src = image.querySelector('.list-item__link').href;
});
