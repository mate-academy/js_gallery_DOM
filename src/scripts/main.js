'use strict';

const mainImg = document.querySelector('.gallery__large-img');
const galleryItems = [...document.querySelectorAll('.list-item')];

for (const item of galleryItems) {
  const link = item.children[0];
  const newSrc = link.href;

  link.addEventListener('click', (newEvent) => {
    newEvent.preventDefault();

    mainImg.src = newSrc;
  });
};
