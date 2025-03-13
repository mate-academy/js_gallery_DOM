'use strict';

document.getElementById('thumbs').addEventListener('click', function (e) {
  e.preventDefault();

  let target = e.target;

  if (target.tagName === 'IMG') {
    target = target.parentElement;
  }

  if (target.tagName === 'A' && target.href) {
    const largeImg = document.getElementById('largeImg');

    largeImg.src = target.href;
  }
});
