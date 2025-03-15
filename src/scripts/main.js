'use strict';

const thumbs = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  const linkElement = e.target.closest('.list-item__link');

  largeImg.src = linkElement.href;
});
