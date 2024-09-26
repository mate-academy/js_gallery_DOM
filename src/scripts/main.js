'use strict';

const mainImage = document.querySelector('img');
const list = document.querySelector('ul');

list.addEventListener('click', (e) => {
  const link = e.target.closest('.list-item__link');

  mainImage.src = link.href;

  e.preventDefault();
});
