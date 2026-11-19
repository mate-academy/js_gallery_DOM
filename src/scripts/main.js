'use strict';

const thumbs = document.querySelector('#thumbs');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('a');

  if (!link) {
    return;
  }

  const largeImg = document.querySelector('#largeImg');

  largeImg.src = link.href;
});
