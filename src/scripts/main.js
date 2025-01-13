'use strict';

const largeImage = document.querySelector('.gallery__large-img');
const gallery = document.querySelector('.gallery__list');

gallery.addEventListener('click', (evt) => {
  evt.preventDefault();

  let link;

  if (evt.target.tagName === 'IMG') {
    link = evt.target.closest('a');
  } else if (evt.target.tagName === 'A') {
    link = evt.target;
  }

  if (link) {
    largeImage.src = link.href;
  }
});
