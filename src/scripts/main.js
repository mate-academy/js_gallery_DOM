'use strict';

const thumbs = document.getElementById('thumbs');
const largeImage = document.getElementById('largeImg');

thumbs.addEventListener('click', (ev) => {
  ev.preventDefault();

  let target = ev.target;

  if (target.tagName === 'IMG') {
    target = target.parentElement;
  }

  if (target.tagName === 'A') {
    largeImage.src = target.href;
  }
});
