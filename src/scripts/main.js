'use strict';

const currentImg = document.querySelector('#largeImg');
const thumbs = document.querySelector('#thumbs');

thumbs.addEventListener('click', (bruh) => {
  bruh.preventDefault();

  if (bruh.target.tagName === 'IMG' || bruh.target.tagName === 'A') {
    currentImg.src = bruh.target.closest('a').href;
  }
});
