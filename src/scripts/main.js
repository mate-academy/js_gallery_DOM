'use strict';

const largeImg = document.getElementById('largeImg');
const listOfImages = document.getElementById('thumbs');

listOfImages.addEventListener('click', (element) => {
  const link = element.target.closest('a');

  element.preventDefault();

  if (!link) {
    return;
  }

  largeImg.src = link.href;
});
