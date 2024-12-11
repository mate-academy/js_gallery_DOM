'use strict';

const mainPhoto = document.querySelector('.gallery__large-img');
const galleryList = document.querySelector('.gallery__list');

function clickOnGallery(event) {
  const listItem = event.target.closest('.list-item');

  if (listItem) {
    event.preventDefault();

    const listLink = listItem.querySelector('.list-item__link');
    const photoItem = listLink.querySelector('.gallery__thumb');
    const itemSource = photoItem.getAttribute('src');

    mainPhoto.setAttribute('src', itemSource);
  }
}

galleryList.addEventListener('click', clickOnGallery);
