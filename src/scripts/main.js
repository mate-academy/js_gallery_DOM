'use strict';

const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', event => {
  event.preventDefault();

  const itemLink = event.target.closest('.list-item__link');

  largeImg.src = itemLink.href;
});
