'use strict';

const largeImage = document.getElementById('largeImg');
const list = document.getElementById('thumbs');

list.addEventListener('click', (e) => {
  e.preventDefault();

  const picture = e.target.closest('.list-item__link');

  largeImage.src = picture.href;
});
