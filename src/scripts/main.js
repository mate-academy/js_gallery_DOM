'use strict';

const gallerylist = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

gallerylist.addEventListener('click', (e) => {
  e.preventDefault();

  const item = e.target.closest('.list-item__link');

  largeImg.src = item.href;
});
