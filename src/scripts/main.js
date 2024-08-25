'use strict';

// eslint-disable-next-line no-shadow
document.getElementById('thumbs').addEventListener('click', (event) => {
  event.preventDefault();

   const image = event.target.closest('.list-item__link');

  largeImg.src = image.href;
});
