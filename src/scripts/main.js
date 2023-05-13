'use strict';

const galery = document.querySelector('.gallery__list');
const bigPhoto = document.querySelector('.gallery__large-img');

galery.addEventListener('click', function(eventio) {
  const target = eventio.target;

  eventio.preventDefault();

  bigPhoto.src = target.parentNode.href;
});
