'use strict';

const largeImage = document.querySelector('#largeImg');
const smallImages = document.querySelector('#thumbs');

smallImages.addEventListener('click', function(events) {
  const target = events.target;

  if (target.classList.contains('gallery__thumb')
  || target.classList.contains('list-item')) {
    const newSrc = target.parentNode.getAttribute('href');

    largeImage.setAttribute('src', newSrc);
    events.preventDefault();
  }
});
