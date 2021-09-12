'use strict';

const largeImage = document.querySelector('#largeImg');
const links = document.querySelector('#thumbs');

links.addEventListener('click', (link) => {
  const item = link.target.closest('.list-item__link');

  link.preventDefault();
  largeImage.src = item.href;
});
