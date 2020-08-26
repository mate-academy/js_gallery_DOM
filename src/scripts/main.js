'use strict';

const links = document.querySelector('.gallery__list');
const frame = document.querySelector('.gallery__large-img');

links.addEventListener('click', (event) => {
  event.preventDefault();

  const imageLink = event.target.closest('.list-item__link').href;

  frame.src = imageLink;
});
