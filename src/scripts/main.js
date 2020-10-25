'use strict';

const ul = document.querySelector('ul');
const largeImg = document.getElementById('largeImg');

ul.addEventListener('click', (e) => {
  const item = e.target;

  e.preventDefault();

  if (!item.classList.contains('gallery__img')) {
    return;
  }

  largeImg.setAttribute('src', item.getAttribute('src'));
});
