'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const mainImage = document.querySelector('#largeImg');

  const thumbnails = document.querySelector('#thumbs');

  function changeImage(e) {
    const necessaryLink = e.target.closest('a');

    if (necessaryLink) {
      e.preventDefault();

      const clickedImage = necessaryLink.querySelector('img');

      if (clickedImage) {
        const newSrc = necessaryLink.getAttribute('href');

        mainImage.setAttribute('src', newSrc);
      }
    }
  }
  thumbnails.addEventListener('click', changeImage);
});
