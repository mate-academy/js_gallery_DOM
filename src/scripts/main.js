'use strict';

const smallImages = document.querySelectorAll('.gallery__thumb');
const bigImage = document.querySelector('.gallery__large-img');

smallImages.forEach(image => {
  image.addEventListener('click', (element) => {
    element.preventDefault();

    if (element.target.tagName === 'IMG') {
      bigImage.src = element.target.src;
    } else if (element.target.tagName === 'A') {
      bigImage.src = element.target.firstChildElement.src;
    }
  });
});
