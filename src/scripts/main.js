'use strict';

const thumbs = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

thumbs.addEventListener('click', (eventus) => {
  eventus.preventDefault();

  const item = eventus.target.closest('.list-item');

  if (!item) {
    return;
  }

  const link = item.querySelector('.list-item__link').href;

  largeImg.src = link;
});
