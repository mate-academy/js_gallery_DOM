'use strict';

const largeImg = document.querySelector('#largeImg');
const thumbs = document.querySelector('#thumbs');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  let target = e.target;

  if (target.tagName === 'IMG') {
    target = target.closest('a');
  }

  if (target.tagName === 'A') {
    const newSrc = target.href;

    largeImg.src = newSrc;
  }
});
