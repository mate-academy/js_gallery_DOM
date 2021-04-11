'use strict';

const list = document.querySelector('#thumbs');
const mainImg = document.querySelector('#largeImg');

list.addEventListener('click', (ev) => {
  const thumbnail = ev.target.closest('.list-item__link');

  if (!thumbnail || !list.contains(thumbnail)) {
    return;
  }

  ev.preventDefault();

  mainImg.src = thumbnail.href;
});
