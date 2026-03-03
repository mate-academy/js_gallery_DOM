'use strict';

const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (e) => {
  const target = e.target.closest('a');

  if (!target || !thumbs.contains(target)) {
    return;
  }

  e.preventDefault();
  largeImg.src = target.href;
});
