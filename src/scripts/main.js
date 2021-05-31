'use strict';

const largeImage = document.querySelector('#largeImg');
const listImage = document.querySelector('#thumbs');

const changeImage = (event) => {
  event.preventDefault();
  largeImage.src = event.target.closest('.list-item__link').href;
};

listImage.addEventListener('click', changeImage);
