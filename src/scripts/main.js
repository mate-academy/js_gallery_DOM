'use strict';

const mainImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (ev) => {
  ev.preventDefault();

  const target = ev.target;

  if (target.tagName === 'IMG' || target.tagName === 'A') {
    const link = target.closest('a');

    if (link) {
      mainImg.src = link.href;
    }
  }
});
