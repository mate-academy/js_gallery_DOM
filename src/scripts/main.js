'use strict';

const thumbs = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

thumbs.addEventListener('click', (event) => {
  const item = event.target.closest('.list-item__link');

  event.preventDefault();
  largeImg.src = item.href;
});
