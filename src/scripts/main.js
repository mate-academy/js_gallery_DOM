'use strict';

const list = document.querySelector('ul');
const img = document.querySelector('img');

list.addEventListener('click', (e) => {
  e.preventDefault();

  const item = e.target;

  if (!item.closest('a')) {
    return;
  }
  img.src = item.parentNode.href;
});
