'use strict';

const itemLinks = document.querySelectorAll('.list-item__link');

itemLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
  });
});

const galleryList = document.querySelector('.gallery__list');
const largeImg = document.querySelector('.gallery__large-img');

galleryList.addEventListener('click', (e) => {
  const link = e.target.closest('.list-item');

  if (!link) {
    return;
  }

  const img = link.querySelector('img');

  largeImg.src = img.src;
});
