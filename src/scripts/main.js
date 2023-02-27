'use strict';

const largeImage = document.querySelector('#largeImg');
const listItems = document.querySelector('#thumbs');

listItems.addEventListener('click', (events) => {
  events.preventDefault();
  largeImage.src = events.target.closest('.list-item__link').href;
});
