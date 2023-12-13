'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const thumbsList = document.getElementById('thumbs');
  const largeImg = document.getElementById('largeImg');

  thumbsList.addEventListener('click', (e) => {
    event.preventDefault();

    let targetElement = e.target;

    while (targetElement && targetElement.tagName !== 'A') {
      targetElement = targetElement.parentNode;
    }

    if (targetElement && targetElement.tagName === 'A') {
      const newImgSrc = targetElement.getAttribute('href');
      const newImgAlt = targetElement.getAttribute('title');

      if (newImgSrc) {
        largeImg.src = newImgSrc;
        largeImg.alt = newImgAlt;
      }
    }
  });
});
