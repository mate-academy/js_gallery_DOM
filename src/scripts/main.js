'use strict';

const list = document.querySelector('.gallery__list');
const largeImg = document.querySelector('.gallery__large-img');

list.addEventListener('click', cilckEvent => {
  const item = cilckEvent.target.closest('.list-item__link');

  if (!item || !list.contains(item)) {
    return;
  }
  cilckEvent.preventDefault();
  largeImg.attributes.src.value = item.attributes.href.value;
});
