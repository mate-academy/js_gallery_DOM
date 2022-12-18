'use strict';

const list = document.querySelector('.gallery__list');
const mainPhoto = document.querySelector('#largeImg');

list.addEventListener('click', (eventEl) => {
  const element = eventEl.target.closest('.list-item__link');

  if (!element || !list.contains(element)) {
    return;
  }

  eventEl.preventDefault();

  mainPhoto.src = element.href;
});
