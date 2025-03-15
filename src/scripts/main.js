'use strict';

const gallery = document.querySelector('#thumbs');
const largeImage = document.querySelector('#largeImg');

gallery.addEventListener('click', (actualEvent) => {
  actualEvent.preventDefault();

  const link = actualEvent.target.closest('.list-item__link');

  if (!link || !gallery.contains(link)) {
    return;
  }

  largeImage.src = link.href;
});
