'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const mainImage = document.getElementById('largeImg');

  const thumbsContainer = document.getElementById('thumbs');

  thumbsContainer.addEventListener('click', function() {
    if (event.target.tagName === 'IMG' || event.target.tagName === 'A') {
      event.preventDefault();

      const thumbnails = thumbsContainer.querySelectorAll('.list-item');

      thumbnails.forEach(thumb => thumb.classList.remove('active'));

      event.target.closest('.list-item').classList.add('active');

      mainImage.src = event.target.closest('a').getAttribute('href');
    }
  });
});
