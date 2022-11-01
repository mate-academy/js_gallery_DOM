'use strict';

const thumbPictures = document.querySelectorAll('.list-item');
const largePicture = document.getElementById('largeImg');

[...thumbPictures].map(picture => {
  // eslint-disable-next-line no-shadow
  picture.addEventListener('click', (event) => {
    event.preventDefault();
    largePicture.setAttribute('src', picture.firstChild.nextSibling.href);
  });
});
