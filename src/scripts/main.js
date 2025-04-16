'use strict';

document.querySelector('#thumbs').onclick = function (eve) {
  const link = eve.target.closest('a');

  if (!link) {
    return;
  }

  const largImg = document.querySelector('#largeImg');

  largImg.src = link.href;

  return false;
};
