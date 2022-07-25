'use strict';

const largeImg = document.querySelector('.gallery__large-img');
const list = document.querySelector('.gallery__list');

list.addEventListener('click', (e) => {
  const link = e.target.closest('.list-item__link');

  showThumbnail(link);
  e.preventDefault();
});

function showThumbnail(href) {
  largeImg.src = href;
}
