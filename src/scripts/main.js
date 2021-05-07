'use strict';

const largeImg = document.getElementById('largeImg');
const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', (e) => {
  e.preventDefault();

  largeImg.setAttribute('src',
    `http://localhost:8080${e.target.closest('a').getAttribute('href')}`
      .replace(/\\/, ''));
});
