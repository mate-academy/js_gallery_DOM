'use strict';

const largeImage = document.querySelector('#largeImg');
const list = document.querySelector('#thumbs');

list.addEventListener('click', (e) => {
  e.preventDefault();

  largeImage.setAttribute('src',
    `${e.target.closest('.list-item__link').href}`);
});
