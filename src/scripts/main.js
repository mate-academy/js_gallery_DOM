'use strict';

const gallery = document.getElementsByClassName('gallery')[0];

gallery.addEventListener('click', (galleryEvent) => {
  galleryEvent.preventDefault();

  let clickedImageSrc = null;

  if (galleryEvent.target.classList.contains('gallery__large-img')
    || galleryEvent.target.classList.contains('gallery')
    || galleryEvent.target.classList.contains('gallery__list')
    || galleryEvent.target.classList.contains('gallery__img gallery__thumb')
    || galleryEvent.target.classList.contains('list-item__link')) {
    return;
  }

  if (galleryEvent.target.parentElement.getAttribute('title') === 'Image 1') {
    clickedImageSrc = '/images/landscape-first.png';
  } else if (galleryEvent.target.parentElement.getAttribute('title')
    === 'Image 2') {
    clickedImageSrc = '/images/landscape-second.png';
  } else if (galleryEvent.target.parentElement.getAttribute('title')
    === 'Image 3') {
    clickedImageSrc = '/images/landscape-third.png';
  } else if (galleryEvent.target.parentElement.getAttribute('title')
    === 'Image 4') {
    clickedImageSrc = '/images/landscape-fourth.png';
  } else if (galleryEvent.target.parentElement.getAttribute('title')
    === 'Image 5') {
    clickedImageSrc = '/images/landscape-fifth.png';
  }
  document.getElementById('largeImg').setAttribute('src', clickedImageSrc);
});
