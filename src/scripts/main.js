'use strict';

const list = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

// eslint-disable-next-line no-shadow
list.addEventListener('click', (event) => {
  event.preventDefault();

  const item = event.target.closest('.list-item__link');

  largeImg.src = item.href;
});
