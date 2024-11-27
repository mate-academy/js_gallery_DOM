'use strict';

const largeImg = document.querySelector('#largeImg');
const list = document.querySelector('.gallery__list');

list.addEventListener('click', (someEvent) => {
  const link = someEvent.target.closest('.list-item__link');
  const srcImg = link.href;

  someEvent.preventDefault();

  // check if click was inside a `.nav__link`
  if (!link) {
    return;
  }

  largeImg.setAttribute('src', srcImg);
  // Do something
});
