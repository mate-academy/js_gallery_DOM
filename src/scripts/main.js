'use strict';

const gallery = document.querySelector('.gallery');
const mainImg = document.querySelector('#largeImg');

gallery.addEventListener('click', (clickEvent) => {
  const link = clickEvent.target.closest('a');

  if (!link) {
    return;
  }

  clickEvent.preventDefault();

  mainImg.src = link.href;
});
