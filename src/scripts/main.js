'use strict';

const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (ev) => {
  ev.preventDefault();

  const target = ev.target;

  if (target.tagName === 'IMG') {
    const link = target.closest('a');

    largeImg.src = link.href;
  }
});
