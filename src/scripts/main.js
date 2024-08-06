'use strict';

const largeImg = document.querySelector('.gallery__large-img');
const galleryList = document.querySelector('.gallery__list');

const onImageClick = (e) => {
  e.preventDefault();

  const target = e.target;
  const element = target.closest('.list-item__link');

  if (element) {
    largeImg.src = element.href;
  }
};

galleryList.addEventListener('click', onImageClick);
