'use strict';

const ul = document.querySelector('ul');
const mainPhoto = document.querySelector('#largeImg');

ul.addEventListener('click', (e) => {
  const li = e.target.closest('.list-item');

  e.preventDefault();

  if (!li) {
    return;
  }

  const link = li.querySelector('a');

  mainPhoto.src = link.href;
});
