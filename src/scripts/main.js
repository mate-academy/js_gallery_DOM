'use strict';

const list = document.querySelector('#thumbs');
const bigImg = document.querySelector('#largeImg');

list.addEventListener('click', (ev) => {
  ev.preventDefault();

  const item = ev.target.closest('.list-item__link');

  bigImg.src = item.href;
});
