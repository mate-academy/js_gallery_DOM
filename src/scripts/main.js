'use strict';

document.getElementById('thumbs').addEventListener('click', (even) => {
  even.preventDefault();

  if (even.target.classList.contains('gallery__thumb')) {
    const largeImg = document.getElementById('largeImg');
    const thumbImg = even.target;

    largeImg.src = thumbImg.parentNode.href;
    largeImg.alt = thumbImg.alt;
  }
});
