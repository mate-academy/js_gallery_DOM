'use strict';

const mainImg = document.querySelector('#largeImg');
const list = document.querySelector('#thumbs');

list.addEventListener('click', () => {
  const item = event.target.closest('.gallery__img');

  mainImg.src = item.src;

  event.preventDefault();
});
