'use strict';

const list = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

function thumbnail() {
  const item = event.target.closest('.list-item__link');

  if (!item || !list.contains(item)) {
    return;
  }
  largeImg.src = item.href;
  event.preventDefault();
}

list.addEventListener('click', thumbnail);
