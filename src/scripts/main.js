'use strict';

const ul = document.querySelector('ul');
const target = document.getElementById('largeImg');

ul.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('.list-item__link');
  const href = link.getAttribute('href');

  target.setAttribute('src', href);
});
