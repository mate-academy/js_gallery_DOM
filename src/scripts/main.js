'use strict';

const largeImage = document.getElementById('largeImg');
const list = document.getElementById('thumbs');

list.addEventListener('click', (e) => {
  e.preventDefault();

  const listItem = e.target;

  largeImage.src = listItem.src || listItem.href;
});
