'use strict';

const largeImg = document.querySelector('#largeImg');
const images = document.querySelector('#thumbs');

images.addEventListener('click', i => {
  i.preventDefault();

  const link = i.target.closest('.list-item__link');

  largeImg.src = link.href;
});
