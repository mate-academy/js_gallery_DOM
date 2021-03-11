'use strict';

const list = document.querySelector('.gallery__list');
const largeImg = document.getElementById('largeImg');

list.addEventListener('click', (smallImg) => {
  smallImg.preventDefault();

  const imageLink = smallImg.target.closest('.list-item__link').href;

  if (imageLink) {
    largeImg.src = imageLink;
  }
});
