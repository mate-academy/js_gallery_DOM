/* eslint-disable no-shadow */
'use strict';

const mainImage = document.querySelector('#largeImg');
const list = document.querySelector('#thumbs');

list.addEventListener('click', (event) => {
  event.preventDefault();

  const clickedAnchorTag = event.target.closest('a');

  if (!clickedAnchorTag) {
    return;
  }

  const newImg = clickedAnchorTag.getAttribute('href');

  mainImage.src = newImg;
});
