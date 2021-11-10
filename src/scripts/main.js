'use strict';

const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', () => {
  const thumb = event.target.closest('a');

  event.preventDefault();
  largeImg.src = thumb.href;
});
