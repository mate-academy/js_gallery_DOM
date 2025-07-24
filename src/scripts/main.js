'use strict';

document.getElementById('thumbs').addEventListener('click', function (e) {
  e.preventDefault();

  let target = e.target;

  if (target.tagName !== 'A' && target.tagName !== 'IMG') {
    return;
  }

  if (target.tagName === 'IMG') {
    target = target.closest('a');
  }

  const largeImg = document.getElementById('largeImg');

  largeImg.src = target.getAttribute('href');
  largeImg.alt = target.getAttribute('title');
});
