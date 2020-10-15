'use strict';

const list = document.querySelector('#thumbs');
const mainImage = document.querySelector('#largeImg');

list.addEventListener('click', (event) => {
  event.preventDefault();

  const item = event.target;

  if (item.classList.contains('list-item__link')
  || item.classList.contains('gallery__img')) {
    mainImage.src = item.closest('.list-item').children[0].href;
  }
});
