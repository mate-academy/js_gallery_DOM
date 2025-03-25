'use strict';

const gallery = document.querySelector('.gallery__list');

gallery.onclick = (mouseEvent) => {
  mouseEvent.preventDefault();

  const mainImage = document.getElementById('largeImg');
  const link = mouseEvent.target.closest('.list-item__link').href;

  if (!link) {
    return;
  }

  mainImage.src = link;
};
