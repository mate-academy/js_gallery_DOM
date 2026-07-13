'use strict';

const bigPic = document.querySelector('#largeImg');
const galleryCon = document.querySelector('#thumbs');

galleryCon.addEventListener('click', (even) => {
  even.preventDefault();

  const link = even.target.closest('a');

  bigPic.src = link.href;
});
