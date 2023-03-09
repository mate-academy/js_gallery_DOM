'use strict';

const thumbs = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

thumbs.onclick = (image) => {
  const thumbItem = image.target.closest('a');

  if (!thumbItem) {
    return;
  }

  largeImg.src = thumbItem.href;
  largeImg.alt = thumbItem.title;
  image.preventDefault();
};
