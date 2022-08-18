'use strict';

const img = document.querySelector('.gallery__list');
const largeImg = document.querySelector('.gallery__large-img');

const clicking = (eventClick) => {
  eventClick.preventDefault();
  largeImg.src = eventClick.target.closest('.list-item__link').href;
};

img.addEventListener('click', clicking);
