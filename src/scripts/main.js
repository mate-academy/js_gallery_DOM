'use strict';

const imgList = document.querySelector('.gallery__list');
const LargeImg = document.querySelector('#largeImg');

imgList.addEventListener('click', (clickEvent) => {
  const item = clickEvent.target.closest('.list-item__link');

  clickEvent.preventDefault();

  LargeImg.src = item.href;
});
