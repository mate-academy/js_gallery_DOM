'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const largeImg = document.getElementById('largeImg');
  const thumbsContainer = document.getElementById('thumbs');

  thumbsContainer.addEventListener('click', function () {
    event.preventDefault();

    let target = event.target;

    if (target.tagName === 'IMG') {
      target = target.parentElement;
    }

    if (target.tagName === 'A') {
      const imageUrl = target.getAttribute('href');

      largeImg.src = imageUrl;

      largeImg.alt = target.getAttribute('title') || 'main image';
    }
  });
});
