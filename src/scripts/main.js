'use strict';

const mainImage = document.querySelector('img');
const list = document.querySelector('ul');

list.addEventListener('click', (event) => {
  const link = event.target.closest('.list-item__link');

  mainImage.src = link.href;

  event.preventDefault();
});
