'use strict';

const galleryContainer = document.querySelector('.gallery');
const mainImage = document.querySelector('#largeImg');

galleryContainer.addEventListener('click', function (e) {
  const clickedLink = e.target.closest('a');

  if (!clickedLink) {
    return;
  }

  e.preventDefault();

  const newSrc = clickedLink.href;

  mainImage.src = newSrc;
});
