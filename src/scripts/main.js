'use strict';

const mainImage = document.getElementById('largeImg');
const gallery = document.querySelector('.gallery__list');

gallery.addEventListener('click', (evnt) => {
  evnt.preventDefault();

  const linkToSmall = evnt.target.closest('a');

  if (linkToSmall) {
    mainImage.src = linkToSmall.href;
  }
});
