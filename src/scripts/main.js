'use strict';

const gallery = document.querySelector('ul');
const preview = document.querySelector('.gallery__large-img');

gallery.addEventListener('click', (e) => {
  const link = e.target.closest('a');

  if (!link) {
    return;
  }

  e.preventDefault();

  const bigSrc = link.getAttribute('href');

  preview.setAttribute('src', bigSrc);

  const active = document.querySelector('.thumb-active');

  if (active) {
    active.classList.remove('thumb-active');
  }

  link.classList.add('thumb-active');
});
