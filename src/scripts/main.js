'use strict';

const image = document.getElementById('largeImg');
const list = document.getElementById('thumbs');

list.addEventListener('click', e => {
  const item = e.target.closest('.list-item__link');

  e.preventDefault();

  image.src = item.href;
});
