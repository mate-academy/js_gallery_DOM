'use strict';

const gallery = document.querySelector('.gallery');
const mainImage = document.querySelector('.gallery__large-img');

gallery.addEventListener('click', (e) => {
  e.preventDefault();

  if (e.target.tagName !== 'IMG' && e.target.tagName !== 'A') {
    return;
  }

  let link;

  if (e.target.tagName === 'IMG') {
    link = e.target.parentElement;
  } else {
    link = e.target;
  }

  const largeImageUrl = link.href;

  mainImage.src = largeImageUrl;
});
