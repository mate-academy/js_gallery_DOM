'use strict';

const largeImg = document.querySelector('.gallery__large-img');
const galleryList = document.querySelector('.gallery__list');

function clickOnGallery(evt) {
  const listItem = evt.target.closest('.list-item');

  if (listItem) {
    evt.preventDefault();

    const link = listItem.querySelector('.list-item__link');
    const itemSource = link.href;

    largeImg.setAttribute('src', itemSource);
  }
}

galleryList.addEventListener('click', clickOnGallery);
