'use strict';

const list = document.getElementById('thumbs');
const image = document.getElementById('largeImg');

list.addEventListener('click', (element) => {
  const item = element.target.closest('.list-item__link');

  image.src = item.href;
  element.preventDefault();
});
