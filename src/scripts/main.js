'use strict';

const bigPicture = document.getElementById('largeImg');
const smallPictures = [...document.querySelectorAll('.list-item__link')];

smallPictures.map(picture => {
  picture.onclick = (action) => {
    action.preventDefault();

    bigPicture.src = picture.href;
  };
});
