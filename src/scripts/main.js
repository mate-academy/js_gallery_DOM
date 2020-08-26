'use strict';

const image = document.getElementById('thumbs');

image.addEventListener('click', (event) => {
  event.preventDefault();

  const clickedElem = event.target;

  if (clickedElem.parentElement.href === undefined) {
    return;
  }

  document
    .getElementById('largeImg')
    .src = `${clickedElem.parentElement.href}`;
});
