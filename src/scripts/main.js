'use strict';

const currentPicture = document.querySelectorAll('a');
const mainImage = document.querySelector('#largeImg');

for (let i = 0; i < currentPicture.length; i++) {
  currentPicture[i].addEventListener('click', (e) => {
    e.preventDefault();
    mainImage.src = currentPicture[i].href;
  });
}
