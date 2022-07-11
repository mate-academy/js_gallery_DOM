'use strict';

const list = document.querySelector('#thumbs');
const image = document.querySelector('#largeImg');

list.addEventListener('click', (eventOnclick) => {
  eventOnclick.preventDefault();

  const item = eventOnclick.target.closest('.list-item__link');

  if (item || list.contains(item)) {
    image.src = item.href;
  }
});
