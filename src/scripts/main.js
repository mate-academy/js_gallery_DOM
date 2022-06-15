'use strict';

const list = document.querySelector('#thumbs');
const lageImg = document.querySelector('#largeImg');

list.addEventListener('click', (meEvent) => {
  meEvent.preventDefault();

  const item = meEvent.target;

  lageImg.src = item.parentElement.href;
});
