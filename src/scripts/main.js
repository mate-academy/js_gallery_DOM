'use strict';

const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', function (e) {
  if (e.target.tagName !== 'IMG' && e.target.tagName !== 'A') {
    return;
  }

  e.preventDefault();

  const mainImage = document.getElementById('largeImg');

  if (e.target.tagName === 'IMG') {
    if (e.target.parentElement) {
      mainImage.src = e.target.parentElement.href;
    }
  } else if (e.target.tagName === 'A') {
    mainImage.src = e.target.href;
  }
});
