'use strict';

const galleryList = document.querySelector('.gallery__list');
const largeImg = document.querySelector('.gallery__large-img');
const links = document.querySelectorAll('.list-item__link');

links.forEach((link) => (link.onclick = (events) => events.preventDefault()));

galleryList.onclick = (events) =>
  (largeImg.src = events.target.closest('.list-item__link').href);
