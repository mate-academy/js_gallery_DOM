'use strict';

const mainImg = document.getElementById('largeImg');

const list = document.getElementById('thumbs');

// eslint-disable-next-line no-shadow
list.addEventListener('click', (event) => {
  event.preventDefault();

  const item = event.target;

  mainImg.src = item.parentElement.href;
});
