'use strict';

const mainPicture = document.getElementById('largeImg');
const listImg = document.getElementsByClassName('list-item__link');

for (const img of listImg) {
  img.addEventListener('click', (eve) => {
    eve.preventDefault();
    mainPicture.src = img.href;
  });
};
