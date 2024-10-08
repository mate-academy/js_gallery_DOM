'use strict';

const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (event) => {
  event.preventDefault();

  const image = event.target.closest('.list-item__link');

  if (!image) {
    return;
  }

  const imagePath = image.getAttribute('href');
  largeImg.setAttribute('src', imagePath);
})
