'use strict';

const list = document.querySelector('#thumbs');
const bigImageSource = document.querySelector('#largeImg');

list.addEventListener('click', (eventClick) => {
  eventClick.preventDefault();

  const selectedImg = eventClick.target.closest('.list-item__link');

  if (!selectedImg) {
    return;
  }

  bigImageSource.src = selectedImg.href;
});
