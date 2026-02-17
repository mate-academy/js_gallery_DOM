'use strict';

const thumbs = document.querySelector('#thumbs');

const largeImg = document.querySelector('#largeImg');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  const target = e.target;
  const link = target.closest('a');

  if (!link) {
    return;
  }

  largeImg.src = link.href;
});
