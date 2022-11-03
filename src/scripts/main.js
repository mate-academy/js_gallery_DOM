'use strict';

const listItem = document.querySelectorAll('.list-item');
const largePicture = document.getElementById('largeImg');

[...listItem].map(image => {
  image.addEventListener('click', (occurent) => {
    occurent.preventDefault();
    largePicture.setAttribute('src', image.firstChild.nextSibling.href);
  });
});
