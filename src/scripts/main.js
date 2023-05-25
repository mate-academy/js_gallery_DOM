'use strict';

const largeImg = document.querySelector('#largeImg');
const thumbs = document.querySelector('#thumbs');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  const target = e.target.closest('a');

  if (!target) {
    return;
  }
  largeImg.src = target.href;
  largeImg.alt = target.title;
});
