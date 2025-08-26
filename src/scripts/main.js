'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const thumbs = document.getElementById('thumbs');
  const largeImg = document.getElementById('largeImg');

  thumbs.addEventListener('click', (e) => {
    e.preventDefault();

    const link = e.target.closest('.list-item__link');

    if (link) {
      largeImg.src = link.href;
    }
  });
});
