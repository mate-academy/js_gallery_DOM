'use strict';

const imgMain = document.querySelector('#largeImg');

const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', (e) => {
  if (e.target.classList.contains('gallery__thumb')) {
    e.preventDefault();

    imgMain.src = e.target.closest('.list-item__link').href;
  }
});
