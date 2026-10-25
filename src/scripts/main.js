'use strict';

const gallery = document.querySelector('div.gallery');
const mainCanvaBlock = gallery.firstElementChild;
const list = gallery.querySelector('ul');

list.addEventListener('click', (info) => {
  info.preventDefault();

  const link = info.target.closest('a');

  if (!link) {
    return;
  }

  const ref = link.getAttribute('href');

  mainCanvaBlock.querySelector('img').setAttribute('src', ref);
});
