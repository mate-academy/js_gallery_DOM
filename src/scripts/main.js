'use strict';

const gallery = document.getElementsByClassName('gallery')[0];

gallery.addEventListener('click', (galleryEvent) => {
  galleryEvent.preventDefault();

  if (galleryEvent.target.classList.contains('gallery__large-img')
    || galleryEvent.target.classList.contains('gallery')
    || galleryEvent.target.classList.contains('gallery__list')
    || galleryEvent.target.classList.contains('list-item__link')
    || galleryEvent.target.tagName === 'DIV') {
    return;
  }

  const clickedImageSrc = getSrcFromThumb(
    galleryEvent.target.getAttribute('src'));

  document.getElementById('largeImg').setAttribute('src', clickedImageSrc);
});

function getSrcFromThumb(attribute) {
  return 'images/' + attribute.replace('-thumb', '').split('.')[0] + '.png';
}
