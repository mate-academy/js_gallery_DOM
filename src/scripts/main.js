'use strict';

const largeImg = document.querySelector('#largeImg');
const list = document.querySelector('#thumbs');

list.addEventListener('click', (eventForPhoto) => {
  eventForPhoto.preventDefault();

  const item = eventForPhoto.target.closest('.list-item');

  if (!item) {
    return;
  }

  largeImg.src = item.children[0].href;
});
