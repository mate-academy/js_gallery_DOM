'use strict';

const allGalleryImages = [ ...document.querySelectorAll('.gallery__img') ];
const allImagesLinks = [ ...document.querySelectorAll('.list-item__link') ];
const mainImages = document.querySelector('#largeImg');

allGalleryImages.map(value => {
  value.addEventListener('click', (occasion) => {
    value.classList.add('gallery__large-img');

    allImagesLinks.map(item => item.addEventListener('click', () => {
      mainImages.src = item.href;
    }));
  });
});

allImagesLinks.map(item => {
  item.addEventListener('click', (occasion) => occasion.preventDefault());
});
