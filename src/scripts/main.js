'use strict';

const largeImg = document.querySelector('#largeImg');
const images = document.querySelector('#thumbs');

images.addEventListener('click', e => {
  e.preventDefault();

  const link = e.target.closest('.list-item__link');

  largeImg.src = link.href;
});
