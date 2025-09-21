'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const thumbs = document.querySelector('#thumbs');
  const largeImg = document.querySelector('#largeImg');

  thumbs.addEventListener('click', (e) => {
    e.preventDefault();

    let target = e.target;

    if (target.tagName === 'IMG') {
      target = target.parentElement;
    }

    if (target && target.tagName === 'A') {
      largeImg.src = target.href;
      largeImg.alt = target.title;
    }
  });
});
