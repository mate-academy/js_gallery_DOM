'use strict';

const galleryList = document.querySelector('.gallery__list');
const galleryMainImage = document.querySelector('.gallery__large-img');

galleryList.addEventListener('click', (e) => {
  e.preventDefault();

  if (['IMG', 'A'].includes(e.target.tagName)) {
    const imgLink = e.target.tagName === 'A' ? e.target : e.target.closest('A');

    galleryMainImage.src = imgLink.href;
  }
});
