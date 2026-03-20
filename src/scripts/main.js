'use strict';

const Thumbs = document.querySelector('#thumbs');
const LargeImg = document.querySelector('#largeImg');

Thumbs.addEventListener('click', (e) => {
  const link = e.target.closest('a');

  if (!link) {
    return;
  }

  e.preventDefault();
  LargeImg.src = link.href;
});
