'use strict';

const bigPicture = document.getElementById('largeImg');

document.querySelector('.gallery__list')
  .addEventListener('click', (clickOnImg) => {
    clickOnImg.preventDefault();

    bigPicture.src = clickOnImg.target.parentElement.href;
  });
