'use strict';

const gallery = document.querySelector('.gallery__list');
const banner = document.querySelector('#largeImg');

gallery.addEventListener('click', (eventObj) => {
  eventObj.preventDefault();

  const item = eventObj.target.closest('.list-item__link');

  banner.src = item.href;
});
