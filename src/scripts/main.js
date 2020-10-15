'use strict';

const list = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

list.addEventListener('click', (event) => {
  event.preventDefault();

  const element = event.target.closest('.list-item__link');

  largeImg.src = element.href;
});
