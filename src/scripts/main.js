'use strict';

const largeImage = document.querySelector('#largeImg');
const smallImage = document.querySelector('#thumbs');

smallImage.addEventListener('click', (f) => {
  f.preventDefault();

  const imageLink = f.target.closest('.list-item__link');

  if (imageLink) {
    largeImage.src = imageLink.href;
  }
});
