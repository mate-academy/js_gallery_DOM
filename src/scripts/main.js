'use strict';

const galleryList = document.getElementById('thumbs');

galleryList.addEventListener('click', (obj) => {
  obj.preventDefault();

  const link = obj.target.closest('a');

  if (!link) {
    return;
  }

  if (!link.contains(obj.target)) {
    return;
  }

  const largeImg = document.getElementById('largeImg');

  largeImg.src = link.href;
});
