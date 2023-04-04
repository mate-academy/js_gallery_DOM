'use strict';

const mainImg = document.querySelector('#largeImg');
const list = document.querySelector('#thumbs');

list.addEventListener('click', (e) => {
  e.preventDefault();

  const item = e.target.closest('.list-item__link');

  mainImg.src = item.href;
});
