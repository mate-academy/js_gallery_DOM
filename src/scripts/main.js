'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const thumbs = document.getElementById('thumbs');
  const largeImg = document.getElementById('largeImg');

  thumbs.addEventListener('click', function (e) {
    e.preventDefault();

    let target = e.target;

    while (target !== thumbs) {
      if (target.tagName === 'A') {
        largeImg.src = target.href;
        break;
      }
      target = target.parentNode;
    }
  });
});
