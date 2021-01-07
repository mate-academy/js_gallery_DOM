'use strict';

const thumbs = document.getElementById('thumbs');
const mainImg = document.getElementById('largeImg');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  const item = e.target.closest('.list-item__link');

  mainImg.src = item.href;
});
