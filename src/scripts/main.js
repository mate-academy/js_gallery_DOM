'use strict';

const largeImg = document.querySelector('#largeImg');
const imgList = document.querySelector('#thumbs');

imgList.addEventListener('click', (event) => {
  event.preventDefault();

  const item = event.target.closest('.list-item');

  largeImg.src = item.querySelector('a').href;
});
