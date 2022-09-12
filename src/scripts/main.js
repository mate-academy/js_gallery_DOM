'use strict';

const listOfImages = document.querySelector('.gallery__list');

const largeImg = document.getElementById('largeImg');

listOfImages.addEventListener('click', () => {
  const some = event.target;

  if (some.closest('.list-item__link')) {
    event.preventDefault();
  }

  const link = some.closest('.list-item__link');

  largeImg.src = link.href;
});
