'use strict';

const thumbs = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

thumbs.addEventListener('click', function (e) {
  e.preventDefault();

  const link = e.target.closest('a');

  if (!link) {
    return;
  }

  const newSrc = link.getAttribute('href');

  largeImg.src = newSrc;
});
