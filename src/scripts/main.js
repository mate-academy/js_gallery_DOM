'use strict';

const gallery = document.querySelector('.gallery');
const mainImage = document.querySelector('.gallery__large-img');

gallery.addEventListener('click', (e) => {
  const image = e.target.closest('img');
  const link = e.target.closest('a');

  if (!image && !link) {
    return;
  }

  if (image) {
    mainImage.src = image.src;
  }

  if (link) {
    e.preventDefault();
    mainImage.src = link.href;
  }
});
