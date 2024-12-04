'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const thumbsContainer = document.getElementById('thumbs');
  const largeImg = document.getElementById('largeImg');

  thumbsContainer.addEventListener('click', function (even) {
    const target = even.target;

    if (target && (target.tagName === 'IMG' || target.tagName === 'A')) {
      even.preventDefault();

      let newSrc;

      if (target.tagName === 'A') {
        newSrc = target.href;
      } else if (target.tagName === 'IMG') {
        newSrc = target.parentElement.href;
      }

      largeImg.src = newSrc;
      largeImg.alt = target.alt || '';
    }
  });
});
