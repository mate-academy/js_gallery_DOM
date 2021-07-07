'use strict';

const largeImg = document.querySelector('#largeImg');
const thumbs = document.querySelector('#thumbs');

thumbs.addEventListener('click', (event) => {
  event.preventDefault();
  largeImg.src = event.target.closest('.list-item__link').href;
});
