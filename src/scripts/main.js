'use strict';

const image = document.getElementById('thumbs');
const bigImage = document.getElementById('largeImg');

image.addEventListener('click', (event) => {
  event.preventDefault();

  const clickedElem = event.target;

  if (!clickedElem.parentElement.href) {
    return;
  }

  bigImage.src = clickedElem.parentElement.href;
});
