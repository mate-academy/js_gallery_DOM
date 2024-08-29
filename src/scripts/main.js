'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const mainImage = document.getElementById('largeImg');
  const thumbnailContainer = document.getElementById('thumbs');

  thumbnailContainer.addEventListener('click', function (e) {
    e.preventDefault();

    const target = e.target;

    if (target.tagName === 'IMG') {
      const newSrc = target.parentNode.getAttribute('href');

      mainImage.src = newSrc;
    } else if (target.tagName === 'A') {
      const newSrc = target.getAttribute('href');

      mainImage.src = newSrc;
    }
  });
});
