'use strict';

const thumbs = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

thumbs.addEventListener('click', (ev) => {
  ev.preventDefault();

  let link = null;

  if (ev.target.tagName === 'IMG') {
    link = ev.target.closest('a');
  } else if (ev.target.tagName === 'A') {
    link = ev.target;
  }

  if (link) {
    const absoluteSrc = link.href;

    largeImg.setAttribute('src', absoluteSrc);
  }
});
