'use strict';

const list = document.querySelector('.gallery__list');

list.addEventListener('click', (_event) => {
  _event.preventDefault();

  const item = _event.target;

  if (!item.classList.contains('gallery__thumb')) {
    return;
  }

  document.querySelector('.gallery__large-img').src = item.src;
});
