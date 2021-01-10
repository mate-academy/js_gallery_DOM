'use strict';

const imgList = document.querySelector('#thumbs');
const chosenImg = document.querySelector('#largeImg');

imgList.addEventListener('click', e => {
  e.preventDefault();

  chosenImg.src = e.target.closest('.list-item__link').href;
});
