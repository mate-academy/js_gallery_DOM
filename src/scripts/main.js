'use strict';

const largeImg = document.querySelector('#largeImg');
const thumbs = document.querySelector('#thumbs');

thumbs.addEventListener('click', (clickEvent) => {
  clickEvent.preventDefault();

  const listItem = clickEvent.target.closest('.list-item');

  if (!listItem) {
    return;
  }

  const link = listItem.querySelector('a');

  largeImg.src = link.href;
});
