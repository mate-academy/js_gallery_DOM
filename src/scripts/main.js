'use strict';

const a = document.querySelector('#largeImg');
const img = document.querySelector('#thumbs');

img.addEventListener('click', (eve) => {
  eve.preventDefault();
  eve.target.closest('.list-item__link');

  const link = eve.target.closest('.list-item__link');

  a.src = link.href;
});
