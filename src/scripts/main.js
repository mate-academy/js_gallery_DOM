'use strict';

const links = document.querySelectorAll('.list-item__link');
const mainImage = document.getElementById('largeImg');

const pathNames = [...links].map(elem => elem.pathname);

[...links].forEach((link, i) => {
  link.addEventListener('click', event => {
    event.preventDefault();
    mainImage.src = pathNames[i];
  });
});
