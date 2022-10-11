'use strict';

const galleryList = document.querySelector('.gallery__list');
const largeImg = document.querySelector('#largeImg');

galleryList.addEventListener('click', (event) => {
  const item = event.target;

  event.preventDefault();

  if (!item.classList.contains('gallery__thumb')) {
    return;
  }

  largeImg.setAttribute('src', item.parentElement.getAttribute('href'));
})
