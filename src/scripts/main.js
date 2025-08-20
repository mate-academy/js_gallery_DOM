'use strict';

const list = document.querySelector('#thumbs');

list.addEventListener('click', (events) => {
  const link = events.target.closest('.list-item__link');

  if (!link) {
    return;
  }

  const largeImg = document.querySelector('#largeImg');

  largeImg.src = link.href;
  events.preventDefault();
});
