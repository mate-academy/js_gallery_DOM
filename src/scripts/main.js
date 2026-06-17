'use strict';

const mainImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  const clickedImg = e.target.closest('a');

  if (clickedImg) {
    const newImg = clickedImg.href;

    mainImg.src = newImg;
  }
});
