'use strict';

const image = document.getElementById('largeImg');
const list = document.getElementById('thumbs');

list.addEventListener('click', (element) => {
  element.preventDefault();

  const item = element.target.closest('.list-item__link');

  image.src = item.href;
});
