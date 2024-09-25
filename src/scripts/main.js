'use strict';

const allGallery = document.querySelector('ul');

allGallery.addEventListener('click', (even) => {
  const link = even.target.closest('a');

  if (link) {
    even.preventDefault();

    const mainPhoto = document.getElementById('largeImg');

    mainPhoto.src = link.href;
  }
});
