'use strict';

const largeImage = document.querySelector('#largeImg');
const list = document.querySelector('#thumbs');

list.addEventListener('click', (e) => {
  e.preventDefault();

  const item = e.target;

  if (item.classList.contains('gallery__img')) {
    largeImage.src = item.parentNode.href;
  }
});
