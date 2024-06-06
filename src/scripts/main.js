'use strict';

const largeImg = document.getElementById('largeImg');

const ul = document.getElementById('thumbs');

ul.addEventListener('click', (e) => {
  const link = e.target.closest('.list-item__link');

  e.preventDefault();

  largeImg.setAttribute('src', link.href);
});
