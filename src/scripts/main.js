'use strict';

const largeImg = document.getElementById('largeImg');
const gallery = document.querySelector('.gallery__list');

gallery.addEventListener('click', (event1) => {
  event1.preventDefault();

  const image = event1.target.closest('li');

  largeImg.src = image.querySelector('a').href;
});
