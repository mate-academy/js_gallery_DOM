'use strict';

const list = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

function thumbnail(e) {
  const item = e.target.closest('.list-item__link');

  if (!item || !list.contains(item)) {
    return;
  }
  largeImg.src = item.href;
  e.preventDefault();
}

list.addEventListener('click', thumbnail);
