'use strict';

const list = document.querySelector('.gallery__list');
const selectedImage = document.querySelector('.gallery__large-img');

list.addEventListener('click', (e) => {
  e.preventDefault();

  const item = e.target.closest('.list-item__link');

  if (!item || !list.contains(item)) {
    return;
  }

  const newSelectedImageSrc = item.children[0].attributes.src.value;

  selectedImage.src = newSelectedImageSrc;
});
