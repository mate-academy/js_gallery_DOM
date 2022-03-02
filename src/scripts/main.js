'use strict';

const list = document.querySelector('.gallery__list');
const imgL = document.getElementById('largeImg');

list.addEventListener('click', (events) => {
  events.preventDefault();

  const imgChange = events.target.closest('.list-item__link');

  imgL.src = imgChange.href;
});
