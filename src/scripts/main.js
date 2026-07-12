'use strict';

const gallery = document.querySelector('.gallery');
const mainImage = document.querySelector('.gallery__large-img');

gallery.addEventListener('click', () => {
  const image = event.target.closest('img');
  const link = event.target.closest('a');

  if (!image && !link) {
    return;
  }

  if (image) {
    mainImage.src = image.src;
  }

  if (link) {
    event.preventDefault();
    mainImage.src = link.href;
  }
});
