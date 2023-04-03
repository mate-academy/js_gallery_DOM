'use strict';

const list = document.querySelector('.gallery__list');

list.addEventListener('click', (_event) => {
  _event.preventDefault();

  const item = _event.target.closest('.list-item__link');

  if (item) {
    document.querySelector('.gallery__large-img').src = item.href;
  }
});
