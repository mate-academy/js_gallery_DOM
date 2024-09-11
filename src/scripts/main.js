'use strict';

const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', (e) => {
  e.preventDefault();

  const imgLink = e.target.closest('.list-item__link');

  if (!imgLink) {
    return;
  }

  const imgSrc = new URL(imgLink.getAttribute('href'), window.location.origin)
    .href;
  const imgTitle = imgLink.getAttribute('title');
  const largeImg = document.querySelector(
    '#largeImg.gallery__large-img.gallery__img',
  );

  largeImg.src = imgSrc;
  largeImg.title = imgTitle;
});
