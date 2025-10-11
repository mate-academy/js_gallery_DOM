'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const imgGallery = document.querySelector('.gallery__large-img');
  const galleryList = document.querySelector('.gallery ul');

  galleryList.addEventListener('click', (e) => {
    const a = e.target.closest('a');

    if (!a || !galleryList.contains(a)) {
      return;
    }

    e.preventDefault();

    const img = a.querySelector('img');

    imgGallery.src = a.href;
    imgGallery.alt = img.alt;
  });
});
