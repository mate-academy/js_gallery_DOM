'use strict';

const images = document.querySelectorAll('.list-item');

const largeImage = document.querySelector('.gallery__large-img');

for (const image of images) {
  image.addEventListener('click', (event) => {
    event.preventDefault();
    largeImage.src = event.target.closest('.list-item__link').href;
  });
}
