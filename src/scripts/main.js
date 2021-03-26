'use strict';

const list = document.querySelector('#thumbs');

list.addEventListener('click', (clickEvent) => {
  clickEvent.preventDefault();

  const largeImg = document.querySelector('.gallery__large-img');
  const item = clickEvent.target.closest('.list-item__link');

  if (item) {
    largeImg.src = item.href;
  }
});
