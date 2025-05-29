'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.gallery');
  const mainImage = document.querySelector('.main-image');

  if (!gallery || !mainImage) {
    return; // Ensure elements exist
  }

  gallery.addEventListener('click', (e) => {
    // Find the clicked element (either <a> or <img>)
    const target = e.target.closest('a');

    if (target && target.querySelector('img')) {
      const newSrc = target.querySelector('img').src;

      mainImage.src = newSrc;
    }
  });
});
