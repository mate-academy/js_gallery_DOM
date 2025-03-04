'use strict';

const gallery = document.querySelector('.gallery');
const mainPhoto = document.getElementById('largeImg');

gallery.addEventListener('click', (pick) => {
  if (pick.target.tagName.toLowerCase() === 'img') {
    pick.preventDefault();
    mainPhoto.src = pick.target.closest('a').href;
  }
});
