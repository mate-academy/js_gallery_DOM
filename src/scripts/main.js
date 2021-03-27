'use strict';

const listGallery = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

listGallery.onclick = function(click) {
  click.preventDefault();
  largeImg.src = click.target.closest('a');
};
