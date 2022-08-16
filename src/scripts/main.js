'use strict';

const thumbs = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

thumbs.addEventListener('click', (e) => {
  const item = e.target.closest('.list-item__link');

  e.preventDefault();
  largeImg.src = item.href;
});
