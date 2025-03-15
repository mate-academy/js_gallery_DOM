'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const largeImg = document.getElementById('largeImg');

  const thumbsContainer = document.getElementById('thumbs');

  thumbsContainer.addEventListener('click', function (e) {
    const target = e.target;

    const thumbnail = target.closest('.gallery__thumb');
    const link = target.closest('.list-item__link');

    if (thumbnail && link) {
      e.preventDefault();
      largeImg.src = thumbnail.src;
    }
  });
});
