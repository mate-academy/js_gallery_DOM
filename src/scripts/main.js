'use strict';

const gallery = document.querySelector('.gallery');
const largeImage = document.querySelector('#largeImg');

gallery.addEventListener('click', (e) => {
  const thumbnail = e.target.closest('a');

  if (thumbnail) {
    e.preventDefault();

    const src = thumbnail.getAttribute('href');

    largeImage.src = src;
  }
});
