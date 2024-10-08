'use strict';

const largeImage = document.querySelector('#largeImg');
const smallImage = document.querySelector('#thumbs');

smallImage.addEventListener('click', (event) => {
  event.preventDefault();
  event.target.closest('.list-item__link');

  const imageLink = event.target.closest('.list-item__link');

  largeImage.src = imageLink.href;
});
