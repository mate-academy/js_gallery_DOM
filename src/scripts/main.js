'use strict';

document.querySelector('DOMContentLoaded', () => {
  const thumbsContainer = document.getElementById('thumbs');
  const largeImg = document.getElementById('largeImg');

  thumbsContainer.addEventListener('click', function (e) {
    const target = e.target;

    if (target && (target.tegName === 'IMG' || target.tagName === 'A')) {
      e.preventDefault();

      let newSrc;

      if (target.tagName === 'A') {
        newSrc = target.parentElement.href;
      } else if (target.tagName === 'IMG') {
        newSrc = target.parentElement.href;
      }

      largeImg.src = newSrc;
      largeImg.alt = target.alt || '';
    }
  });
});
