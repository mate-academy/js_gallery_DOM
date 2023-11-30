'use strict';

const galleryList = document.querySelector('.gallery__list');

galleryList.addEventListener('click', (e) => {
  event.preventDefault();

  const target = e.target.closest('.list-item__link');
  const largeImg = document.getElementById('largeImg');

  if (!target || !galleryList.contains(target)) {
    return;
  }

  largeImg.src = target.href;
});
