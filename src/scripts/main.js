'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const largeImg = document.querySelector('#largeImg');
  const thumbs = document.querySelector('#thumbs');

  thumbs.addEventListener('click', (ev) => {
    const link = ev.target.closest('a');

    if (!link || !thumbs.contains(link)) {
      return;
    }

    ev.preventDefault();

    const thumbImg = link.querySelector('img');

    largeImg.src = link.href;
    largeImg.alt = thumbImg?.alt || '';
  });
});
