'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.gallery');

  if (!gallery) {
    return;
  }

  const largeImg = gallery.querySelector('.gallery__large-img');

  gallery.addEventListener('click', (ev) => {
    const listItem = event.target.closest('.list-item__link');

    if (!listItem) {
      return;
    }

    ev.preventDefault();
    largeImg.src = listItem.href;
  });
});
