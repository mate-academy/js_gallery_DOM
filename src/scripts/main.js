'use strict';

const list = document.querySelector('ul');
const mainGallery = document.getElementById('largeImg');
// const image = document.querySelector('.list-item');

list.addEventListener('click', (ev) => {
  ev.preventDefault();

  const item = ev.target.closest('.list-item__link');

  mainGallery.src = item.href;
});
