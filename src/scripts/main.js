'use strict';

const galleryList = document.querySelector('.gallery__list');
const listLinks = document.querySelectorAll('.list-item__link');
const mainImg = document.querySelector('.gallery__large-img');

listLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
  });
});

galleryList.addEventListener('click', (event) => {
  const item = event.target;

  if (
    item.classList.contains('gallery__thumb')
    || item.classList.contains('list-item__link')
  ) {
    mainImg.src = item.closest('.list-item__link').getAttribute('href');
  }
});
