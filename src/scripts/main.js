'use strict';

const mainImage = document.querySelector('#largeImg');
const listItems
  = document.querySelector('#thumbs');

// eslint-disable-next-line no-shadow
listItems.addEventListener('click', (event) => {
  event.preventDefault();

  const element = event.target;

  if (!element.classList.contains('gallery__img')) {
    return;
  }

  const littleImgSrc = element.getAttribute('src');

  mainImage.src = './images/'
    + littleImgSrc.substring(0, littleImgSrc.lastIndexOf('-'))
    + '.png';
});
