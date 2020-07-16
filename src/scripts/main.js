'use strict';

const list = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

list.addEventListener('click', (event) => {
  const target = event.target.closest('.list-item__link');

  largeImg.src = target.getAttribute('href');
  event.preventDefault();
});
