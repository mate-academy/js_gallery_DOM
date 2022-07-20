'use strict';

const largeImg = document.querySelector('#largeImg');
const thumbs = document.querySelector('#thumbs');

thumbs.addEventListener('click', (e) => {
  const item = e.target.closest('.list-item__link');

  e.preventDefault();

  largeImg.src = item.href;
});
