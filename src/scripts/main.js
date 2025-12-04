'use strict';

const bigImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

bigImg.src = thumbs.querySelector('a').href;

thumbs.addEventListener('click', (e) => {
  const thumb = e.target.closest('.gallery__thumb');
  const link = thumb.parentElement;

  if (!thumb) {
    return
  };

  e.preventDefault();
  bigImg.src = link.href;
});
