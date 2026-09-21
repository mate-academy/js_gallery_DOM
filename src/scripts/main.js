'use strict';

const gallery = document.querySelector('.gallery');
const art = document.querySelector('#largeImg');

gallery.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('.list-item__link');

  if (!link) {
    return;
  }

  art.src = link.href;
});
