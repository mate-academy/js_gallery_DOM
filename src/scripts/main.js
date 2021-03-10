'use strict';

const largeImage = document.querySelector('#largeImg');
const ul = document.querySelector('#thumbs');

ul.addEventListener('click', eventListener => {
  eventListener.preventDefault();

  const li = eventListener.target.closest('.list-item__link');

  if (!li) {
    return;
  }

  largeImage.src = li.href;
});
