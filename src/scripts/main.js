'use strict';

const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (event) => {
  const thumbnail = event.target.closest('a');

  event.preventDefault();
  largeImg.src = thumbnail.href;
});
