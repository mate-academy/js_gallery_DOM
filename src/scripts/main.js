'use strict';

const largeImage = document.querySelector('#largeImg');
const imageList = document.querySelector('#thumbs');

imageList.addEventListener('click', (event) => {
  event.preventDefault();

  const picture = event.target.closest('.list-item__link');

  largeImage.src = picture.href;
});
