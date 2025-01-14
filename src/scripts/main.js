'use strict';

const list = document.querySelector('.gallery__list');
const mainImage = document.getElementById('largeImg');

list.addEventListener('click', (e) => {
  e.preventDefault();

  let link;

  if (e.target.tagName === 'IMG') {
    link = e.target.closest('A');
  }

  if (e.target.tagName === 'A') {
    link = e.target;
  }

  mainImage.src = link.href;
});
