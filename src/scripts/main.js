'use strict';

const mainImg = document.getElementById('largeImg');
const thumbsnailGallery = document.getElementById('thumbs');

thumbsnailGallery.addEventListener('click', (e) => {
  const target = e.target;

  if (target.tagName === 'IMG' || target.tagName === 'A') {
    const thumbnailLink =
      target.tagName === 'A' ? target : target.parentElement;
    const newSrc = thumbnailLink.href;

    mainImg.src = newSrc;

    e.preventDefault();
  }
});
