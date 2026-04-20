'use strict';

const gallery = document.querySelector('.gallery');
const mainImage = document.querySelector('.gallery__img');

gallery.addEventListener('click', (e) => {
  e.preventDefault();

  let link;

  if (e.target.tagName === 'IMG') {
    link = e.target.closest('a');
  }

  if (e.target.tagName === 'A') {
    link = e.target;
  }

  if (!link) {
    return;
  }

  const newSrc = link.href;

  mainImage.src = newSrc;
});
