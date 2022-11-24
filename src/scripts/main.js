'use strict';

const largeImg = document.querySelector('#largeImg');
const list = document.querySelector('.gallery__list');

list.addEventListener('click', (events) => {
  const item = events.target;
  const itemLink = item.getAttribute('src');

  events.preventDefault();
  largeImg.setAttribute('src', itemLink);
});
