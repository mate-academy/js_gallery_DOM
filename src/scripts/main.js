'use strict';

const image = document.querySelector('#largeImg');
const imageList = document.querySelector('#thumbs');

imageList.addEventListener('click', event => {
  event.preventDefault();

  const chosenImage = event.target.closest('.list-item__link');

  image.src = chosenImage.href;
});
