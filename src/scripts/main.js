'use strict';

const ul = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

ul.addEventListener('click', (e) => {
  e.preventDefault();

  largeImg.src = e.target.closest('a').href;
});
