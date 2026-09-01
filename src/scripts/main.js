'use strict';

const thumbs = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

thumbs.addEventListener('click', (clickEvent) => {
  const link = clickEvent.target.closest('a');

  if (!link) {
    return;
  }

  clickEvent.preventDefault();
  largeImg.src = link.href;
});
