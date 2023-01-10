'use strict';

const menu = document.getElementById('thumbs');
const mainImg = document.getElementById('largeImg');

menu.addEventListener('click', (e) => {
  e.preventDefault();

  const img = e.target.closest('.list-item__link');

  mainImg.src = img.href;
});
