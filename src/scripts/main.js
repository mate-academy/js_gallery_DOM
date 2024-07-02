'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const thumbs = document.getElementById('thumbs');
  const largeImg = document.getElementById('largeImg');

  thumbs.addEventListener('click', (e) => {
    e.preventDefault();

    let target = e.target;

    if (target.tagName === 'IMG') {
      target = target.parentElement;
    }

    if (target.tagName === 'A') {
      const newSrc = target.getAttribute('href');

      largeImg.setAttribute('src', newSrc);
    }
  });
});
