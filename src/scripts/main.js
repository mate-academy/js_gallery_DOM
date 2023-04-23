'use strict';

const list = document.querySelector('ul');
const largeImg = document.getElementById('largeImg');

list.addEventListener('click', (e) => {
  e.preventDefault();

  const item = e.target.closest('.list-item__link');

  largeImg.src = item.href;
});
