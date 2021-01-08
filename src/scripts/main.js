'use strict';

const photoLinks = document.getElementById('thumbs');
const mainPhoto = document.getElementById('largeImg');

photoLinks.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('.list-item__link');

  mainPhoto.src = link.href;
});
