'use strict';

const galleryList = document.querySelector('.gallery__list');
const largeImage = document.querySelector('.gallery__large-img');

galleryList.addEventListener('click', (e) => {
  if (e.target.closest('.list-item__link')) {
    e.preventDefault();
    changeImage(e);
  }
});

function changeImage(e) {
  const smallImageLink = e.target.closest('.list-item__link');

  largeImage.src = smallImageLink.href;
}
