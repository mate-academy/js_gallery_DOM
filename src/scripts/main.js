'use strict';

const mainImage = document.querySelector('#largeImg');
const thumbsList = document.querySelector('#thumbs');

thumbsList.addEventListener('click', (event) => {
  const item = event.target;

  event.preventDefault();

  if (!item.classList.contains('gallery__img')) {
    return;
  }

  mainImage.src = item.closest('.list-item__link').href;
});
