'use strict';

const galleryElements = document.querySelector('.gallery__list');
const preview = document.querySelector('.gallery__large-img');

galleryElements.addEventListener('click', onThumbnailClick);

function onThumbnailClick(events) {
  events.preventDefault();

  const target = events.target;

  if (target.tagName === 'IMG') {
    preview.src = target.parentElement.href;
  }

  if (target.tagName === 'A') {
    preview.src = target.href;
  }
}
