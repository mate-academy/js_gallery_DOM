'use strict';

const largeImg = document.getElementById('largeImg');

document.getElementById('thumbs').addEventListener('click', function (e) {
  e.preventDefault();

  const thumbnail = e.target.closest('.list-item');

  if (!thumbnail) {
    return;
  }

  const link = thumbnail.querySelector('.list-item__link');

  largeImg.src = link.href;
});
