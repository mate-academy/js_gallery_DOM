'use strict';

const bigImg = document.querySelector('.gallery__large-img');
const list = document.querySelector('.gallery__list');

list.addEventListener('click', events => {
  events.preventDefault();
  bigImg.src = events.target.closest('.list-item__link').href;
});
