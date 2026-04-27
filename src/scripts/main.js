'use strict';

const thumbs = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

thumbs.addEventListener('click', (ev) => {
  const link = event.target.closest('a');

  if (!link) {
    return;
  }
  event.preventDefault();
  largeImg.src = link.href;
});
