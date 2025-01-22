'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const mainImg = document.querySelector('#largeImg');

  const thumbs = document.querySelector('#thumbs');

  thumbs.addEventListener('click', (e) => {
    e.preventDefault();

    const target = e.target;

    if (target.tagName === 'IMG') {
      const link = target.closest('a');

      if (link) {
        mainImg.src = link.href;
      }
    }
  });
});
