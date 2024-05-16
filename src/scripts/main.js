'use strict';

const mainImg = document.querySelector('#largeImg');
const list = document.querySelector('#thumbs');

list.addEventListener('click', (e) => {
  const link = e.target.closest('.list-item__link');

  if (!link) {
    return;
  }

  e.preventDefault();

  const newImgSrc = link.href;

  mainImg.src = newImgSrc;
});
