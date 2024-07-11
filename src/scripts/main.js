'use strict';

const ul = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

ul.addEventListener('click', (e) => {
  e.preventDefault();

  const clickedImage = e.target.closest('a');

  largeImg.src = clickedImage;
});
