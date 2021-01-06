'use strict';

const largeImage = document.querySelector('#largeImg');
const list = document.querySelector('#thumbs');

list.addEventListener('click', (e) => {
  e.preventDefault();

  const item = e.target.closest('.list-item__link');

  if (list.contains(item)) {
    largeImage.src = item.href;
  }
});
