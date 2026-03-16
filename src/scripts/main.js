'use strict';

const mainImage = document.querySelector('#largeImg');
const ul = document.querySelector('ul');

ul.addEventListener('click', (e) => {
  e.preventDefault();

  const listItem = e.target.closest('.list-item');

  if (!listItem) {
    return;
  }

  const a = listItem.querySelector('a');

  mainImage.src = a.href;
});
