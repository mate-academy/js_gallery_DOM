'use strict';

const mainImage = document.getElementById('largeImg');

document.getElementById('thumbs').addEventListener('click', (e) => {
  e.preventDefault();

  mainImage.src = e.target.closest('a').href;
});
