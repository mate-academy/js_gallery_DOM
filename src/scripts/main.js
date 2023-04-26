'use strict';

const mainImage = document.querySelector('#largeImg');
const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', (e) => {
  e.preventDefault();

  const elem = e.target.closest('.list-item__link');

  if (elem) {
    mainImage.src = elem.href;
  }
});
