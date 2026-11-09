'use strict';

const largeImage = document.querySelector('#largeImg');
const thumbs = document.querySelector('#thumbs');

thumbs.addEventListener('click', (clickEvent) => {
  const link = clickEvent.target.closest('a');

  if (!link || !thumbs.contains(link)) {
    return;
  }

  clickEvent.preventDefault();
  largeImage.src = link.href;
});
