'use strict';

const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', function(e) {
  e.preventDefault();

  const item = e.target;

  if (item.classList.contains('gallery__thumb')) {
    document.querySelector('.gallery__large-img').src
      = item.closest('.list-item__link').href;
  }
});
