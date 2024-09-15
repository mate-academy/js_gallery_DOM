'use strict';

const largeImage = document.getElementById('largeImg');
const listImage = document.getElementById('thumbs');

listImage.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('.list-item__link');

  largeImage.src = link.href;
});
