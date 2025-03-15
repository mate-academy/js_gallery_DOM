'use strict';

const choosedImage = document.getElementById('largeImg');
const list = document.getElementById('thumbs');

list.addEventListener('click', (eve) => {
  eve.preventDefault();

  const item = eve.target;

  if (!item.classList.contains('list-item__link')
    && !item.classList.contains('gallery__thumb')) {
    return;
  }

  choosedImage.src = item.parentElement.href;
});
