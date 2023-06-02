'use strict';

const largeImg = document.querySelector('#largeImg');
const imgList = document.querySelector('#thumbs');

imgList.addEventListener('click', (e) => {
  e.preventDefault();

  const item = e.target.closest('.list-item__link');

  largeImg.src = item.href;
});
