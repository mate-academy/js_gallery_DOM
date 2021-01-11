'use strict';

const img = document.getElementById('thumbs');
const mainImg = document.getElementById('largeImg');

img.addEventListener('click', () => {
  const item = event.target.closest('.list-item__link');

  event.preventDefault();
  mainImg.src = item.href;
});
