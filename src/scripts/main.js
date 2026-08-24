'use strict';

document.querySelector('#thumbs').addEventListener('click', (clickEvent) => {
  const link = clickEvent.target.closest('a');

  if (!link) {
    return;
  }

  clickEvent.preventDefault();

  const largeImg = document.querySelector('#largeImg');

  largeImg.src = link.href;
  largeImg.alt = link.title;
});
