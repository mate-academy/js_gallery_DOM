'use strict';

const galery = document.querySelector('#largeImg');
const photo = document.querySelector('#thumbs');

photo.addEventListener('click', (e) => {
  const linkItem = e.target.closest('.list-item__link');

  if (!linkItem) {
    return;
  }

  e.preventDefault();

  galery.src = linkItem.href;
});
