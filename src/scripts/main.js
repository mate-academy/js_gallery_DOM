'use strict';

const thumbs = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

thumbs.addEventListener('click', (e) => {
  const a = e.target.closest('a');

  if (!a) {
    return;
  }

  e.preventDefault();
  largeImg.setAttribute('src', a.href);
});
