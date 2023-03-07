'use strict';

const smallPictures = document.querySelector('#thumbs');
const bigPicture = document.querySelector('#largeImg');

smallPictures.addEventListener('click', (element) => {
  element.preventDefault();

  bigPicture.src = element.target.closest('.list-item__link').href;
});
