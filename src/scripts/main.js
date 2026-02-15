'use strict';

function changeImages() {
  const largeImage = document.querySelector('#largeImg');
  const thumbs = document.querySelector('#thumbs');

  if (!largeImage || !thumbs) {
    return;
  }

  thumbs.addEventListener('click', (e) => {
    const link = e.target.closest('a');

    if (!link) {
      return;
    }

    if (!thumbs.contains(link)) {
      return;
    }

    e.preventDefault();

    const newSrc = link.getAttribute('href');

    if (!newSrc) {
      return;
    }

    largeImage.src = newSrc;
  });
}

changeImages();
