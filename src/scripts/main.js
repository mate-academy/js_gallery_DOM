'use strict';

document
  .getElementById('thumbs')
  .addEventListener('click', function (eventAction) {
    if (event.target.closest('a')) {
      event.preventDefault();

      const largeImg = document.getElementById('largeImg');

      largeImg.src = eventAction.target.closest('a').href;
    }
  });

