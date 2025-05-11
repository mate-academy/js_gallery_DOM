'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const thumbs = document.getElementById('thumbs');
  const largeImg = document.getElementById('largeImg');

  if (!thumbs || !largeImg) {
    // eslint-disable-next-line no-console
    console.error('Required elements not found in the DOM.');

    return;
  }

  thumbs.addEventListener('click', function (e) {
    e.preventDefault();

    const target = e.target;

    if (target.tagName === 'IMG') {
      const anchor = target.closest('a');

      if (anchor) {
        largeImg.src = anchor.href;
        largeImg.alt = anchor.title;
      }
    } else if (target.tagName === 'A') {
      largeImg.src = target.href;
      largeImg.alt = target.title;
    }
  });
});
