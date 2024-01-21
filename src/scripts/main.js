'use strict';

const largeImg = document.getElementById('largeImg');

const list = document.getElementById('thumbs');

// eslint-disable-next-line no-shadow
list.addEventListener('click', (event) => {
  event.preventDefault();

  const item = event.target;

  if (!item.classList.contains('gallery__img')) {
    return false;
  }

  largeImg.src = item.parentElement.href;
});
