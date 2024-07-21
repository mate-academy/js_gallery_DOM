'use strict';

const thumbList = document.querySelector('.gallery__list');
const largeImage = document.querySelector('.gallery__large-img');

thumbList.addEventListener('click', showImage);

function showImage(e) {
  e.preventDefault();

  const target = e.target;
  const largeImageUrl = target.closest('.list-item__link')?.href;

  largeImage.src = largeImageUrl;
}
