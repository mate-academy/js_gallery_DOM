'use strict';

const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  const target = e.target;

  let link;

  if (target.tagName === 'IMG') {
    link = target.closest('a');
  } else if (target.tagName === 'A') {
    link = target;
  }

  if (!link) {
    return;
  }

  largeImg.src = link.href;
  largeImg.alt = link.title || 'main image';
});
