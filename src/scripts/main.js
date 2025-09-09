'use strict';

const mainImage = document.querySelector('#largeImg');
const thumbnailImages = document.querySelector('.gallery');

if (mainImage && thumbnailImages) {
  thumbnailImages.addEventListener('click', (events) => {
    const target = events.target;

    if (!(target instanceof Element)) {
      return;
    }

    const a = events.target.closest('a');
    let newSrc = '';

    if (a) {
      events.preventDefault();
      newSrc = a.href;
    } else if (target.tagName === 'IMG') {
      newSrc = target.src;
    }

    if (newSrc) {
      mainImage.src = newSrc;
    }
  });
}
