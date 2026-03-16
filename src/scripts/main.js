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
  const image = listItem.querySelector('img');

  image.alt = a.title;
  mainImage.src = a.href;
});
