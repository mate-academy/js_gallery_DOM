'use strict';

const mainImg = document.querySelector('#largeImg');
const gallery = document.querySelector('#thumbs');

gallery.addEventListener('click', (e) => {
  e.preventDefault();
  mainImg.src = e.target.closest('.list-item__link')?.href;
});
