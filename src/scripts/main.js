'use strict';

const gallery = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

gallery.addEventListener('click', (eventOne) => {
  eventOne.preventDefault();

  const item = eventOne.target.closest('.list-item__link');

  if (!item) {
    return;
  }

  largeImg.src = item.href;
});
