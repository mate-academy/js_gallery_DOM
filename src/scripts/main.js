'use strict';

const list = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

list.addEventListener('click', (eventObj) => {
  eventObj.preventDefault();

  const item = eventObj.target.closest('.list-item__link');

  if (!list.contains(item)) {
    return;
  }

  largeImg.src = item.href;
});
