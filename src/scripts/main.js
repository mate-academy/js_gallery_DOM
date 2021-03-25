'use strict';

const gallery = document.querySelector('.gallery');
const largeImg = document.querySelector('#largeImg');

gallery.addEventListener('click', (ev) => {
  ev.preventDefault();

  const item = ev.target;

  largeImg.src = item.src;
});
