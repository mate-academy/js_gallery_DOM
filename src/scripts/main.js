'use strict';

const list = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

list.addEventListener('click', (event) => {
  event.preventDefault();

  const image = event.target.closest('.list-item__link');

  largeImg.src = image.href;
});
