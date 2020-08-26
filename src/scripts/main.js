'use strict';

const largeImg = document.getElementById('largeImg');

document.querySelector('.gallery').onclick = (event) => {
  event.preventDefault();
  largeImg.src = event.target.closest('.list-item__link').href;
};
