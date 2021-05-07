'use strict';

const largeImg = document.getElementById('largeImg');
const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', (e) => {
  e.preventDefault();

  largeImg.setAttribute('src',
    `${e.target.closest('a').getAttribute('href')}`);
});
