'use strict';

const imgList = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

imgList.addEventListener('click', (event) => {
  event.preventDefault();

  const imgLink = event.target.closest('.list-item__link');

  largeImg.src = imgLink.href;
});
