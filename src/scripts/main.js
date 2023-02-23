'use strict';

const imgList = document.querySelector('.gallery__list');
const mainImg = document.querySelector('.gallery__large-img');

imgList.addEventListener('click', (e) => {
  const item = e.target.closest('.list-item__link');
  const link = item.href;

  e.preventDefault();
  mainImg.src = link;
});
