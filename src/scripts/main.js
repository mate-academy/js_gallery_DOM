'use strict';

const listOfImages = document.getElementById('thumbs');
const largeImage = document.getElementById('largeImg');

listOfImages.addEventListener('click', (event) => {
  event.preventDefault();

  const pickedImage = event.target.closest('.list-item__link');

  largeImage.src = pickedImage.href;
});
