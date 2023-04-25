'use strict';

const largeImg = document.getElementById('largeImg');
const list = document.getElementById('thumbs');

list.addEventListener('click', (e) => {
  e.preventDefault();

  const item = e.target.closest('a');

  if (list.contains(item)) {
    largeImg.src = item.href;
  }
});
