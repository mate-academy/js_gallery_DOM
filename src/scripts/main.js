'use strict';

const list = document.querySelector('.gallery__list');
const mainImage = document.querySelector('.gallery > div > img');

list.addEventListener('click', (event) => {
  event.preventDefault();
  mainImage.src = event.target.src;
});
