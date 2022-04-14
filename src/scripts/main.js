'use strict';

const list = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

list.addEventListener('click', (meEvent) => {
  meEvent.preventDefault();

  const item = meEvent.target;

  largeImg.src = item.parentElement.href;
});
