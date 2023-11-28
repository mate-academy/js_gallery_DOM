'use strict';

const galleryList = document.querySelector('.gallery__list');

galleryList.addEventListener('click', (ev) => {
  ev.preventDefault();

  const target = ev.target.closest('.list-item__link');
  const large = document.getElementById('largeImg');

  if (!target || !galleryList.contains(target)) {
    return;
  }

  large.src = target.href;
});
