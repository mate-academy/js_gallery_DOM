'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const imgGallery = document.querySelector('.gallery__large-img');
  const galleryList = document.querySelector('.gallery ul');

  if (!galleryList) {
    return;
  }

  galleryList.addEventListener('click', function (e) {
    const a = e.target.closest('a');

    if (!a || !galleryList.contains(a)) {
      return;
    }

    e.preventDefault();

    const img = a.querySelector('img');
    const alt = img ? img.alt : '';

    imgGallery.src = a.href;
    imgGallery.alt = alt;
  });
});
