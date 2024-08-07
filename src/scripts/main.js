'use strict';

const largeImage = document.querySelector('#largeImg');
const thumbs = document.querySelector('#thumbs');

thumbs.addEventListener('click', (e) => {
  event.preventDefault();

  const image = e.target.closest('a');

  if (image) {
    largeImage.src = image.href;
  }
});
