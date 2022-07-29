'use strict';

const bigImg = document.querySelector('#largeImg');
const list = document.querySelector('.gallery__list');

const links = document.querySelectorAll('.list-item__link');

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
  });
});

list.addEventListener('click', (e) => {
  bigImg.src = e.target.parentNode.href;
});
