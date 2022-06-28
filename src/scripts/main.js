'use strict';

const largeImg = document.querySelector('#largeImg');
const listImg = document.querySelector('#thumbs');

listImg.addEventListener('click', (eventclick) => {
  eventclick.preventDefault();

  const item = eventclick.target;

  largeImg.src = item.parentElement.href;
});
