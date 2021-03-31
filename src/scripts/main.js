'use strict';

const gallery = document.getElementsByClassName('gallery')[0];

gallery.addEventListener('click', (galleryEvent) => {
  galleryEvent.preventDefault();

  const item = galleryEvent.target.closest('.list-item__link');

  if (!item) {
    return;
  }

  const clickedImageSrc = getSrcFromThumb(
    item.firstElementChild.getAttribute('src'));

  document.getElementById('largeImg').setAttribute('src', clickedImageSrc);
});

function getSrcFromThumb(attribute) {
  return 'images/' + attribute.replace('-thumb', '').split('.')[0] + '.png';
}
