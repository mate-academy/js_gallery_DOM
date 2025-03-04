'use strict';

const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', function (picture) {
  picture.preventDefault();

  const link = picture.target.closest('a');

  if (!link) {
    return;
  }

  largeImg.src = link.href;
});
