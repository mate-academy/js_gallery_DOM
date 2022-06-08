'use strict';

const list = document.querySelector('.gallery__list');

const bigImg = document.getElementById('largeImg');
const aArray = document.querySelectorAll('.list-item__link');
const imgArray = document.querySelectorAll('.gallery__thumb');

list.addEventListener('click', (obj) => {
  const link = obj.target.parentElement.href;

  for (const img of imgArray) {
    if (obj.target === img) {
      bigImg.setAttribute('src', link);
    }
  }

  for (const a of aArray) {
    if (obj.target === a) {
      bigImg.setAttribute('src', a.href);
    }
  }

  obj.preventDefault();
});
