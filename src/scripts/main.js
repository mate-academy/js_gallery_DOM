'use strict';

const listOfImages = document.querySelector('.gallery__list');
const mainImg = document.getElementById('largeImg');
let imgPath = '';

listOfImages.addEventListener('click', (e) => {
  const { target } = e;

  e.preventDefault();

  if (target.tagName.toLowerCase() === 'img') {
    imgPath = target.closest('a').href;
    mainImg.src = imgPath;
  }

  if (target.tagName.toLowerCase() === 'a') {
    imgPath = target.href;
    mainImg.src = imgPath;
  }
});
