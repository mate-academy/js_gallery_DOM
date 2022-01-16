'use strict';

const div = document.querySelector('.gallery');
const frame = div.firstElementChild.querySelector('img');
const list = div.querySelector('.gallery__list');
let sourceOfBigImg = '';

list.addEventListener('click', (ev) => {
  const item = ev.target;

  if (item.tagName === 'A') {
    item.preventDefault();
    sourceOfBigImg = item.href;
  } else {
    const a = item.closest('a');

    sourceOfBigImg = a.href;
    ev.preventDefault();
  }

  frame.src = sourceOfBigImg;
});
