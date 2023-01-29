'use strict';

const list = document.querySelector('.gallery__list');
const imgBig = document.querySelector('.gallery__large-img');

list.addEventListener('click', (_event) => {
  _event.preventDefault();

  const item = _event.target.closest('a');

  if (!item) {
    return;
  }
  imgBig.src = item.href;
  imgBig.alt = item.title;
});
