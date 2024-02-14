'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.gallery');

  if (gallery) {
    const galleryList = gallery.querySelector('.gallery__list');
    const bigImg = gallery.querySelector('.gallery__large-img');

    const toggleGallery = (e) => {
      e.preventDefault();

      const eventTarget = e.target;
      const currentImg = eventTarget.closest('img');
      const currentLink = eventTarget.closest('a');

      if (currentImg || currentLink) {
        bigImg.src = currentImg.src;
      }
    };

    galleryList.addEventListener('click', (e) => toggleGallery(e));
  }
});
