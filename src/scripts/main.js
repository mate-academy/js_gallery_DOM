'use strict';

const list = document.querySelector('ul');
const big = document.querySelector('.gallery__large-img');

list.addEventListener('click', (e) => {
  const link = e.target.closest('a');

  if (!link) {
    return;
  }

  const photo = link.getAttribute('href');

  if (!photo) {
    return;
  }
  e.preventDefault();
  big.setAttribute('src', photo);
});
