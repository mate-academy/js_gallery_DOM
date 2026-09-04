'use strict';

const list = document.querySelector('.gallery__list');

list.addEventListener('click', (e) => {
  e.preventDefault();

  const listItem = e.target.closest('.list-item');
  const link = listItem.querySelector('a');
  const galery = document.querySelector('#largeImg');

  galery.src = link.href;
});
