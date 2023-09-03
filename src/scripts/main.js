'use strict';

const gallery = document.querySelector('.gallery');
const large = document.querySelector('.gallery__large-img');

gallery.addEventListener('click', (e) => {
  e.preventDefault();

  const anchor = e.target.closest('.list-item__link');

  if (anchor) {
    large.src = anchor.href;
  }
});
