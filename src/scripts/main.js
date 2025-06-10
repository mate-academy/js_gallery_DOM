'use strict';

const mainBlock = document.querySelector('.gallery');
const largeImg = document.getElementById('largeImg');

mainBlock.addEventListener('click', (e) => {
  e.preventDefault();

  const linkElement = e.target.closest('.list-item__link');

  if (linkElement) {
    const clickedImage = linkElement.querySelector('img');

    if (clickedImage) {
      largeImg.src = clickedImage.src;
    }
  }
});
