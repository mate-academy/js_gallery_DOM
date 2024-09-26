'use strict';

const image = document.querySelector('#thumbs');
const largeImage = document.querySelector('#largeImg');

image.addEventListener('click', (newevent) => {
  newevent.preventDefault();

  const item = newevent.target.closest('a');

  largeImage.src = item.href;
});
