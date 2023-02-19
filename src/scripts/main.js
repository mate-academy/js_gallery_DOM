'use strict';

const galleryList = document.querySelector('.gallery__list');
const largeImg = document.querySelector('.gallery__large-img');

galleryList.addEventListener('click', (e) => {
  const listItem = e.target.closest('a');

  if (!listItem) {
    return;
  }

  showThumbnail(listItem.href, listItem.title);
  e.preventDefault();
});

function showThumbnail(href, title) {
  largeImg.src = href;
  largeImg.alt = title;
}
