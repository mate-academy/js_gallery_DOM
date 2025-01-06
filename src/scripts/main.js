'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const largeImg = document.getElementById('largeImg');
  const thumbs = document.getElementById('thumbs');

  thumbs.addEventListener('click', (ev) => {
    if (ev.target.tagName.toLowerCase() === 'img') {
      const imgLink = ev.target.closest('a');

      ev.preventDefault();

      largeImg.src = imgLink.href;
    }
  });
});
