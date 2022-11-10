'use strict';

const list = document.querySelector('#thumbs');

list.addEventListener('click', (ev) => {
  ev.preventDefault();

  const item = ev.target.closest('.list-item__link');

  document.querySelector('#largeImg').src = `${item.href}`;
});
