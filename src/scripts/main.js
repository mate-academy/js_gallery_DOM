'use strict';

const largeImg = document.querySelector('.gallery__large-img');

const galleryItems = document.querySelectorAll('.list-item');

galleryItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();

    const imgSrc = e.target.closest('a').href;

    largeImg.src = imgSrc;
  });
});
