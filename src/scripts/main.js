'use strict';

const largeImg = document.querySelector('#largeImg');
const thumbs = document.querySelector('#thumbs');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('a');

  if (!link) {
    return;
  }

  largeImg.src = link.href;
  largeImg.alt = link.title;
});
