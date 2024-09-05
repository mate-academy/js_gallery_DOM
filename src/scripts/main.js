'use strict';

const listOfImages = document.querySelector('.gallery__list');
const mainImg = document.getElementById('largeImg');
let imgSource = '';

listOfImages.addEventListener('click', (e) => {
  const { target } = e;

  e.preventDefault();

  if (target.tagName.toLowerCase() === 'img') {
    imgSource = target.closest('a').href;
    mainImg.src = imgSource;
  }

  if (target.tagName.toLowerCase() === 'a') {
    imgSource = target.href;
    mainImg.src = imgSource;
  }
});
