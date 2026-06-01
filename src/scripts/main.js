'use strict';

const thumbs = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  const target = e.target;
  const link = target.closest('a');

  if (!link) {
    return;
  }

  largeImg.src = link.href;
  largeImg.alt = link.title;
});
