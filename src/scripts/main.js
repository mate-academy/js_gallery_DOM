'use strict';

const galleryList = document.getElementById('thumbs');

galleryList.addEventListener('click', (ev) => {
  ev.preventDefault();

  const link = ev.target.closest('a');

  if (!link) {
    return;
  }

  const bigImgURL = link.href;

  document.getElementById('largeImg').src = bigImgURL;
});
