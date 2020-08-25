'use strict';

const bigImage = document.querySelector('.gallery__img');
const list = document.querySelector('ul');

list.addEventListener('click', (event) => {
  const item = event.target.closest('a');

  event.preventDefault();
  bigImage.src = item.href;
});
