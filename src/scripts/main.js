'use strict';

const list = document.querySelector('#thumbs');
const bigImageSrc = document.querySelector('#largeImg');

list.addEventListener('click', (eventClick) => {
  eventClick.preventDefault();

  const selectedImg = eventClick.target.closest('.list-item__link');

  bigImageSrc.src = selectedImg.href;
});
