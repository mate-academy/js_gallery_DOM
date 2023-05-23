'use strict';

const listOfPictures = document.querySelector('#thumbs');
const mainPicture = document.querySelector('#largeImg');

listOfPictures.addEventListener('click', (picture) => {
  picture.preventDefault();

  const item = picture.target.closest('.list-item__link');

  mainPicture.src = item.href;
});
