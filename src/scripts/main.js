'use strict';

const thumbs = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

thumbs.addEventListener('click', (evt) => {
  const link = evt.target.closest('a');

  if (!link) {
    return;
  }

  evt.preventDefault();
  largeImg.src = link.href;
});
