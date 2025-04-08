'use strict';

const list = document.querySelector('ul');
const mainImage = document.querySelector('#largeImg');

list.addEventListener('click', (e) => {
  e.preventDefault();

  mainImage.src = e.target.closest('a').href;
});
