'use strict';

const imageToChange = document.querySelector('#largeImg');
const ul = document.querySelector('.gallery__list');

ul.addEventListener('click', (e) => {
  e.preventDefault();
  imageToChange.src = e.target.parentNode.href;
});
