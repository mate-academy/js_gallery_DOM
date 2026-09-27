'use strict';

const gallery = document.body.querySelector('.gallery');
const largeImage = gallery.querySelector('#largeImg');

gallery.addEventListener('click', (clickEvent) => {
  const link = clickEvent.target.matches('a')
    ? clickEvent.target
    : clickEvent.target.closest('a');

  if (link !== null) {
    clickEvent.preventDefault();
    largeImage.src = link.href;
  }
});
