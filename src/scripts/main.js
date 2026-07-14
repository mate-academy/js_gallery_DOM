'use strict';

const bigPic = document.querySelector('#largeImg');
const galleryCon = document.querySelector('#thumbs');

galleryCon.addEventListener('click', (even) => {
  const link = even.target.closest('a');

  if (!link) {
    return;
  }
  even.preventDefault();
  bigPic.src = link.href;
});
