'use strict';

const list = document.querySelector('.gallery__list');
const largeImg = document.getElementById('largeImg');

list.addEventListener('click', (clickEvent) => {
  const linkImg = clickEvent.target.closest('.list-item__link');

  clickEvent.preventDefault();

  if (linkImg) {
    largeImg.src = linkImg.href;
  }
});
