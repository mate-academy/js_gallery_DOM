'use strict';

const largeImg = document.getElementById('largeImg');
const list = document.getElementById('thumbs');

list.addEventListener('click', (listEvent) => {
  const itemImg = listEvent.target.closest('.list-item__link');

  listEvent.preventDefault();
  largeImg.src = itemImg.href;
});
