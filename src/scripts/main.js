'use strict';

const gallery = document.querySelector('.gallery');
const largeImage = document.querySelector('#largeImg');

gallery.addEventListener('click', (e) => {
  const link = e.target.closest('a');

  if (link) {
    e.preventDefault();

    const newSrc = link?.href;

    largeImage.src = newSrc;
  }
});
