'use strict';

const galleryElement = document.querySelector('.gallery');
const largeImg = document.querySelector('#largeImg');

galleryElement.addEventListener('click', function (evnt) {
  evnt.preventDefault();

  const parentLink = evnt.target.closest('a');

  if (parentLink) {
    largeImg.src = parentLink.href;
  }
});
