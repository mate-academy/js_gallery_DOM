'use strict';

const largeImg = document.querySelector('.gallery__large-img');
const galleryList = document.querySelector('.gallery__list');

galleryList.addEventListener('click', (event) => {
  event.preventDefault();

  const smallImgLink = event.target.closest('.list-item__link');

  if (smallImgLink && galleryList.contains(smallImgLink)) {
    largeImg.src = smallImgLink.href;
  }
});
