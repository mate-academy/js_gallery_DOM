'use strict';

const largeImg = document.getElementById('largeImg');
const list = document.getElementById('thumbs');

list.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('.list-item__link');

  largeImg.src = link.href;
});
