'use strict';

const gallery = document.querySelector('.gallery');
const largeImg = document.querySelector('.gallery__large-img');

gallery.addEventListener('click', onClick);

function onClick(eve) {
  const link = eve.target.closest('.list-item__link');

  if (!link) {
    return;
  }
  eve.preventDefault();

  const href = link.getAttribute('href');

  if (href) {
    largeImg.src = href;
  }
}
