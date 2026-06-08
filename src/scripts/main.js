'use strict';

const thumbsList = document.getElementById('thumbs');
const largeImage = document.getElementById('largeImg');

if (thumbsList && largeImage) {
  thumbsList.addEventListener('click', (evt) => {
    const link = evt.target.closest('a');

    if (!link || !thumbsList.contains(link)) {
      return;
    }

    evt.preventDefault();

    const imageUrl = link.href;

    if (!imageUrl) {
      return;
    }

    largeImage.src = imageUrl;

    const title = link.getAttribute('title');

    if (title) {
      largeImage.alt = title;
    }
  });
}
