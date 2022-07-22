'use strict';

const largeImg = document.querySelector('.gallery__large-img');
const listOfImages = document.querySelector('.gallery__list');

listOfImages.addEventListener('click', (element) => {
  const link = element.target.closest('a');

  element.preventDefault();

  if (!link) {
    return;
  }

  largeImg.src = link.href;
});
