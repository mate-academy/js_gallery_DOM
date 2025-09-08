'use strict';

const mainImage = document.querySelector('#largeImg');
const thumbnailImages = document.querySelector('.gallery');

if (mainImage && thumbnailImages) {
  thumbnailImages.addEventListener('click', (events) => {
    const a = events.target.closest('a');

    if (a || events.target.tagName === 'IMG') {
      events.preventDefault();

      let newSrc = '';

      if (a) {
        newSrc = a.href;
      } else if (events.target.tagName === 'IMG') {
        newSrc = events.target.src;
      }

      if (newSrc) {
        mainImage.src = newSrc;
      }
    }
  });
}
