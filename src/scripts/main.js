'use strict';

const list = document.querySelector('.gallery__list');
const largeImg = document.querySelector('#largeImg');

list.addEventListener('click', (e) => {
  const picture = e.target;

  e.preventDefault();

  const href = './images'
  + picture.getAttribute('src').toString().split('-').slice(0, -1).join('-')
  + '.png';

  largeImg.setAttribute('src', href);
});
