'use strict';

const largeImage = document.getElementById('largeImg');
const thumbnail = document.getElementById('thumbs');

thumbnail.addEventListener('click', (e) => {
  e.preventDefault();

  const image = e.target.closest('.list-item__link');

  largeImage.src = image.href;
});
