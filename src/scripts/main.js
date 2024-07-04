'use strict';

document.addEventListener('click', (ev) => {
  ev.preventDefault();

  const largeImg = document.getElementById('largeImg');

  const thumbnailLink = ev.target.closest('.list-item__link');

  if (!thumbnailLink) {
    return;
  }

  largeImg.src = thumbnailLink.href;
});
