'use strict';

const linksList = document.getElementById('thumbs');
const largeImage = document.getElementById('largeImg');

linksList.addEventListener('click', function(e) {
  e.preventDefault();

  largeImage.src = e.target.closest('A').getAttribute('href');
});
