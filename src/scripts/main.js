'use strict';

const divImg = document.querySelector('#largeImg');
const list = document.querySelector('#thumbs');

list.addEventListener('click', (events) => {
  events.preventDefault();

  const listLink = events.target.closest('.list-item__link');

  divImg.src = listLink.href;
});
