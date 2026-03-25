'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const largeImg = document.getElementById('largeImg');
  const thumbs = document.getElementById('thumbs');

  thumbs.addEventListener('click', (e) => {
    e.preventDefault();

    const target = e.target.closest('a');

    if (!target) {
      return;
    }

    largeImg.src = target.href;
    largeImg.alt = target.title;
  });
});
