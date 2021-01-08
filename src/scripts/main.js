'use strict';

const list = document.querySelector('#thumbs');
const image = document.querySelector('#largeImg');

list.addEventListener('click', (e) => {
  const link = e.target.closest('.list-item__link');

  e.preventDefault();

  image.src = link.href;
});
