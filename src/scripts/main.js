'use strict';

const mainImg = document.querySelector('.gallery__large-img');
const imgList = document.querySelector('.gallery__list');

imgList.addEventListener('click', (ev) => {
  ev.preventDefault();

  const item = ev.target;

  if (item.tagName === 'IMG') {
    const clickedImg = ev.target.closest('.list-item__link');

    mainImg.src = clickedImg;
  }
});
