'use strict';

const ulItems = document.querySelector('#thumbs');
const mainImage = document.querySelector('#largeImg');

ulItems.addEventListener('click', (event) => {
  event.preventDefault();

  mainImage.src = event.target.closest('.list-item__link').href;
});
