'use strict';

const gallery = document.querySelector('.gallery');
const galleryBigImage = gallery.querySelector('.gallery__large-img');

gallery.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('.list-item__link');

  galleryBigImage.src = link.href;
});
