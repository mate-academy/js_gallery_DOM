/* eslint-disable no-shadow */
'use strict';

const mainImage = document.getElementById('largeImg');
const thumbsList = document.querySelector('#thumbs');

thumbsList.addEventListener('click', (event) => {
  event.preventDefault();

  const clickedElement = event.target;
  let largeImageSrc = '';

  if (clickedElement.tagName === 'IMG') {
    largeImageSrc = clickedElement.parentElement.getAttribute('href');
  } else if (clickedElement.tagName === 'A') {
    largeImageSrc = clickedElement.getAttribute('href');
  }

  if (largeImageSrc) {
    mainImage.src = largeImageSrc;
  }
});
