'use strict';

const list = document.querySelector('ul');
const largeImage = document.querySelector('#largeImg');

list.addEventListener('click', (event) => {
  event.preventDefault();

  const item = event.target.closest('.list-item');

  if (!item || !list.contains(item)) {
    return;
  };
  largeImage.src = item.children[0].href;
});
