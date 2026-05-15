'use strict';

const thumbs = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

thumbs.addEventListener('click', (evt) => {
  evt.preventDefault();

  const link = evt.target.closest('a');

  if (!link) {
    return;
  }

  largeImg.src = link.href;
});
