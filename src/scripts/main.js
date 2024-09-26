'use strict';

const mainImage = document.querySelector('.gallery__large-img');
const list = document.querySelector('.gallery__list');

list.addEventListener('click', (event) => {
  event.preventDefault();

  const smallImage = event.target.closest('.list-item__link');

  mainImage.src = smallImage.href;
});
