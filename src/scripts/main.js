'use strict';

const thumbs = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

thumbs.addEventListener('click', (e) => {
  const link = e.target.closest('a');

  if (!link) {
    return;
  }

  e.preventDefault();

  largeImg.src = link.href;
});
