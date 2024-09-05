'use strict';

const list = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

list.addEventListener('click', (e) => {
  e.preventDefault();

  const img = e.target.closest('.list-item__link img');
  const link = img.closest('.list-item__link');
  const href = link.getAttribute('href');

  largeImg.src = href;
});
