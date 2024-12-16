'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const largeImg = document.getElementById('largeImg');
  const thumbsList = document.getElementById('thumbs');

  thumbsList.addEventListener('click', function (e) {
    const clickedElement = e.target;

    if (clickedElement.tagName === 'IMG' || clickedElement.tagName === 'A') {
      e.preventDefault();

      const newSrc =
        clickedElement.tagName === 'IMG'
          ? clickedElement.parentNode.href
          : clickedElement.href;

      // Update the large image source
      largeImg.src = newSrc;
    }
  });
});
