'use strict';

const galleryList = document.querySelector('.gallery__list');
const mainImg = document.querySelector('#largeImg');

galleryList.addEventListener('click', (event) => {
  event.preventDefault();

  const linkItem = event.target.closest('.list-item__link');

  if (linkItem || galleryList.contains(linkItem)) {
    mainImg.src = linkItem.href;
  }
});
