'use strict';

const list = document.querySelector('.gallery__list');
const large = document.querySelector('#largeImg');

list.addEventListener('click', (e) => {
  e.preventDefault();

  const item = e.target.closest('.list-item__link');

  large.src = item.href;
});
