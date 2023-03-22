'use strict';

const largeImg = document.querySelector('#largeImg');
const galleryList = document.querySelector('.gallery__list');

galleryList.addEventListener('click', function(eventEl) {
  eventEl.preventDefault();

  const item = eventEl.target.closest('.list-item__link');

  largeImg.src = item.href;
});
