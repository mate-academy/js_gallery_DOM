'use strict';

const gallery = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

gallery.addEventListener('click', (eventik) => {
  eventik.preventDefault();

  const link = eventik.target.closest('a');

  if (!link) {
    return;
  }

  largeImg.src = link.href;
});
