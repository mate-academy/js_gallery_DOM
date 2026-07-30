'use strict';

const list = document.getElementById('thumbs');
const largeImage = document.getElementById('largeImg');

list.addEventListener('click', (e) => {
  const link = e.target.closest('.list-item__link');

  if (!link) {
    return;
  }

  e.preventDefault();
  largeImage.src = link.getAttribute('src');
});
