'use strict';

const largeImg = document.querySelector('#largeImg');
const thumbs = document.querySelector('#thumbs');

thumbs.addEventListener('click', (events) => {
  const link = events.target.closest('.list-item__link');

  if (!link) {
    return;
  }

  events.preventDefault();

  largeImg.src = link.href;
  largeImg.alt = link.title;
});
