'use strict';

const mainImage = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.onclick = function (e) {
  const thumbnail = e.target.closest('a');

  if (!thumbnail) {
    return;
  }

  mainImage.src = thumbnail.href;
  mainImage.alt = thumbnail.title;
  e.preventDefault();
};
