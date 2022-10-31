'use strict';

const largeImg = document.querySelector('#largeImg');
const list = document.querySelector('#thumbs');

list.addEventListener('click', ev => {
  const link = ev.target.closest('.list-item__link');

  ev.preventDefault();
  largeImg.src = link.href;
});
