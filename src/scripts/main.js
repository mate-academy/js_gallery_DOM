'use strict';

const galleryList = document.querySelector('.gallery__list');

galleryList.onclick = (ev) => {
  ev.preventDefault();

  const largeImg = document.querySelector('#largeImg');
  const link = ev.target.closest('.list-item__link').href;

  if (!link) {
    return;
  }

  largeImg.src = link;
};
