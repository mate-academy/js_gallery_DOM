'use strict';

const thumbs = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

const onImageSelected = (events) => {
  events.preventDefault();

  const image = events.target.closest('.list-item__link');

  largeImg.src = image.href;
};

thumbs.addEventListener('click', onImageSelected);
