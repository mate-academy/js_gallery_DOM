'use strict';

const largeImg = document.getElementById('largeImg');
const gallery = document.getElementById('thumbs');

gallery.addEventListener('click', (e) => {
  e.preventDefault();

  largeImg.setAttribute('src', e.target.parentElement.href);
});
