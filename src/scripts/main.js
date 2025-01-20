'use strict';

const mainImage = document.querySelector('#largeImg');
const ul = document.querySelector('ul');

ul.addEventListener('click', (e) => {
  const link = e.target.closest('.list-item__link');

  if (!link) {
    return;
  }
  e.preventDefault();
  mainImage.src = link.href;
});
