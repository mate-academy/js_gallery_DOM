'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const thumbnailsContainer = document.querySelector('.gallery-thumbnails');
  const mainImage = document.querySelector('.gallery-main-image');

  if (!thumbnailsContainer || !mainImage) {
    return;
  }

  thumbnailsContainer.addEventListener('click', function (e) {
    const anchor = e.target.closest('a');
    let img = null;
    let fullSrc = '';

    if (anchor && thumbnailsContainer.contains(anchor)) {
      img = anchor.querySelector('img');

      fullSrc =
        anchor.getAttribute('href') ||
        (img && img.dataset.full) ||
        (img && img.src);

      if (img && fullSrc) {
        mainImage.src = fullSrc;
        mainImage.alt = img.alt || '';
        e.preventDefault();
      }

      return;
    }

    img = e.target.closest('img');

    if (img && thumbnailsContainer.contains(img)) {
      fullSrc = img.dataset.full || img.src;
      mainImage.src = fullSrc;
      mainImage.alt = img.alt || '';
    }
  });
});
