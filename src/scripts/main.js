'use strict';

const list = document.getElementById('thumbs');
const bigImg = document.getElementById('largeImg');

list.addEventListener('click', (e) => {
  const item = e.target.closest('a');

  e.preventDefault();

  if (list.contains(item)) {
    bigImg.src = item.href;
  }
});
