'use strict';

const list = document.querySelector('.gallery__list');
const mainImg = document.querySelector('.gallery__large-img');

list.addEventListener('click', (ev) => {
  const target = ev.target;

  ev.preventDefault();

  mainImg.src = target.href || target.parentNode.href;
});
