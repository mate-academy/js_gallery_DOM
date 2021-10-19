'use strict';

const list = document.querySelector('.gallery__list');
const mainImage = document.querySelector('#largeImg');

list.addEventListener('click', e => {
  e.preventDefault();

  const linkImg = e.target.closest('.list-item__link');

  mainImage.src = linkImg.href;
});
