'use strict';

const imagesArray = document.querySelectorAll('.gallery__thumb');
const bigImage = document.querySelector('.gallery__large-img');

imagesArray.forEach((image) => {
  image.addEventListener('click', (events) => {
    events.preventDefault();

    const parentLink = image.closest('a');

    if (parentLink) {
      bigImage.src = parentLink.href;
    } else {
      bigImage.src = image.src;
    }
  });
});
