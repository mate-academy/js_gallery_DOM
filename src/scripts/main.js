'use strict';

const gallery = document.querySelector('.gallery__list');
const largeImg = document.getElementById('largeImg');

gallery.addEventListener('click', (events) => {
  events.preventDefault();

  const newElement = events.target.closest('a');

  if (newElement) {
    const newSrc = newElement.href;

    largeImg.setAttribute('src', newSrc);
  }
});
