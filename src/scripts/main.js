'use strict';

const mainImg = document.getElementById('largeImg');
const galleryList = document.querySelector('.gallery__list');

galleryList.addEventListener('click', (e) => {
  e.preventDefault();

  const item = e.target.closest('.list-item__link');

  if (!item) {
    return;
  }

  // get href current item link
  const itemHref = item.getAttribute('href');

  // change value src in main image
  mainImg.src = itemHref;
});
