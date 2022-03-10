'use strict';

const selectedImage = document.getElementById('largeImg');

const list = document.querySelector('.gallery__list');

// eslint-disable-next-line no-shadow
list.addEventListener('click', (event) => {
  event.preventDefault();

  const item = event.target;

  selectedImage.src = item.src;
  selectedImage.style.height = '347px';
});
