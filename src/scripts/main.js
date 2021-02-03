'use strict';

const largeImg = document.querySelector('#largeImg');
const ul = document.querySelector('.gallery__list');

ul.addEventListener('click', (e) => {
  e.preventDefault();

  const item = e.target;
  const link = item.closest('A');

  if (link) {
    largeImg.src = link.href;
    largeImg.alt = link.title;
  }
});
