'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const largeImg = document.getElementById('largeImg');
  const thumbs = document.getElementById('thumbs');

  thumbs.addEventListener('click', (ev) => {
    ev.preventDefault();

    let target = ev.target;

    if (target.tagName === 'IMG') {
      target = target.parentElement;
    }

    if (target.tagName === 'A') {
      largeImg.src = target.href;
    }
  });
});
