'use strict';

const galleryList = document.querySelector('.gallery__list');

galleryList.addEventListener('click', (clickEvent) => {
  clickEvent.preventDefault();

  const link = clickEvent.target.closest('a');
  const image = document.querySelector('.gallery__large-img');

  if (!link) {
    return;
  }

  const url = link.href;

  image.src = url;
});
