'use strict';

const mainImage = document.querySelector('.gallery__large-img');
const allImagesLinks = [ ...document.querySelectorAll('.list-item__link') ];

allImagesLinks.map(x =>
  x.addEventListener('click', e => {
    mainImage.src = e.target.closest('a').href;
    e.preventDefault();
  }));
