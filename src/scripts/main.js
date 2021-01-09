'use strict';

const img = document.getElementById('thumbs');

img.addEventListener('click', () => {
  event.preventDefault();

  const item = event.target.closest('.list-item__link');
  const mainImg = document.getElementById('largeImg');

  mainImg.src = item.href;
});
