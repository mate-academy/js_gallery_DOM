'use strict';

const list = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

list.addEventListener('click', (e) => {
  const item = e.target.closest('.list-item__link');

  e.preventDefault();
  largeImg.src = item.href;
});
