'use strict';

const thumbnails = document.querySelector('.gallery__list');
const mainImage = document.querySelector('.gallery__large-img');

thumbnails.addEventListener('click', (e) => {
  e.preventDefault();

  let target = e.target;

  if (target.tagName === 'IMG') {
    target = target.parentNode;
  }

  if (target.tagName === 'A') {
    const clickedElementSrc = target.getAttribute('href');
    const fullUrl = new URL(clickedElementSrc, window.location.origin).href;

    mainImage.src = fullUrl;
  }
});
