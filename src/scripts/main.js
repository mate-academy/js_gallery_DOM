'use strict';

const gallery = document.getElementById('thumbs');
const bigImage = document.getElementById('largeImg');

gallery.addEventListener('click', function (e) {
  e.preventDefault();

  const link = e.target.closest('.list-item__link');

  if (!link) {
    return;
  }

  bigImage.src = link.href;
});
