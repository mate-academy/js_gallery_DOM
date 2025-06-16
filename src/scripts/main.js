'use strict';

const thumbs = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

thumbs.addEventListener('click', (evt) => {
  evt.preventDefault();

  const target = evt.target.closest('a');

  if (!target) {
    return;
  }
  largeImg.src = target.href;
});
