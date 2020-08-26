'use strict';

const list = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

list.addEventListener('click', (event) => {
  event.preventDefault();
  largeImg.src = event.target.closest('.list-item__link').href;
});
