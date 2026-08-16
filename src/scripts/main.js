'use strict';

const thumbs = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('a');

  if (!link) {
    return;
  }

  largeImg.src = link.href;
});
