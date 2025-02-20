'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const galleryContainer = document.querySelector('#thumbs');
  const mainImage = document.querySelector('#largeImg');

  galleryContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
      const linkElement = e.target.parentNode;

      mainImage.src = linkElement.href;
      e.preventDefault();
    } else if (e.target.tagName === 'A') {
      mainImage.src = e.target.href;
      e.preventDefault();
    }
  });
});
