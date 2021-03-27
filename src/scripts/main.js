'use strict';

const gallery = document.querySelector('.gallery');
const largeImg = document.querySelector('#largeImg');

gallery.addEventListener('click', function(e) {
  e.preventDefault();

  const tagName = e.target.tagName.toLowerCase();

  if (tagName === 'img') {
    if (!e.target.classList.contains('gallery__large-img')) {
      const url = e.target.parentElement.getAttribute('href');

      largeImg.setAttribute('src', url);
    }
  }
});
