'use strict';

const gallery = document.getElementById('largeImg');
const listThumbs = document.getElementById('thumbs');

listThumbs.addEventListener('click', (currThumb) => {
  const currLink = currThumb.target.closest('.list-item__link');

  if (!currLink) {
    return;
  }

  currThumb.preventDefault();

  gallery.src = currLink.href;
});
