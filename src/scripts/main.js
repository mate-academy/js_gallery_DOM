'use strict';

const bigImage = document.getElementById('largeImg');
const pageThumb = document.getElementById('thumbs');

pageThumb.addEventListener('click', function (e) {
  e.preventDefault();

  const thumbImageLink = e.target.closest('a')
    ? e.target.closest('a').href
    : null;

  if (thumbImageLink) {
    bigImage.src = thumbImageLink;
  }
});
