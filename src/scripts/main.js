'use strict';

function initGalleryEvenets() {
  const listOfImages = document.querySelector('.gallery__list');
  const currentImage = document.querySelector('#largeImg');

  listOfImages.addEventListener('click', (e) => {
    e.preventDefault();

    const link = e.target.closest('.list-item__link');

    if (!link || !currentImage) {
      return;
    }

    currentImage.src = link.href;
  });
}

initGalleryEvenets();
