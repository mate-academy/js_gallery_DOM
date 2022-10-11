'use strict';

const gallery = document.querySelector('#thumbs');
const mainImg = document.querySelector('#largeImg');

gallery.addEventListener('click', (e) => {
  e.preventDefault();

  const img = e.target.closest('.list-item__link');

  if (!img) {
    return;
  }

  mainImg.src = img.href;
});
