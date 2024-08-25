'use strict';

document.getElementById('thumbs').addEventListener('click', (event) => {
  event.preventDefault();

  let target = event.target;

  if (target.tagName === 'IMG') {
    target = target.parentElement;
  }

  if (target.tagName === 'A') {
    const largeImg = document.getElementById('largeImg');

    largeImg.src = target.href;
  }
});
