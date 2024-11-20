'use strict';

const gallery = document.querySelector('.gallery');
const largeImg = gallery.querySelector('.gallery__large-img');

// eslint-disable-next-line no-shadow
gallery.addEventListener('click', (event) => {
  event.preventDefault();

  const link = event.target.closest('.list-item__link');

  if (link) {
    largeImg.src = link.getAttribute('href');
  }
});
