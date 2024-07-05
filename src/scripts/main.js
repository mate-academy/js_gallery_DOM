'use strict';

const galleryCont = document.querySelector('.gallery__list');
const galleryImgLarge = document.querySelector('#largeImg');

// clear default action on a tag
document.querySelectorAll('.list-item__link').forEach((link) => {
  link.setAttribute('onClick', 'event.preventDefault()');
});

galleryCont?.addEventListener('click', function (eventClick) {
  const imgTarget = eventClick.target.getAttribute('src');

  galleryImgLarge?.setAttribute(
    'src',
    location.origin + '/images' + imgTarget.split('-thumb')[0] + '.png',
  );
});
