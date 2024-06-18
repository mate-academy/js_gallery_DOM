'use strict';

const largeImg = document.querySelector('#largeImg');
const galleryContainer = document.querySelector('#thumbs');

galleryContainer.addEventListener('click', (ev) => {
  ev.preventDefault();
  largeImg.src = ev.target.closest('.list-item__link').href;
});
