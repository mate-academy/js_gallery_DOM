'use strict';

const largeImg = document.querySelector('#largeImg');
const thumbs = document.querySelector('#thumbs');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  const src = e.target.closest('.list-item__link');

  largeImg.src = src.href;
});
