'use strict';

const list = document.getElementById('thumbs');
const mainImg = document.getElementById('largeImg');

list.addEventListener('click', (selecting) => {
  const link = selecting.target.closest('.list-item a');

  if (!link) {
    return;
  }
  selecting.preventDefault();

  mainImg.src = link.href;
});
