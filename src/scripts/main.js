'use strict';

const tes = document.querySelector('.gallery__list');
const img = document.querySelector('.gallery__large-img');
const links = document.querySelectorAll('.list-item__link');

links.forEach((item) => {
  item.addEventListener('click', (arg) => {
    arg.preventDefault();
  });
});

tes.addEventListener('click', (arg) => {
  const item = arg.target.closest('.list-item__link');

  if (!item) {
    return;
  }
  img.src = item.href;
});
