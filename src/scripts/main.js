'use strict';

const largeImage = document.getElementById('largeImg');
const galleryList = document.getElementById('thumbs');

galleryList.addEventListener('click', (clickEvent) => {
  clickEvent.preventDefault();

  const link = clickEvent.target.closest('.list-item__link');

  if (!link || !galleryList.contains(link)) {
    return;
  }

  largeImage.src = link.href;
});
