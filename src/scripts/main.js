'use strict';

const thumbs = document.querySelector('#thumbs');
const image = document.querySelector('#largeImg');

thumbs.addEventListener('click', (ev) => {
  const link = ev.target.closest('a');

  if (link) {
    ev.preventDefault();
    image.src = link.href;
  }
});
