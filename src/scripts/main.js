'use strict';

const largeImage = document.querySelector('#largeImg');
const list = document.querySelector('#thumbs');

list.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG') {
    const newSrc = e.target.parentNode.href;

    largeImage.src = newSrc;
    e.preventDefault();
  }
});
