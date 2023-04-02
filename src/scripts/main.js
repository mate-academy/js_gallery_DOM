'use strict';

const list = document.getElementById('thumbs');
const BigPicture = document.getElementById('largeImg');

list.addEventListener('click', (e) => {
  const listItem = e.target.closest('a');

  e.preventDefault();

  if (list.contains(listItem)) {
    BigPicture.src = listItem.href;
  }
});
