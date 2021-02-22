'use strict';

const list = document.querySelector('#thumbs');
const mainImg = document.querySelector('#largeImg');

const changeMainImg = (e) => {
  const item = e.target.closest('.list-item__link');

  if (!item) {
    return;
  }

  mainImg.setAttribute('src', item.href);
  e.preventDefault();
};

list.addEventListener('click', changeMainImg);
