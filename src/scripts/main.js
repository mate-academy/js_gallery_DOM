'use strict';

document.getElementById('thumbs').addEventListener('click', function (e) {
  e.preventDefault();

  let target = e.target;

  while (target !== this) {
    if (target.nodeName === 'A') {
      document.getElementById('largeImg').src = target.href;

      return false;
    }

    target = target.parentNode;
  }
});
