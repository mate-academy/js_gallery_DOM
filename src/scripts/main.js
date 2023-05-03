'use strict';

const largeImg = document.getElementById('largeImg');
const list = document.querySelector('ul');

list.addEventListener('click', (ev) => {
  ev.preventDefault();
  largeImg.src = ev.target.closest('.list-item__link').href;
});
