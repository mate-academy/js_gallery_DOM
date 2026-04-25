'use strict';

const largeImg = document.querySelector('#largeImg');

document.querySelector('#thumbs').addEventListener('click', function (e) {
  const link = event.target.closest('a');

  if (!link) {
    return;
  }
  event.preventDefault();
  largeImg.src = link.href;
});
