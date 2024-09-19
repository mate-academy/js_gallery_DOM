'use strict';

const gallery = document.querySelector('.gallery__list');
const mainImage = document.querySelector('.gallery__large-img');

gallery.addEventListener('click', (clickEvent) => {
  clickEvent.preventDefault();

  const link = event.target.closest('.list-item__link');

  if (!link) {
    return;
  }

  mainImage.src = link;
});
