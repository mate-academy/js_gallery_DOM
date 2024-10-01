'use strict';

const largeImage = document.querySelector('#largeImg');
const thumbs = document.querySelector('#thumbs');

thumbs.addEventListener('click', (ev) => {
  ev.preventDefault();

  const target = ev.target;

  if (target.tagName === 'IMG') {
    const link = target.closest('a');

    largeImage.src = link.href;
  } else if (target.tagName === 'A') {
    largeImage.src = target.href;
  }
});
