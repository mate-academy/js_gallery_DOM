'use strict';

document.addEventListener('DOMContentLoaded', () => {
  function handleClickGallery(selector, preview, list, target) {
    const gallery = document.querySelector(selector);
    const galleryPreview = gallery?.querySelector(preview);
    const galleryList = gallery?.querySelector(list);

    if (!gallery || !galleryPreview || !galleryList) {
      return;
    }

    galleryList.addEventListener('click', (evt) => {
      evt.preventDefault();

      const element = evt.target.closest(target);

      if (!element) {
        return;
      }

      const link = element.closest('a');

      if (link) {
        const fullImageUrl = link.href;

        galleryPreview.src = fullImageUrl;
      }
    });
  }

  handleClickGallery('.gallery', '#largeImg', '#thumbs', '.gallery__img');
});
