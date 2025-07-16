'use strict';

const thumbs = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

thumbs.addEventListener('click', function (e) {
  const link = e.target.closest('a');

  if (!link || !thumbs.contains(link)) {
    return;
  }

  e.preventDefault();

  const largeImageUrl = link.href;

  largeImg.src = largeImageUrl;
});
