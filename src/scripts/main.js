'use strict';

const list = document.querySelector('.gallery__list');
const showedPicture = document.querySelector('.gallery__large-img');

list.addEventListener('click', (events) => {
  events.preventDefault();

  const item = events.target.closest('.list-item__link');

  showedPicture.src = item.href;
});
