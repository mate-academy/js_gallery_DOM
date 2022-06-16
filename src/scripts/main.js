'use strict';

const largeImg = document.getElementById('largeImg');
const list = document.getElementById('thumbs');

list.addEventListener('click', events => {
  const item = events.target.closest('.list-item');

  if (!item) {
    return;
  }

  events.preventDefault();
  largeImg.src = item.children[0].href;
});
