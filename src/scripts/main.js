'use strict';

const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', function (e) {
  const link = e.target.closest('a');

  if (link === null) {
    return;
  }
  e.preventDefault();

  const largeImg = document.getElementById('largeImg');
  const newSrc = link.href;

  largeImg.src = newSrc;
});
