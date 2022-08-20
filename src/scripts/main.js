'use strict';

const largeImage = document.getElementById('largeImg');
const links = document.querySelectorAll('.list-item__link');
const test = 1;

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    largeImage.src = e.currentTarget.getAttribute('href');
  });
});
