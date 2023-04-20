'use strict';

const list = document.querySelector('#thumbs');
const bigImg = document.querySelector('#largeImg');

list.addEventListener('click', (ev) => {
  const target = ev.target.closest('.list-item__link');

  if (!target || !list.contains(target)) {
    return;
  }

  ev.preventDefault();

  bigImg.src = target.href;
});