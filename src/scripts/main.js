'use strict';

const gallery = document.querySelector('.gallery');
const largeImage = document.querySelector('#largeImg');

gallery.addEventListener('click', (clickEvent) => {
  clickEvent.preventDefault();

  if (clickEvent.target.tagName === 'IMG') {
    largeImage.src = clickEvent.target.parentElement.href;
  }

  if (clickEvent.target.tagName === 'A') {
    largeImage.src = clickEvent.target.href;
  }
});
