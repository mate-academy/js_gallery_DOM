'use strict';

const targetImage = document.querySelector('#largeImg');
const imagesList = document.querySelector('.gallery__list');

imagesList.addEventListener('click', (eventX) => {
  eventX.preventDefault();

  const image = eventX.target.closest('.list-item__link');

  targetImage.src = image.href;
});
