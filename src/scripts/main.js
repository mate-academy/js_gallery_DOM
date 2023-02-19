'use strict';

const list = document.querySelector('.gallery__list');
const largeImg = document.querySelector('#largeImg');

list.addEventListener('click', (e) => {
  const picture = e.target;

  e.preventDefault();

  largeImg.setAttribute('src', picture.parentElement.href);
});
