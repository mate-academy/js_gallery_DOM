'use strict';

const galleryItems = document.querySelector('.gallery');
const bigImg = document.querySelector('.gallery__large-img');

const firstLink = galleryItems.querySelector('.list-item__link');

firstLink.classList.add('list-item__link-active');
bigImg.src = firstLink.href || firstLink.dataset.full;

galleryItems.addEventListener('click', (ev) => {
  const link = ev.target.closest('a');
  const prev = galleryItems.querySelector('.list-item__link-active');

  if (!link) {
    return;
  }
  ev.preventDefault();

  if (prev) {
    prev.classList.remove('list-item__link-active');
  }
  link.classList.add('list-item__link-active');

  const newSrc = link.href || link.dataset.full;

  if (newSrc) {
    bigImg.src = newSrc;
  }
});
