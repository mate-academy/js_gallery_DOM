'use strict';

const mainImage = document.querySelector('.gallery__large-img');
const list = document.querySelector('.gallery__list');

list.addEventListener('click', (click) => {
  const item = click.target.closest('.list-item');

  if (!item || !list.contains(item)) {
    return;
  }

  click.preventDefault();

  mainImage.src = item.children[0].href;
});
