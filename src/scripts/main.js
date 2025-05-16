'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const thumb = document.querySelector('.gallery__list');
  const largeImg = document.getElementById('largeImg');

  thumb.addEventListener('click', (e) => {
    const target = e.target.closest('a');

    if (!target) {
      return;
    }

    e.preventDefault();

    const newSrc = target.href;

    largeImg.src = newSrc;
  });
});
