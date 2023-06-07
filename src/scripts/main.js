'use strict';

const frame = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (ev) => {
  ev.preventDefault();

  const item = ev.target;

  if (item.tagName === 'IMG') {
    frame.src = item.parentElement.href;
  }
});
