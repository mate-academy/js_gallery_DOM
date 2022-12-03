'use strict';

const bigPicture = document.getElementById('largeImg');
const smallPictures = [...document.querySelectorAll('.gallery__thumb')];

smallPictures.map(picture => {
  picture.onclick = (action) => {
    action.preventDefault();

    bigPicture.src = picture.parentElement.href;
  };
});
