'use strict';

const largeImg = document.getElementById('largeImg');
const ul = document.getElementById('thumbs');

ul.addEventListener('click', (action) => {
  action.preventDefault();

  const newLargeImg = action.target.closest('.list-item__link');

  largeImg.src = newLargeImg.href;
});
