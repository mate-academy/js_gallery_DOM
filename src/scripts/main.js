'use strict';

const bigPicture = document.getElementById('largeImg');
const pictures = document.querySelectorAll('a');

Array.from(pictures).forEach((picture) => {
  // eslint-disable-next-line no-shadow
  picture.addEventListener('click', (event) => {
    event.preventDefault();
    bigPicture.src = picture.href;
  });
});
