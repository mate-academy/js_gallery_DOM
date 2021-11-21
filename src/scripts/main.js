'use strict';

const list = document.querySelector('.gallery__list');
const divImg = document.querySelector('.gallery__img');

list.addEventListener('click', (events) => {
  events.preventDefault();

  const link = events.target;

  divImg.src = link.closest('.list-item__link').href;
});
