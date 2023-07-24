'use strict';

const smallImages = document.querySelectorAll('.gallery__thumb');
const bigImage = document.querySelector('.gallery__large-img');

smallImages.forEach(image => {
  image.addEventListener('click', (element) => {
    element.preventDefault();

    if (element.target.closest('a')) {
      bigImage.src = element.target.src;
    } else {
      bigImage.src = element.target.firstElementChild.src;
    }
  });
});
