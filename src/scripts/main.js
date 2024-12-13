/* eslint-disable no-shadow */
'use strict';

function createGallery() {
  // Get the gallery container and the main image element
  const gallery = document.querySelector('.gallery');
  const mainImage = document.querySelector('.main-image img');

  // Add an event listener to the gallery for event delegation
  gallery.addEventListener('click', (event) => {
    // Check if the target is an img inside the thumbnail link
    if (event.target.tagName === 'IMG' && event.target.closest('a')) {
      // Prevent the default link behavior
      event.preventDefault();

      // Get the href of the closest anchor (a) element
      const thumbnailLink = event.target.closest('a').href;

      // Update the main image's source
      mainImage.src = thumbnailLink;
    }
  });
}

// Initialize the gallery functionality
createGallery();
