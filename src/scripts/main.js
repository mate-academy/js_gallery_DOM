'use strict';

const list = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

list.addEventListener('click', (listEvent) => {
  const itemImg = listEvent.target.parentElement;

  listEvent.preventDefault();
  largeImg.src = itemImg.href;
});
