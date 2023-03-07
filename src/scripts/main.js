'use strict';

const smallPictures = document.querySelector('#thumbs');
const bigPicture = document.querySelector('#largeImg');

smallPictures.addEventListener('click', e => {
  e.preventDefault();

  bigPicture.src = e.target.closest('.list-item__link').href;
});
