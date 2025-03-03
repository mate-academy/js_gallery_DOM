'use strict';

const gallery = document.querySelector('.gallery');

const galleryList = document.querySelector('.gallery__list');

galleryList.addEventListener('click', (e) => {
  e.preventDefault();

  if (e.target.alt === 'thumb') {
    const anchorElement = e.target.closest('a');

    if (anchorElement) {
      gallery.children[0].children[0].attributes.src.value = anchorElement.href;
    }

    return;
  }

  gallery.children[0].children[0].attributes.src.value = e.target.href;
});
