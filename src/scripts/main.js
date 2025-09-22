'use strict';

// Select main image
const mainImage = document.querySelector('.main-image');

// Select the container for thumbnails
const thumbnailsContainer = document.querySelector('.thumbnails');

// Event delegation
thumbnailsContainer.addEventListener('click', (event) => {
  event.preventDefault(); // prevent default link behavior

  let clickedImg;

  if (event.target.tagName === 'IMG') {
    // If the image itself is clicked
    clickedImg = event.target;
  } else if (event.target.tagName === 'A') {
    // If the link outside the image is clicked
    clickedImg = event.target.querySelector('img');
  }

  if (clickedImg) {
    // Change the main image source
    mainImage.src = clickedImg.src; // or clickedImg.dataset.large if you have large version
  }
});
