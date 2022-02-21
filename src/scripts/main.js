'use strict';

const largeImage = document.getElementById('largeImg');
const smallImages = document.getElementById('thumbs');

smallImages.onclick = (e) => {
  e.preventDefault();

  if (!e.target.closest('a')) {
    return;
  };

  largeImage.src = e.target.closest('a').href;
};
