'use strict';

const list = document.querySelector('ul');
const largeImage = document.getElementById('largeImg');

list.addEventListener('click', (f) => {
  f.preventDefault();

  const item = f.target.closest('.list-item__link');

  largeImage.src = item.href;
});
