'use strict';

const list = document.querySelector('#thumbs');
const largeImg = document.querySelector('.gallery__large-img');

list.addEventListener('click', (clickEvent) => {
  clickEvent.preventDefault();

  const item = clickEvent.target.closest('.list-item__link');

  if (item) {
    largeImg.src = item.href;
  }
});
