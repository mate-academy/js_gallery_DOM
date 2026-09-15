'use strict';

// Target the main large image and the thumbnails container
const largeImg = document.querySelector('#largeImg');
const thumbs = document.querySelector('#thumbs');

if (thumbs && largeImg) {
  thumbs.addEventListener('click', (e) => {
    // Locate the closest anchor element
    const link = e.target.closest('a');

    // If the click was not inside
    if (!link || !thumbs.contains(link)) {
      return;
    }

    e.preventDefault();

    largeImg.src = link.href;

    if (link.title) {
      largeImg.alt = link.title;
    }
  });
}
