'use strict';

const container = document.querySelector('.gallery');
const largeImage = document.querySelector('.gallery__large-img');

container.addEventListener('click', (e) => {
  e.preventDefault();

  const item = e.target.closest('.list-item__link');
  const itemHref = item.getAttribute('href');

  largeImage.src = itemHref;
});
