'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const largeImg = document.getElementById('largeImg');
  const thumbsContainer = document.getElementById('thumbs');

  thumbsContainer.addEventListener('click', (eve) => {
    eve.preventDefault();

    const target = eve.target;

    if (target.tagName === 'IMG' && target.parentNode.tagName === 'A') {
      const imgUrl = target.parentNode.getAttribute('href');

      largeImg.setAttribute('src', imgUrl);
    }

    if (target.tagName === 'A') {
      const imgUrl = target.getAttribute('href');

      largeImg.setAttribute('src', imgUrl);
    }
  });
});
