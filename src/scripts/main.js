'use strict';

const mainImage = document.querySelector('#largeImg');
const thumbsList = document.querySelector('#thumbs');

thumbsList.addEventListener('click', (event) => {
  const item = event.target.closest('.list-item__link');

  event.preventDefault();

  mainImage.src = item.href;
});
