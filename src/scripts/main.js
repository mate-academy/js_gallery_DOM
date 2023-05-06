'use strict';

const element = document.querySelector('ul');
const largeImg = document.getElementById('largeImg');

element.addEventListener('click', (el) => {
  el.preventDefault();

  const item = el.target.closest('.list-item__link');

  largeImg.src = item.href;
});
