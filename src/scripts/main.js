'use strict';

const thumbs = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

thumbs.addEventListener('click', (e) => {
  const a = e.target.closest('a');

  if (a) {
    e.preventDefault();
  } else {
    return;
  }

  largeImg.src = a.href;
  largeImg.alt = a.title;
});
