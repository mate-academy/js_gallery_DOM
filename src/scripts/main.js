'use strict';

const listOfImages = document.querySelector('.gallery__list');
const largeImage = document.querySelector('#largeImg');

listOfImages.addEventListener('click', (eventl) => {
  const link = eventl.target.closest('.list-item__link');

  if (!link || !listOfImages.contains(link)) {
    return;
  }
  eventl.preventDefault();
  largeImage.src = link.href;
});
