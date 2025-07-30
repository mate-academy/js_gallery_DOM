'use strict';

const mainPhoto = document.querySelector('.gallery__large-img');
const littlePhoto = document.querySelector('.gallery__list');

littlePhoto.addEventListener('click', (e) => {
  e.preventDefault();

  if (e.target.classList.contains('list-item__link')) {
    mainPhoto.src = e.target.href;
  }

  if (e.target.classList.contains('gallery__img')) {
    mainPhoto.src = e.target.parentElement.href;
  }
});
