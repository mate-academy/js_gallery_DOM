'use strict';

const mainImg = document.querySelector('.gallery__large-img');
const imgList = document.querySelector('.gallery__list');

imgList.addEventListener('click', (event) => {
  event.preventDefault();

  const item = event.target;
  
  mainImg.src = item.src;
});
