'use strict';

const largeImage = document.querySelector('#largeImg');
const link = document.querySelector('#thumbs');

link.addEventListener('click', (events) => {
  events.preventDefault();
  largeImage.src = events.target.closest('.list-item__link').href;
});
