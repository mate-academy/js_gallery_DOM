'use strict';

const list = document.querySelector('.gallery__list');
const large = document.getElementById('largeImg');

// eslint-disable-next-line no-shadow
list.addEventListener('click', (event) => {
  event.preventDefault();

  const listItem = event.target.closest('.list-item');

  const link = listItem.querySelector('.list-item__link');

  large.src = link.href;
  large.alt = link.title;
});
