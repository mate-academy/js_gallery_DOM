'use strict';

const mainImage = document.querySelector('div img');
const thumbnailImages = document.querySelector('.gallery');

thumbnailImages.addEventListener('click', (events) => {
  const a = events.target.closest('a');

  if (events.target.tagName === 'IMG') {
    mainImage.src = a.href;
    events.preventDefault();
  }
});
