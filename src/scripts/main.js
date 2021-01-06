'use strict';

const display = document.getElementById('largeImg');
const imgList = document.querySelector('.gallery__list');

imgList.addEventListener('click', (ev) => {
  ev.preventDefault();

  if (ev.target.tagName === 'LI') {
    return;
  }

  const link = (ev.target.tagName === 'IMG')
    ? ev.target.parentElement
    : ev.target;

  display.src = link.href;
});
